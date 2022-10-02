let age = 18;
let condition = age;

function minor() {
    console.log("Sorry, but you are a minor.")
}

function noMinor() {
    console.log("That's ok. You can enter the pub.")
}

if (condition < 18) {
    minor();
} else {
    noMinor();
}
