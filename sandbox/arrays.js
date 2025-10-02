const steps = ["one", "two", "three"];
function listTemplate(step) {
  step = `<li>${step}</li>`; // create the html string for one step
  return step;
  //the html string made from step
}
const stepsHtml = steps.map(step => `<li>${step}</li>`).join(""); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml; // set the innerHTML
console.log(stepsHtml);


const grades = ["A", "B", "A"];

function convertGradesToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } 
  return points;
}
const gpaPoints = grades.map(convertGradesToPoints);
console.log(gpaPoints);

const words = ["watermelon", "peach", "apple", "tomato", "grape"];
//same thing with an arrow function
const shortWords = words.filter((word) => word.length < 6);

// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex); // 2