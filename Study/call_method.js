/* Define: là phương thức trong prototype của Function constructor, phương thức này 
    được dùng để gọi hàm và cũng có thể bind this cho hàm
*/
// 1. Gọi hàm với call method
// 2. Gọi hàm và bind this, lưu ý trong strict mode vẫn có this nếu được bind
    const teacher = {
        firstName: "Minh",
        lastName: "Thu",
    }
    const me = {
        firstName: "Tú",
        lastName: "Duẫn",
        showFullName() {
            console.log(`${this.firstName} ${this.lastName}`)
        }
    }
    me.showFullName.call(teacher)  // Minh Thu, mượn hàm showFullName từ me

// 3. Thể hiện tính kế thừa(extends) trong OOP
    function Animal (name, weight) {
        this.name = name
        this.weight = weight
    }
    function Chicken(name, weight, legs) {
        Animal.call(this, name, weight)
        this.legs =  legs
    } 
    const tuduan = new Chicken('Tú Duẫn', 53, 2)
    console.log(tuduan)

// 4. Mượn hàm(function borrowing), thêm ví dụ với arguments
