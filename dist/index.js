"use strict";
let favoritMovies = ["Beautiful mind", "Avengers", "Matrix"];
favoritMovies.push("Fargo");
favoritMovies.push("Pulp Fiction");
console.log(favoritMovies);
favoritMovies.pop();
console.log(favoritMovies);
for (let favoritMovie of favoritMovies) {
    console.log("Movies: " + favoritMovie);
}
;
let score = 89;
if (score >= 90) {
    console.log("Excellent Score");
}
else if (score >= 70) {
    console.log("Good Score");
}
else {
    console.log("Needs improvement");
}
;
console.log(score);
let numbers = [10, 25, 5, 30, 15];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 20) {
        console.log("Talet är stort!");
    }
}
let username = "looz";
let password = "secret";
if (username == "admin" && password == "secret") {
    console.log("Login successful!");
}
else {
    console.log("Invalid Credentials");
}
//# sourceMappingURL=index.js.map