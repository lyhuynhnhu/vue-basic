### Composables

- là 1 mô hình thiết kế (design pattern) trong Vue 3, sử dụng Composition API để tách biệt và tái sử dụng các đoạn logic giữa các component khác nhau

- Một Composable đơn giản chỉ là 1 hàm JavaScript thông thường bắt đầu bằng từ khóa use..., trong đó sử dụng các hàm của Vue như ref, reactive, computed, watch, hoặc các lifecycle hooks

- giống với custom hooks trong reactjs

#### _Tại sao nên dùng:_

- Tái sử dụng logic: Viết logic 1 lần, dùng ở nhiều component

- Dễ bảo trì: Mỗi file Composable chỉ tập trung vào một chức năng duy nhất (Single Responsibility)

- Tránh xung đột: ko lo lắng về việc trùng tên biến/hàm như khi dùng mixins vì mọi thứ đều nằm trong phạm vi (scope) của hàm

- Dễ debug

#### _Quy tắc khi viết Composable:_

1. Đặt tên: Luôn bắt đầu bằng tiền tố use (ví dụ: useUser, useAuth, useWindowResize)

2. Input/Output: Composable nên nhận vào các ref hoặc giá trị đơn giản và trả về 1 object chứa các biến ref hoặc hàm xử lý

3. Phạm vi sử dụng: Chỉ gọi Composable trong hàm setup() hoặc `<script setup>`, ko nên gọi trong các hàm xử lý sự kiện (event handler) hoặc các callback bất đồng bộ bên trong

4. Tính độc lập: Mỗi Composable nên độc lập với các component. Nếu nó cần giao tiếp, hãy dùng provide/inject hoặc truyền tham số
