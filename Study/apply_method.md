## Apply Method : Phương thức này cho phép gọi một hàm với một this(bind) 
## và truyền đối số cho hàm gốc dưới dạng mảng

Khác nhau
function fn() {}
/**
*  Bind method
* - Trả ra hàm mới với `this` tham chiếu tới `thisArg`
* - Không thực hiện gọi hàm
* - Nếu được bind kèm `arg1, arg2, ...` thì các đối số này sẽ được ưu tiên hơn
*/
const newFn = fn.bind(thisArg, arg1, arg2, ...)

newFn(arg1, arg2, ...)

/**
* Call method
* - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
* - Nhận các đối số cho hàm gốc từ `arg1, arg2, ...`
*/
fn.call(thisArg, arg1, arg2, ...)

/**
* Apply method
* - Thực hiện bind `this` với `thisArg` và thực hiện gọi hàm
* - Nhận các đối số cho hàm gốc bằng đối số thứ 2 dưới dạng mảng `[arg1,arg2,..]`
*/
fn.apply(thisArg, [arg1, arg2, ...])



