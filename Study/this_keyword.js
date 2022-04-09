// Từ khóa this trong Javasript đề cập đến đối tượng mà nó thuộc về 
// Đặc Tính
// 1. Trong một phương thức, this tham chiếu tới đối tượng truy cập method(trước dấu chấm)
// const iphone7 = {
//     // Thuộc tính - Property
//     name:  'iPhone  7',
//     color: 'Pink',
//     weight: 300,
//     //  Phương thức - Method
//     takePhoto() {
//         console.log('Take a photo');
//     },
//     objChild: {
//         name:'Object child',
//         methodChild() {
//             console.log(this)
//         }
//     }
// }
// iphone7.objChild.methodChild()

// 2. Đứng ngoài method, this tham chiếu tới đối tượng global
// Lưu ý 
// this trong hàm tạo là đại diện cho đối tượng được tạo
    // function Car(name, color) {
    //     this.name = name
    //     this.color = color
    // }
    // const porsche = new Car('Porsche','black') // this chính la porsche trong TH này
// this trong một hàm là undefined khi ở strict mode
// Các method bind(), call(), apply() có thểtham chiếu this tới đối  tượng khác

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = (() => {
    const  cars = []

    
})
