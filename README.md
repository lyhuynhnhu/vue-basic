## Conditional rendering

- v-if
  - thêm hoặc xoá hẳn phần tử trong DOM
  - là điều kiện để render phần tử
  - có thể dùng cho `<template>`
  - hiệu suất render ban đầu nhanh hơn v-show (trhop condition là false -> nó ko cần làm gì cả)
  - hiệu suất khi chuyển chuyển đổi lại chậm hơn (vì phải xoá/tạo ptu)
  - dùng khi điều kiện hiển thị ít khi thay đổi trong suốt vòng đời của page

- v-show
  - ẩn hoặc hiển thị phần tử trên DOM
  - phẩn tử luôn tồn tại trong DOM
  - chỉ thay đổi thuộc tính CSS `display`
  - not support for `<template>`
  - hiệu suất render ban đầu sẽ chậm hơn v-if
  - hiệu suất khi chuyển đổi nhanh hơn nhiều (do chỉ bật tắt css)
  - dùng khi cần bật/tắt liên tục (ví dụ: menu dropdown, các tab, hoặc thanh tìm kiếm)
