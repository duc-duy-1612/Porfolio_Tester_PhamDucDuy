import fs from 'fs';

const filePath = '../Nhóm 9.side';

try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const tests = data.tests;
    const suites = data.suites;

    const improvedTests = tests.filter(t => t.name.toLowerCase().includes('cải thiện'));

    improvedTests.forEach(improvedTest => {
        // Lấy prefix TC, ví dụ "TC01" từ "TC01 cải thiện"
        const match = improvedTest.name.match(/^(TC\d+)/i);
        if (!match) return;
        const tcPrefix = match[1];

        // Tìm TC gốc
        const originalTestIndex = tests.findIndex(t => t.name.startsWith(tcPrefix + ' -') && t.id !== improvedTest.id);
        
        if (originalTestIndex !== -1) {
            const originalTest = tests[originalTestIndex];
            console.log(`Đang thay thế: "${originalTest.name}" bằng phiên bản cải thiện...`);

            // Đổi tên TC cải thiện thành tên của TC gốc
            improvedTest.name = originalTest.name;

            // Cập nhật lại trong suites (xóa TC cũ, đảm bảo TC mới nằm trong suite)
            suites.forEach(suite => {
                const hasOriginal = suite.tests.includes(originalTest.id);
                const hasImproved = suite.tests.includes(improvedTest.id);

                if (hasOriginal) {
                    if (hasImproved) {
                        suite.tests = suite.tests.filter(id => id !== originalTest.id);
                    } else {
                        suite.tests = suite.tests.map(id => id === originalTest.id ? improvedTest.id : id);
                    }
                }
            });

            // Xóa TC gốc
            tests.splice(originalTestIndex, 1);
        }
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`\n✅ Đã xử lý xong file .side! Tổng số Test Cases hiện tại là: ${data.tests.length}`);

} catch (error) {
    console.error("❌ Có lỗi xảy ra:", error);
}
