/* (2.6 * M) - 5.39 = a
YF/4 = b
YL/4 = c

a(mathfloor) + newYF + newYL = sum
sum + D + YL = total
total - (YF *2)  = newTotal
newtotal / 7
check the remainder
*/
let dob = prompt( "What is your date of birth?", "dd/mm/yyyy")
let dataArray = dob.split(/[ /]/);
let d = dataArray[0]
let m = dataArray[1]
let y = dataArray[2]

function toGetM () { 
    if (m < 3) {
    return Number (m) + 12; 
}
return m  
}
let month = toGetM (`${m}`)
//console.log (`${month}`)

function toGetY () { 
    if (m < 3) {
    return Number (y) - 1; 
}
return y 
}
let year = toGetY (`${m}`)
//console.log (`${year}`)

let yf =  Math.floor(year/100)
//console.log(`${yf}`)
let yl = year - (yf*100)
//console.log(`${yl}`)
let result = Math.floor ((2.6 * (`${month}`)) - 5.39) 
//console.log(`${result}`)
let yf4 = Math.floor(yf/4) 
//console.log (`${yf4}`)
let yl4 = Math.floor(yl/4) 
//console.log (`${yl4}`)
let total = result + yf4 + yl4 + Number (d) + Number (yl)
//console.log(`${total}`)
let newTotal = total - (yf * 2)
//console.log(`${newTotal}`)

function posNum () {
if (newTotal < 1) {
    return 7 - Number(Math.abs(`${newTotal}`))
    }
    return newTotal
    }
let posNumber = posNum(`${newTotal}`)
//console.log(`${posNumber}`)

let remainder = posNumber % 7
//console.log (`${remainder}`)    

if (Number(remainder) == 0) {
    console.log("You were born on a Sunday");
}
else if (Number(remainder) == 1) {
    console.log("You were born on a Monday");
}
else if (Number(remainder) == 2) {
    console.log("You were born on Tuesday");
}
else if (Number(remainder) == 3) {
    console.log("You were born on a Wednesday");
}
else if (Number(remainder) == 4) {
    console.log("You were born on a Thursday");
}
else if (Number(remainder) == 5) {
    console.log("You were born on a Friday");
}
else if (Number(remainder) == 6) {
    console.log("You were born on a Saturday");
}