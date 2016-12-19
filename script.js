r_text =[];
r_color =[];
myURL = ""
var i;
var j;
// all the quotes listed
var textObj = [
  {
    quote: "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    author: "Groucho Marx"
  },
  {
    quote: "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
    author: "Edsger W. Dijkstra"
  },
  {
    quote: "Wait a minute, wait a minute. You ain't heard nothin' yet!",
    author: "The Jazz Singer"
  },
  {
    quote: "Play it, Sam. Play 'As Time Goes By.'",
    author: "Casablanca"
  },
  {
    quote: "An inconvenience is only an adventure wrongly considered; an adventure is an inconvenience rightly considered.",
    author: "Gilbert Keith Chesterton"
  },
  {
    quote: "I'm living so far beyond my income that we may almost be said to be living apart.",
    author: "e e cummings"
  },
  {
    quote: "E.T. phone home.",
    author: "E.T. The Extra-Terrestrial"
  },
  {
    quote: "Hasta la vista, baby.",
    author: "Terminator 2: Judgment Day"
  },
  {
    quote: "Mother of mercy, is this the end of Rico?",
    author: "Little Caesar"
  },
  {
    quote: "Soylent Green is people!",
    author: "Soylent Green"
  },
];

var colorArr = [
"#F39C12",
"#9B59B6",
"#27AE60",
"#77B1A9",
"#342224",
"#16A085",
"#FB6964",
];

function randomize(){
  var prevI = i;
  i = Math.random();
  i = textObj.length * i;
  i = Math.floor(i);
  var prevJ = j;
  j = Math.random();
  j = colorArr.length * j;
  j = Math.floor(j);
  if(prevI == i || prevJ == j) randomize();
}

function next() {
randomize();
//getting quote and color variable
quote = textObj[i].quote;
author = textObj[i].author;
color = colorArr[j];
// applying to the page
document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = "- " + author;
$("body").css("background",color);
$("h1").css("color",color);
$("#author").css("color",color);
$(".twitter").css("background",color);
$(".next").css("background",color);

//changing twitter URL
myURL = "https://twitter.com/intent/tweet?hashtags=yashgulati&related=yashgulati&text=" + quote;
 };



//twitter
function tweet() {
  var win = window.open(myURL, '_blank');
  if(win) win.focus();
  else alert('Please allow popups for this site');
}
