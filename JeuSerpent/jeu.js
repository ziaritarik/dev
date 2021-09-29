window.onload=function(){

    
    let canvasWidth=900;
    let canvasHeight=600;
    let blockSize =30;
    let ctx;
    let delay=1000;
    let snakee;

    init();

    function init()
    {
        let canvas=document.createElement('canvas');
        canvas.width=900;
        canvas.height=600;
        canvas.style.border="1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        snakee = new Snake( [[6,4],[5,4],[4,4]]);
        refreshCanvas();

    }

    function refreshCanvas()
    {
    
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas,delay) ;
    
    }

    function drawBlock(ctx,position){
        let x=position[0]*blockSize;
        let y=position[1]*blockSize;
        ctx.fillRect(x,y,blockSize,blockSize);
    }


    function Snake(body,direction){
        this.direction=direction;
        this.body=body;
        this.draw=function()
        {
            ctx.save();
            ctx.fillStyle="#ff0000";
            for(let i=0; i<this.body.length; i++)
            {
                drawBlock(ctx,this.body[i]);
            }
            ctx.restore();
           
        };
        this.advance=function()
        {
                let nextPosition = this.body[0].slice();
                switch(this.direction){
                    case "left":
                        nextPosition[0] -= 1;
                        break;
                    case "right":
                        nextPosition[0] += 1;
                        break
                    case "down":
                        break;
                    case "up":
                        nextPosition[0] -= 1;
                        break
                    default:
                         throw("Invalid Diection")  
                }
                this.body.unshift(nextPosition);
                this.body.pop();
        };
        this.setDirection = function(newDirection)
        {
            let allowedDirections;
            switch(this.direction)
            {
                case "left":
                case "right":
                    allowedDirections= ["up","down"];
                    break
                case "down":
                case "up":
                    allowedDirections= ["left","right"];
                    break 
                default:
                    throw("Invalid Diection")      
            }
            if(allowedDirections.indexOf(newDirection) >  -1)
            {
                this.direction=newDirection;
            }
        };
    }
    document.onkeydown=function handleKeyDown(e)
    {
        let key =e.keyCode;
        let newDirection;
        switch(key){
            case 37:
                newDirection="left"
                break;
            case 38:
                newDirection="up"
                break;
            case 39:
                newDirection="right"
                break;
            case 40:
                newDirection="down"
                break;
            default:
                return;
        }
        snakee.setDirection(newDirection);
    }
}