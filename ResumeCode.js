//and or
let x = 5 ;
let y = 12 ;

console.log("-----------------and-----------------------");
    let myBoulean = ("true and true donne : "+ (x>3 && y<10));
    console.log(myBoulean)
console.log("-----------------or-----------------------");
    let  Boulean = ("true or true donne : "+ (x>3 || y<10));
    console.log(Boulean)
console.log("-----------------and/or-----------------------");
    console.log("true || true donne : "+(true && true));
    console.log("true || false donne : "+(true && false));
    console.log("false || true donne : "+(false && true));
    console.log("false || false donne : "+(false && false));
    console.log("------------------");
    console.log("true || true donne : "+true || true);
    console.log("true || false donne : "+true || false);
    console.log("false || true donne : "+false || true);
    console.log("false || false donne : "+false || false);

console.log("-----------------inerse-----------------------");
    console.log("inerse de !true  NON(!) donne :"+!true)
    console.log("inerse de !false  NON(!) donne :"+!false)



 //condition

let speed = 49;

    if(speed<80){
        if (speed<50){
            console.log("accelers un petit peu")
        }
        else{
            console.log("tu roules a la bonne vitesse");
        }
        
    }
    else if(speed<100){
        console.log("if faut que tu ralentiss un petit peu");
    }
    else
    {
        console.log("tu roules beaucoup trop vitr, c'est dangreux");  
    }

//switch cas

let favoriteColor ="yellow";

switch(favoriteColor)
{
    case "yellow":
    case "blue":
        console.log(" Wouah ! le bleu et le jaune c'est trop beau ");
        break;
    case "red":
        console.log(" J'aimrais bien une voitue rouge ! ");
        break;
    default:
    console.log(" je ne connais pas ta coulour ! ");

}


//les boucles

let num = 0;

console.log("boucle ----------------------");
while(num<3) {
    console.log(num);
      num++;
  
  }

  console.log(" --------boucle ----------------------");
  while(num>0 && num<3);
  {
    console.log(num);
      num++;
  
  }

  console.log(" ----do ----boucle ----------------------");
  
do {
  console.log(num);
    num++;

}
while(num>0 && num<3);


//boucles for
for (let num = 0; nu < 5 ; num++){
    console.log(num);
}

//Les fonctions