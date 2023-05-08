const iconDivClick = document.getElementById("iconDivClick");
const agencyInfoListMobil = document.getElementById("agencyInfoListMobil");


iconDivClick.addEventListener("click", function () {
  agencyInfoListMobil.classList.toggle("navClickStyle");
});



// 20 ci sectiondki click hadisesi
// birinci div
const downIconOne = document.getElementById("downIconOne");
const upIconOne = document.getElementById("upIconOne");
const iconDivClickProssesFirst = document.getElementById("iconDivClickProssesFirst");
const hiddenTextFirst = document.getElementById("hiddenTextFirst");
const divHeight = document.getElementById("divHeight");

iconDivClickProssesFirst.addEventListener("click",function(){
  iconDivClickProssesFirst.classList.toggle("section20ClickProsses") ;
  divHeight.classList.toggle("uzunluqArtir") ;      
  hiddenTextFirst.classList.toggle("displayNoneBlock"); 
  
});

// ikinci div
const downIconTwo = document.getElementById("downIconTwo");
const upIconTwo = document.getElementById("upIconTwo");
const divHeightTwo = document.getElementById("divHeightTwo");
const hiddenTextSecond = document.getElementById("hiddenTextSecond");

const iconDivClickProssesSecond = document.getElementById("iconDivClickProssesSecond");
iconDivClickProssesSecond.addEventListener("click",function(){
  iconDivClickProssesSecond.classList.toggle("section20ClickProssesTwo") ; 
  divHeightTwo.classList.toggle("uzunluqArtir") ;      
  hiddenTextSecond.classList.toggle("displayNoneBlock");         
});

// 3 cu div


const downIconThree = document.getElementById("downIconThree");
const upIconThree = document.getElementById("upIconThree");
const iconDivClickProssesThird = document.getElementById("iconDivClickProssesThird");
const divHeightThree = document.getElementById("divHeightThree");
const hiddenTextThrid = document.getElementById("hiddenTextThrid");
iconDivClickProssesThird.addEventListener("click",function(){
  iconDivClickProssesThird.classList.toggle("section20ClickProssesThree") ;
  divHeightThree.classList.toggle("uzunluqArtir") ;      
  hiddenTextThrid.classList.toggle("displayNoneBlock");          
});

// 4 cu div
const downIconFour = document.getElementById("downIconFour");
const upIconFour = document.getElementById("upIconFour");
const iconDivClickProssesFourth = document.getElementById("iconDivClickProssesFourth");
const divHeightFour = document.getElementById("divHeightFour");
const hiddenTextFourth = document.getElementById("hiddenTextFourth");

console.log(hiddenTextFirst);
iconDivClickProssesFourth.addEventListener("click",function(){
  iconDivClickProssesFourth.classList.toggle("section20ClickProssesFour") ; 
  divHeightFour.classList.toggle("uzunluqArtir") ;      
  hiddenTextFourth.classList.toggle("displayNoneBlock");    

})


 




