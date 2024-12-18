// 1
// const a =  [2, 'a', 4, 'b', 6];
// let b = []
// for(let i = 0; i < a.length; i++){
//     if(!isNaN(a[i]))
//         b.push(a[i])
// }
// if (b.length == 0){
//     console.log('Массив пуст')
// }
// else{
//     console.log(b)
// }

// 2
// const c = [2, 3, 4, 5, 6, 4, 5]
// const a = c[c.length - 1]
// const b = c[c.length - 2]
// const result = c.filter(function (el) {
//     if (el != a && el != b){
//         return true
//     }
//     else return false
// })
// if (result)
//     console.log(result);
// else
//     console.log('Массив пуст')

// 3
// const a = [2, 2, 2, 2, 2]
// let b = []
// a.forEach(function(el){
//     if(!b.includes(el))
//         b.push(el)
// })
// console.log(b)

// 4
// const a = [2, 3, 4, 5]
// let result = 1;
// a.forEach(function(el){
//     result*=el
// })
// console.log(result)

// 5
// const a = ['a', 2, 'c', 'd'];
// const result = a.some(function(el){
//     if(!isNaN(el))
//         return true
// })
// console.log(result)

// 6
// const a =  [1, 'a', 3, 4] ;
// const result = a.every(function(el){
//     if(!isNaN(el))
//         return true
// })
// console.log(result)

// 7
// const a =  [1, 2, 3, 4]
// let result = 0;
// a.forEach(function(el){
//     result+=el
// })
// console.log(result)

// 8
// const a =  [1, 2, 3, 4, 5, 6]
// const result = a.map(function(el){
//     if(el % 2 == 0)
//         return 'чет'
//     else
//         return 'нечет'
// })
// console.log(result)

// 9
// const a = ["ann", "school", "hschool", "borabora"]
// const result = a.filter(function(el){
//     if(el.startsWith('a')| el.startsWith('h'))
//         return true
//     else return false
// })
// console.log(result)

// 10
// const a = ["I love javascript", "coding", "javascript is fun", "python"] 
// let b = []
// a.forEach(function(el){
//     if(el.includes('javascript'))
//         b.push(el)
// })
// console.log(b)

// 11
// const a = ["hschool", "company"]
// const result = a.map(function(el){
//     return '#' + el
// })
// console.log(result)

// 12
// const a = ["apple", 10, "banana", 20, 30, "cherry"] 
// let b = []
// let c = []
// a.forEach(function(el){
//     if(!isNaN(el))
//         c.push(el)
//     else b.push(el)
// })
// console.log(b)
// console.log(c)


// 13
// const a = [2, 3, 4]
// const result = a.map(function(el){
//     return el ** 2
// })
// console.log(result)