# Rentie — website trình diễn

> Cập nhật 19/10/2026: xem CAP_NHAT.md về giữ lịch 15 phút, kệ, kiểm định, tài khoản/quyền, hoàn tiền và khóa sửa tin. Các kết quả kiểm tra ở cuối README là của bản trước.

Website cho thuê đồ dùng trong trường, gồm P2P và ký gửi tại một quầy. Giao diện tiếng Việt, có 15 màn hình cho sinh viên, thủ kho và quản trị viên.

## Mở website

1. Giải nén toàn bộ thư mục nếu nhận file ZIP.
2. Bấm đúp **START_RENTIE.cmd**. Cửa sổ phục vụ tệp sẽ mở trình duyệt tại `http://localhost:8765`. Giữ cửa sổ đó trong lúc xem web; đóng để dừng.
3. Có thể mở trực tiếp **index.html** để xem giao diện. Nên dùng cách 2 để dữ liệu được dùng chung ổn định giữa các trang và thử camera.

Không cần npm, cài gói hay kết nối Internet. Trình mở dùng Python có sẵn trên máy; nếu không tìm thấy, nó mở index.html. Người có Python cũng có thể chạy `python serve.py` từ thư mục này. Đây chỉ là máy chủ tệp tĩnh, không phải backend nghiệp vụ.

## Thử nhanh trong 5 phút

Thanh **Thử vai trò** ở đầu mọi trang cho phép chuyển tài khoản mà không phải đăng nhập lại.

| Tài khoản | Việc có thể thử |
|---|---|
| Nguyễn Minh Anh — Sinh viên | Tìm đồ, đặt thuê, thanh toán, xác nhận P2P, xem ví và uy tín, đăng đồ |
| Trần Bảo Nam — Sinh viên | Chủ các đồ mẫu, xác nhận bàn giao/nhận trả P2P, tất toán, quản lý ký gửi |
| Lê Thu Hà — Thủ kho | Kiểm định ký gửi, giao nhận tại quầy, tất toán, xử lý khiếu nại nhẹ |
| Phạm Quang Huy — Admin | Duyệt tin P2P, quản lý tài khoản/danh mục/cấu hình, xử lý khiếu nại nặng |

### Các hồ sơ mẫu

- **RT1001 / VP1001:** Máy ảnh chờ nhận tại quầy. Chuyển Thủ kho → Quét mã → nhập hai mã → dùng ảnh mẫu → xác nhận.
- **RT1002 / VP1002:** Máy chiếu P2P đang thuê và đã quá hạn. Chuyển Bảo Nam → Đơn thuê → Nhận trả đồ. Sau đó chuyển Minh Anh để đối chiếu, xác nhận; chuyển Bảo Nam để tất toán. Ví và uy tín thay đổi theo kết quả.
- **RT1003:** Đàn guitar đã trả tốt, chờ thủ kho tất toán. Có thể thử gửi khiếu nại bằng Minh Anh trước khi tất toán để thấy hồ sơ bị tạm dừng.
- **VP1007:** Tin P2P chờ Admin duyệt.
- **VP1008:** Vật phẩm ký gửi chờ Thủ kho kiểm định.

Thử một đơn mới bằng Minh Anh: thuê bộ vợt → chọn lịch → tạo đơn → thanh toán. Khi bàn giao P2P, **cả Minh Anh và Bảo Nam** phải xác nhận cùng mã đơn và mã vật phẩm.

Tài khoản → **Khôi phục dữ liệu mẫu** để bắt đầu lại. Thời gian các đơn mẫu được tính từ lúc tạo dữ liệu, theo múi giờ Việt Nam/Thái Lan (UTC+7).

### Đăng nhập / đăng ký

- Email mẫu: `minhanh@student.edu.vn` hoặc `baonam@student.edu.vn`.
- Mật khẩu mẫu: `Rentie123!`.
- Đăng ký dùng email kết thúc `.edu.vn`, mã sinh viên chưa trùng; điểm ban đầu 100, ví ban đầu 0đ.
- Đây là dữ liệu thử lưu tại máy, kể cả mật khẩu mẫu. Không dùng tài khoản/mật khẩu thật.

## Màn hình

| Nhóm | Tệp |
|---|---|
| Trưng bày | index.html, catalog.html, item.html |
| Cho thuê | publish.html, inventory.html, orders.html |
| Cá nhân | dashboard.html, wallet.html, account.html |
| Vận hành | warehouse.html, admin.html, disputes.html |
| Giao nhận điện thoại | scan.html |
| Hướng dẫn | guide.html, sitemap.html |

## QR và ảnh

QR được sinh từ mã thật trong dữ liệu, chẳng hạn `RT1001` và `VP1001`. Chỉ chấp nhận mã đơn/mã đồ của Rentie; mã không tự chuyển trang hoặc xác nhận giao nhận. Trước xác nhận cần đối chiếu mã, đúng vai trò, ảnh hiện trạng và phụ kiện.

Nút **Mở camera** dùng camera sau nếu có, thông qua khả năng đọc QR của trình duyệt. Camera cần HTTPS hoặc localhost, quyền truy cập và trình duyệt có BarcodeDetector hỗ trợ QR. Nếu thiết bị không hỗ trợ hoặc từ chối quyền, **nhập mã thủ công** vẫn hoạt động. Khi xem bằng địa chỉ IP LAN qua HTTP, nên dùng nhập mã. Chưa kiểm chứng camera trên điện thoại thật.

Ảnh có thể chụp/chọn từ máy hoặc dùng ảnh mẫu. Ảnh tải lên được giảm kích thước trong trình duyệt để lưu cùng dữ liệu. Ảnh sản phẩm mẫu được tạo bằng ImageGen; không phải bằng chứng kiểm định đồ thật.

## Phạm vi và công nghệ

- HTML, CSS, JavaScript thuần; biểu tượng Lucide đã kèm sẵn cùng giấy phép. Theo yêu cầu cập nhật, không dùng shadcn/ui và không tải dependency.
- Đúng bảng màu: Tan `#D8BA98`, Maroon `#7F0303`, Alabaster `#EFE8DF`, Light blue `#96C0CE`, Midnight blue `#0F414A`.
- LocalStorage chứa trạng thái dùng thử; tải lại trang không mất dữ liệu. Các trình duyệt, cổng hoặc thiết bị khác nhau không tự đồng bộ.
- Không backend, ngân hàng, email xác minh hay thanh toán thật. Đổi vai trò là tính năng trình diễn, không phải phân quyền bảo mật cho sản phẩm triển khai thực tế.
- Một đơn thuê một vật phẩm. Thời gian lẻ làm tròn lên theo đơn vị của tin đăng; giá/cọc/phí được chốt riêng cho từng đơn.
- Khiếu nại mở trước tất toán. Điều chỉnh khiếu nại hiện áp dụng tổng tiền phạt; điểm uy tín vẫn dựa trên hiện trạng và thời gian trả đã ghi nhận. Công nợ vượt cọc được hiển thị, chưa có luồng thu nợ riêng.
- Cọc, thu nhập và uy tín cập nhật một lần khi tất toán; không tính lại khi tải trang.
- Lịch mang ký gửi là lịch đề nghị. Không có dịch vụ nhắc lịch bên ngoài. Chỗ cho đồ đang cho thuê vẫn được giữ để nhận trả.

## Cấu trúc mã

`assets/css/app.css` chứa giao diện và các kích thước màn hình. `assets/js/core.js` chứa dữ liệu mẫu và quy tắc nghiệp vụ. `assets/js/app.js` chứa màn hình, biểu mẫu và tương tác. `assets/js/qr.js` sinh QR. Các tệp HTML là điểm vào riêng để giữ cấu trúc bài môn WEB dễ theo dõi.

## Đã kiểm tra

- 15 trang trên Edge, chiều rộng 1440px và 390px: không lỗi JavaScript, không tràn ngang toàn trang.
- Tìm kiếm, lọc P2P, đặt thuê, thanh toán ví, hiển thị QR, nhập sai mã, hai bên bàn giao P2P, nhận trả, tất toán và điểm uy tín.
- Duyệt tin theo vai trò, giới hạn cấu hình sức chứa, đăng ký, đăng xuất và giao diện tối được ghi nhớ.
- 11 nhóm kiểm tra nghiệp vụ: làm tròn thời gian, tránh thanh toán/tất toán hai lần, thiếu số dư, uy tín, trùng lịch, P2P, quyền thủ kho, hai giới hạn kho, khiếu nại và ký gửi lại.
- QR của ba mã khác nhau khớp từng ô với bộ mã hóa độc lập ReportLab, cùng phiên bản 1-L và mask 0.

Xem `CHUC_NANG.md` để đối chiếu 27 Use Case với các màn hình.
