function basicTeenager (age) {
if (19 >= age && age >= 13) {
  return ('You are a teenager!')
}
}

function teenager(age) {
}

function ageChecker(age) {
if (19 >= age && age >= 13) {
  return ('You are a teenager!')
} else if (12 >= age) {
  return ('You are a kid')
} else {
  return ('You are a grownup')
}
}


function ternaryTeenager(age) {
return if (19 >= age && age >= 13) ? 'You are a teenager' : 'You are not a teenager'
}

function switchAge(age) {
var age='13'
switch(age) {
  case "13":
    console.log('You are a teenager');
    break;
  case "14":
    console.log('You are a teenager');
    break;
  case "15":
    console.log('You are a teenager');
    break;
  case "16":
    console.log('You are a teenager');
    break;
  case "17":
    console.log('You are a teenager');
    break;
  case "18":
    console.log('You are a teenager');
    break;
  case "19":
    console.log('You are a teenager');
    break;
  default:
    console.log('You have an age')
}
}
