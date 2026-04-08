# Đề tài: Xây dựng website tìm việc IT

## 👥 Thành viên nhóm

**Nhóm số 5**

| STT | Họ và tên | MSSV | Vai trò |
| --- | --- | --- | --- |
| 1 | Nhữ Trung Hải | Chưa bổ sung | Nhóm trưởng |
| 2 | Phạm Nguyễn Hưng | Chưa bổ sung | Thành viên |
| 3 | Nguyễn Trọng An | Chưa bổ sung | Thành viên |

## 📘 Tên đề tài

**Đề tài: Xây dựng website tìm việc IT**

## 📝 Mô tả sơ qua dự án

Đây là dự án xây dựng website tìm việc IT, hỗ trợ kết nối giữa ứng viên và nhà tuyển dụng. Hệ thống hướng tới việc cung cấp các chức năng quản lý tài khoản, tuyển dụng, ứng tuyển, tìm kiếm việc làm, trò chuyện thời gian thực và quản trị hệ thống. Dự án hiện vẫn đang trong quá trình hoàn thiện nên một số chức năng được bổ sung theo định hướng nghiệp vụ tổng thể, không chỉ dựa trên phần source back-end đã hoàn thành.

## 🌟 Các chức năng nổi bật trong dự án

| Nhóm chức năng | Mô tả ngắn |
| --- | --- |
| Xác thực và bảo mật tài khoản | Đăng ký, đăng nhập, đăng xuất, xác minh email, quên mật khẩu, đặt lại mật khẩu, đăng nhập Google, refresh token, phân quyền truy cập và rate-limit gửi mail. |
| Admin | Quản lý người dùng, quản lý người tuyển dụng, quản lý danh mục, quản lý bài tuyển dụng, báo cáo thống kê, cài đặt hệ thống. |
| Người tuyển dụng | Tạo và cập nhật hồ sơ công ty, quản lý đăng tuyển dụng, xem danh sách/chi tiết tin tuyển dụng, cập nhật trạng thái bài đăng và chat real-time với ứng viên đã tuyển dụng. |
| User | Trang chủ, danh sách việc làm, thông tin cá nhân, danh sách việc làm ứng tuyển, danh sách việc làm đã lưu, tìm kiếm nâng cao, chat real-time với nhà tuyển dụng. |
| Hồ sơ và cài đặt tài khoản | Xem và cập nhật hồ sơ cá nhân, cài đặt tài khoản, gửi lại email xác minh, đổi mật khẩu bằng OTP. |
| Dữ liệu tuyển dụng và mở rộng hệ thống | Quản lý dữ liệu công ty, việc làm, dashboard, tìm kiếm và các thành phần phục vụ mở rộng nghiệp vụ tuyển dụng. |
| Hạ tầng triển khai | Tích hợp MongoDB, Redis, Elasticsearch, Kibana, Docker, Swagger/OpenAPI và thiết lập kiểm thử bằng Jest. |

## 📅 Bảng công việc theo ngày

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-03-25 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng đăng nhập thành viên | [SRS chức năng đăng nhập](./SRS/SRS_LOGIN.MD) | [Ảnh đăng nhập](./reports/assets/20260403_login.png) |
| 2026-03-25 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng đăng ký thành viên | [SRS chức năng đăng ký](./SRS/SRS_REGISTER.MD) | [Ảnh đăng ký](./reports/assets/20260403_register.png) |
| 2026-03-25 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng quên mật khẩu | [SRS chức năng quên mật khẩu](./SRS/SRS_FORGOT_PASSWORD.MD) | [Ảnh quên mật khẩu](./reports/assets/20260403_forgot_password.png) |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-03-27 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng đăng xuất thành viên | [SRS chức năng đăng xuất](./SRS/SRS_LOGOUT.MD) | [Ảnh đăng xuất](./reports/assets/20260403_logout.png) |
| 2026-03-27 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xác minh email | [SRS chức năng xác minh email](./SRS/SRS_VERIFY_EMAIL.MD) | [Ảnh xác minh email](./reports/assets/20260403_verify_email.png) |
| 2026-03-27 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng đặt lại mật khẩu | [SRS chức năng đặt lại mật khẩu](./SRS/SRS_RESET_PASSWORD.MD) | [Ảnh đặt lại mật khẩu](./reports/assets/20260403_reset_password.png) |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-03-28 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng làm mới phiên đăng nhập | [SRS chức năng refresh token](./SRS/SRS_REFRESH_TOKEN.MD) | [Ảnh refresh token](./reports/assets/20260403_refresh_token.png) |
| 2026-03-28 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem hồ sơ nhanh của tôi | [SRS chức năng get me](./SRS/SRS_ME.MD) | [Ảnh get me](./reports/assets/20260403_me.png) |
| 2026-03-28 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem hồ sơ công khai người dùng | [SRS chức năng profile](./SRS/SRS_PROFILE.MD) | [Ảnh profile](./reports/assets/20260403_profile.png) |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-03-29 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng cập nhật hồ sơ cá nhân | [SRS chức năng cập nhật hồ sơ](./SRS/SRS_UPDATE_PROFILE.MD) | [Ảnh cập nhật hồ sơ](./reports/assets/20260403_update_profile.png) |
| 2026-03-29 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem cài đặt tài khoản | [SRS chức năng xem cài đặt](./SRS/SRS_SETTING_USER.MD) | [Ảnh xem cài đặt](./reports/assets/20260403_setting_user.png) |
| 2026-03-29 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng cập nhật cài đặt tài khoản | [SRS chức năng cập nhật cài đặt](./SRS/SRS_UPDATE_SETTING_USER.MD) | [Ảnh cập nhật cài đặt](./reports/assets/20260403_update_setting_user.png) |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-03-30 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng gửi lại email xác minh | [SRS chức năng resend mail](./SRS/SRS_RESEND_MAIL.MD) | [Ảnh resend mail](./reports/assets/20260403_resend_mail.png) |
| 2026-03-30 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng yêu cầu OTP đổi mật khẩu | [SRS chức năng change password](./SRS/SRS_CHANGE_PASSWORD.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-03-30 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng thiết lập mật khẩu mới bằng OTP | [SRS chức năng new password](./SRS/SRS_NEW_PASSWORD.MD) | [Ảnh new password](./reports/assets/20260403_new_password.png) |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-03-31 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng tạo hồ sơ công ty | [SRS chức năng tạo công ty](./SRS/SRS_CREATE_COMPANY.MD) | [Ảnh tạo công ty](./reports/assets/20260403_create_company.png) |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-04 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem hồ sơ công ty của tôi | [SRS chức năng xem hồ sơ công ty](./SRS/SRS_GET_COMPANY_ME.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-04 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng cập nhật hồ sơ công ty | [SRS chức năng cập nhật hồ sơ công ty](./SRS/SRS_UPDATE_COMPANY.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-04 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng tạo tin tuyển dụng | [SRS chức năng tạo tin tuyển dụng](./SRS/SRS_CREATE_JOB.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-06 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem danh sách tin tuyển dụng của công ty | [SRS chức năng xem danh sách tin tuyển dụng](./SRS/SRS_GET_COMPANY_JOBS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-06 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem chi tiết tin tuyển dụng của công ty | [SRS chức năng xem chi tiết tin tuyển dụng](./SRS/SRS_GET_COMPANY_JOB_DETAIL.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-06 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng cập nhật tin tuyển dụng | [SRS chức năng cập nhật tin tuyển dụng](./SRS/SRS_UPDATE_JOB.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-07 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng cập nhật trạng thái tin tuyển dụng | [SRS chức năng cập nhật trạng thái tin tuyển dụng](./SRS/SRS_UPDATE_JOB_STATUS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

## 📄 Báo cáo tiến độ

- [Báo cáo ngày 03/04/2026](./reports/REPORT_20260403.md)
- [Báo cáo ngày 08/04/2026](./reports/REPORT_20260408.md)

## 🚀 Công nghệ sử dụng

| Thành phần | Công nghệ |
| --- | --- |
| Runtime | Node.js 20 |
| Ngôn ngữ | TypeScript |
| Backend Framework | Express 5 |
| Database | MongoDB |
| Cache | Redis |
| Xác thực và bảo mật | JWT (`jsonwebtoken`), `bcryptjs`, Google OAuth2 |
| Validation | `zod` |
| Email Service | Resend Email API |
| Search và Analytics | Elasticsearch, Kibana |
| AI Integration | Hugging Face Inference API |
| DevOps | Docker, Docker Compose |
| Testing | Jest |
| Code Quality | ESLint, Prettier |
| API Documentation | Swagger / OpenAPI |

## 🎨 Figma

- Chưa tìm thấy link Figma trong repo hiện tại.
