// 1. CƠ SỞ DỮ LIỆU BÀI HƯỚNG DẪN (Bạn có thể thêm hàng trăm bài vào danh sách này)
const guidesData = [
    {
        title: "Kỹ thuật 'Ngang tầm mắt' thu hút chú ý chung",
        category: "giao-tiep",
        tag: "Giao tiếp sớm",
        summary: "3 bước đặt đồ chơi ngang tầm mắt cha mẹ để khuyến khích trẻ chuyển ánh nhìn từ đồ vật sang người đối diện.",
        duration: "Thực hành: 15 phút/ngày"
    },
    {
        title: "Dạy trẻ giao tiếp bằng thẻ tranh (PECS) giai đoạn 1",
        category: "giao-tiep",
        tag: "Ngôn ngữ thay thế",
        summary: "Hướng dẫn thiết lập cặp tranh hình ảnh các món ăn/đồ chơi yêu thích để trẻ chủ động đưa tranh thay vì khóc ăn vạ.",
        duration: "Thực hành: Trong các bữa ăn"
    },
    {
        title: "Xử lý cơn bùng nổ quá tải giác quan (Meltdown) đúng cách",
        category: "hanh-vi",
        tag: "Quản lý hành vi",
        summary: "Phân biệt giữa ăn vạ đòi hỏi (Tantrum) và quá tải thần kinh (Meltdown) cùng quy trình giảm kích thích an toàn.",
        duration: "Kỹ năng thiết yếu"
    },
    {
        title: "Lập lịch trình trực quan (Visual Schedule) tại nhà",
        category: "tu-lap",
        tag: "Tự phục vụ",
        summary: "Giúp trẻ giảm lo âu khi chuyển tiếp hoạt động bằng bảng hình ảnh thứ tự công việc hàng ngày (Đánh răng -> Ăn sáng -> Đi học).",
        duration: "Áp dụng hàng ngày"
    }
];

// 2. HÀM HIỂN THỊ DANH SÁCH BÀI HƯỚNG DẪN LÊN GIAO DIỆN
function filterGuides(selectedCategory) {
    const container = document.getElementById('guide-container');
    container.innerHTML = ''; // Xóa nội dung cũ trước khi lọc

    const filtered = selectedCategory === 'all' 
        ? guidesData 
        : guidesData.filter(item => item.category === selectedCategory);

    filtered.forEach(guide => {
        const card = `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
                <div>
                    <span class="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded">${guide.tag}</span>
                    <h3 class="text-lg font-bold text-slate-900 mt-3">${guide.title}</h3>
                    <p class="text-slate-600 text-sm mt-2 leading-relaxed">${guide.summary}</p>
                </div>
                <div class="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                    <span>⏱ ${guide.duration}</span>
                    <a href="#" class="text-teal-600 font-semibold hover:underline">Xem chi tiết →</a>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 3. HÀM TỰ ĐỘNG PHÂN TÍCH BẢNG KIỂM TRA DẤU HIỆU SỚM
function evaluateChecklist() {
    const checks = document.querySelectorAll('.check-item:checked');
    const count = checks.length;
    const resultBox = document.getElementById('result-box');

    resultBox.classList.remove('hidden', 'bg-amber-50', 'border-amber-300', 'text-amber-900', 'bg-teal-50', 'border-teal-300', 'text-teal-900');

    if (count >= 2) {
        resultBox.classList.add('bg-amber-50', 'border-amber-300', 'text-amber-900');
        resultBox.innerHTML = `
            <strong>Khuyến nghị ưu tiên (${count}/4 dấu hiệu):</strong> Trẻ đang có một số dấu hiệu cần lưu ý về giao tiếp xã hội và chú ý chung. 
            Bố mẹ nên: (1) Đưa trẻ đi khám đánh giá phát triển chuyên sâu tại khoa Tâm bệnh/Tâm lý nhi; 
            (2) Bắt đầu áp dụng ngay các bài tập "Tương tác ngang tầm mắt" và hạn chế tối đa thiết bị màn hình tại nhà.
        `;
    } else {
        resultBox.classList.add('bg-teal-50', 'border-teal-300', 'text-teal-900');
        resultBox.innerHTML = `
            <strong>Ghi nhận (${count}/4 dấu hiệu):</strong> Bạn hãy tiếp tục theo dõi sát các mốc phát triển giao tiếp của con và tham khảo chuyên mục "Giao tiếp & Chú ý chung" bên trên để tăng cường tương tác hai chiều mỗi ngày.
        `;
    }
}

// Tự động hiển thị toàn bộ danh sách khi vừa mở trang web
window.onload = () => filterGuides('all');