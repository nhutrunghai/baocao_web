# Software Requirement Specification (SRS)
## Chuc nang: Quan tri xem cau hinh RAG chat

### Mermaid Sequence Diagram
```mermaid
sequenceDiagram
    actor User as Quan tri vien
    participant FE as Admin Frontend
    participant BE as Backend API
    participant DB as Database / Service

    User->>FE: Khoi tao thao tac
    FE->>BE: GET /admin/rag-chat/config
    BE->>BE: Validate request va kiem tra quyen
    BE->>DB: Doc / ghi du lieu lien quan
    DB-->>BE: Ket qua xu ly
    BE-->>FE: Response chuan hoa
    FE-->>User: Hien thi ket qua
```

**Ma chuc nang:** ADMIN-RAG-CHAT-CONFIG-GET-01  
**Trang thai:** Draft / Review  
**Nguoi soan thao:** Nhu Trung Hai  
**Vai tro:** Technical Writer / Developer

---

### 1. Mo ta tong quan (Description)
Chuc nang cho phep admin xem cac tham so cau hinh cho he thong RAG chat va embedding. API hien tai duoc trien khai tai `GET /admin/rag-chat/config`.

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
* Cau hinh RAG chat hien hanh o dang an toan.

#### 3.3. Du lieu luu tru / truy xuat
* System settings cho RAG chat / LLM / embedding.

### 4. Rang buoc ky thuat & bao mat (Technical Constraints)
* Chi admin moi xem duoc.
* Cac khoa nhay cam phai duoc an bot.

### 5. Truong hop ngoai le & xu ly loi (Edge Cases)
* **Truong hop:** Chua co cau hinh.  
  * **Xu ly:** Tra du lieu mac dinh.
* **Truong hop:** Loi doc system settings.  
  * **Xu ly:** Tra `500`.

### 6. Giao dien (UI/UX)
* Trang admin cau hinh AI can hien thi ro provider, model, timeout, health status.

---
