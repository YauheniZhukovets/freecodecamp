function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
  } 
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);
//пример 2
let browser = prompt("Каким браузером вы пользуетесь:")
if (browser === 'Edge') {
    alert("You've got the Edge!")
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}



//пример 3
const number = +prompt('Введите число между 0 и 3')

switch (number) {
    case 0:
        alert('Вы ввели число 0')
        break
    case 1:
        alert('Вы ввели число 1')
        break
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3')
        break

}

