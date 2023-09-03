  // input using prompt
  let nam= prompt("Enter Your Name : ");
  var fac= prompt("Enter Your Faculty : ");
  var roll= prompt("Enter Your RoLL Number : ");
 var a=0;
 var total=0;
 var i=0;

 //input and calculation
  for(i=1;i<=8;i++)
  {
  a= +prompt(`Enter your Gpa of ${i} semester : `);
  total+=a;

  }
  var cgpa=total/8;

//  displaying the result

  
  alert(`I am ${nam} and I am enrolled in ${fac}. My exam roll number is ${roll} and I scored ${cgpa} CGPA in my Bachelor's.`);
 
  