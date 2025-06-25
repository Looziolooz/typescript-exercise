let favoritMovies: string [] = ["Beautiful mind", "Avengers", "Matrix"];

favoritMovies.push("Fargo");
favoritMovies.push("Pulp Fiction");

console.log(favoritMovies);

favoritMovies.pop();
console.log(favoritMovies);


for(let favoritMovie of favoritMovies) {
  console.log("Movies: "+ favoritMovie)
};


let score: number = 89;

if (score >= 90) {
  console.log("Excellent Score")
}else if (score >=70) {
  console.log("Good Score")
}else {
  console.log("Needs improvement")
};

console.log(score);



let number: number[] = [10, 25, 5, 30, 15]