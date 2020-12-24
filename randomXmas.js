
var backgroundNo = 5;
var backNo = Math.floor(Math.random() * backgroundNo) + 1;
console.log(backNo);

//set the background image
function background () {
    var backContainer = document.getElementById("overallContainer");
    backContainer.style.backgroundImage="url('./background" +backNo+ ".jpg')";
    backContainer.style.backgroundRepeat = "no-repeat";
    backContainer.style.backgroundSize = "auto 100%";
    backContainer.style.backgroundPosition = "center";
}
background();


//random donkey picture
function addDonkeys () {
    var picCount = 3;
    var selectDonkey = Math.floor(Math.random()*picCount)+1;
    var mySrc = ".//donkey" + selectDonkey + ".png";
    var myImg = document.createElement("img");
    myImg.setAttribute("src",mySrc);
    myImg.style.height="inherit";
    myImg.style.width="auto";
    var theDiv = document.getElementById("twoDonkeys");
    theDiv.appendChild(myImg);
}
addDonkeys ();


//random frames
function addFrames () {
    var picCount = 4;
    var selectFrame = Math.floor(Math.random()*picCount)+1;
    var mySrc = "frame" + selectFrame;
    var trans = document.getElementById(mySrc);
    trans.style.opacity="1";
}
addFrames ();


//Angel on the tree
function angelSquid () {
    var angelCount = 8;
    var selectAngel = Math.floor(Math.random()*angelCount)+1;
    if ((selectAngel ===4)||(selectAngel ===8)) {
        var mySrc = ".//squid2.png";
        var myImg = document.createElement("img");
        myImg.setAttribute("src",mySrc);
        myImg.style.height="auto";
        myImg.style.width="inherit";
        var theDiv = document.getElementById("treetopSquid");
        theDiv.appendChild(myImg); 
        theDiv.style.transform= 'rotate(212deg)';
        theDiv.style.margin = 'auto';    
    }
    else {
        var mySrc = "./angel1.png";
        var myImg = document.createElement("img");
        myImg.setAttribute("src",mySrc);
        myImg.style.height="auto";
        myImg.style.width="inherit";
        var theDiv = document.getElementById("treetopAngel");
        theDiv.appendChild(myImg); 
        theDiv.style.margin = 'auto';     
    } }
angelSquid();



//var shorizontal = Math.floor(Math.random() * 700) + 1;
//var svertical = Math.floor(Math.random() * 700) + 1;
var sFish = Math.floor(Math.random() * 360) + 1;
var sRobin = Math.floor(Math.random() * 120) + -70;
//squid or robin
function squidRobin () {
    var robinCount = 8;
    var selectRobin = Math.floor(Math.random()*robinCount)+1;
    //if ((selectRobin ===4)||(selectRobin ===8)) {
        //var mySrc = ".//squid2.png";
        //var myImg = document.createElement("img");
        //myImg.setAttribute("src",mySrc);
        //myImg.style.height="auto";
        //myImg.style.width="inherit";
        //var theDiv = document.getElementById("squid");
        //theDiv.appendChild(myImg); 
        //theDiv.style.transform= 'rotate(' +sFish+ 'deg)';
        //theDiv.style.margin = 'auto';    }

        var mySrc = ".//robin.png";
        var myImg = document.createElement("img");
        myImg.setAttribute("src",mySrc);
        myImg.style.height="auto";
        myImg.style.width="inherit";
        var theDiv = document.getElementById("robin");
        theDiv.appendChild(myImg); 
        theDiv.style.transform= 'rotate(' +sRobin+ 'deg)';
        theDiv.style.margin = 'auto';     
    } 
squidRobin();

//random squid



//function squidRotate () {  
    //var srotate = document.getElementById("squid");
    //srotate.style.left= +shorizontal+ 'px';
    //srotate.style.bottom= +svertical+ 'px';
    
    
    //srotate.style.transform= 'translate(50px,-50px)';}
//squidRotate ();



//Position container donkey randomly and rotate



function randomScatter () { 
        var donkeyHorizontal = Math.floor(Math.random() * 200) + 1;
        var donkeyVertical = Math.floor(Math.random() * 500) + 1;
        var donkeyPlace = Math.floor(Math.random() * 360) + 1;
        var mySrc = "./" +myName+ "4.png";
        var myImg = document.createElement("img");
        myImg.setAttribute("src",mySrc);
        myImg.style.height="auto";
        myImg.style.width="inherit";
        var theDiv = document.getElementById("lisa" +myName ); 
        theDiv.appendChild(myImg); 
        theDiv.style.transform= 'rotate(' +donkeyPlace+ 'deg)';
        //theDiv.style.margin = 'auto';  
        theDiv.style.position = "absolute";  
        theDiv.style.left= +donkeyHorizontal+ 'px';
        theDiv.style.bottom= +donkeyVertical+ 'px';
    }
    
for (let i=1; i<3; i++) {console.log (i);};
    if (i=1) {
        var myName = "donkey";
        randomScatter ();
    }
    if (i=2) {
        var myName = "sheep";
        randomScatter (); 
    };






//position single stars
var starhorizontal = Math.floor(Math.random() * 300) + 1;
var starvertical = Math.floor(Math.random() * 300) + 1;

function stars() {    
    var place = document.getElementById("star");
    place.style.left= +starhorizontal+ 'px';
    place.style.top= +starvertical+ 'px';
    //place.style= 'width:2px; height:2px; background-color:white';
}
 stars (); 


//draw multiple stars
 function drawSquare (canvas, context, color) {
    for(let i=0; i<300; i++) {
        var x = Math.floor(Math.random() * 900);
        var y= Math.floor(Math.random() * 400);
        context.fillStyle=color;
        context.fillRect(x,y,1,1);
}}
let sky=document.getElementById('starCanvas');

drawSquare(sky,starCanvas.getContext('2d'),('white'));
sky.style.paddingBottom="800px";





//layers of snowflakes
    
function snowflakeLayer () {
    for (let j=1; j<4; j++) {
        for(let i=0; i<5; i++) 
        if ((i ===0)||(i ===1)) {                 
            var x = Math.floor(Math.random() * 900);
            var y= Math.floor(Math.random() * 600);
            var flakes = document.createElement("img");
            flakes.src="./snowflake" +j+".png";
            var across = Math.floor(Math.random() * 900);
            var down = Math.floor(Math.random() * 900);
            document.getElementById("flake1").appendChild(flakes);
            flakes.style.position= "absolute";
            flakes.style.left= x+ 'px';
            flakes.style.bottom= y+ 'px';
            flakes.width="70";
            flakes.height="72";  
            }
            else {
                var x = Math.floor(Math.random() * 900);
                var y= Math.floor(Math.random() * 400);
            var flakes = document.createElement("img");
            flakes.src="./snowflake" +j+".png";
            var across = Math.floor(Math.random() * 900);
            var down = Math.floor(Math.random() * 900);
            document.getElementById("flake1").appendChild(flakes);
            flakes.style.position= "absolute";
            flakes.style.left= x+ 'px';
            flakes.style.bottom= y+ 'px';
            flakes.width="40";
            flakes.height="42";
            };
            
            for (i=1; i<5; i++) {
            var variable = i;
            var deleteM = document.getElementById('molecule' + variable);
            deleteM.style.background= "none";}
            
        }     
    };

    // position random molecules



function randomMolecule () {
    for (i=1; i<5; i++) {
        console.log (i);
        var extra = i;
        var moleculeH = Math.floor(Math.random() * 600) + 1;
        var moleculeV = Math.floor(Math.random() * 600) + 1;
        var place = document.getElementById("molecule"+extra);
        place.style.left= +moleculeH +'px';
        place.style.bottom= +moleculeV+ 'px';
    }
};

var precipCount = 12;
var snowMolecule = Math.floor(Math.random()*precipCount)+1;
console.log (snowMolecule);

if (snowMolecule<7) {   
    snowflakeLayer ()}
else {
    randomMolecule() };



//To rotate yucca by random amount
//var yuccaP = Math.floor(Math.random() * 90) + 1;

//function randomRotate () {
//    var rotate = document.getElementById("plant-box");
//    rotate.style.transform= 'rotate(' +yuccaP+ 'deg)';
//    rotate.style.margin= 'auto';}
//randomRotate ();


//Refresh page by just clicking
document.addEventListener("click", function(){
    location.reload();
});