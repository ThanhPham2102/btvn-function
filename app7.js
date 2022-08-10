// function processConfirm(answer){
//     let result ='';
//     if ( answer){
//         result = "Excellent. We'll play a nice game of chess";

//     } else {
//         result = "Maybe later then";
    
//     }
//     return result;
// }
//  let confirmAnswer = confirm('Shall we play a game');
//  let theAnswer = processConfirm(confirmAnswer);
//  alert(theAnswer);





//  bai2
// function temperatureConverter (){
    
//     let C = prompt('Nhập độ C');
//     let F = 1.8*C + 32;
//     alert(`${C}oC = ${F}oF`)
// }
// temperatureConverter();
//bai3
// function minArray(arr){
//         let min = Number(arr[0]);
//         if (arr.length==0){
//             return "ham rong";
//         }
//         for (i=1;i<arr.length;i=i+1){
            
//             if( min> Number(arr[i])){
//                 min=arr[i];
//             }
//         }
//         return min;
//     }
    
//     let arr1 =prompt('nhap day so bat ki cach nhau boi dau phay').split(',');console.log(arr1);
//     let min = minArray(arr1);
//     alert(`min arr1 la: ${min}`);
//     console.log(`min arr1 la: ${min}`)







// baitapvenha
// bai1
// Bài 1: \Viết chương trình cộng hai số
// function tong(){
//  let a = Number(prompt('nhap a'));
//  let b = Number(prompt('nhap b'));
//  result = a+b;
//  return result
// }
// tong();
// console.log(result);

// Bài 2: Tính tổng các số lẻ trong mảng. Sử dụng Return


// function tinhTongCuaMang(){
//     let array = [1,2,3,4,5,6];
//     let tong = 0;
//     for(i=0; i<= array.length-1;i=i+1){
//         if(array[i]%2===1){
//             tong = tong + array[i]
//         }
//     }
//     console.log(`tong la ${tong}`);
//     return ;
// }
// // tinhTongCuaMang();

// tinhTongCuaMang();
// 
// CACH 2

// let array = [1,2,3,4,5,6];

// function tinhTongCuaMang(a){
    
//     let tong = 0;
//     for(i=0; i<= array.length-1;i=i+1){
//         if(array[i]%2===1){
//             tong = tong + array[i]
//         }
//     }
//     //console.log(`tong la ${tong}`);
//     return tong ;
// }
// // tinhTongCuaMang();

// let tong = tinhTongCuaMang(array);
// console.log(`tong la ${tong}`);
// ;

// BAI1 Viết hàm tính bình phương của một số bất kỳ được đưa vào.
//  Gọi hàm vừa xây dựng duoc
    
// let n =Number(prompt('nhap so n'));

// function binhPhuong(a){
   
//     let tinh = n*n ;
// return tinh;
// }
// let tinh = binhPhuong(n);
// console.log(`binh phuong cua ${n}la : ${tinh}`);

// bai2:Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn.
//  Gọi hàm vừa xây dựng được
// function hinhTron(r){
//     let dienTich = 3.14*R*R;
//     let chuVi = 2*3.14*R;
//     console.log(`dien tich hinh tronn la : ${dienTich}`);
//     console.log(`chu vi hinh tron la ${chuVi}`);
//     return;
// }
// let R = prompt(`nhap ban kinh hinh tron`);
// hinhTron(R);

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. 
// Gọi hàm vừa xây dựng được.
//  function tinhGiaiThua(x){
//     let giaiThua =1;
//     for (i=1;i<=a;i=i+1){
//         giaiThua = giaiThua*i;
//     }
//     return giaiThua;
//  };
//  let a = Number(prompt(`nhap so a`));
//  let giaiThua = tinhGiaiThua(a);
//  console.log(giaiThua)

// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. 
// Nếu là ký tự số hàm trả về true, ngược lại trả về false.




function check(){
    let a= prompt('nhap');
if (a===NaN){
    console.log('false');
} else {
    console.log('true')
}
return;
}
check();


// Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, 
// trả về số nguyên có giá trị nhỏ nhất.

// function minArray(arr){
//             let min = Number(arr[0]);
//             if (arr.length==0){
//                 return "ham rong";
//             }
//             for (i=1;i<arr.length;i=i+1){
                
//                 if( min> Number(arr[i])){
//                     min=arr[i];
//                 }
//             }
//             return min;
//         }
        
//         let arr1 =prompt('nhap day so bat ki cach nhau boi dau phay').split(',');//console.log(arr1);
//         let min = minArray(arr1);
//         alert(`min arr1 la: ${min}`);
//         console.log(`min arr1 la: ${min}`)



// bai6: kiem tra so nguyen duong
// let a = Number(prompt(` nhap so a =`));
// function checkSoNguyenDuong(x){
// if ( a>0 && Number.isInteger(a)){
//     alert(`true`);
// } else{
//     alert ('false');
// }return;

// }
// checkSoNguyenDuong(a);

// bai7: doi cho 2 so;
//   let arr = prompt(`nhap 2 so nguyen a,b cach nhau booi dau phay`).split(',');

// function doiCho(array){
//   let temp;
//    temp =arr[0];
//    arr[0]=arr[1];
//    arr[1]=temp;
//    console.log(arr);
//    return;
// }
// doiCho(arr)

//  BAI8.TRUyen mang bat ki ,roi doa nguoc;


// let arr =prompt(`nhap mang so nguy bat ki cach hau boi dau ,`).split(',');
// function daoNguoc(array){
//     let lastArray =[];
//   for (let i=arr.length-1; i>=0;i=i-1){
// lastArray.push(arr[i]);

//   }
//   console.log(lastArray);
//   return;
// }
// daoNguoc(arr);


//  bai9:
// // : Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, 
// kiểm tra xem ký tự bất kỳ
// đó có nằm trong mảng không.
//  Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1

// function soLanXuatHien() {
//     let array = prompt(`Hay nhap thu gi cung duoc`).split("");
//     let inPut = prompt(`Nhập một kí tự bất kì`);
//     let A = 0;
//     for (i = 0; i < array.length; i++) {
//        if (array[i] === inPut) {
//           A = A + 1;
//        }
//     }
//     if (A > 0) {
//        alert(`Kí tự xuất hiện ${A} lần trong những thứ linh tinh đã nhập`)
//     } else {
//        alert(`Kí tự không có trong những thứ kia`)
//     }
//  }
//  soLanXuatHien();
    


//  cach2

// function soLanXuatHien(arr,y) {

//     let A = 0;
//     for (i = 0; i < array.length; i++) {
//        if (array[i] === inPut) {
//           A = A + 1;
//        }
//     }
//     if (A > 0) {
//        alert(`Kí tự xuất hiện ${A} lần trong những thứ linh tinh đã nhập`)
//     } else {
//        alert(`Kí tự không có trong những thứ kia`)
//     }
//  }
//  let array = prompt(`Hay nhap thu gi cung duoc`).split("");
//  let inPut = prompt(`Nhập một kí tự bất kì`);
//  soLanXuatHien(array,inPut);