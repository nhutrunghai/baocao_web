# Software Requirement Specification (SRS)
## Chuc nang: Quan tri xoay vong secret SePay

### Mermaid Sequence Diagram
```mermaid
sequenceDiagram
    actor User as Quan tri vien
    participant FE as Admin Frontend
    participant BE as Backend API
    participant DB as Database / Service

    User->>FE: Khoi tao thao tac
    FE->>BE: PATCH /admin/sepay/secrets
    BE->>BE: Validate request va kiem tra quyen
    BE->>DB: Doc / ghi du lieu lien quan
    DB-->>BE: Ket qua xu ly
    BE-->>FE: Response chuan hoa
    FE-->>User: Hien thi ket qua
```

**Ma chuc nang:** ADMIN-SEPAY-SECRETS-ROTATE-01  
**Trang thai:** Draft / Review  
**Nguoi soan thao:** Nhu Trung Hai  
**Vai tro:** Technical Writer / Developer

---

### 1. Mo ta tong quan (Description)
Chuc nang cho phep admin doi moi cac secret SePay dinh ky de giam rui ro lo khoa. API hien tai duoc trien khai tai `PATCH /admin/sepay/secrets`.

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
* Body theo validator `rotateAdminSePaySecretsValidator`.

#### 3.2. Du lieu dau ra (Response Data)
* Thong bao rotate thanh cong.
* Thong tin cau hinh sau khi rotate o dang mask.

#### 3.3. Du lieu luu tru / truy xuat
* System settings / secret SePay.

### 4. Rang buoc ky thuat & bao mat (Technical Constraints)
* Thao tac nhay cam, chi admin moi duoc thuc hien.
* Can audit log lai hanh dong rotate secret.

### 5. Truong hop ngoai le & xu ly loi (Edge Cases)
* **Truong hop:** Thieu thong tin secret moi.  
  * **Xu ly:** Tra `422`.
* **Truong hop:** Rotate thanh cong nhung test ket noi that bai.  
  * **Xu ly:** Tra canh bao hoac loi nghiep vu.

### 6. Giao dien (UI/UX)
* Form rotate phai co xac nhan lan hai.
* Nen hien thi canh bao ve tac dong sau khi doi secret.

---
