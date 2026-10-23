# Cập nhật Rentie - 19/10/2026

- Đăng ký và đăng nhập từ chối email ngoài tên miền giáo dục `.edu.vn`. Chưa xác minh email thật hoặc giới hạn vào tên miền một trường cụ thể.
- Tạo đơn giữ khoảng ngày/giờ đã chọn trong 15 phút. Đơn khác trùng lịch không thể đặt hoặc thanh toán vượt lượt. Lịch không giao nhau vẫn đặt được.
- Trang đơn có bộ đếm; hết hạn chuyển Hết hạn thanh toán và nhả lịch, không trừ tiền hay uy tín. Mở lại trang sau khi tắt trình duyệt sẽ kiểm tra lại hạn cũ.
- Kiểm định có lọc trạng thái, khoảng ngày đăng, sắp xếp mới/cũ và mở chi tiết hồ sơ. Chỉ hồ sơ chờ xử lý mới có nút duyệt/từ chối.
- Thủ kho nhập kệ khi tiếp nhận, có thể đổi kệ và xem đồ tại quầy hay người thuê đang giữ. Đồ đi thuê vẫn giữ chỗ kệ dự phòng.
- Admin có thêm/sửa tài khoản, chọn vai trò, khóa/mở và bảng quyền. Không tự khóa/hạ quyền. Tài khoản có lịch sử hoặc tiền ví không được đổi vai trò hoặc xóa; có thể khóa để bảo toàn lịch sử.
- Hủy sau thanh toán trước xác nhận bàn giao: hoàn 100% tiền thuê và cọc, phí hủy 0 đồng, không trừ uy tín. Sau khi bắt đầu xác nhận bàn giao cần xử lý với bên giao; sau bàn giao dùng nhận trả/tất toán.
- Khóa sửa tin, giá và cọc khi có đơn đang giữ lịch hoặc chưa kết thúc. Nút sửa và trang sửa trực tiếp đều chặn; giá/cọc trên đơn giữ nguyên bản đã chốt.

## Dùng thử

Giải nén rồi mở START_RENTIE.cmd. Dữ liệu thử trên cùng địa chỉ trình duyệt được giữ, không cần khôi phục mẫu. Mỗi tab nhớ tài khoản riêng để thử hai người đặt cùng lịch.

Sinh viên thuê bộ vợt để xem bộ đếm. Tab khác đổi sinh viên rồi chọn cùng lịch để thấy thông báo. Thủ kho mở Quầy ký gửi để thử bộ lọc, hồ sơ và kệ. Admin mở Quản trị > Tài khoản để thêm/sửa và xem quyền.

## Giới hạn

Dữ liệu ở localStorage. Các tab cùng trình duyệt và địa chỉ dùng chung dữ liệu; Web Locks tuần tự hóa cập nhật khi được hỗ trợ. Thiết bị hoặc trình duyệt khác không đồng bộ. Hệ thống thật cần backend và khóa/giao dịch trên máy chủ để chống trùng lịch đồng thời.

Quy tắc mới thay “đơn chờ thanh toán chưa giữ lịch”. Cần cập nhật UC12/UC13 trong báo cáo. Phiên bản này tự hết hạn đơn chưa thanh toán; chưa bổ sung tự hủy trường hợp đã thanh toán nhưng không đến nhận vì hạn nhận cần được chốt riêng.
