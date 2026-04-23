# Software Requirement Specification (SRS)
## Chuc nang: Quan tri xem lich su giao dich vi toan he thong

### Mermaid Sequence Diagram
```mermaid
sequenceDiagram
    actor User as Quan tri vien
    participant FE as Admin Frontend
    participant BE as Backend API
    participant DB as Database / Service

    User->>FE: Khoi tao thao tac
    FE->>BE: GET /admin/wallet-transactions
    BE->>BE: Validate request va kiem tra quyen
    BE->>DB: Doc / ghi du lieu lien quan
    DB-->>BE: Ket qua xu ly
    BE-->>FE: Response chuan hoa
    FE-->>User: Hien thi ket qua
```

**Ma chuc nang:** ADMIN-WALLET-TRANSACTION-LIST-01  
**Trang thai:** Draft / Review  
**Nguoi soan thao:** Nhu Trung Hai  
**Vai tro:** Technical Writer / Developer

---

### 1. Mo ta tong quan (Description)
Chuc nang cho phep admin xem toan bo lich su giao dich vi cua he thong de doi soat va kiem tra bat thuong. API hien tai duoc trien khai tai `GET /admin/wallet-transactions`.

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
* Query loc / phan trang theo validator `getAdminWalletTransactionsValidator`.

#### 3.2. Du lieu dau ra (Response Data)
* Danh sach giao dich vi cung loai giao dich, so tien, user lien quan va thoi gian.

#### 3.3. Du lieu luu tru / truy xuat
* Collection `wallet_transactions`.
* Collection `users` / `wallets` de join thong tin hien thi.

### 4. Rang buoc ky thuat & bao mat (Technical Constraints)
* Chi admin moi xem duoc.
* Can ho tro loc theo loai giao dich, trang thai, khoang thoi gian.

### 5. Truong hop ngoai le & xu ly loi (Edge Cases)
* **Truong hop:** Khong co giao dich phu hop.  
  * **Xu ly:** Tra danh sach rong.
* **Truong hop:** Query khong hop le.  
  * **Xu ly:** Tra `422`.

### 6. Giao dien (UI/UX)
* Trang lich su giao dich admin nen co bang lon va bo loc nang cao.
* Nen cho phep xem chi tiet tung giao dich.

---
