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