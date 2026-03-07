
// console.log(3 + 5)

// 1. Window Object
// Created by browser and not js so we do not need to specify it.

window.console.log("hello")
alert("hello!")

// 1. DOM
// All html elements are converted to an object in js named "document" and is available in window object to be accessed.
// i.e. html is converted to a model.
// it is a tree like structure || window-> document-> html-> head, body || with nodes.

// to access html in js
console.dir(window.document)
console.dir(document.body)
console.log(document.head)