document.getElementById("check-btn").addEventListener("click",()=>{
  
  const input=document.getElementById("text-input").value;
  const result=document.getElementById("result");

 if(!input){
   alert("Please input a value");
   return
 } 
  
  const cleaned =input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversed = cleaned.split("").reverse().join("");

  if(cleaned === reversed){
    result.textContent=`${input} is a palindrome`;

  }
  else{
    result.textContent=`${input} is not a palindrome`
  }
  
  })