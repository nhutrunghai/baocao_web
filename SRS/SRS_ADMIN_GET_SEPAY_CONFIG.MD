# Software Requirement Specification (SRS)
## Chuc nang: Quan tri xem cau hinh SePay

### Mermaid Sequence Diagram
```mermaid
sequenceDiagram
    actor User as Quan tri vien
    participant FE as Admin Frontend
    participant BE as Backend API
    participant DB as Database / Service

    User->>FE: Khoi tao thao tac
    FE->>BE: GET /admin/sepay/config
    BE->>BE: Validate request va kiem tra quyen
    BE->>DB: Doc / ghi du lieu lien quan
    DB-->>BE: Ket qua xu ly
    BE-->>FE: Response chuan hoa
    FE-->>User: Hien thi ket qua
```

**Ma chuc nang:** ADMIN-SEPAY-CONFIG-GET-01  
**Trang thai:** Draft / Review  
**Nguoi soan thao:** Nhu Trung Hai  
**Vai tro:** Technical Writer / Developer

---

### 1. Mo ta tong quan (Description)
Chuc nang cho phep admin xem cau hinh van hanh SePay hien tai o dang an toan. API hien tai duoc trien khai tai `GET /admin/sepay/config`.

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

#### 3.2. Du lieu dau ra (Response Data)
* Thong tin cau hinh SePay da duoc mask nhung truong nhay cam.

#### 3.3. Du lieu luu tru / truy xuat
* System settings / cau hinh ma hoa cua SePay trong DB hoac env.

### 4. Rang buoc ky thuat & bao mat (Technical Constraints)
* Chi admin moi xem duoc.
* Khong duoc lo gia tri secret day du ra giao dien.

### 5. Truong hop ngoai le & xu ly loi (Edge Cases)
* **Truong hop:** Chua co cau hinh SePay.  
  * **Xu ly:** Tra du lieu mac dinh hoac rong.
* **Truong hop:** Loi giai ma system setting.  
  * **Xu ly:** Tra `500`.

### 6. Giao dien (UI/UX)
* Trang cau hinh can hien thi trang thai cau hinh hien tai.
* Cac secret nen duoc mask theo chuan bao mat.

---
