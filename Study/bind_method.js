// Phương thức bind() sẽ trả về một hàm mới
// Có thể nhận các đối số như hàm ban đầu


this.firstName = "Minh"
this.lastName = "Thu"

const teacher = {
    firstName: "Minh",
    lastName: "Thảo",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
// Case 1:
console.log(teacher.getFullName()) //  "Minh Thảo" , TH này getFullName là method nên this trỏ về teacher

// Case 2:
const getTeacherName = teacher.getFullName
console.log(getTeacherName()) // "Minh Thu" , TH này gtTeacherName là function nên this trỏ về global

const getTeacherName1 = teacher.getFullName.bind(teacher)
console.log(getTeacherName1()) // "Minh Thảo" , teacher ràng buộc với từ khóa this trả ra nên khi call 
// getTeacherName1 thì this sẽ là teacher( đối số truyền vào bind() )