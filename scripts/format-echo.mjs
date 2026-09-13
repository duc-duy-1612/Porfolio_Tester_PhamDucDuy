import fs from 'fs';

const filePath = '../Nhóm 9.side';

try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    function formatText(text) {
        if (!text) return text;
        
        // 1. Xóa các icon / emoji (Sử dụng regex bao quát các dải Unicode của Emoji)
        let cleaned = text.replace(/[\u{1F300}-\u{1F9FF}\u{2700}-\u{27BF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}]/gu, '');
        
        // Trim khoảng trắng thừa
        cleaned = cleaned.trim();
        // Xóa dấu câu thừa ở đầu nếu vô tình bị sót sau khi xóa icon (vd: "- ")
        cleaned = cleaned.replace(/^[\s\-]+/, '');

        if (cleaned.length === 0) return cleaned;

        // 2. Chuyển toàn bộ thành chữ thường
        let lower = cleaned.toLowerCase();
        
        // 3. Viết hoa chữ cái đầu tiên
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    let modifiedCount = 0;

    data.tests.forEach(test => {
        test.commands.forEach(cmd => {
            // Chỉ chuẩn hóa text của lệnh echo (nằm trong cột Target)
            if (cmd.command === 'echo' && cmd.target) {
                const original = cmd.target;
                const formatted = formatText(original);
                if (original !== formatted) {
                    cmd.target = formatted;
                    modifiedCount++;
                }
            }
        });
    });

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`\n✅ Đã chuẩn hóa format cho ${modifiedCount} dòng log (echo) trong file .side!`);

} catch (error) {
    console.error("❌ Có lỗi xảy ra:", error);
}
