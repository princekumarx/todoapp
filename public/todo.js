let input = document.querySelector("input[type='text']");

 let button  =  document.querySelector("#submit");
 let li = document.querySelectorAll('li');
 
 

  li.forEach((li)=>{
   li.addEventListener('click',(e)=>{
       var item = e.target.textContent.replace(/ /g,'-');
          fetch('/todo/'+item,{
              method:'delete'
               }).then(res => {
                   if(res){
                       location.reload();
                   }
                   console.log(res);
               })
       })
  })
 
 button.addEventListener('click',(e)=>{
     e.preventDefault();
     
      
      fetch('http://localhost:3000/todo',{
       method:'post',
       headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            item:input.value
        })
   }).then((data)=>data.json()).then(data =>{
if(!data === 'undefined'){
    alert('not recive');
}
else{
    console.log(data);
    location.reload();

}

   })
 })