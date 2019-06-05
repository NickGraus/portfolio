let userName;
let eightBall;
let userQuestion;
let randomNumber = Math.floor(Math.random() * 8);

function othername() {
    userName = document.forms["form"]["userName"].value;
    userQuestion = document.forms["form"]["userQuestion"].value;
    console.log(userQuestion);

    if(userQuestion == null || userQuestion == "") {
      document.getElementById('naam').innerHTML = "Je hebt geen vraag ingevuld!";
    } else {
      document.getElementById('naam').innerHTML = "Hallo " + userName + "!";

      document.getElementById('vraag').innerHTML = "Jouw vraag is: " + userQuestion;

      switch (randomNumber) {
        case (0):
          eightBall = "Het is zeker";
          break;
        case (1):
          eightBall = "Absoluut";
          break;
        case (2):
          eightBall = "Dit is een beetje vaag, probeer opnieuw";
          break;
        case (3):
          eightBall = "Kan het momenteel niet voorspellen";
          break;
        case (4):
          eightBall = "Ik zou er niet op rekenen";
          break;
        case (5):
          eightBall = "Mijn bron zegt van nee";
          break;
        case (6):
          eightBall = "Het ziet er niet zo goed uit";
          break;
        case (7):
          eightBall = "Uit ziet er wel naar uit";
          break;
      }

      document.getElementById('antwoord').innerHTML = eightBall;
    }


}

// userName ? console.log("Hello, " + userName + "!") : console.log("Hello!");
//
// console.log("You asked: " + userQuestion);
//
// switch (randomNumber) {
//   case (0):
//     eightBall = "it is certain";
//     break;
//   case (1):
//     eightBall = "It is decidedly so";
//     break;
//   case (2):
//     eightBall = "Reply hazy try again";
//     break;
//   case (3):
//     eightBall = "Cannot predict now";
//     break;
//   case (4):
//     eightBall = "Do not count on it";
//     break;
//   case (5):
//     eightBall = "My sources say no";
//     break;
//   case (6):
//     eightBall = "Outlook not so good";
//     break;
//   case (7):
//     eightBall = "Signs point to yes";
//     break;
// }
//
// console.log(eightBall);
