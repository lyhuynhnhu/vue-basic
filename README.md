\*\* Event modifiers:

- .stop: ngăn chặn event lan truyền lên các phần tử cha
  - khi click vào con, chỉ hàm của con chạy, cha không bị ảnh hưởng
  - bản chất nó là: `event.stopPropagation()`

- .prevent: ngăn chặn hành vi mặc định của trình duyệt
  - vd: ko cho thẻ `<a>` chuyển trang hoặc `<form>` tự động tải lại trang khi submit
  - bản chất nó là: `event.preventDefault()`

- .self: chỉ kích hoạt hàm xử lý nếu event xảy ra trực tiếp trên chính phần tử đó, chứ ko phải từ một phần tử con bên trong

- .once: event chỉ chạy 1 lần duy nhất

- .capture: thay đổi thứ tự xử lý event, chạy tù ngoài vào trong

\*\* Key Aliases​:

- .enter
- .tab
- .delete (captures both "Delete" and "Backspace" keys)
- .esc
- .space
- .up
- .down
- .left
- .right

\*\* System Modifier Keys​:

- .ctrl
- .alt
- .shift
- .meta

\*\* Mouse button modifiers:

- .left
- .right
- .middle
