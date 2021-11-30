// point quantities to their ID
gbQ = document.querySelector('#qty-gb')
ccQ = document.querySelector('#qty-cc')
sugarQ = document.querySelector('#qty-sugar')
totalQ = document.querySelector('#qty-total')
// First, tell us your name
let yourName = "(Kirby) Douglas Ellingson"

// We'll use these variables to track the counts of each cookie type
let gb = 0    // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    gbQ.textContent = gb
    totalQ.textContent = gb+cc+sugar
})
document.getElementById('minus-gb').addEventListener('click',function(){
    if (gb > 0) { // prevent less than 0
        gb--
        gbQ.textContent = gb
        totalQ.textContent = gb+cc+sugar
    } else {
            gbQ.textContent = gb
            totalQ.textContent = gb+cc+sugar
    }
})

// button event listener for Chocolate Chip 'cc'
document.getElementById('add-cc').addEventListener('click', function(){
    cc++
    ccQ.textContent = cc
    totalQ.textContent = gb+cc+sugar
})
document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) { //prevent less than 0
        cc--
        ccQ.textContent = cc
        totalQ.textContent = gb+cc+sugar
    } else {
        ccQ.textContent = cc
        totalQ.textContent = gb+cc+sugar
    }
})

// button event listener for sugar cookies
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar++
    sugarQ.textContent = sugar
    totalQ.textContent = gb+cc+sugar
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    if (sugar > 0) { // prevent less than 0
        sugar--
        sugarQ.textContent = sugar
        totalQ.textContent = gb+cc+sugar
    } else {
        sugarQ.textContent = sugar
        totalQ.textContent = gb+cc+sugar
    }
})
// TODO: make totalQ an update function to be called instead of manually updating after each event.

