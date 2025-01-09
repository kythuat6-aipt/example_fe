# CẤU TRÚC THƯ MỤC NÂNG CAO CHO REACTJS 📂

## /src
Thư mục gốc, nơi chứa toàn bộ mã nguồn của ứng dụng. Đây là trái tim của dự án ReactJS, nơi mọi logic và giao diện được xây dựng.

### /assets
- **images**:
- **svg**:
- **css**: trong css thì sẽ tách ra nhiều file và import vào 1 file `index.scss`
- **pdf**:
- **fonts**:

Đây là nơi bạn đặt các tệp không thay đổi trong suốt quá trình chạy ứng dụng.

### /components
Đặt tên thư mục đúng chức năng và viết hoa chữ đầu của từng từ ví dụ `LanguageSwitcher`.

### /layouts
Gồm các thành phần định hình cấu trúc ứng dụng, như header, footer, hoặc các trình bao (layout wrapper). Đây là nơi bạn quản lý giao diện chung cho toàn bộ ứng dụng.

### /utils
- **constants**: thư mục chứa các hằng số dùng chung cho toàn bộ project
  - `enum.js`: hàng số object
  - `config.js`: biến hằng số
- **helps**: thư mục chứa các file code hàm dùng chung
- **services**
  - **api**: 
    - `index.js`: cấu hình axios
    - `endpoint.js`: lưu các đường dẫn API
  - **socket**:
    - `index.js`: cấu hình socket io

### /pages
Đặt tên thư mục đúng chức năng và viết hoa chữ đầu của từng từ ví dụ `ManageUser`.
- **/desktop**: phải có `Desktop`
- **/mobile**: phải có đuôi `Mobile`
- `index.js`: import các page trong desktop và mobile

### /app-redux
- `store.js`: viết cấu hình store
- **/reducers**: viết các cấu hình reducers

### /context
Đây là nơi quản lý trạng thái toàn cục (global state) bằng Context API hoặc logic liên quan đến Redux. Thư mục này đặc biệt hữu ích khi cần chia sẻ trạng thái giữa nhiều thành phần trong ứng dụng.

### /locales
### /data
### /features
### /hooks
### /lib

## CÁC ĐẶT TÊN FILE, BIẾN, HÀM

### FILE js:
- File đầu tiên trong thư mục sẽ là file `index`, tên file viết thường chữ đầy và viết hoa các chữ sau.
- Các components trong page có cùng quy tắc như components chung của dự án.

### FILE scss:
- Các file ccs chung sẽ chia thanh nhiều file và import và 1 file index.scss
- Đặt tên file css trong components và pages: <tên filder>.module.scss

### CÁC SẮP BIẾN, HÀM, useEffect
- Thứ tự sắp xếp: **biến -> hàm -> useEffect**
- Cách đặt tên hàm: `handle` + tên chức năng, ví dụ `handleGetDepartments`
- Lưu ý không viết code xử lý trong `useEffect` mà phải viết thành hàm và gọi trong `useEffect`.

# Chạy và build
### `npm start`
### `npm run build`

## Available Scripts
`npm install`
`npm i @eslint/js eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`
`In the project directory, you can run: http://localhost:3000`