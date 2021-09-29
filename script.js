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