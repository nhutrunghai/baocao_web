# DAILY REPORT - 23/04/2026 (SYNC SOURCE + BO SUNG SRS)
**Du an:** Xay dung website tim viec IT - JobGo  
**Nhom:** Nhu Trung Hai - Pham Nguyen Hung - Nguyen Trong An

---

## TONG HOP CONG VIEC
| Hang muc | Trang thai | Ghi chu |
| :--- | :--- | :--- |
| Dong bo `backend/src` tu `D:\ALL_DESPLOY` sang `D:\baocao_web` | ✅ Hoan thanh | Bao gom nhom route, controller, service, validator, provider va config moi nhat. |
| Dong bo `frontend/src` va `frontend/vite.config.js` | ✅ Hoan thanh | Bao gom ban va local dev dung Vite proxy de tranh loi `Failed to fetch` do CORS. |
| Bo sung SRS cho nhom chuc nang moi phia ung vien / nha tuyen dung | ✅ Hoan thanh | Them SRS cho OAuth Google, avatar, applied jobs, notifications, job promotions, top-up orders. |
| Bo sung SRS cho nhom chuc nang quan tri mo rong | ✅ Hoan thanh | Them SRS cho user wallet, company jobs/applications, audit logs, SePay, RAG chat, wallet transactions, job promotions. |
| Cap nhat README va lien ket bao cao tien do | ✅ Hoan thanh | README da co them section tong hop SRS dot dong bo va link bao cao moi. |

---

## DANH SACH SRS MOI BO SUNG
### 1. Nhom nguoi dung / nha tuyen dung
- [SRS OAuth Google](../SRS/SRS_OAUTH_GOOGLE_LOGIN.MD)
- [SRS cap nhat avatar](../SRS/SRS_UPDATE_USER_AVATAR.MD)
- [SRS danh sach job da ung tuyen](../SRS/SRS_GET_MY_APPLIED_JOBS.MD)
- [SRS danh sach thong bao](../SRS/SRS_GET_NOTIFICATIONS.MD)
- [SRS so thong bao chua doc](../SRS/SRS_GET_UNREAD_NOTIFICATION_COUNT.MD)
- [SRS danh dau mot thong bao da doc](../SRS/SRS_MARK_NOTIFICATION_READ.MD)
- [SRS danh dau tat ca thong bao da doc](../SRS/SRS_MARK_ALL_NOTIFICATIONS_READ.MD)
- [SRS goi promotion](../SRS/SRS_GET_COMPANY_PROMOTION_PLANS.MD)
- [SRS danh sach promotion cong ty](../SRS/SRS_GET_COMPANY_JOB_PROMOTIONS.MD)
- [SRS chi tiet promotion cong ty](../SRS/SRS_GET_COMPANY_JOB_PROMOTION_DETAIL.MD)
- [SRS huy promotion cong ty](../SRS/SRS_CANCEL_COMPANY_JOB_PROMOTION.MD)
- [SRS mua promotion cho job](../SRS/SRS_PURCHASE_COMPANY_JOB_PROMOTION.MD)
- [SRS tao lenh nap vi](../SRS/SRS_CREATE_WALLET_TOPUP_ORDER.MD)
- [SRS chi tiet lenh nap vi](../SRS/SRS_GET_WALLET_TOPUP_ORDER_DETAIL.MD)

### 2. Nhom quan tri mo rong
- [SRS admin xem vi nguoi dung](../SRS/SRS_ADMIN_GET_USER_WALLET.MD)
- [SRS admin xem top-up orders cua user](../SRS/SRS_ADMIN_GET_USER_TOPUP_ORDERS.MD)
- [SRS admin xem jobs cua cong ty](../SRS/SRS_ADMIN_GET_COMPANY_JOBS.MD)
- [SRS admin xem applications cua cong ty](../SRS/SRS_ADMIN_GET_COMPANY_APPLICATIONS.MD)
- [SRS admin danh sach job promotions](../SRS/SRS_ADMIN_GET_JOB_PROMOTIONS.MD)
- [SRS admin tao job promotion](../SRS/SRS_ADMIN_CREATE_JOB_PROMOTION.MD)
- [SRS admin reorder job promotions](../SRS/SRS_ADMIN_REORDER_JOB_PROMOTIONS.MD)
- [SRS admin chi tiet job promotion](../SRS/SRS_ADMIN_GET_JOB_PROMOTION_DETAIL.MD)
- [SRS admin cap nhat job promotion](../SRS/SRS_ADMIN_UPDATE_JOB_PROMOTION.MD)
- [SRS admin xoa job promotion](../SRS/SRS_ADMIN_DELETE_JOB_PROMOTION.MD)
- [SRS admin audit logs](../SRS/SRS_ADMIN_GET_AUDIT_LOGS.MD)
- [SRS admin xem cau hinh SePay](../SRS/SRS_ADMIN_GET_SEPAY_CONFIG.MD)
- [SRS admin cap nhat cau hinh SePay](../SRS/SRS_ADMIN_UPDATE_SEPAY_CONFIG.MD)
- [SRS admin rotate SePay secrets](../SRS/SRS_ADMIN_ROTATE_SEPAY_SECRETS.MD)
- [SRS admin test SePay connection](../SRS/SRS_ADMIN_TEST_SEPAY_CONNECTION.MD)
- [SRS admin SePay diagnostics](../SRS/SRS_ADMIN_GET_SEPAY_DIAGNOSTICS.MD)
- [SRS admin xem cau hinh RAG chat](../SRS/SRS_ADMIN_GET_RAG_CHAT_CONFIG.MD)
- [SRS admin cap nhat cau hinh RAG chat](../SRS/SRS_ADMIN_UPDATE_RAG_CHAT_CONFIG.MD)
- [SRS admin rotate RAG chat secrets](../SRS/SRS_ADMIN_ROTATE_RAG_CHAT_SECRETS.MD)
- [SRS admin health RAG chat](../SRS/SRS_ADMIN_GET_RAG_CHAT_HEALTH.MD)
- [SRS admin lich su giao dich vi](../SRS/SRS_ADMIN_GET_WALLET_TRANSACTIONS.MD)
- [SRS admin dieu chinh vi](../SRS/SRS_ADMIN_ADJUST_WALLET_TRANSACTION.MD)

---

## GHI CHU
- Sau dot dong bo nay, `D:\baocao_web` da gan khop voi bo source dang van hanh o `D:\ALL_DESPLOY`.
- Rieng phan frontend local dev da duoc keo theo ban va proxy `/api -> http://localhost:4000` trong `vite.config.js`.
- README chinh da duoc cap nhat de tham chieu toi cac SRS moi va bao cao nay.
