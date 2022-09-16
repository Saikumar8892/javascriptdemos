// settimeout and throttling

function sayHi() {
  var greeting = 'hi...';
  console.log(greeting);
}

// says Hi immediately
sayHi();

function sayHiLater() {
  var greeting = 'hi later...';
  setTimeout(function () {
    console.log(greeting);
  }, 5000);
}

// say hi after 5 seconds
sayHiLater();

// throttling
function sayHiEveryFiveSecond() {
  var greeting = 'hi 5...';
  setInterval(function () {
    console.log(greeting);
  }, 1000);
}
sayHiEveryFiveSecond();