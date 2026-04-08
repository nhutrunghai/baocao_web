# Ghi chú tạm thời

## State cho OAuth Google
- Hiện tại flow OAuth Google chưa dùng `state`.
- Cần thêm `state` để giảm rủi ro CSRF và OAuth mix-up.
- Flow cần có:
  1. Tạo `state` ngẫu nhiên trước khi redirect user lên Google.
  2. Gửi kèm `state` trong auth URL.
  3. Khi Google redirect về callback, nhận lại `state`.
  4. Kiểm tra `state` callback có khớp với `state` đã tạo trước đó không.
  5. Nếu không khớp thì từ chối callback.
- Có thể xử lý `state` ở frontend hoặc backend, nhưng phải có nơi lưu và đối chiếu.
