# Software Requirement Specification (SRS)
## Chức năng: Xem danh sách người dùng quản trị (Admin Get Users)

### Mermaid Sequence Diagram
```mermaid
sequenceDiagram
    actor Admin as Quản trị viên
    participant FE as Admin Frontend
    participant BE as Backend API
    participant DB as MongoDB

    Admin->>FE: Mở danh sách người dùng
    FE->>BE: GET /admin/users?page=&limit=&keyword=
    BE->>BE: Kiểm tra quyền admin
    BE->>BE: Validate query
    BE->>DB: Truy vấn danh sách users
    DB-->>BE: Users + pagination
    BE-->>FE: 200 OK + users
    FE-->>Admin: Hiển thị danh sách người dùng
```

**Mã chức năng:** ADMIN-USERS-LIST-01  
**Trạng thái:** Draft / Review  
**Người soạn thảo:** Phạm Nguyễn Hưng  
**Vai trò:** Technical Writer / Developer

---

### 1. Mô tả tổng quan (Description)
Chức năng xem danh sách người dùng cho phép admin theo dõi tài khoản ứng viên trong hệ thống. API được triển khai tại `GET /admin/users`.

### 2. Luồng nghiệp vụ (User Workflow)
| Bước | Hành động người dùng | Phản hồi hệ thống |
| :--- | :--- | :--- |
| 1 | Admin mở trang users | Frontend gọi API danh sách. |
| 2 | Backend kiểm tra quyền | Xác minh admin session. |
| 3 | Backend validate query | Kiểm tra filter và phân trang. |
| 4 | Backend truy vấn dữ liệu | Trả danh sách users. |
| 5 | Hoàn tất | Frontend render bảng dữ liệu. |

### 3. Yêu cầu dữ liệu (Data Requirements)
#### 3.1. Dữ liệu đầu vào (Input Fields)
* Query theo `getAdminUsersValidator`.

#### 3.2. Dữ liệu đầu ra (Response Data)
* `status`
* `data.users`
* `data.pagination`

#### 3.3. Dữ liệu lưu trữ / truy xuất
* Collection `users`

### 4. Ràng buộc kỹ thuật & bảo mật (Technical Constraints)
* Chỉ admin được truy cập.

### 5. Trường hợp ngoại lệ & xử lý lỗi (Edge Cases)
* **Trường hợp:** Query không hợp lệ.  
  * **Xử lý:** Trả `422 Unprocessable Entity`.

### 6. Giao diện (UI/UX)
* Nên có tìm kiếm nhanh theo tên, email hoặc username.

---
