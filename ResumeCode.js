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

function name(paramter1,paramter2,etc){
    //Code A Excuter
    return Result;
}


// Syntaxe des fonctions en Java script  
    // function name (parameter1,parameter2, etc ...)
    //    {
    //            Code à Executer;
    //            return Result;
    //     }
    console.log(" fait appelle a une function ----------------------");

    function fname(x,y){
       let Result=x+y;
       return Result;
    }
    console.log(fname(10,12));
    
    
    
    
    let a =5;
    let b = 6;
    
    function multiply(number1,number2){
        return number1*number2;
    }
    
    console.log(" fait appelle a une function et affecte ----------------------");
    var result = multiply(a,b);
    console.log(result);
    
    
    console.log(" fait appelle a une function et affecte trois variable ----------------------");
    function multi(num1,num2,num3){
        return num1*num2*num3;
    }
    
    let result1 = multi(a,b,a);
    console.log(result1);
    

        
    // scope des variables
    function multiply(number1,number2,number3){
        resultMultiply =number1*number2*number3;
        return resultMultiply;
    }
    let a =5;
    let b =6;

    let result =multiply(a,b,a);
    console.log(resultMultiply);


        
    //array ou bien en français les Tableaux (chaine de caractère)

    let fruits=["Pomme","banane","Citron","Orange","kaki"];

    console.log(fruits.length);
    console.log(fruits[0]);
    console.log(fruits);

    //boucle for pour afficherles  liste des tableaux
    for(let i=0;i<fruits.length;i++){
        console.log(fruits[i]);
        
    }

    // push() Ajouter un élément sur la table
    fruits.push("Kiwi");
    console.log(fruits);
    
    //pop() enlever la dernière valeur
    fruits.pop();
    console.log(fruits);
    //
    let agrumes = fruits.slice(2,4);
    console.log(agrumes);

    let agrume = fruits.slice(2);
    console.log(agrume);

    //array ou bien en français les Tableaux (number)
    let tab=[14,25,36];
    console.log(tab);

    //array de déff cotenue
    let myarray =["Pomme",15,true];
    console.log(myarray)

    //-----------------Les Objets--------------------

/*let object={
    propertyNam1:propertyVlue1,
    propertyNam1:propertyVlue1,
    method1:fuction(){

        }
        };*/


        //methode 1
        let dog={
            name:"chaly",
            color:"blue",
            age:5
                };
        //methode 2
        let personne = new Object();
        personne.name="tarik";
        personne.prenom="ziari";
        personne.age=26;
        personne.aboie=function(num){
            while(num>0){
                console.log(num.toString() +"  Wouf ");
                num--;
            }
           
        }
        personne.aboie(4);


      //  console.log(dog.name)
      //  console.log(dog.color)
      //  console.log(dog.age)

for(let property in dog){
    console.log(dog[property])
}

for(let property in personne){
    console.log(personne[property])
}





        //Function Constructeur


        function Dog(name,color,age){
            this.name=name;
            this.color=color;
            this.age=age;
            this.aboie=function(num){
                while(num>0){
                    console.log(num.toString() +"  Wouf "+this.name);
                    num--;
                }
            }
               
     }
        
     let petitcaniche= new Dog("Choupette","white",4);
     let grosPitbull= new Dog("Rex","black",2);
     console.log(petitcaniche);
     console.log(grosPitbull);
     petitcaniche.aboie(1);
     grosPitbull.aboie(1);


