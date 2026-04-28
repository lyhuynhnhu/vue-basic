### Props

dữ liệu truyển từ cha sang con (1 chiều)

### Emits

để component con giao tiếp ngược lên vs cha

### Slots

giúp tạo ra các component có thể tái sử dụng bằng cách cho phép "truyền" nội dung (HTML, components khác) từ component cha vào bên trong component con

| Loại Slot | Đặc điểm                    | Trhợp dùng                                                                           |
| --------- | --------------------------- | ------------------------------------------------------------------------------------ |
| Default   | ko tên                      | khi chỉ cần truyền 1 nội dung duy nhất vào vị trí cố định của component con          |
| Named     | có name                     | khi component con có nhiều vị trí cần chèn nội dung khác nhau                        |
| Scoped    | truyền data từ con sang cha | Component con có thể truyền dữ liệu ngược lại cho cha, thằng cha dùng nó để hiển thị |

### Provide và Inject

là cơ chế của Vue.js để giải quyết vấn đề "Prop Drilling" (truyền dữ liệu qua nhiều tầng component trung gian ko cần thiết)

### Async Component

- là kỹ thuật cho phép trì hoãn việc tải (load) các component cho đến khi chúng thực sự cần thiết.

- để tối ưu hiệu suất ứng dụng bằng cách chia nhỏ file JavaScript (code splitting), giúp trang web tải lần đầu nhanh hơn vì trình duyệt ko phải tải toàn bộ code cùng lúc

- dùng nó khi import các component con nặng (ví dụ: biểu đồ, bản đồ, hoặc modal chỉ hiện khi bấm nút,...)
