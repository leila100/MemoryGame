const time = document.querySelector(".time");
const button = document.querySelector(".addTime");
const moves = document.querySelector(".moves");
const reset = document.querySelector(".reset");
const cards = document.querySelector(".cards");
const card1 = document.querySelector(".card1");

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
});

const num = 24;

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
    "AliceBlue",
    "Aquamarine",
    "Azure",
    "Beige",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Crimson",
    "DarkBlue",
    "DarkGoldenRod",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "Darkorange",
    "DarkOrchid",
    "DarkSalmon",
    "DarkSeaGreen",
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
    "Fuchsia",
    "Gainsboro",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Khaki",
    "Lavender",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "Lime",
    "LimeGreen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "Moccasin",
    "Navy",
    "Olive",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
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
    "SlateGrey",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen"
  ];
  let colorIndex = Math.floor(Math.random() * allColors.length);
  return allColors[colorIndex];
}

const cardsList = getBoxes(num);
// card1.innerHTML = cardsList[0].color;
// cardsList.map(card => card1.insertAdjacentHTML("afterend", `<div>${card.color}</div>`));
let boxes = "";
cardsList.forEach(card => {
  const style = `background-color:${card.color};`;
  boxes += `<div class='card' style=${style}>${card.color}</div>`;
});
cards.innerHTML = `${boxes}`;
