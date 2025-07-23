
//target all elements to save to constants
//Var for pages
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const hamBtn = document.querySelector("#hamIcon");
const navigation = document.querySelector("nav");
var allpage =document.querySelectorAll(".page");
var backiconBtns =document.querySelectorAll(".backIcon");

//Var for Minigame
const minigameWindow=document.querySelector("#Minigame");
const resultscreen=document.querySelector("#resultScreen");
const character =document.querySelector("#character");
const startMinigameButton=document.querySelector("#PlayMinigame");
const AnswersBtn = document.querySelectorAll(".AnswerBtn");
const imgAnswers = document.querySelectorAll(".AnswerBtn img");
const questions = document.querySelector("#questions");
const scoretext = document.querySelector("#score");
const correctPrompt = document.querySelector("#correct");
const wrongPrompt = document.querySelector("#wrong");
const ranktext = document.querySelector("#displayRank");
const totalscoretext = document.querySelector("#displayScore");
var scorevalue;
var turns;
var correctAnswerId; //use this to set the correct answer
var randomNum; //randomizeQuestion
var buttonIsSet = false;
let idleInterval; // to store the interval ID


//Var for Shows about Pizza
var poster =document.querySelectorAll(".poster");
const showTitle =document.querySelector("#ShowTitle");
const showDesc =document.querySelector("#ShowDesc");
const showImage = document.querySelector('#CurrentShow img');
var minigameHasStarted = false;

//Init
minigameWindow.style.display = "none";
resultscreen.style.display = "none";
correctPrompt.style.display = "none";
wrongPrompt.style.display = "none";

PlayImageFade();
startMinigameButton.addEventListener("click", startMinigame);

//set all BackToHomeButtons and PosterButtons
for (let onebackbtn of backiconBtns)
{
onebackbtn.addEventListener("click",hideallandShowMinigameButton);
}

for (let i = 0; i <= 5; i++) {
  poster[i].addEventListener("click", function(){DisplayThisPoster(i)});
}


//This function is to change the Images, Title, desc in the Shows aboout Pizza Page
function DisplayThisPoster(shownum) {
  switch (shownum) {
    case 0:
      showImage.src = "images/reallydoughLandscape.png";
      showTitle.innerHTML = "Really Dough?";
      showDesc.innerHTML = "Really Dough? is a web series from Thrillist where Mark Iacono, a pizza traditionalist, and Scott Wiener, a pizza enthusiast, explore the definition of pizza by trying unconventional toppings and preparations. The show highlights their contrasting views, with Mark adhering to strict rules (sauce, cheese, dough) and Scott embracing creative interpretations. The series delves into whether these experimental pizzas, like kimchi pizza or deep-dish, truly qualify as pizza.";

      break;

    case 1:

      showImage.src = "images/OneBiteLandscape.png";
      showTitle.innerHTML = "One Bite";
      showDesc.innerHTML = "The One Bite Pizza Show, hosted by Dave Portnoy of Barstool Sports, is a daily review series where Portnoy tries a pizza from a different place and gives it a rating, typically on a scale of 1 to 10. The show, often referred to as One Bite Pizza Reviews, is known for its everybody knows the rules catchphrase and for featuring a wide variety of pizzerias, from local favorites to renowned establishments. The reviews are known for their directness and often humorous commentary.";

      
      break;

    case 2:
      showImage.src = "images/PizzaShowLandscape.png";
      showTitle.innerHTML = "The Pizza Show";
      showDesc.innerHTML = "The Pizza Show is a documentary series hosted by Frank Pinello, owner of Best Pizza in Brooklyn, that explores the world of pizza. Pinello travels to different cities and countries, meeting the people who make and eat pizza, while also sampling various styles and regional variations. The show delves into the culture, history, and passion behind the popular dish, showcasing both traditional and innovative approaches to pizza making.";
      break;

    case 3:
      showImage.src = "images/ChefTablePizzaLandscape.png";
      showTitle.innerHTML = "Chef's Table: Pizza";
      showDesc.innerHTML = "Chef's Table: Pizza is a Netflix docuseries that explores the artistry and passion behind pizza-making, showcasing diverse chefs who elevate the dish to an art form. The series features chefs from various locations, including Naples, New York City, and Phoenix, and delves into their unique flavors, inspiring backgrounds, and dedication to crafting the perfect slice.";
break;
    case 4:
      showImage.src = "images/PizzaBoysLandscape.png";
      showTitle.innerHTML = "Pizza Boys";
      showDesc.innerHTML = "Pizza Boys is a BBC series that follows two best friends, Jez and Ieuan, as they travel across Europe in their van, Smokey Pete, aiming to compete in the World Pizza Championships in Parma, Italy";
      break;

    case 5:
      showImage.src = "images/SlicedLandscape.png";
      showTitle.innerHTML = "Sliced";
      showDesc.innerHTML = "Sliced is a television series where everyday objects are literally sliced in half to reveal their inner workings. The show was hosted by John McCalmont and Budd Kelley, and it aimed to demonstrate how things function by dismantling them layer by layer. The show premiered on the History Channel on April 22, 2010.";
      break;
  }

  //Poster Landscape Animation
  PlayImageFade();

}

function PlayImageFade(){

  showImage.classList.add("LandscapePoster");

  setTimeout(function(){
      showImage.classList.remove("LandscapePoster");
  }, 500)

}

function hideall(){ //function to hide all pages
    for (let onepage of allpage){
      onepage.style.display="none";
    }
}

function hideallandShowMinigameButton(){ //function to hide all pages
    for (let onepage of allpage){
      onepage.style.display="none";
    }
startMinigameButton.style.display = "flex";
resultscreen.style.display = "none";
navigation.style.display = "flex";

}

function startMinigame()
{
  minigameWindow.style.display = "flex";
startMinigameButton.style.display = "none";
navigation.style.display = "none";

   //SetButtons
   if(buttonIsSet == false){
    AnswersBtn[0].addEventListener("click", function(){SelectAnswer(0)});
    AnswersBtn[1].addEventListener("click", function(){SelectAnswer(1)});
    AnswersBtn[2].addEventListener("click", function(){SelectAnswer(2)});
    AnswersBtn[3].addEventListener("click", function(){SelectAnswer(3)});
    buttonIsSet = true;
   }
scorevalue = 0;
score.innerHTML = parseInt(scorevalue) + "/10";

turns = 0;
randomNum = Math.floor(Math.random() * 8);
GenerateQuestion(randomNum);
clearInterval(idleInterval);

characterState(0);
}

function showPage(pagenum){
    hideall();
    let onepage = document.querySelector("#page" + pagenum);
    onepage.style.display="flex";
startMinigameButton.style.display = "none";
}

function GenerateQuestion(rdmQuestion)
{

  switch (rdmQuestion)
  {
    case 0:
        //SetQuestion
    correctAnswerId = 1;
    questions.innerHTML = "Show me a picture of a Hawaiian Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza1.png";
    imgAnswers[1].src = "images/Pizzas/Pizza9.png";
    imgAnswers[2].src = "images/Pizzas/Pizza8.png";
    imgAnswers[3].src = "images/Pizzas/Pizza3.png";

      break;

    case 1:
        //SetQuestion
    correctAnswerId = 3;
    questions.innerHTML = "Show me a picture of a St. Louis-Style Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza1.png";
    imgAnswers[1].src = "images/Pizzas/Pizza3.png";
    imgAnswers[2].src = "images/Pizzas/Pizza2.png";
    imgAnswers[3].src = "images/Pizzas/Pizza8.png";

      break;

    case 2:
        //SetQuestion
    correctAnswerId = 2;
    questions.innerHTML = "Show me a picture of a California-Style Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza2.png";
    imgAnswers[1].src = "images/Pizzas/Pizza6.png";
    imgAnswers[2].src = "images/Pizzas/Pizza7.png";
    imgAnswers[3].src = "images/Pizzas/Pizza4.png";

      break;

    case 3:
        //SetQuestion
    correctAnswerId = 0;
    questions.innerHTML = "Show me a picture of a Neapolitan Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza1.png";
    imgAnswers[1].src = "images/Pizzas/Pizza3.png";
    imgAnswers[2].src = "images/Pizzas/Pizza8.png";
    imgAnswers[3].src = "images/Pizzas/Pizza2.png";

      break;

    case 4:
        //SetQuestion
    correctAnswerId = 2;
    questions.innerHTML = "Show me a picture of a New York-Style Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza1.png";
    imgAnswers[1].src = "images/Pizzas/Pizza3.png";
    imgAnswers[2].src = "images/Pizzas/Pizza2.png";
    imgAnswers[3].src = "images/Pizzas/Pizza6.png";

      break;

    case 5:
        //SetQuestion
    correctAnswerId = 3;
    questions.innerHTML = "Show me a picture of a Sicilian Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza3.png";
    imgAnswers[1].src = "images/Pizzas/Pizza5.png";
    imgAnswers[2].src = "images/Pizzas/Pizza7.png";
    imgAnswers[3].src = "images/Pizzas/Pizza4.png";

      break;
    case 6:
       //SetQuestion
    correctAnswerId = 0;
    questions.innerHTML = "Show me a picture of a Neapolitan Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza1.png";
    imgAnswers[1].src = "images/Pizzas/Pizza3.png";
    imgAnswers[2].src = "images/Pizzas/Pizza8.png";
    imgAnswers[3].src = "images/Pizzas/Pizza2.png";

      break;
    case 7:
    //SetQuestion
    correctAnswerId = 3;
    questions.innerHTML = "Show me a picture of a Detroit Style Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza4.png";
    imgAnswers[1].src = "images/Pizzas/Pizza7.png";
    imgAnswers[2].src = "images/Pizzas/Pizza3.png";
    imgAnswers[3].src = "images/Pizzas/Pizza5.png";

    break;
    case 8:
    //SetQuestion
    correctAnswerId = 2;
    questions.innerHTML = "Show me a picture of a Deep Dish Pizza"
    //SetImage
    imgAnswers[0].src = "images/Pizzas/Pizza1.png";
    imgAnswers[1].src = "images/Pizzas/Pizza2.png";
    imgAnswers[2].src = "images/Pizzas/Pizza3.png";
    imgAnswers[3].src = "images/Pizzas/Pizza4.png";
    break;
  
  }


}

function loopingIdleAnimation() {
  let index = 1;
  character.src = "images/Idle" + index + ".png";

  idleInterval = setInterval(() => {
    index = index >= 3 ? 1 : index + 1;
    character.src = "images/Idle" + index + ".png";
  }, 300);
}

function characterState(state) {

  switch (state) {
    case 0:
      loopingIdleAnimation();
      break;

    case 1:
      character.src = "images/Correct.png";
clearInterval(idleInterval);
      break;
    case 2:
      character.src = "images/Wrong.png";
clearInterval(idleInterval);

      break;
  }
}


function SelectAnswer(answerId) {
  if (turns < 10){
  if (answerId === correctAnswerId)
  {
    correctPrompt.style.display = "flex";
    scorevalue++;
    score.innerHTML = parseInt(scorevalue) + "/10";
    characterState(1);

    setTimeout(function () {
      correctPrompt.style.display = "none";
   
    characterState(0);
      

    }, 500);

  } 
  else {
    
        wrongPrompt.style.display = "flex";
    characterState(2);

         setTimeout(function () {
      wrongPrompt.style.display = "none";
 
    characterState(0);
      

    }, 500);

  }
  turns++;

  randomNum = Math.floor(Math.random() * 8);
  GenerateQuestion(randomNum);
}
else{
resultscreen.style.display = "flex";
minigameWindow.style.display = "none";
clearInterval(idleInterval);


    totalscoretext.innerHTML = parseInt(scorevalue) + "/10";
    if (scorevalue >= 2){
      ranktext.innerHTML = "D";
    }
      if (scorevalue >= 4){
      ranktext.innerHTML = "C";
    }
      if (scorevalue >= 6){
      ranktext.innerHTML = "B";
    }
      if (scorevalue >= 8){
      ranktext.innerHTML = "A";
    }
      if (scorevalue >= 10){
      ranktext.innerHTML = "S";
    }

}
}



/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
showPage(1);
});
page2btn.addEventListener("click", function () {
showPage(2);

});
page3btn.addEventListener("click", function () {
showPage(3);

});
hideall(); //call hideall function to hide all pages



const menuItemsList=document.querySelector("nav ul");
hamBtn.addEventListener("click",toggleMenus);

function toggleMenus(){ 

menuItemsList.classList.toggle("menuShow");

if(menuItemsList.classList.contains("menuShow")){
hamBtn.innerHTML="Close Menu"; //change button text to chose menu
}else{ //if menu NOT showing
hamBtn.innerHTML="Open Menu"; //change button text open menu

}

}



document.addEventListener('keydown', function (kbEvt) {
//kbEvt: an event object passed to callback function
console.log(kbEvt); //see what is returned
if (kbEvt.code === "ArrowRight"){
MovePos(10,0);
}
if (kbEvt.code === "ArrowLeft"){
MoveLeft(-10, 0);
}
if (kbEvt.code === "ArrowDown"){
MovePos(0, 10);
}
if (kbEvt.code === "ArrowUp"){
MovePos(0, -10);
}
//Better option: use switch case instead
});

