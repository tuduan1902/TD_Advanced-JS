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
// // Case 1:
// console.log(teacher.getFullName()) //  "Minh Thảo" , TH này getFullName là method nên this trỏ về teacher

// // Case 2:
const getTeacherName = teacher.getFullName
console.log(getTeacherName()) // "Minh Thu" , TH này gtTeacherName là function nên this trỏ về global

const getTeacherName1 = teacher.getFullName.bind(teacher)
console.log(getTeacherName1()) // "Minh Thảo" , teacher ràng buộc với từ khóa this trả ra nên khi call 
// // getTeacherName1 thì this sẽ là teacher( đối số truyền vào bind() )
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const  cars = ['BMW']
    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1)
        },
        render() {
            const html = cars.map((car,index) => `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}">&times</span>
                </li>
            `)
            .join('')

            root.innerHTML = html
        },
        handleDelete(event) {
            
        },
        init() {
            // Handle Dom events
            submit.onclick = () => {
                const car = input.value
                this.add(car)
                this.render()
                input.value = null
                input.focus()
            }
            root.onclick =  
            this.render()
        }

    }
})();
app.init()


