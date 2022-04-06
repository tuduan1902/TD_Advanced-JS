// Đưa phàn khai báo lên trên đầu
// Hoisting với "var", "function declaration"
    console.log(age) // undefined 
    console.log(ffullName) // ReferenceError: fullName is not defined
    var age = 16

    console.log(sum(6, 9)) // 15
    function sum(a,b) {
        return a + b
    }
    // Lưu ý: Phần khai báo được đưa lên, phần gán không được đưa lên
// Hoisting với "let", "const"
    {
        console.log(fullName) //ReferenceError: Cannot access 'fullName' before initialization
        let fullName = "Tu Duan"
    }
    // Lưu ý: Khai báo biến với "let", "const" khi được hoised không được tạo
    // giá trị và được đưa vào "Temporal Dead Zone"
