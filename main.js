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

// 14
// const a = [1, 2, 3]
// const b = [4, 5, 6]
// let result = [...a, ...b]
// console.log(result)

// 15
// function sum(...numbers) {
//     let total = 0;
//     for (let number of numbers) {
//         total += number;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3));
// console.log(sum(4, 5, 6, 7));


// 16
// const a = [2, 3, 4]
// const b = 1
// let result = [...[b], ...a]
// console.log(result)

// 17
// function toUpperCase(...args){
//     let uppercased = [];
//     for (let arg of args) {
//         uppercased.push(arg.toUpperCase());
//     }
//     console.log(uppercased);
// }
// toUpperCase('apple', 'banana', 'cherry')

// 18
// const a = [2, 3, 4]
// const result = a.reduce(function (proiz, elem){
//     return proiz * elem
// }, 1)
// console.log(result)

// 19
// const a = [1, 'a', 3, 'b', 5]
// const result = a.reduce(function (count, elem){
//     if(!isNaN(elem))
//         return count + 1
//     return count
// }, 0)
// console.log(result)

// 20
// const a = ["apple", "banana", "cherry"]
// const result = a.reduce(function (str, elem){
//     return str + elem + ','
// }, '')
// console.log(result.slice(0, -1))

// 21
// const a = [3, 7, 2, 5]
// const result = a.reduce(function(max, elem){
//     if(elem > max)
//         max = elem
//     return max
// }, a[0])
// console.log(result)

// 22
// const a = [1, 2, 3, 4] 
// const result = a.map(function(elem, index){
//     return elem * index
// })
// console.log(result)

// 23
// const a = [2, 4, 6, 9]
// const result = a.every(function(elem){
//     if (elem % 2 === 0) return true
//     else return false
// })
// console.log(result)

// 24
// const a = [1, -2, -3, -4]
// const result = a.some(function(elem){
//     if (elem > 0) return true
//     else return false
// })
// console.log(result)

// 25
// const a = ["apple", "banana", "cherry"]
// const result = a.map(function(elem){
//     return elem.length
// })
// console.log(result)

// 26
// const a = ["apple", "banana", "cherry"]
// const result = a.every(function(elem){
//     if (elem.length > 3) return true
//     else return false
// })
// console.log(result)

// 27
// const a = ["apple", "banana", "cat"]
// const result = a.filter(function(elem){
//     if (elem.length < 5) return true
//     else return false
// })
// console.log(result)


// 28
// const a = ["apple", "banana", "cherry"]
// const result = a.map(function(elem){
//     return elem.toUpperCase()
// })
// console.log(result)

// 29
// const a = [-10, 20, 30]
// const result = a.filter(function(elem){
//     if (elem > 0) return true
//     else return false
// })
// console.log(result)

// 30
// const a = [10, 3, 5, 7]
// const result = a.reduce(function(min, elem){
//     if(elem < min)
//         min = elem
//     return min
// }, a[0])
// console.log(result)