// IIFE - Immediately Invoked Function Expression
// Define: Một function expression được gọi ngay lập tức
// Nội dung
// 1. IIFE trông như nào?
    (function(){
        console.log('NOW NOW')
    })()
// 2. Dùng dấu ; trước IIFE
    // Dành cho project không sử dụng dấu ; ở cuối code
// 3. IIFE là hàm "private"
    (function myFunc(){
        console.log('Now');
    })()
    myFunc() // không chạy được
// 4. Sử dụng IIFE khi nào?
    // Thư viện thường viết bằng IIFE để tránh ảnh hưởng đến dự án của người sử dụng thư viện
    // Thể hiện được tính an toàn dữ liệu 
// 5. Các cách tạo ra một IIFE 
// 6. Ví dụ sử dụng IIFE
    const app = (function(){
        // Private
        const cars = []
        return {
            get(index) {
                return cars[index]
            },
            add(car) {
                cars.push(car)
            },
            edit(index, car) {
                cars[index] = car
            },
            delete(index) {
                cars.splice(index, 1)
            }
        }
    })

