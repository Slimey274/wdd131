let PI = 3.14;
// let radius = 3;
let area = 0;

function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}
// area = radius * radius * PI;

area = circleArea(3);
console.log('Area 1:', area);
// radius = 4;
// area = radius * radius * PI;
area = circleArea(4);  
console.log('Area 2:', area);