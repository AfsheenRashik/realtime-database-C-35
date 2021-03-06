var ball;
var database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    // .ref is used to create reference to the location of the database value 
    var ballP = database.ref('Ball/position')
    //.on function creates listener which keeps listening to the changes in the database 
    ballP.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}
//writing back to database
function changePosition(x,y){
    //set is used to set value in the database
    database.ref('Ball/position').set({
        x:position.x+x,
        y:position.y+y
    })
}

function readPosition(data){
    // val is used to retrieve data from the database
position = data.val();
ball.x = position.x
ball.y = position.y


}