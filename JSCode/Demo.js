/**
 * Created by yangxuewu on 2017/10/24.
 */
// const s = new Set();
//
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
//
// for (let i of s) {
//     console.log(i);
// }

//
// {
//     let a = 10;
//     var b = 1;
// }
//
// console.log(b);
// console.log(a);
//




var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6]();
console.log(a[6]());

// a[6]();