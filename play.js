
var mushrooms = [];
var answer = "";
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var messageDisplay = document.querySelector("#message");


init();

function init(){
    createImages();
    shuffle(mushrooms);
    generateGrid();
    addListeners();
}

//assign source and name to array of images
function createImages(){
    for(var i=0; i<16; i++){
        mushrooms[i] = new Image();
    }

    mushrooms[0].src = 'pic/1.jpg';
    mushrooms[0].name = 'Cantharellus cibarius';
    mushrooms[1].src = 'pic/2.jpg';
    mushrooms[1].name = 'Clathrus ruber';
    mushrooms[2].src = 'pic/3.jpg';
    mushrooms[2].name = 'Tricholoma magnivelare';
    mushrooms[3].src = 'pic/4.jpg';
    mushrooms[3].name = 'Morchella vulgaris';
    mushrooms[4].src = 'pic/5.jpg';
    mushrooms[4].name = 'Amanita muscaria';
    mushrooms[5].src = 'pic/6.jpg';
    mushrooms[5].name = 'Boletus edulis';
    mushrooms[6].src = 'pic/7.jpg';
    mushrooms[6].name = 'Gyromitra esculenta';
    mushrooms[7].src = 'pic/8.jpg';
    mushrooms[7].name = 'Mycena leaiana';
    mushrooms[8].src = 'pic/9.jpg';
    mushrooms[8].name = 'Hydnellum peckii';
    mushrooms[9].src = 'pic/10.jpg';
    mushrooms[9].name = 'Ramaria araiospora';
    mushrooms[10].src = 'pic/11.jpg';
    mushrooms[10].name = 'Grifola frondosa';
    mushrooms[11].src = 'pic/0.jpg';
    mushrooms[11].name = 'Entoloma hochstetteri';
    mushrooms[12].src='pic/12.jpg';
    mushrooms[12].name='Pleurotus ostreatus';
    mushrooms[13].src='pic/13.jpg';
    mushrooms[13].name='Tremella mesenterica';
    mushrooms[14].src='pic/14.jpg';
    mushrooms[14].name='Hericium abietis';
    mushrooms[15].src='pic/15.jpg';
    mushrooms[15].name='Ganoderma lucidum';
}

//shuffle order of images within the array
function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i),
        x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

//create grid with six images
function generateGrid(){
    for(var i=0; i<6; i++){
        document.getElementById(i).appendChild(mushrooms[i])
        .setAttribute("height", "200");
        document.getElementById(i).appendChild(mushrooms[i])
        .setAttribute("width", "200");
        console.log(mushrooms[i].name);
    }
    //randomly select one of the six as the answer to be guessed
    answer = mushrooms[Math.floor(Math.random() * 6)].name;
    document.getElementById("answer").innerHTML = answer;
}

//add click listeners and compare selection with answer
function addListeners(){
    for(var i=0; i<6; i++){
            squares[i].addEventListener("click",function(){
                if(this.firstChild.name ==
                 document.getElementById("answer").firstChild.textContent){
                    messageDisplay.textContent = "You Got It!";
                    resetButton.textContent = "Play Again?";

                } else {
                    messageDisplay.textContent = "Try Again";
                    this.style.opacity = .4;
                }
            });
    }
}

//reset the grid
resetButton.addEventListener("click", function(){
    for(var i=0; i<6; i++){
        document.getElementById(i).removeChild(mushrooms[i]);
        squares[i].style.opacity = 1;
    }
    resetButton.textContent = "New Mushrooms";
    messageDisplay.textContent = "";
    init();
});







