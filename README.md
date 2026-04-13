## Tại sao cần sử dụng ref trong Vue?

- Khi sd 1 ref trong 1 template, và sau đó thay đổi giá trị của ref, Vue tự động phát hiệ sự thay đổi và update DOM tương ứng

- Trong Javasscript thuần, không có cách nào để phát hiện truy cập hoặc biến đổi các biến đơn

- Khi 1 component được hiển thị lần đầu tiên, Vue sẽ theo dõi mỗi ref đac được sd trong quá trình hiển thị.
  Sau đó khi ref bị biến đổi, nó sẽ kích hoạt để hiển thị lại các component đang theo dõi nó.
