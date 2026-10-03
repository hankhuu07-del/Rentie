# Đối chiếu website với 27 Use Case Rentie

Các chức năng dưới đây hoạt động trong phạm vi dữ liệu mô phỏng tại trình duyệt. Màn hình và Use Case không tương đương một-một; một trang có thể phục vụ nhiều mục tiêu người dùng.

| UC | Mục tiêu | Trang và thao tác |
|---|---|---|
| 01 | Đăng ký | account → Đăng xuất nếu đang dùng tài khoản mẫu → Đăng ký |
| 02 | Đăng nhập | account → Email + mật khẩu; Đổi vai trò là tiện ích demo bổ sung |
| 03 | Cập nhật hồ sơ | account → Lưu họ tên, số điện thoại |
| 04 | Lịch sử uy tín | account → Điểm hiện tại và biến động gắn với đơn |
| 05 | Tìm/lọc đồ | catalog → Từ khóa, danh mục, hình thức, sắp xếp |
| 06 | Chi tiết/lịch trống | item → Điều kiện, phụ kiện, lịch được giữ và khoảng thời gian chọn |
| 07 | Đăng P2P | publish → Tự giao nhận → Gửi duyệt |
| 08 | Yêu cầu ký gửi | publish → Ký gửi + lịch dự kiến mang đến; inventory hiện mã đợt |
| 09 | Duyệt P2P | admin → Duyệt nội dung hoặc từ chối có lý do |
| 10 | Tiếp nhận ký gửi | warehouse → Kiểm định, ghi ảnh, xác nhận; kiểm tra số món và lít |
| 11 | Sửa/ẩn tin | inventory → Chỉnh sửa, Ẩn/Hiện; sửa cần duyệt lại, chặn khi còn đơn |
| 12 | Đặt thuê | item → Chọn lịch → Tạo đơn; kiểm tra điều kiện và lịch |
| 13 | Thanh toán | orders → Thanh toán → Xác nhận; tách tiền thuê và cọc |
| 14 | Hủy trước giao | orders → Hủy đơn; hoàn tiền nếu đã thanh toán |
| 15 | Bàn giao P2P | scan → Mã đơn + mã đồ + ảnh; hai tài khoản cùng xác nhận |
| 16 | Giao đồ ký gửi | scan với vai trò thủ kho → Đối chiếu và xác nhận |
| 17 | Nhận trả P2P | Chủ đồ ghi hiện trạng ở scan; người thuê xác nhận trong orders |
| 18 | Nhận trả ký gửi | Thủ kho → scan → Nhận trả; ghi thời gian, ảnh và hiện trạng |
| 19 | Tất toán | orders → Xem tiền thuê/phí/phạt/cọc/công nợ → Xác nhận |
| 20 | Ví/bút toán | wallet → Số dư, tạm giữ, giao dịch; thêm nạp/rút mô phỏng |
| 21 | Gia hạn ký gửi | inventory → Gia hạn 30 ngày; chỗ đang lưu tiếp tục được giữ |
| 22 | Nhận lại ký gửi | inventory yêu cầu → warehouse xác nhận đã trả → đóng đợt |
| 23 | Gửi khiếu nại | orders → Gửi lý do, giá trị, bằng chứng, thông tin bất đồng |
| 24 | Xử lý nhẹ | disputes với Thủ kho → Kết luận hoặc chuyển Admin |
| 25 | Xử lý nặng | disputes với Admin → Quyết định và tổng phạt sau xử lý |
| 26 | Danh mục | admin → Thêm, sửa tên, ẩn/hiện; chỉ xóa danh mục chưa sử dụng |
| 27 | Tài khoản | admin → Danh sách sinh viên, khóa/mở tài khoản |

## Quy tắc triển khai cần biết khi thuyết trình

- Đơn chờ thanh toán chưa giữ lịch; thanh toán kiểm tra lịch lại. Không thể bàn giao một vật phẩm đang nằm ở đơn khác chưa nhận trả.
- Giá/cọc/phí lưu theo đơn, thay đổi cấu hình không sửa đơn cũ.
- Người dùng luôn đối chiếu trước khi ghi nhận tiền và giao nhận. Quét mã chỉ tìm và kiểm tra hồ sơ.
- Đồ ký gửi đang được thuê vẫn chiếm chỗ dự phòng. Sửa dung tích đồ đang lưu không được vượt sức chứa.
- Điểm uy tín cập nhật khi tất toán; xử lý khiếu nại chưa tự ghi điểm. Không tính điểm hai lần.
- Khiếu nại chỉ mở trước tất toán trong bản này. Công nợ và giảm phạt được lưu, chưa hỗ trợ thu nợ hoặc sửa riêng mức trừ uy tín qua hồ sơ khiếu nại.
- Domain khái niệm và cấu trúc LocalStorage có mức chi tiết khác nhau: bản demo gộp thông tin VatPham/TinDang, lưu Quay dưới cấu hình, lưu BanGiao trong đơn và hồ sơ kiểm tra. Không dùng cấu trúc JavaScript này làm sơ đồ CSDL cuối cùng.
