// 1. KHO DỮ LIỆU BÀI HỌC GỐC (Khi muốn lưu vĩnh viễn bài mới lên mạng, bạn dán mã vào ngay dưới dòng này)
const defaultGuidesData = [
    {
        title: "Kỹ thuật 'Ngang tầm mắt' thu hút chú ý chung (ESDM)",
        category: "giao-tiep",
        tag: "Phương pháp ESDM",
        summary: "3 bước đặt đồ chơi ngang tầm mắt cha mẹ để khuyến khích trẻ chuyển ánh nhìn từ đồ vật sang người đối diện.",
        duration: "Thực hành: 15 phút/ngày",
        content: "Mục tiêu: Giúp con nhận ra khuôn mặt và ánh mắt của mẹ là nơi bắt đầu những điều thú vị.\n\nBước 1: Ngồi đối diện với con trên sàn nhà, đảm bảo mắt mẹ thấp ngang hoặc thấp hơn mắt con một chút.\nBước 2: Cầm món đồ chơi con thích đưa lên ngang sống mũi hoặc gần mắt của mẹ (thay vì để dưới đất).\nBước 3: Ngay khoảnh khắc con ngước nhìn lên phía đồ chơi và chạm ánh mắt với mẹ, hãy nở nụ cười thật tươi, khen ngợi và trao ngay món đồ chơi cho con."
    },
    {
        title: "Tạo động lực giao tiếp tự nhiên qua chiến lược PRT",
        category: "giao-tiep",
        tag: "Phương pháp PRT",
        summary: "Cách sắp đặt môi trường tại nhà để con chủ động bật âm hoặc ra hiệu yêu cầu sự giúp đỡ từ bố mẹ.",
        duration: "Thực hành: Trong sinh hoạt hàng ngày",
        content: "Mục tiêu: Tăng tính chủ động giao tiếp của trẻ mà không cần ép buộc.\n\nBước 1: Đặt món bánh hoặc đồ chơi con cực kỳ yêu thích vào một chiếc hộp trong suốt có nắp đậy chặt (con nhìn thấy nhưng không tự mở được).\nBước 2: Đưa hộp cho con và chờ đợi. Khi con đưa hộp lại cho mẹ để nhờ mở, hãy giữ hộp ngang tầm mắt và làm mẫu từ đơn giản: 'Mở'.\nBước 3: Ngay khi con nhìn mẹ hoặc cố gắng bật âm gần giống từ 'Mở', hãy mở nắp ngay lập tức để củng cố hành vi giao tiếp của con."
    },
    {
        title: "Phân tích ABC và xử lý cơn quá tải giác quan (Meltdown)",
        category: "hanh-vi",
        tag: "Ứng dụng ABA",
        summary: "Phân biệt giữa ăn vạ đòi hỏi (Tantrum) và quá tải thần kinh (Meltdown) cùng quy trình giảm kích thích an toàn.",
        duration: "Kỹ năng thiết yếu cho cha mẹ",
        content: "Trong ABA, mọi hành vi đều được quan sát qua mô hình A (Tiền đề trước hành vi) - B (Hành vi) - C (Hệ quả sau hành vi).\n\n1. Khi con quá tải giác quan (Meltdown): Bộ não của con đang bị quá tải bởi tiếng ồn, ánh sáng hoặc sự thay đổi đột ngột. Lúc này không giảng giải lý lẽ. Hãy đưa con vào góc yên tĩnh, giảm ánh sáng, ôm sâu (nếu con thích cảm giác nén sâu) và giữ giọng nói thật trầm ấm.\n2. Ghi chép lại yếu tố kích hoạt (A) trước khi con bùng nổ để chủ động phòng ngừa vào lần sau."
    },
    {
        title: "Chơi tương tác trên sàn nhà theo nguyên lý Floortime",
        category: "tu-lap",
        tag: "Phương pháp Floortime",
        summary: "Bước vào thế giới của con bằng cách nương theo sở thích của trẻ và mở rộng vòng tròn giao tiếp hai chiều.",
        duration: "Thực hành: 20 phút/tối",
        content: "Thay vì bắt con chơi theo ý người lớn, Floortime hướng dẫn cha mẹ nương theo sự dẫn dắt của trẻ:\n\nBước 1: Quan sát xem con đang thích làm gì (ví dụ: con đang đẩy chiếc xe ô tô chạy qua chạy lại).\nBước 2: Tham gia vào trò chơi của con bằng một chiếc xe khác, tạo ra tình huống vui nhộn như 'Ồ, xe của mẹ bị chặn đường rồi, làm sao bây giờ?'.\nBước 3: Chờ đợi phản ứng của con (đẩy xe mẹ ra, cười, hoặc nhìn mẹ) để khép kín một 'vòng tròn giao tiếp'."
    }
];

// Kết hợp dữ liệu gốc và dữ liệu thêm mới trong trình duyệt
let savedPosts = JSON.parse(localStorage.getItem('lana_custom_posts')) || [];
let guidesData = [...savedPosts, ...defaultGuidesData];

// 2. HÀM HIỂN THỊ DANH SÁCH BÀI HỌC LÊN GIAO DIỆN
function filterGuides(selectedCategory) {
    const container = document.getElementById('guide-container');
    container.innerHTML = '';

    const filtered = selectedCategory === 'all' 
        ? guidesData 
        : guidesData.filter(item => item.category === selectedCategory);

    filtered.forEach((guide, index) => {
        const card = `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-md transition">
                <div>
                    <span class="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded">${guide.tag}</span>
                    <h3 class="text-lg font-bold text-slate-900 mt-3">${guide.title}</h3>
                    <p class="text-slate-600 text-sm mt-2 leading-relaxed">${guide.summary}</p>
                </div>
                <div class="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                    <span>⏱ ${guide.duration}</span>
                    <button onclick="openArticleModal(${index}, '${selectedCategory}')" class="text-teal-600 font-semibold hover:underline">
                        Đọc bài học →
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// 3. HÀM MỞ ĐỌC CHI TIẾT BÀI HỌC
function openArticleModal(index, currentCategory) {
    const filtered = currentCategory === 'all' 
        ? guidesData 
        : guidesData.filter(item => item.category === currentCategory);
    const article = filtered[index];

    document.getElementById('modal-tag').innerText = article.tag;
    document.getElementById('modal-title').innerText = article.title;
    document.getElementById('modal-content').innerText = article.content || article.summary;
    document.getElementById('modal-duration').innerText = "⏱ " + article.duration;
    document.getElementById('article-modal').classList.remove('hidden');
}

function closeArticleModal() {
    document.getElementById('article-modal').classList.add('hidden');
}

// 4. HÀM QUẢN TRỊ ADMIN: THÊM BÀI HỌC MỚI & TẠO MÃ LƯU VĨNH VIỄN
function toggleAdminModal() {
    document.getElementById('admin-modal').classList.toggle('hidden');
    document.getElementById('code-export-box').classList.add('hidden');
}

function addNewPost() {
    const title = document.getElementById('admin-title').value.trim();
    const category = document.getElementById('admin-category').value;
    const tag = document.getElementById('admin-tag').value.trim() || "Can thiệp tại nhà";
    const duration = document.getElementById('admin-duration').value.trim() || "Thực hành hàng ngày";
    const summary = document.getElementById('admin-summary').value.trim();
    const content = document.getElementById('admin-content').value.trim();

    if (!title || !summary || !content) {
        alert("Vui lòng điền đầy đủ Tiêu đề, Tóm tắt và Nội dung chi tiết của bài học!");
        return;
    }

    const newPost = { title, category, tag, summary, duration, content };

    // Lưu vào trình duyệt để hiển thị ngay lập tức
    savedPosts.unshift(newPost);
    localStorage.setItem('lana_custom_posts', JSON.stringify(savedPosts));
    guidesData = [...savedPosts, ...defaultGuidesData];
    filterGuides('all');

    // Xuất đoạn mã JSON chuẩn để người quản trị dán vào file app.js trên GitHub
    const codeString = JSON.stringify(newPost, null, 8) + ",";
    document.getElementById('generated-code').innerText = codeString;
    document.getElementById('code-export-box').classList.remove('hidden');
}

function copyGeneratedCode() {
    const codeText = document.getElementById('generated-code').innerText;
    navigator.clipboard.writeText(codeText);
    alert("Đã copy mã bài viết! Bạn chỉ cần mở file app.js, dán ngay dưới dòng 'const defaultGuidesData = [' và lưu lại là xong.");
}

// 5. HÀM CHẤM ĐIỂM BẢNG SÀNG LỌC
function evaluateChecklist() {
    const checks = document.querySelectorAll('.check-item:checked');
    const count = checks.length;
    const resultBox = document.getElementById('result-box');

    resultBox.classList.remove('hidden', 'bg-amber-50', 'border-amber-300', 'text-amber-900', 'bg-teal-50', 'border-teal-300', 'text-teal-900');

    if (count >= 2) {
        resultBox.classList.add('bg-amber-50', 'border-amber-300', 'text-amber-900');
        resultBox.innerHTML = `<strong>Khuyến nghị ưu tiên (${count}/4 dấu hiệu):</strong> Trẻ đang có một số dấu hiệu cần lưu ý về giao tiếp xã hội và chú ý chung. Bố mẹ nên bắt đầu áp dụng ngay các bài học "Tương tác ngang tầm mắt" trên trang và đưa trẻ đi đánh giá phát triển chuyên sâu.`;
    } else {
        resultBox.classList.add('bg-teal-50', 'border-teal-300', 'text-teal-900');
        resultBox.innerHTML = `<strong>Ghi nhận (${count}/4 dấu hiệu):</strong> Bạn hãy tiếp tục theo dõi sát các mốc phát triển giao tiếp của con và thực hành các bài tập tương tác hai chiều mỗi ngày.`;
    }
}

window.onload = () => filterGuides('all');