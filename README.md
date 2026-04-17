`v-model`: 1 directive trong Vue.js giúp tạo ra liên kết dữ liệu hai chiều (two-way data binding).

- Hiểu đơn giản là: khi dữ liệu trong code thay đổi thì giao diện cập nhật, và ngược lại khi người dùng nhập liệu trên giao diện thì dữ liệu trong code cũng tự động thay đổi theo.

\*\* Modifiers:

- `.lazy`
  - Cơ chế: Thay vì cập nhật dữ liệu ngay lập tức sau mỗi phím bấm (sự kiện input), nó chỉ cập nhật sau khi người dùng rời khỏi ô nhập hoặc nhấn Enter (sự kiện change).

  - Dùng khi: ko muốn ứng dụng xử lý dữ liệu liên tục (như khi thực hiện tìm kiếm API nặng) mà chỉ muốn xử lý khi người dùng đã nhập xong.

- `.number`
  - Cơ chế: Tự động chuyển đổi giá trị nhập vào thành kiểu dữ liệu số (number). Nếu giá trị ko thể chuyển đổi (ví dụ: nhập chữ), nó sẽ giữ nguyên kiểu chuỗi.

  - Dùng khi: với các ô nhập tuổi, giá cả, số lượng mà ko muốn phải dùng parseInt() hay parseFloat() thủ công trong code.

- `.trim`
  - Cơ chế: Tự động loại bỏ các khoảng trắng thừa ở đầu và cuối chuỗi dữ liệu mà người dùng nhập vào.
