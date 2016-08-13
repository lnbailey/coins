/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
*/

function coinCounter (amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  amount *= 100;
while (amount >= 25) {
  coinPurse.quarters += 1;
  amount -= 25;
} while (amount >= 10) {
  coinPurse.dimes += 1;
  amount -= 10;
} while (amount >= 5) {
  coinPurse.nickels += 1;
  amount -= 5;
} while (amount >= 1) {
  coinPurse.pennies += 1;
  amount -= 1;
}

  return coinPurse;
}

var coins = coinCounter(.18); // coins will equal the object created by coinCounter


var listThings = function(amount) {
  var coins = coinCounter(amount);
  for (var i = 0; i < Object.keys(coins).length; i++) {  // Using the length of the object
    var list = "<p>You may have these coins:</p>";
    list += "<p>Quarters: " + coins.quarters + "</p>";
    list += "<p>Dimes: " + coins.dimes + "</p>";
    list += "<p>Nickels: " + coins.nickels + "</p>";
    list += "<p>Pennies: " + coins.pennies + "</p>";
  };

  document.getElementById('coinDisplay').innerHTML = list;
  console.log(list);
}

listThings(1.48);
