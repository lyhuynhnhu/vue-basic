## computed trong Vue

- Tính hiệu quả:
  - Vue sẽ theo dõi các state phụ thuộc có trong computed để tính toán và chỉ cập nhật các dependency đó thay đổi
    -> giảm thiểu các lần tính toán không cần thiết
  - computed return về 1 computed ref, Vue sẽ ghi nhớ giá trị đó qua các lần render mà ko cần tính toán lại khi các state trong nó không change
  - giống với mục đích của `useMemo` trong React Hook

- Tính phản ứng (reactivity):
  Các thuộc tính tính toán nó phản ứng với sự thay đổi của các state để tính toán lại
  -> giúp cập nhật kịp thời & mượt mà

- Có khả năng tái sử dụng code
