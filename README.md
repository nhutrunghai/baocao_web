# Đề tài: Xây dựng website tìm việc IT

## 👥 Thành viên nhóm

**Nhóm số 5**

| STT | Họ và tên | MSSV | Vai trò |
| --- | --- | --- | --- |
| 1 | Nhữ Trung Hải | 23810310247 | Nhóm trưởng |
| 2 | Phạm Nguyễn Hưng | 23810310276 | Thành viên |
| 3 | Nguyễn Trọng An | 23810310263 | Thành viên |

## 📘 Tên đề tài

**Đề tài: Xây dựng website tìm việc IT**

## 📝 Mô tả sơ qua dự án

Đây là dự án xây dựng website tìm việc IT, hỗ trợ kết nối giữa ứng viên và nhà tuyển dụng. Hệ thống hướng tới việc cung cấp các chức năng quản lý tài khoản, tuyển dụng, ứng tuyển, tìm kiếm việc làm, trò chuyện thời gian thực, quản lý CV, ví người dùng và quản trị hệ thống. Giai đoạn đầu nhóm mới hoàn thiện một phần chức năng, còn hiện tại phần backend đã được mở rộng tương đối đầy đủ nên tài liệu SRS và README được bổ sung tiếp theo đúng định hướng nghiệp vụ ban đầu.

## 🌟 Các chức năng nổi bật trong dự án

| Nhóm chức năng | Mô tả ngắn |
| --- | --- |
| Xác thực và bảo mật tài khoản | Đăng ký, đăng nhập, đăng xuất, xác minh email, quên mật khẩu, đặt lại mật khẩu, refresh token, resend mail, đổi mật khẩu bằng OTP. |
| Ứng viên | Trang chủ, tìm kiếm việc làm, xem chi tiết job, ứng tuyển, rút hồ sơ, quản lý CV, lưu việc làm yêu thích, xem hồ sơ đã ứng tuyển. |
| Nhà tuyển dụng | Tạo và cập nhật hồ sơ công ty, cập nhật logo, tạo/chỉnh sửa/quản lý job, xem hồ sơ ứng tuyển, cập nhật trạng thái ứng viên. |
| AI Chat và hỗ trợ mở rộng | Chat tư vấn việc làm theo phiên, lưu lịch sử chat, xóa phiên chat, tích hợp embedding/search service. |
| Ví người dùng | Xem ví, nạp tiền, xem lịch sử giao dịch. |
| Admin | Đăng nhập quản trị, dashboard thống kê, quản lý người dùng, quản lý công ty, quản lý job và kiểm duyệt tin tuyển dụng. |
| Hạ tầng triển khai | MongoDB, Redis, Elasticsearch, Kibana, Docker Compose, FastAPI cho embedding service, Swagger/OpenAPI, Jest. |

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

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-09 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng tìm kiếm việc làm công khai | [SRS chức năng tìm kiếm việc làm](./SRS/SRS_SEARCH_PUBLIC_JOBS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-09 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem việc làm nổi bật | [SRS chức năng featured jobs](./SRS/SRS_GET_FEATURED_JOBS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-09 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem việc làm mới nhất | [SRS chức năng latest jobs](./SRS/SRS_GET_LATEST_JOBS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-10 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng xem chi tiết việc làm công khai | [SRS chức năng xem chi tiết việc làm](./SRS/SRS_GET_PUBLIC_JOB_DETAIL.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-10 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng ứng tuyển việc làm | [SRS chức năng ứng tuyển việc làm](./SRS/SRS_APPLY_JOB.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-10 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng rút hồ sơ ứng tuyển | [SRS chức năng rút hồ sơ ứng tuyển](./SRS/SRS_WITHDRAW_JOB_APPLICATION.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-11 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng tạo CV | [SRS chức năng tạo CV](./SRS/SRS_CREATE_RESUME.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-11 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem danh sách CV của tôi | [SRS chức năng xem danh sách CV](./SRS/SRS_GET_MY_RESUMES.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-11 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem chi tiết CV | [SRS chức năng xem chi tiết CV](./SRS/SRS_GET_RESUME_DETAIL.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-12 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng xóa CV | [SRS chức năng xóa CV](./SRS/SRS_DELETE_RESUME.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-12 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem danh sách việc làm yêu thích | [SRS chức năng xem favorite jobs](./SRS/SRS_GET_FAVORITE_JOBS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-12 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng lưu việc làm yêu thích | [SRS chức năng lưu favorite job](./SRS/SRS_SAVE_FAVORITE_JOB.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-13 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng bỏ lưu việc làm yêu thích | [SRS chức năng bỏ lưu favorite job](./SRS/SRS_REMOVE_FAVORITE_JOB.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-13 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng cập nhật logo công ty | [SRS chức năng cập nhật logo công ty](./SRS/SRS_UPDATE_COMPANY_LOGO.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-13 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem hồ sơ ứng tuyển theo job của công ty | [SRS chức năng company job applications](./SRS/SRS_GET_COMPANY_JOB_APPLICATIONS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-14 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng xem chi tiết hồ sơ ứng tuyển của công ty | [SRS chức năng company application detail](./SRS/SRS_GET_COMPANY_APPLICATION_DETAIL.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-14 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng cập nhật trạng thái hồ sơ ứng tuyển của công ty | [SRS chức năng update company application status](./SRS/SRS_UPDATE_COMPANY_APPLICATION_STATUS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-14 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng chat tư vấn việc làm | [SRS chức năng chat jobs](./SRS/SRS_CHAT_JOBS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-15 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng xem danh sách phiên chat | [SRS chức năng get chat sessions](./SRS/SRS_GET_CHAT_SESSIONS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-15 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem chi tiết phiên chat | [SRS chức năng get chat session detail](./SRS/SRS_GET_CHAT_SESSION_DETAIL.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-15 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xóa phiên chat | [SRS chức năng delete chat session](./SRS/SRS_DELETE_CHAT_SESSION.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-16 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng xem ví người dùng | [SRS chức năng xem ví](./SRS/SRS_GET_WALLET.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-16 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng nạp tiền vào ví | [SRS chức năng top up ví](./SRS/SRS_TOP_UP_WALLET.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-16 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem lịch sử giao dịch ví | [SRS chức năng lịch sử ví](./SRS/SRS_GET_WALLET_TRANSACTIONS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-17 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng đăng nhập quản trị viên | [SRS chức năng admin login](./SRS/SRS_ADMIN_LOGIN.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-17 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng xem tổng quan dashboard quản trị | [SRS chức năng admin dashboard summary](./SRS/SRS_ADMIN_DASHBOARD_SUMMARY.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-17 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem danh sách người dùng quản trị | [SRS chức năng admin get users](./SRS/SRS_ADMIN_GET_USERS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-18 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng xem chi tiết người dùng quản trị | [SRS chức năng admin get user detail](./SRS/SRS_ADMIN_GET_USER_DETAIL.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-18 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng cập nhật trạng thái người dùng quản trị | [SRS chức năng admin update user status](./SRS/SRS_ADMIN_UPDATE_USER_STATUS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-18 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem danh sách công ty quản trị | [SRS chức năng admin get companies](./SRS/SRS_ADMIN_GET_COMPANIES.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-19 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng xem chi tiết công ty quản trị | [SRS chức năng admin get company detail](./SRS/SRS_ADMIN_GET_COMPANY_DETAIL.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-19 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng cập nhật trạng thái xác minh công ty quản trị | [SRS chức năng admin update company status](./SRS/SRS_ADMIN_UPDATE_COMPANY_STATUS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-19 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem danh sách việc làm quản trị | [SRS chức năng admin get jobs](./SRS/SRS_ADMIN_GET_JOBS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

| Ngày | Thành viên | Chức năng / công việc đã làm | Link SRS | Ảnh minh chứng |
| --- | --- | --- | --- | --- |
| 2026-04-20 | [Nhữ Trung Hải](https://github.com/nhutrunghai) | Chức năng xem chi tiết việc làm quản trị | [SRS chức năng admin get job detail](./SRS/SRS_ADMIN_GET_JOB_DETAIL.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-20 | [Phạm Nguyễn Hưng](https://github.com/Lib2357) | Chức năng cập nhật trạng thái kiểm duyệt việc làm quản trị | [SRS chức năng admin update job moderation status](./SRS/SRS_ADMIN_UPDATE_JOB_MODERATION_STATUS.MD) | Chưa có ảnh minh chứng trong `reports/assets` |
| 2026-04-20 | [Nguyễn Trọng An](https://github.com/An030905) | Chức năng xem thông tin và đăng xuất quản trị viên | [SRS chức năng admin me](./SRS/SRS_ADMIN_ME.MD), [SRS chức năng admin logout](./SRS/SRS_ADMIN_LOGOUT.MD) | Chưa có ảnh minh chứng trong `reports/assets` |

## 📄 Báo cáo tiến độ

- [Báo cáo ngày 03/04/2026](./reports/REPORT_20260403.md)
- [Báo cáo ngày 08/04/2026](./reports/REPORT_20260408.md)
- [Báo cáo ngày 23/04/2026](./reports/REPORT_20260423.md)
- [Bao cao dong bo source va bo sung SRS ngay 23/04/2026](./reports/REPORT_20260423_SYNC.md)

## 📚 Bổ sung SRS đợt đồng bộ source 23/04/2026

| Nhóm bổ sung | Tài liệu SRS mới |
| --- | --- |
| Xác thực / hồ sơ bổ sung | [OAuth Google](./SRS/SRS_OAUTH_GOOGLE_LOGIN.MD), [Cập nhật avatar](./SRS/SRS_UPDATE_USER_AVATAR.MD), [Danh sách job đã ứng tuyển](./SRS/SRS_GET_MY_APPLIED_JOBS.MD) |
| Thông báo người dùng | [Danh sách thông báo](./SRS/SRS_GET_NOTIFICATIONS.MD), [Số chưa đọc](./SRS/SRS_GET_UNREAD_NOTIFICATION_COUNT.MD), [Đánh dấu một thông báo đã đọc](./SRS/SRS_MARK_NOTIFICATION_READ.MD), [Đánh dấu tất cả đã đọc](./SRS/SRS_MARK_ALL_NOTIFICATIONS_READ.MD) |
| Promotion cho nhà tuyển dụng | [Danh sách gói promotion](./SRS/SRS_GET_COMPANY_PROMOTION_PLANS.MD), [Danh sách promotion](./SRS/SRS_GET_COMPANY_JOB_PROMOTIONS.MD), [Chi tiết promotion](./SRS/SRS_GET_COMPANY_JOB_PROMOTION_DETAIL.MD), [Hủy promotion](./SRS/SRS_CANCEL_COMPANY_JOB_PROMOTION.MD), [Mua promotion](./SRS/SRS_PURCHASE_COMPANY_JOB_PROMOTION.MD) |
| Wallet top-up nâng cao | [Tạo lệnh nạp ví](./SRS/SRS_CREATE_WALLET_TOPUP_ORDER.MD), [Chi tiết lệnh nạp ví](./SRS/SRS_GET_WALLET_TOPUP_ORDER_DETAIL.MD) |
| Admin user / company mở rộng | [Ví người dùng](./SRS/SRS_ADMIN_GET_USER_WALLET.MD), [Top-up orders người dùng](./SRS/SRS_ADMIN_GET_USER_TOPUP_ORDERS.MD), [Jobs của công ty](./SRS/SRS_ADMIN_GET_COMPANY_JOBS.MD), [Applications của công ty](./SRS/SRS_ADMIN_GET_COMPANY_APPLICATIONS.MD) |
| Admin job promotions | [Danh sách](./SRS/SRS_ADMIN_GET_JOB_PROMOTIONS.MD), [Tạo mới](./SRS/SRS_ADMIN_CREATE_JOB_PROMOTION.MD), [Sắp xếp lại](./SRS/SRS_ADMIN_REORDER_JOB_PROMOTIONS.MD), [Chi tiết](./SRS/SRS_ADMIN_GET_JOB_PROMOTION_DETAIL.MD), [Cập nhật](./SRS/SRS_ADMIN_UPDATE_JOB_PROMOTION.MD), [Xóa](./SRS/SRS_ADMIN_DELETE_JOB_PROMOTION.MD) |
| Admin vận hành hệ thống | [Audit logs](./SRS/SRS_ADMIN_GET_AUDIT_LOGS.MD), [SePay config](./SRS/SRS_ADMIN_GET_SEPAY_CONFIG.MD), [Cập nhật SePay](./SRS/SRS_ADMIN_UPDATE_SEPAY_CONFIG.MD), [Rotate SePay secrets](./SRS/SRS_ADMIN_ROTATE_SEPAY_SECRETS.MD), [Test SePay](./SRS/SRS_ADMIN_TEST_SEPAY_CONNECTION.MD), [SePay diagnostics](./SRS/SRS_ADMIN_GET_SEPAY_DIAGNOSTICS.MD) |
| Admin AI / tài chính | [RAG chat config](./SRS/SRS_ADMIN_GET_RAG_CHAT_CONFIG.MD), [Cập nhật RAG chat](./SRS/SRS_ADMIN_UPDATE_RAG_CHAT_CONFIG.MD), [Rotate RAG secrets](./SRS/SRS_ADMIN_ROTATE_RAG_CHAT_SECRETS.MD), [RAG chat health](./SRS/SRS_ADMIN_GET_RAG_CHAT_HEALTH.MD), [Lịch sử giao dịch ví](./SRS/SRS_ADMIN_GET_WALLET_TRANSACTIONS.MD), [Điều chỉnh ví](./SRS/SRS_ADMIN_ADJUST_WALLET_TRANSACTION.MD) |

## 🚀 Công nghệ sử dụng

| Thành phần | Công nghệ |
| --- | --- |
| Runtime Backend | Node.js 20 |
| Ngôn ngữ Backend | TypeScript |
| Backend Framework | Express 5 |
| Frontend | React 19 + Vite |
| Embedding Service | Python + FastAPI + Uvicorn |
| Database | MongoDB |
| Cache | Redis |
| Search và Analytics | Elasticsearch, Kibana |
| Xác thực và bảo mật | JWT, bcryptjs, Google OAuth2, admin session |
| Validation | Zod |
| Upload | UploadThing |
| Email Service | Resend Email API |
| AI / LLM | Hugging Face Inference API, Gemini, OpenAI (tuỳ cấu hình) |
| DevOps | Docker, Docker Compose |
| Testing | Jest |
| Code Quality | ESLint, Prettier |
| API Documentation | Swagger / OpenAPI |

## 🎨 Figma

- Chưa tìm thấy link Figma trong repo hiện tại.

## ⚙️ Cài đặt dự án

### 1. Yêu cầu môi trường

- Node.js `20+`
- Python `3.10+`
- MongoDB đang chạy ở máy local hoặc máy chủ riêng
- Redis
- Elasticsearch và Kibana

### 2. Clone source code

```bash
git clone https://github.com/nhutrunghai/baocao_web.git
cd baocao_web
```

### 3. Cấu hình backend

Tạo file môi trường cho backend:

```bash
cd backend
copy .env.example .env
```

Sau đó chỉnh các giá trị quan trọng trong `.env`:

- `DB_URL`
- `SECRET_ACCESS_TOKEN`
- `SECRET_REFRESH_TOKEN`
- `RESEND_API_KEY`
- `UPLOADTHING_TOKEN`
- `ELASTICSEARCH_URL`
- `EMBEDDING_API_URL`
- `OPENAI_API_KEY` hoặc `GEMINI_API_KEY`

Lưu ý:

- Nếu chạy frontend bằng Vite mặc định, nên cập nhật:
  - `ALLOWED_ORIGINS=http://localhost:5173`
  - `FRONTEND_URL=http://localhost:5173`

Cài package và chạy backend:

```bash
npm install
npm run dev
```

Backend mặc định chạy ở:

```text
http://localhost:4000
```

### 4. Cài đặt frontend

```bash
cd frontend
npm install
copy .env.example .env.local
npm run dev
```

Frontend sử dụng:

```env
VITE_API_ORIGIN=http://localhost:4000
VITE_API_VERSION=v1
```

Frontend mặc định chạy ở:

```text
http://localhost:5173
```

Frontend local hien da co cau hinh proxy `/api` sang `http://localhost:4000` trong `vite.config.js`, nen khi chay dev co the dung cung origin de tranh loi CORS / `Failed to fetch`.

### 5. Cài đặt embedding API

```bash
cd embedding-api
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Embedding service mặc định chạy ở:

```text
http://localhost:8000
```

### 6. Chạy Redis, Elasticsearch, Kibana bằng Docker Compose

Từ thư mục gốc dự án:

```bash
docker compose up -d redis elasticsearch kibana
```

Các cổng mặc định:

- Redis: `6379`
- Elasticsearch: `9200`
- Kibana: `5601`

### 7. Thứ tự khởi động khuyến nghị

1. MongoDB
2. Redis
3. Elasticsearch
4. Kibana
5. Embedding API
6. Backend
7. Frontend

### 8. Kiểm tra nhanh sau khi cài đặt

- Backend API: `http://localhost:4000`
- Frontend: `http://localhost:5173`
- Embedding API: `http://localhost:8000`
- Elasticsearch: `http://localhost:9200`
- Kibana: `http://localhost:5601`

