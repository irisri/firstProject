// console.log('Hello JS');
// var name = 'Iris';

// console.log('Hello', name);

// var country = prompt('What\'s the name of your country?');
// var city = prompt('What\'s the name of your city?');

// var address = country + ' ' + city;
// console.log('The address is', address);
var score = 1;

function alcoholAgeCheck() {
    var age = prompt('What\'s ypur age?');
    if(age >= 18) {
        console.log("Welcome " + name+ ", you are " + age +", so you are old enough to buy Beer");
    } else {
        console.log("We are sorry, " + name + ", you are " + age + ", and means that you are too young for buying Beer");
    }
}

alcoholAgeCheck();
alcoholAgeCheck();
alcoholAgeCheck();

function drink() {
    var favoriteDrink = prompt("What's your favorite drinke?");
    console.log("Enjoy your " + favoriteDrink + "!")
}

function multTen() {
    score *= 10;
    console.log(score);
}