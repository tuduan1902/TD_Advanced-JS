/*
# Scope - Phạm vi 
- Các loại phạm vi:
    - Global - Toàn cục
    - Code block - Khối mã: let, const
        EX: {
                const age = 18
            }
            console.log(age) // không in ra vì age nằm trong khối mã
        // if else, for , while, .....
    - Local scope - Hàm: var, function
        EX: function logger() {
            var fullName = "Tu Duan"
        }
        logger()
        console.log(fullName) // không in ra được vì fullName thuộc phạm vi hàm
        
- Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo (khi gọi mới tạo ra 1 phạm vi)
- Các hàm có thể truy cập các biến được khai báo
trong phạm vi của nó và bên ngoài nó 
- Cách thức một biến được truy cập 
- Khi nào một biến bị xóa khỏi bộ nhớ ?
    - Biến toàn cục?
        khi kết thúc chương trình 
    - Biến trong code block & trong hàm?
    - Biến trong hàm được tham chiếu bởi 1 hàm?
        function couter() {
            let couter = 0
            function increase() {
                return ++couter
            }
            return increase
        }

# Tóm tắt
*/