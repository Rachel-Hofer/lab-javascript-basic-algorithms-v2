let hacker1 = "Rachel";
// console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Hofer";
// console.log(`The navigator's name is ${hacker2}`);


function whichNameIsLonger() {
  if(hacker1.length > hacker2.length){
  return "The driver has the longest name, it has " + hacker1.length + " characters";
  }
  else if(hacker1.length < hacker2.length){
    return "Yo, the navigator got the longest name, it has " + hacker2.length + " characters";
  }
  else {
    return "Wow, you both got equally long names, " + hacker1.length +  " characters!!";
  }
};
// console.log(whichNameIsLonger());
// console.log(hacker1.split('').join(" ").toUpperCase());
// console.log(hacker2.split('').reverse('').join(" "));

let array3 = [hacker1.toLowerCase(), hacker2.toLocaleLowerCase()];
array3.sort();

function whichNameIsFirst() {
  if(array3[0] > array3[1]){
  return "The driver's name goes first"
} else if(array3[0] < array3[1]) {
  return "Yo, the navigator goes first definitely"
} else {
  return "What?! You both got the same name?"
  }
};
// console.log(whichNameIsFirst());