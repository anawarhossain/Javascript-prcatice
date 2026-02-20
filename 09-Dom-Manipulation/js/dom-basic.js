// console.log(document)

// console.log(document.title) // title
// document.title = "Welcome" // title change

console.log(document.documentElement) //<html>
console.log(document.head) // <head>
console.log(document.body) // <body>
console.log(document.all) // HTMLCollection of all elements
console.log(document.all.length) // Total elements count

const title = document.getElementById("main-title")
console.log(title)
console.log(title.innerText)
console.log(title.textContent)
console.log(title.id)
console.log(title.classList)