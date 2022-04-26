var scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  var result = scores.map((n)=>n.name);
  console.log(result); // returns all the names in the array 

  var pass = scores.filter((p)=>p.marks>=40);
  console.log(pass); // return all the passed >=40 marks objects

  var fail = scores.filter((f)=>f.marks<40);
  console.log(fail); // return all the failed <40 marks objects

  var average= scores.reduce((sum,n)=>sum+n.marks/scores.length,0);
  console.log(average); // returns average of the marks 
  
  const max = scores.reduce((sum,curr)=>{
      if(sum.marks > curr.marks){
                      return sum ;
      }
      else{
        
          return curr ;
      }    

       
    });
  console.log(max);

   



  