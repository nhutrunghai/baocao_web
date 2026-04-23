# Software Requirement Specification (SRS)
## Chuc nang: Xem danh sach chien dich quang ba job cua cong ty

### Mermaid Sequence Diagram
```mermaid
sequenceDiagram
    actor User as Nha tuyen dung
    participant FE as Employer Frontend
    participant BE as Backend API
    participant DB as Database / Service

    User->>FE: Khoi tao thao tac
    FE->>BE: GET /company/job-promotions
    BE->>BE: Validate request va kiem tra quyen
    BE->>DB: Doc / ghi du lieu lien quan
    DB-->>BE: Ket qua xu ly
    BE-->>FE: Response chuan hoa
    FE-->>User: Hien thi ket qua
```

**Ma chuc nang:** COMPANY-JOB-PROMOTION-LIST-01  
**Trang thai:** Draft / Review  
**Nguoi soan thao:** Nhu Trung Hai  
**Vai tro:** Technical Writer / Developer

---

### 1. Mo ta tong quan (Description)
Chuc nang cho phep cong ty xem cac promotion da mua hoac dang chay cho cac job cua minh. API hien tai duoc trien khai tai `GET /company/job-promotions`.

### 2. Luong nghiep vu (User Workflow)
| Buoc | Hanh dong nguoi dung | Phan hoi he thong |
| :--- | :--- | :--- |
| 1 | Nguoi dung / quan tri vien mo chuc nang tuong ung | Frontend chuan bi du lieu va goi API. |
| 2 | Frontend gui request den backend | Backend kiem tra du lieu dau vao, token, quyen va ngu canh nghiep vu. |
| 3 | Backend xu ly nghiep vu | He thong doc / ghi du lieu tai MongoDB hoac dich vu phu tro. |
| 4 | Hoan tat | Backend tra response dang `status`, `message`, `data` de frontend cap nhat giao dien. |

### 3. Yeu cau du lieu (Data Requirements)
#### 3.1. Du lieu dau vao (Input Fields)
* Cong ty da dang nhap va xac minh.
* Query loc / phan trang theo validator `getCompanyJobPromotionsValidator`.

#### 3.2. Du lieu dau ra (Response Data)
* Danh sach promotion cua cong ty cung trang thai, thoi gian hieu luc va job lien quan.

#### 3.3. Du lieu luu tru / truy xuat
* Collection `job_promotions` de truy van cac chien dich quang ba.

### 4. Rang buoc ky thuat & bao mat (Technical Constraints)
* Chi hien thi promotion thuoc cong ty hien tai.
* Can ho tro phan trang khi du lieu lon.

### 5. Truong hop ngoai le & xu ly loi (Edge Cases)
* **Truong hop:** Chua co promotion nao.  
  * **Xu ly:** Tra danh sach rong.
* **Truong hop:** Query khong hop le.  
  * **Xu ly:** Tra `422`.

### 6. Giao dien (UI/UX)
* Dashboard tuyen dung nen co bang lich su promotion.
* Trang thai active / expired / cancelled can phan biet ro.

---
