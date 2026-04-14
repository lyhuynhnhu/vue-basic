## List rendering

\*\* `v-for` trong Vue

- Lặp qua mảng
- Lặp qua đối tượng

Tại sao phải sử dụng `key` trong `v-for`?

- Nhận diện duy nhất (identity):
  - key giúp Vue xác định chính xác mỗi phần tử trong danh sách là duy nhất.
  - Nếu ko có key, Vue sẽ sd thuật toán "vị trí" (in-place patch), sẽ gây nhầm lẫn giữa các phần tử có nội dung giống nhau.

- Tối ưu hiệu suất:
  - Khi danh sách thay đổi (thêm, xóa, hoặc sắp xếp lại), Vue sẽ dựa vào key để biết phần tử nào cần di chuyển thay vì phải tạo mới hoặc xóa đi toàn bộ DOM.
  - -> giúp giảm thiểu các thao tác xử lý DOM tốn kém, giúp ứng dụng chạy mượt mà hơn.

- Nên dùng: các giá trị duy nhất và cố định như id

- Ko dùng: index (chỉ số mảng) của vòng lặp, vì nếu danh sách bị đảo ngược hoặc chèn thêm vào giữa, index sẽ thay đổi và làm mất tác dụng của key

- Không bao giờ dùng: các giá trị có thể thay đổi hoặc giá trị ngẫu nhiên như Math.random() vì mỗi lần render nó sẽ tạo ra key mới, khiến Vue phải render lại toàn bộ danh sách
