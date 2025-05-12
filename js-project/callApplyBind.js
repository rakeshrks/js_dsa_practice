function fullName(greet){
    console.log(greet, this.firstName, this.lastName)
   }
   const person1={
     firstName:"Rakesh",
     lastName:"Kumar"
   }
   const person2={
     firstName:"Ratan",
     lastName:"Tata"
   }
   fullName.call(person1,"Hello");
   fullName.call(person2, "Hi");

   // fullName.apply(person1,["HelloR"]);
   // fullName.apply(person2,["HiR"]);
   
   const person1FullName=fullName.bind(person1);  
   const person2FullName=fullName.bind(person2);

   person1FullName("Hello");
   person2FullName("Hi");