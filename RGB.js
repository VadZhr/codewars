function rgb(r, g, b) {
    return [r,g,b].map(el=>el>255?'FF':el<=0?'00':el<16?'0'+el.toString(16).toUpperCase():el.toString(16).split('').map(el=>Number(el)?el:el.toUpperCase()).join('')).join('')
}
let a =16
console.log(rgb( 11, 230, 16));

console.log(a.toString(16));