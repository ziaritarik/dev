
window.onload= function(){

    let canasWidth =900;
    let canvasHeight=600;
    let blockSize=30;
    let ctx;
    let delay=100;
    let snakee;
    let appllee;
    let widthInBlocks=canasWidth/blockSize;
    let heightInBlocks=canvasHeight/blockSize;
    let score;
    let timeout;

    init();

    function init(){
            let canvas = document.createElement('canvas');
            canvas.width=canasWidth;
            canvas.height=canvasHeight;
            canvas.style.border = "30px solid gray";
            canvas.style.margin="50px auto";
            canvas.style.display="block";
            canvas.style.backgroundColor="#ddd"
            document.body.appendChild(canvas);                  
            ctx = canvas.getContext('2d');
            snakee=new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]],"right");
            appllee=new Apple([10,10]);
            score =0;
            refreshCanvas();
        }

    function refreshCanvas(){   
        snakee.advance();
        if(snakee.checkCollision()){
                gameOver();
        }
         else{
            if(snakee.isEatingApple(appllee))
            {
                score ++;
                snakee.ateApple=true;
                do {
                    appllee.setNewPosition(); 
                } while (appllee.isOnSnake(snakee));

               
            }
            ctx.clearRect(0,0,canasWidth,canvasHeight);
            drawScore();
            snakee.draw();
            appllee.draw();
            timeout=setTimeout(refreshCanvas,delay);
        }   

    }

    function gameOver(){
        ctx.save();
        ctx.font = "bold 70px sans-serif";
        ctx.fillStyle = "#000";
        ctx.textAlign = "center";
        ctx.textBaseline="middle";
        ctx.stockStyle= "white";
        ctx.lineWidth=5;
        let centreX=canasWidth/2;
        let centreY=canvasHeight/2;
        ctx.strokeText("Game Over",centreX,centreY-180);
        ctx.fillText("Game Over",centreX,centreY-180);
        ctx.font = "bold 30px sans-serif";
        ctx.strokeText("Appuyer sur La Touche Espace pour Rejouer",centreX,centreY-120);
        ctx.fillText("Appuyer sur La Touche Espace pour Rejouer",centreX,centreY-120);
        ctx.restore();
    }

    function drawScore(){
        ctx.save();
        ctx.font = "bold 200px sans-serif";
        ctx.fillStyle = "gray";
        ctx.textAlign = "center";
        ctx.textBaseline="middle";
        let centreX=canasWidth/2;
        let centreY=canvasHeight/2;
        ctx.fillText(score.toString(),centreX,centreY);
        ctx.restore();
    }

    function restart(){
        snakee=new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]],"right");
        appllee=new Apple([10,10]);
        score =0;
        clearTimeout(timeout);
        refreshCanvas();   
    }

    function drawBlock(ctx,position){
        let x=position[0] * blockSize;
        let y=position[1] * blockSize;
        ctx.fillRect(x,y,blockSize,blockSize);
    }

    function Snake(body,direction)
    {
        this.body=body;
        this.direction =direction;
        this.ateApple=false;
        this.draw=function(){
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(let i=0;i<this.body.length;i++){
                drawBlock(ctx,this.body[i]);
            }
            ctx.restore();
        }

        this.advance=function(){
            let nextPosition=this.body[0].slice();
            switch(this.direction)
            {
                case "left":
                    nextPosition[0] -= 1;
                    break;
                case "right":
                    nextPosition[0] += 1;
                    break;
                case "down":
                    nextPosition[1] += 1;
                    break;
                case "up":
                    nextPosition[1] -= 1;
                    break;
                default:
                    throw("invalid direction");
                
            }
            
            this.body.unshift(nextPosition);
            if(!this.ateApple){
                 this.body.pop();
            }else{
                this.ateApple=false;
            }
              
        }
        this.setDirection=function(newDirection){
            let allowedDirections;
            switch(this.direction){
                case "left":
                case "right":   
                    allowedDirections = ["up","down"];
                    break;
                case "down":
                case "up":
                    allowedDirections = ["left","right"];
                    break;
                default:
                    throw("invalid direction");
                
            }
                if(allowedDirections.indexOf(newDirection) > -1){
                    this.direction=newDirection;
                }
            }
            this.checkCollision =function(){
                let wallColision=false;
                let snakeCollision =false;
                let head = this.body[0];
                let rest = this.body.slice(1);
                let snakeX = head[0];
                let snakeY = head[1];
                let minX=0;
                let minY=0;
                let maxX=widthInBlocks-1;
                let maxY=heightInBlocks-1;
                let isNotBetweenHorisontalwalls=snakeX < minX || snakeX >maxX;
                let isNotBetweenVeratcalwalls=snakeY < minY || snakeY >maxY;

                if(isNotBetweenHorisontalwalls || isNotBetweenVeratcalwalls){
                    wallColision=true;
                }
                for(let i = 0;i < rest.length ;i++ ){
                    if(snakeX === rest[i][0] && snakeY ===rest[i] [1]){
                      snakeCollision=true;  
                    }

                }
                return wallColision || snakeCollision;
            }
            this.isEatingApple= function(appleToEat){
              let head =this.body[0];
              if(head[0]===appleToEat.position[0] && head[1] === appleToEat.position[1]){
                  return true;
              }
              else{
                  return false;
              } 
            }
        }
  
        function Apple(position){
            this.position=position;
            this.draw=function(){
              ctx.save();
              ctx.fillStyle="#33cc33";
              ctx.beginPath();
              let radius = blockSize/2;
              let x=this.position[0]*blockSize+radius;
              let y=this.position[1]*blockSize+radius;
              ctx.arc(x,y,radius,0,Math.PI*2,true);
              ctx.fill();
              ctx.restore();
            }
            this.setNewPosition =function (){
               let newX=Math.round(Math.random()* (widthInBlocks-1));
               let newY=Math.round(Math.random()* (heightInBlocks-1));
               this.position =[newX,newY];
            }
            this.isOnSnake = function(snakeToCheck){
                let isOnSnake = false;
                for( i=0 ; i < snakeToCheck.body.length ; i++){
                    if(this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]){
                       isOnSnake=true; 
                    }
                }
                return isOnSnake;
            }
        }

    document.onkeydown = function handleKeyDown(e){
        var key = e.keyCode;
        var newDirection;
        switch(key){
            case 37:
                newDirection = "left";
                break;
            case 38:
                newDirection = "up";
                break;
            case 39:
                newDirection = "right";
                break;
            case 40:
                newDirection = "down";
                break;
            case 32:
                restart();
                return;
            default:
                return;
            
        }
        snakee.setDirection(newDirection);
    }
}
