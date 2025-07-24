
//target all elements to save to constants
//Var for pages
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const hamBtn = document.querySelector("#hamIcon");
const navigation = document.querySelector("nav");
var allpage =document.querySelectorAll(".page");
const clickSound = new Audio('audio/Click.wav');
const posterSound = new Audio('audio/posterClick.wav');
const pageSound = new Audio('audio/pageClick.wav');

//var for page 2
const pizzaNametext=document.querySelector("#pizzanameInfo");
const crustInfotext=document.querySelector("#crustInfo");
const toppingInfotext=document.querySelector("#toppingInfo");

const backBtn=document.querySelector("#backBtn");
const nextBtn=document.querySelector("#nextBtn");

var onePizzabtn=document.querySelectorAll(".pizzaBtn");
var onePizzaImg=document.querySelector("#pizzaImg");
var index;
var pizzaIndex = 1;

//var for page 3
var poster =document.querySelectorAll(".poster");
const showTitle =document.querySelector("#ShowTitle");
const showDesc =document.querySelector("#ShowDesc");
const showImage = document.querySelector('#CurrentShow');



//Init

for (let i = 0; i < onePizzabtn.length; i++) {
  onePizzabtn[i].addEventListener("click", function () {
    DisplayThisPizzaInfo(i + 1);
    
  });
}

 nextBtn.addEventListener("click", function () {
    NextPizza();
  });

  backBtn.addEventListener("click", function () {
    BackPizza();
  });

  for (let i = 0; i <= 5; i++) {
  poster[i].addEventListener("click", function(){DisplayThisPoster(i)});
}








//This function is to change the Images, Title, desc in the Shows aboout Pizza Page


function hideall(){ //function to hide all pages
    for (let onepage of allpage){
      onepage.style.display="none";
    }
}




function showPage(pagenum){
    hideall();
    let onepage = document.querySelector("#page" + pagenum);
    onepage.style.display="flex";
   pageSound.play();
    
    
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

//Display Pizza Info
function DisplayThisPizzaInfo(id)
{
//change pizza Image
   onePizzaImg.src = "images/Pizzas/Pizza"+id+".png"
   clickSound.play();

   switch (id)
   {
case 1:
   pizzaNametext.innerHTML = "Neapolitan Pizza (Italy)";
   crustInfotext.innerHTML = "Thin, soft, slightly charred; puffy edges";
   toppingInfotext.innerHTML = "Tomatoes, mozzarella di bufala, basil, olive oil";
break;
case 2:
   pizzaNametext.innerHTML = "New York-Style Pizza (USA)";
   crustInfotext.innerHTML = "Large, thin, and foldable; crisp edges";
   toppingInfotext.innerHTML = "Tomato sauce, mozzarella, various meats and veggies";
break;
case 3:
   pizzaNametext.innerHTML = "Chicago Deep-Dish Pizza (USA)";
   crustInfotext.innerHTML = "Deep, buttery, pie-like crust";
   toppingInfotext.innerHTML = "Cheese on bottom, then meat/veggies, chunky tomato sauce on top";
break;
case 4:
   pizzaNametext.innerHTML = "Sicilian Pizza (Italy / USA)";
   crustInfotext.innerHTML = "Thick, square, focaccia-style";
   toppingInfotext.innerHTML = "Tomato sauce, mozzarella, herbs; sometimes anchovies";
break;
case 5:
   pizzaNametext.innerHTML = "Detroit-Style Pizza (USA)";
   crustInfotext.innerHTML = "Thick, rectangular, crispy cheesy edges";
   toppingInfotext.innerHTML = "Wisconsin brick cheese, sauce ladled on top";
break;
case 6:
   pizzaNametext.innerHTML = "California-Style Pizza (USA)";
   crustInfotext.innerHTML = "Thin and crisp";
   toppingInfotext.innerHTML = "Gourmet and fresh (arugula, goat cheese, smoked salmon, etc.)";
break;
case 7:
   pizzaNametext.innerHTML = "Greek Pizza (USA)";
   crustInfotext.innerHTML = "Oily, chewy, pan-cooked";
   toppingInfotext.innerHTML = "Tomato sauce with oregano, feta, olives, red onion";
break;
case 8:
   pizzaNametext.innerHTML = " St. Louis-Style Pizza (USA)";
   crustInfotext.innerHTML = "Ultra-thin, cracker-like";
   toppingInfotext.innerHTML = "Provel cheese (cheddar + Swiss + provolone)";
break;
   }

   
}

function NextPizza() 
{
  if (pizzaIndex < 8){
  pizzaIndex = parseInt(pizzaIndex) + 1;
  DisplayThisPizzaInfo(pizzaIndex);
  console.log(pizzaIndex);
  }
}

function BackPizza() 
{
  if (pizzaIndex > 1){
  pizzaIndex = parseInt(pizzaIndex) - 1;
  DisplayThisPizzaInfo(pizzaIndex);
  console.log(pizzaIndex);
  }
}

//Display Poster
function DisplayThisPoster(shownum) {

   posterSound.play();

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

PlayImageFade();
}

function PlayImageFade(){

  showImage.classList.add("LandscapePoster");

  setTimeout(function(){
      showImage.classList.remove("LandscapePoster");
  }, 500)

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

