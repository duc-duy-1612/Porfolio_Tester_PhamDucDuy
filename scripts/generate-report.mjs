import fs from 'fs';
import path from 'path';

// Đường dẫn tới file .side của bạn (đặt ngang hàng với thư mục src)
const inputFilePath = '../Nhóm 9.side';
const outputFilePath = 'public/evidence/tnc-testing/Bao_Cao_Test_Nhom_9.html';

try {
    // Kiểm tra xem file có tồn tại không
    if (!fs.existsSync(inputFilePath)) {
        console.error(`❌ Không tìm thấy file "${inputFilePath}". Vui lòng copy file .side của bạn vào thư mục gốc của dự án (cùng cấp với thư mục src).`);
        process.exit(1);
    }

    // Đọc nội dung file .side
    const rawData = fs.readFileSync(inputFilePath, 'utf-8');
    const sideData = JSON.parse(rawData);

    // Sắp xếp các test case theo thứ tự TC01, TC02...
    sideData.tests.sort((a, b) => {
        const matchA = a.name.match(/^TC(\d+)/i);
        const matchB = b.name.match(/^TC(\d+)/i);
        
        const numA = matchA ? parseInt(matchA[1], 10) : 999;
        const numB = matchB ? parseInt(matchB[1], 10) : 999;
        
        return numA - numB;
    });

    // Tạo mục lục (TOC)
    let tocHtml = `
        <div class="toc">
            <h2>Mục Lục Test Cases</h2>
            <ul>
    `;
    sideData.tests.forEach((test, index) => {
        tocHtml += `<li><a href="#tc-${index + 1}">${test.name}</a></li>`;
    });
    tocHtml += `
            </ul>
        </div>
    `;

    let html = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <title>Báo Cáo Kiểm Thử (Test Cases)</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 40px; background: #f3f4f6; color: #333; }
            h1 { text-align: center; color: #1f2937; margin-bottom: 5px; }
            .summary { text-align: center; margin-bottom: 40px; font-size: 1.1rem; color: #4b5563; }
            .toc { background: white; margin-bottom: 40px; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
            .toc h2 { color: #2563eb; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 1.25rem; }
            .toc ul { list-style-type: none; padding-left: 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 10px; }
            .toc li { margin-bottom: 5px; }
            .toc a { color: #059669; text-decoration: none; font-weight: 500; font-size: 0.95rem; }
            .toc a:hover { text-decoration: underline; color: #047857; }
            .tc-container { background: white; margin-bottom: 40px; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); scroll-margin-top: 20px; }
            .tc-container h2 { color: #2563eb; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; font-size: 1.25rem; }
            table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 0.95rem; }
            th, td { border: 1px solid #e5e7eb; padding: 12px; text-align: left; }
            th { background-color: #f9fafb; color: #4b5563; font-weight: 600; }
            tr:nth-child(even) { background-color: #f9fafb; }
            .command { color: #db2777; font-weight: 600; font-family: monospace; }
            .target { color: #059669; font-family: monospace; word-break: break-all; }
            .value { color: #d97706; font-family: monospace; }
            .header-info { display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.95rem; color: #6b7280; }
        </style>
    </head>
    <body>
        <h1>Báo Cáo Kịch Bản Kiểm Thử (Selenium IDE)</h1>
        <div class="summary">
            <p><strong>Tên Dự Án:</strong> ${sideData.name}</p>
            <p><strong>Tổng số Test Cases:</strong> ${sideData.tests.length}</p>
        </div>
        ${tocHtml}
    `;

    // Duyệt qua từng Test Case để tạo Bảng
    sideData.tests.forEach((test, index) => {
        html += `
        <div id="tc-${index + 1}" class="tc-container">
            <h2>${test.name}</h2>
            <div class="header-info">
                <span><strong>ID:</strong> ${test.id}</span>
                <span><strong>Số bước (Steps):</strong> ${test.commands.length}</span>
            </div>
            <table>
                <tr>
                    <th style="width: 50px; text-align: center;">STT</th>
                    <th style="width: 20%;">Hành động (Command)</th>
                    <th style="width: 40%;">Mục tiêu (Target)</th>
                    <th>Dữ liệu (Value)</th>
                </tr>
        `;
        
        // Duyệt qua các step của mỗi Test Case
        test.commands.forEach((cmd, i) => {
            html += `
                <tr>
                    <td style="text-align: center;">${i + 1}</td>
                    <td class="command">${cmd.command}</td>
                    <td class="target">${cmd.target}</td>
                    <td class="value">${cmd.value || ''}</td>
                </tr>
            `;
        });
        
        html += `
            </table>
        </div>
        `;
    });

    html += `
    </body>
    </html>
    `;

    // Lưu thành file HTML
    fs.writeFileSync(outputFilePath, html);
    console.log(`✅ Đã tạo thành công báo cáo! Bạn có thể mở file "${outputFilePath}" để xem kết quả.`);

} catch (error) {
    console.error("❌ Có lỗi xảy ra trong quá trình tạo báo cáo:", error);
}
