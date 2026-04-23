# Software Requirement Specification (SRS)
## Chuc nang: Quan tri xem danh sach ho so ung tuyen cua cong ty

### Mermaid Sequence Diagram
```mermaid
sequenceDiagram
    actor User as Quan tri vien
    participant FE as Admin Frontend
    participant BE as Backend API
    participant DB as Database / Service

    User->>FE: Khoi tao thao tac
    FE->>BE: GET /admin/companies/:companyId/applications
    BE->>BE: Validate request va kiem tra quyen
    BE->>DB: Doc / ghi du lieu lien quan
    DB-->>BE: Ket qua xu ly
    BE-->>FE: Response chuan hoa
    FE-->>User: Hien thi ket qua
```

**Ma chuc nang:** ADMIN-COMPANY-APPLICATIONS-01  
**Trang thai:** Draft / Review  
**Nguoi soan thao:** Nhu Trung Hai  
**Vai tro:** Technical Writer / Developer

---

### 1. Mo ta tong quan (Description)
Chuc nang cho phep admin xem ho so ung tuyen phat sinh trong pham vi mot cong ty. API hien tai duoc trien khai tai `GET /admin/companies/:companyId/applications`.

### 2. Luong nghiep vu (User Workflow)
| Buoc | Hanh dong nguoi dung | Phan hoi he thong |
| :--- | :--- | :--- |
| 1 | Nguoi dung / quan tri vien mo chuc nang tuong ung | Frontend chuan bi du lieu va goi API. |
| 2 | Frontend gui request den backend | Backend kiem tra du lieu dau vao, token, quyen va ngu canh nghiep vu. |
| 3 | Backend xu ly nghiep vu | He thong doc / ghi du lieu tai MongoDB hoac dich vu phu tro. |
| 4 | Hoan tat | Backend tra response dang `status`, `message`, `data` de frontend cap nhat giao dien. |

### 3. Yeu cau du lieu (Data Requirements)
#### 3.1. Du lieu dau vao (Input Fields)
* Admin session hop le.
* Path param `companyId` hop le.
* Query loc / phan trang theo validator `getAdminCompanyApplicationsValidator`.

#### 3.2. Du lieu dau ra (Response Data)
* Danh sach job application cua cong ty va metadata phan trang.

#### 3.3. Du lieu luu tru / truy xuat
* Collection `job_applications`, `jobs`, `companies`, `users`.

### 4. Rang buoc ky thuat & bao mat (Technical Constraints)
* Chi admin moi xem duoc.
* Du lieu phai gioi han theo companyId duoc yeu cau.

### 5. Truong hop ngoai le & xu ly loi (Edge Cases)
* **Truong hop:** Company khong ton tai.  
  * **Xu ly:** Tra `404`.
* **Truong hop:** Khong co ho so ung tuyen.  
  * **Xu ly:** Tra danh sach rong.

### 6. Giao dien (UI/UX)
* Admin can bo loc theo trang thai ho so va job.
* Danh sach nen co link mo nhanh sang user va job lien quan.

---
