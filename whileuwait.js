
function birthDay(num) {
  while (num > -1) {
    if (num > 30) {
      console.log(num + " days until my birthday. Such a long time...");
    } else if (num > 5) {
      console.log(num + " days until my birthday. It is getting close!!");
    } else if (num > 0) {
      console.log(num + " days until my birthday.");
    } else {
      console.log("It's MY BIRTHDAY!!!");
    }
    num--;
  }
}
