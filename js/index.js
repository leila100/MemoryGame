const time = document.querySelector(".time");
const button = document.querySelector(".addTime");
const moves = document.querySelector(".moves");
const reset = document.querySelector(".reset");
const cards = document.querySelector(".cards");
const card1 = document.querySelector(".card1");

const num = 6;
let m = 0;
let clicks = 0;
let savedColor = null;
let savedCard = null;

// increment time
let t = 0;
let x = setInterval(function() {
  t++;
  time.innerHTML = t;
}, 1000);

reset.addEventListener("click", function(event) {
  t = 0;
  m = 0;
  moves.innerHTML = 0;
  const cardsList = getBoxes(num);
  let boxes = "";
  cardsList.forEach(card => {
    boxes += `<div class='card' onclick="turnCard(this, '${card}')"></div>`;
  });
  cards.innerHTML = `${boxes}`;
  clicks = 0;
  savedColor = null;
  savedCard = null;
});

function getBoxes(num) {
  const colorSet = new Set();
  while (colorSet.size < num) {
    colorSet.add(this.getAllRandomColor());
  }
  const colorList = Array.from(colorSet);
  const shuffleArray = arr => arr.slice().sort(() => Math.random() - 0.5);
  const boxList = shuffleArray([...colorList, ...colorList]);
  return boxList;
}

function getAllRandomColor() {
  const allColors = [
    "Aquamarine",
    "Blue",
    "BlueViolet",
    "BurlyWood",
    "CadetBlue",
    "CornflowerBlue",
    "Crimson",
    "DarkBlue",
    "DarkGoldenRod",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "Darkorange",
    "DarkOrchid",
    "DarkSalmon",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "ForestGreen",
    "Gold",
    "GoldenRod",
    "Green",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Khaki",
    "Lavender",
    "LawnGreen",
    "Lime",
    "Magenta",
    "Maroon",
    "Moccasin",
    "Navy",
    "Olive",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGreen",
    "PaleVioletRed",
    "Peru",
    "Pink",
    "PowderBlue",
    "Purple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "White",
    "Yellow",
    "YellowGreen"
  ];
  let colorIndex = Math.floor(Math.random() * allColors.length);
  return allColors[colorIndex];
}

function turnCard(ele, color) {
  ele.style.backgroundColor = color;
  clicks++;
  if (clicks === 2) {
    m++;
    moves.innerHTML = m;
    if (savedColor === color) {
      ele.style.backgroundColor = color;
      savedCard = null;
      savedColor = null;
      clicks = 0;
    } else {
      setTimeout(() => {
        savedCard.style.backgroundColor = "black";
        ele.style.backgroundColor = "black";
        savedCard = null;
        savedColor = null;
        clicks = 0;
      }, 1000);
    }
  } else if (clicks === 1) {
    savedCard = ele;
    savedColor = color;
  }
}

const cardsList = getBoxes(num);
let boxes = "";
cardsList.forEach(card => {
  boxes += `<div class='card' onclick="turnCard(this, '${card}')"></div>`;
});
cards.innerHTML = `${boxes}`;
