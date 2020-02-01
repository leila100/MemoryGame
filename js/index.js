const time = document.querySelector(".time");
const button = document.querySelector(".addTime");
const moves = document.querySelector(".moves");
const reset = document.querySelector(".reset");
const cards = document.querySelector(".cards");
const card1 = document.querySelector(".card1");

const num = 24;

// increment time
let t = 0;
let x = setInterval(function() {
  t++;
  time.innerHTML = t;
}, 1000);

let m = 0;
button.addEventListener("click", function(event) {
  m++;
  moves.innerHTML = m;
});

reset.addEventListener("click", function(event) {
  t = 0;
  m = 0;
  moves.innerHTML = 0;
  const cardsList = getBoxes(num);
  let boxes = "";
  cardsList.forEach(card => {
    const style = `background-color:${card.color};`;
    boxes += `<div class='card' style=${style}>${card.color}</div>`;
  });
  cards.innerHTML = `${boxes}`;
});

function getBoxes(num) {
  const colorSet = new Set();
  while (colorSet.size < num) {
    colorSet.add(this.getAllRandomColor());
  }
  const colorList = Array.from(colorSet);
  const shuffleArray = arr => arr.slice().sort(() => Math.random() - 0.5);
  const boxColorList = shuffleArray([...colorList, ...colorList]);
  const boxList = boxColorList.map((color, id) => ({ color, id, show: false }));
  return boxList;
}

function getAllRandomColor() {
  const allColors = [
    "Aquamarine",
    "Black",
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

const cardsList = getBoxes(num);
let boxes = "";
cardsList.forEach(card => {
  const style = `background-color:${card.color};`;
  boxes += `<div class='card' style=${style}>${card.color}</div>`;
});
cards.innerHTML = `${boxes}`;
