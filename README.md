### Completion Time: 1 hour and 30 minutes

**In order to run this code on your PC, do the following:**

1. Run:

		npm install
	
		npm start
	
2. In your browser of choice, open
	
	https://localhost:3000

### CODING CHALLENGE INSTRUCTIONS:

                  **VIETNAMESE**

**Hãy làm hết các nhiệm vụ sau:**

1. Sử dụng React Apis (và hooks nếu được) để kết nối Todo form và Todo List. Người dùng phải có khả năng sử dụng được:

   1. Thêm được một dòng/việc mới vào danh sách Todo List bằng khung Add Todo và nhấn submit

   2. Xóa một dòng/việc bất kì bằng cách click vào nút X

2. Bạn hãy nhìn vào file image.png và chỉnh css hoặc styling để cho form Todo bên cạnh nhìn giống image.css

   **Notes:**

   - Bạn phải sử dụng Tailwindcss. Tài liệu chính thức của library https://tailwindcss.com/
   - Chú ý vào phần chuyển động khi bạn mở trang web ra (https://tailwindcss.com)
   - Thanh công cụ tìm kiếm của trang web khá là hữu ích. CỐ gắng dùng nó với những từ khóa như là flex, padding, ...

3. Nếu bạn tới được đây thì cơ bản là chúng ta đã có một chương trình hoạt độngng tốt. Bây giờ là lúc chúng ta sẽ thêm một số tính năng cho chương trình. Chúng ta muồn người dùng có thể:

   1. Đánh dấu một dòng/việc là "Hoàn thành" (Completed) bằng cách click vào nút radio kế bên mỗi việc

   2. Đánh dấu một dòng/việc là "Chưa hoàn thành" (Active) bằng cách click vào nút radio kế bên những việc đã hoàn thành

      **Notes:**

      - "Todo 1" là ví dụ của một việc chưa hoàn thành
      - "Todo 2" là ví dụ của một việc đã hoàn thành

   3. Tiếp theo, chúng ta sẽ lọc Todo List dựa theo chế độ "Hoàn thành" (Completed) hoặc "Chưa hoàn thành" (Active)

      **Notes:**

      - Khi "All" được chọn thì cả "Todo 1" và "Todo 2" sẽ xuất hiện
      - Khi "Active" (Chưa hoàn thành) được chọn, chỉ "Todo 1" sẽ xuất hiện
      - Khi "Completed" (Hoàn thành) được chọn, chỉ "Todo 2" xuất hiện

### GỢI Ý:

- TextField component inherits all the apis of the native HTML5 <input> component

- Button & IconButton components inherit all the apis of the native HTML5 <button> component

- Further documentations for MaterialUI React components can be found here:

  - Button & IconButton: https://material-ui.com/components/buttons
  - Textfield: https://material-ui.com/api/text-field/#textfield-api

                  **ENGLISH**

**Please finish the following tasks:**

1. Use React Apis (preferably hooks) to connect the Todo Form with the Todo List. User must be able to:

   1. Add new Todo by filling in the Todo Form and hitting the Submit button

   2. Delete Todo by hitting the X icon

2. Take a look at Image.png, style the Todo Form and Todo List accordingly

   **Notes:**

   - You MUST use Tailwindcss. Documentations can be found here at https://tailwindcss.com/
   - Pay close attention to the introductory animation on that webpage (https://tailwindcss.com)
   - The "Search the docs" search bar on the page is very useful (try searching for keywords such as "padding", "flex", etc.)

3. Add more functionalities to the App. User must be able to:

   1. Toggle a Todo completed by hitting the empty radio button icon

   2. Toggle a Todo active by hitting the checked radio button icon

      **Notes:**

      - "Todo 1" represents an active todo
      - "Todo 2" represents a completed todo

   3. Filter the Todo List by "All", "Active", and "Completed" statuses

      **Notes:**

      - When "All" is selected, both "Todo 1" and "Todo 2" will shown
      - When "Active" is selected, only "Todo 1" will be shown
      - When "Completed" is selected, only "Todo 2" will be shown
      - Make sure to reflect the correct buttons' variations

### HINT CORNERS:

- TextField component inherits all the apis of the native HTML5 <input> component

- Button & IconButton components inherit all the apis of the native HTML5 <button> component

- Further documentations for MaterialUI React components can be found here:

  - Button & IconButton: https://material-ui.com/components/buttons
  - Textfield: https://material-ui.com/api/text-field/#textfield-api
