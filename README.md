## Lifecylce hooks

- onBeforeMount:
  - chạy ngay trước khi component được gắn vào DOM. Template đã được biên dịch nhưng chưa render ra màn hình

- onMounted:
  - chạy sau khi component đã được gắn vào DOM
  - thường để gọi API lấy dữ liệu ban đầu, thực hiện các thao tác vs DOM

- onBeforeUpdate:
  - chạy ngay trước khi DOM được render lại do dữ liệu bị thay đổi

- onUpdated:
  - chạy sau khi DOM đã được cập nhật xong
  - dùng khi cần truy cập DOM sau khi dữ liệu mới đã được áp dụng

- onBeforeUnmount:
  - chạy ngay trước khi component bị hủy
  - dùng để dọn dẹp các tài nguyên như bộ đếm (timers), sự kiện (event listeners) để tránh rò rỉ bộ nhớ

- onUnmounted:
  - chạy sau khi component đã bị hủy hoàn toàn

\*\*\* Noted:

- ko dùng onBeforeMount để gọi API quá nhiều: do giai đoạn này diễn ra rất nhanh trước khi render, nếu gọi API ở đây, nó có thể làm chậm quá trình hiển thị lần đầu
