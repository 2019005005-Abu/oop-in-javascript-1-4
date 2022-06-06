console.log("Welcome To The Object Oriented Programming in Javascript");
/**
 * 
 * 
 1.Abstraction
 2.Encapsulation
 3.Inheritance
 4.Polymorphism
 =========================================
 Prototype
 Function Constructor
 Class Constructor
 Object.Create()
 Public method and properties
 Private Method and properties
 Getter 
 Setter
 A small Project Using Object Oriented Programming in 
 Javascript
 */
const Computer=function(name,model){
   this.name=name;
   this.model=model;

   //create  a  function
   // this.aboutComputerSpecification=()=>{
   //    console.log(`
   //     The Computer Name is ${this.name}
   //     The Computer Model is ${this.model}`)
   // }
}

//function define outSide from Computer
Computer.prototype.aboutComputerSpecification=function(){
   console.log(`
   The Computer Name is ${this.name}
   The Computer Model is ${this.model}`)
}

const hP_Model=new Computer("Hp",'42424kjhf');
const del_Model=new Computer("DeLL",'del52525');
console.log(hP_Model);
console.log(del_Model);
console.log(hP_Model.aboutComputerSpecification());
console.log(del_Model.aboutComputerSpecification());
// const obj={
 
// }
// obj.name="Abu Al Shahriar Rifat";
// obj.age=24
//There are 4 Rules of Function Constructor
/**
 =>1.Create an empty Object{}
 =>2.Function is called ={}
 =>3.{} Linked to the prototype
 =>4.{} will be retured automatically
 */
 


