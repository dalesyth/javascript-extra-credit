// //Current Year

let currenYear = 4000 / 2 + (27 - 4);

console.log(currenYear);

// //My Age

let myAge = 120 / 3 + 2 * (15 - 12);

console.log(myAge);

// //To Uppercase

let louder = "make it loud";

console.log(louder.toUpperCase());

// //To Lowercase

let quiet = "NOT SO LOUD THIS TIME";

console.log(quiet.toLowerCase());

// //Favorite Activity

let favoriteActivity = "coding";

// //Variable Assignment

let myFirstName = "Dale";
let myFavoriteNum = 47;
let havingFun = true;

// //First Sum

let myFirstSum = num1 + num2 + num3;

// //Express Guess

let myGuess = 400;

// //Take The Shortcut

happyNum -= 500;
happyNum += 250;
happyNum /= 150;

//Founder Finder

if (name === "David") {
  found = true;
} else if (name === "Nimit") {
  found = true;
} else {
  found = false;
}

//Must Be Perfect

if (word.charAt(0) === "p" && word.length === 7) {
  lastWord = word.toUpperCase;
} else {
  lastWord = word;
}

//Truth Teller

if (boolean1 && boolean2) {
  result = "both";
} else if (boolean1 || boolean2) {
  result = "one";
} else if (!boolean1 && !boolean2) {
  result = "none";
}

//Simple Sum

function simpleSum(num1, num2) {
  return num1 + num2;
}

//Default Greet

function defaultGreet(firstName, lastName) {
  if (firstName && lastName) {
    return "Hi " + firstName + " " + lastName + "!";
  } else if (lastName === undefined) {
    return "Hi" + " " + firstName + " " + "Doe!";
  }
}

//Tax Calculator

function taxCalculator(price, state) {
  if (state === "NY") {
    return price * 1.04;
  } else if (state === "NJ") {
    return price * 1.06625;
  }
}

//My Mnemonic

function myMnemonic(word1, word2, word3, word4) {
  let mnemonic = "";

  if (word1) {
    mnemonic += word1[0];
  }
  if (word2) {
    mnemonic += word2[0];
  }
  if (word3) {
    mnemonic += word3[0];
  }
  if (word4) {
    mnemonic += word4[0];
  }

  return mnemonic;
}

//Greeting

function greeting(name) {
  if (name) {
    return `Hello ${name}` + "!";
  } else {
    return "Hello!";
  }
}

//Do You Play the Theremin

function doYouPlayTheTheremin(response) {
  if (response[0] === "s" || response[0] === "S") {
    return true;
  } else {
    return false;
  }
}

//Last Character

function lastCharacter(string1, string2) {
  if (
    string1.charAt(string1.length - 1) === string2.charAt(string2.length - 1)
  ) {
    return true;
  } else {
    return false;
  }
}

//Max Of Three

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  }
}

//Every Which Way

function everyWhichWay(num1, num2, num3) {
  if (num1 + num2 === num3) {
    return "sum";
  } else if (num1 - num2 === num3) {
    return "difference";
  } else if (num1 * num2 === num3) {
    return "product";
  } else if (num1 / num2 === num3) {
    return "fraction";
  } else {
    return null;
  }
}
