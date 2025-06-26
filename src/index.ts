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



let numbers: number[] = [10, 25, 5, 30, 15];

for(let i = 0; i < numbers.length; i++) {
  if (numbers [i] > 20) {
    console.log("Talet är stort!")
  }
}

let username: string = "looz";
let password: string = "secret";

if(username == "admin" && password == "secret" ) {
  console.log("Login successful!");
} else {
  console.log("Invalid Credentials");
}

let favoritMovies: string [] = ["Beautiful mind", "Avengers", "Matrix"];

favoritMovies.push("Fargo");
favoritMovies.push("Pulp Fiction");

console.log(favoritMovies);

const removeMovie: string | undefined= favoritMovies.pop(); //da usare per salvare un elemento esternamente dall array
if(removeMovie !== undefined) {
  console.log("Rimosso: " + removeMovie)
} else {
  console.log("La lista é vuota")
}


if (favoritMovies.length > 0) {
  let removeMovie = favoritMovies.pop();
  console.log(removeMovie); //da usare se si vuole salvare un elemento a parte e rimuoverlo dall array
};

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



let numbers: number[] = [10, 25, 5, 30, 15];

for(let i = 0; i < numbers.length; i++) {
  if (numbers [i] > 20) {
    console.log("Talet är stort!")
  }
}

let username: string = "looz";
let password: string = "secret";

if(username == "admin" && password == "secret" ) {
  console.log("Login successful!");
} else {
  console.log("Invalid Credentials");
}




//objekt och JSON i typescript

let book = {
  title: "Story",
  author: "Lorenzo",
  pages: 156, 
  read: function() {
    console.log("Reading" + this.title + " by " + this.author + "...")
  }
}

//punktnotation 
console.log(book.title); //output: story

//hakparantesnotation
console.log(book["author"]) // output: Lorenzo

//anropa metoden
book.read() // output Reading Story by Lorenzo....




//inbyggda objekt Math

let rondomNumber: number = Math.random() //Slumpmässigt (numero casuale) tal

//generera ett slumpat tal mellan 1-10
const max: number = 10;
const min: number = 1;
const randomNumber: number = Math.floor (Math.random()) + (max - min + 1) + min;
console.log(randomNumber)

//inbyggda objekt DATE ----Nyckelordet "new"
const date = new Date; 
console.log(date)

let specifiDate: Date = new Date ("2025-10-26T10:00:00") //specifikt datum tid

console.log(date.getFullYear()) //år
console.log(date.getMonth()) //månad
console.log(date.getDay()) //dag

let specificWeekday = specifiDate.toLocaleDateString("sv-SE", { weekday: 'long' })

console.log(specificWeekday)


//inbyggda objekt Window (globala objektet) -- html-sidan, console, alert, document

//da console inspect
/* window.alert("Ciao!") */

console.log(window.innerWidth)



//JSON - javascript object notation
/* {
  "productName": "Laptop",
  "price"; 1200,
  "isInStock": true,
  "features": ["Fast processor", "Large screen"]
}
 */
//json.stringify()

let userProfile = {
  userId: 101, 
  username: "lorenzo",
  userEmail: "lorenzo@gmai.com",
  isActive: true
}

let jsonString: string = JSON.stringify(userProfile)




const pokemon = {
  name: "bulbasaur",
  id: 1,
  type: ["grass"],
  isCute: true
}

console.log(pokemon)

const pokemonJSONString: string = JSON.stringify(pokemon);
console.log(pokemonJSONString)


//JSON pars ---JSON.parse()
const pikachuJSON: string = '{"name": "pikachu", "id": 25, "type": ["electric"], "isCute": true}';

const pikachuObject: {name: string; id: number; type:string[]; isCute: boolean} = JSON.parse(pikachuJSON);

console.log(pikachuObject.name);

//typkonvertering

const num = 1; 
const stringNum = "5";
const result = num + stringNum;

console.log(result) //output 15 (unisce i due valori -risultato inplicito )
//inplicti (sånt som js gör själv)


//EXPLICIT
//convertire una stringa in numero
const numberNum = parseInt(stringNum);
console.log(numberNum)

const highscore = 789;
const highscoreString = highscore.toString();

//en lista med användare 
/* const initialUsers: {
  id: number, name: string, score: string, isActive: boolean 
} [] = 
[
  {id: 1, name: "Jocke", score: "75", isActive: true}, 
  {id: 2, name: "Carl", score: "40", isActive: false}, 
  {id: 3, name: "Noah", score: "92", isActive: true}, 
]; */
/* 
console.log("---Ursprunglig användardata ---");
console.log(initialUsers); */

//en tom array för att lagra de bearbetade användarna

/* const processedUsers: {
  id: number, name: string, score: number, isActive: string 
} [] = []; */

//loopa igenom varje användare i listan
console.log("/n--- bearbetar användare ---")

/* for(const user of initialUsers) {
 */  // 1.konvertera "score" från sträng till nummer
  // const numericScore: number = parseInt(user.score);

  // 2. göra om isActive
  /* let userStatus: string = "";
  let userName: string = user.name; */ //arbeta med en kopia av namnet

  // om användaren är aktiv och har poäng  over 70 är den godkänd
  // if(user.isActive) {
    //om användaren är aktiv
/*     if (numericScore == 70) {
      userStatus = "Godkänd och aktiv";
      userName = userName.toUpperCase(); */ //ändrar namn till versaler om godkänd och aktiv
    // }else {
      //om ej godkänd, men aktiv
 /*      userStatus = "Ej godkänd, men aktiv"
    }
  } else { */
    //om användaren inte är aktiv
    // userStatus = "Inaktiv"
  // }

  //3. skapa ett nytt objekt med en den bearbetade datan
  /* const processedUser = {
    id: user.id, 
    name: userName,
    score: numericScore,
    isActive: userStatus
  }
  console.log(processedUser);
  processedUsers.push(processedUser);

  console.log(processedUsers);
} */

// Indata: array med användarobjekt
const users: { id: number, name: string, age: string, isActive: boolean }[] = [
    { id: 1, name: "Alice", age: "28", isActive: true },
    { id: 2, name: "Bob", age: "35", isActive: false },
    { id: 3, name: "Charlie", age: "22", isActive: true }
];

// Skapa en tom array för bearbetade användare
const accounts: { id: number, name: string, age: number, isActive: boolean }[] = [];

// Loopa igenom användarna
for (const user of users) {
    // Konvertera ålder från string till number
    const ageNumber = parseInt(user.age);

    // Om användaren är aktiv, gör namnet till versaler
    let userName = user.name;
    if (user.isActive) {
        userName = user.name.toUpperCase();
    }

    // Skapa nytt bearbetat objekt
    const newAccount = {
        id: user.id,
        name: userName,
        age: ageNumber,
        isActive: user.isActive
    };

    // Lägg till det bearbetade objektet i accounts-arrayen
    accounts.push(newAccount);
}

// Skriv ut hela bearbetade arrayen
console.log(accounts);

// Skriv ut varje användare på ny rad i läsbart format
for (const user of accounts) {
    console.log(`user ID: ${user.id}, name: ${user.name}, age: ${user.age}, status: ${user.isActive}`);
}