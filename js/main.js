// PROBLEM 1  

// const n = "10011011";
// const a =  2;

// function select(n) {

//   switch (n) {

//     case "A":
//       return 10;
//     case "B":
//       return 11;
//     case "C":
//       return 12;
//     case "D":
//       return 13;
//     case "E":
//       return 14;
//     case "F":
//       return 15;
//     default:
//       return n;
//   }

// };

// function binary(n, a) {

//   let count = 0;

//   for (let i = n.length - 1; i >= 0; i--) {
//     count += select(n[i]) * a ** (n.length - i - 1);
//   }

//   return count;
// }

// console.log(binary(n,a));

// PROBLEM 2


// let arr = [-2,4,3,-8,16,-32];
// let istrue = true;

// if(arr[0] < 0){
//   for(let i = 0; i < arr.length; i++){
//     if(i % 2 == 0 &&  arr[i]> 0){
//       istrue = i;
//       break;
//     } else if(i % 2 == 1 && arr[i] < 0) {
//       istrue = i;
//       break;
//     }
//   }

// }
//  else {
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//       n = i;
//       break;
//     } else if(arr[i] > 0) {
//       istrue = i;
//       break;
//     }
//   }
// }

// console.log(istrue);


// PROBLEM 3 


// let obj = {
//   arr: [15, 20, 12, 4, -13, 5],

//   at: function(index) {
//     if (this.arr.length > 0) {
//       if (index >= 0) {
//         for (let i = 0; i < this.arr.length; i++) {
//           if (i == index) {
//             return this.arr[i];
//           }
//         }
//       } else {
//         for (let i = 0; i < this.arr.length; i++) {
//           if (i == Math.abs(index)) {
//            return this.arr.reverse()[Math.abs(i)-1];
//           }
//         }
//       }
//     }
//   },
// };

// console.log(obj.at(-2));


// PROBLEM  5 


// let obj = { x: 1, y: 2 };
// let arr = [];

// function change(val) {
//   for (let i in val) {
//     let res = [i, val[i]];
//     arr.push(res);
//   }
//   return arr
// }
// console.log(change(obj));


// PROBLEM 4


const string = {
  reverse: function(str) {

    let res = '';
    for(let i = str.length-1; i >= 0; i--){
      res+=str[i]
    }
    return res
  },
  trim: function(str){
   
  }
}

console.log(string.reverse('Hello'));
