
/*
Notes:
1 meter = 3.281 feet
1 foot = 12 inches 
worked out 1 inch = 0.0254 metres
glass area = (height minus 1 inch) x (width minus 1 inch) 
wood area = (H X W) - (area of glass) 
wood needs to be converted to feet and inches 
*/
const WINDOW_FRAME = 0.0254
const FEET = 3.281

let height = prompt( "What is the height of the window in meters?")
if (Number (height) < 0.5 || Number (height) > 2) { 
  alert("Sorry this height is unacceptable - must enter a height between 0.5 and 2 meters!");
}
let width = prompt( "What is the width of the window in meters?")
if (Number (width) < 0.5 || Number (width) > 3.5) { 
  alert("Sorry this width is unacceptable - must enter a width between 0.5 and 3.5 meters!");
}

let heightFull = Number(height) - Number(WINDOW_FRAME)
//console.log(`${heightFull}`)
let widthFull = Number(width) - Number(WINDOW_FRAME)
//console.log(`${widthFull}`)
let glassArea = Number (widthFull) * Number (heightFull)
console.log(`The area of the glass required is ${glassArea} meters`)

let totalArea = Number(height) * Number(width)
//console.log(`${totalArea}`)
let woodInMeters = Number (totalArea) - Number (glassArea)
//console.log(`${woodInMeters}`)
let woodInFeet = Number(woodInMeters) * Number (FEET)
console.log(`The area of the wood requierd is ${woodInFeet} feet and inches`)
