let el = document.querySelector('button'); 
   el.addEventListener('click',function(){makeList()}); 
   function makeList() { 
 const myTitle = document.querySelector('.header'); 
 myTitle.textContent = "Rainie's List Of Countries"; 
   const content = document.querySelector('.content'); 
   content.removeChild(content.lastElementChild) 
 const country= document.createElement("ol"); 
 country.classList.add('countries'); 
   let contList = []; 
   let a =getInt(); 
 a=a.sort(sortNum); 
 a.forEach(element => { 
 contList.push(countries[element]); 
 }); 
 contList.forEach(element => { 
 let line = document.createElement('li'); 
 let name = element['name']; 
 let code = element['code'].bold(); 
 line.innerHTML= code + ' ' + name;   
 country.appendChild(line) 
   }); 
 content.appendChild(country); 
 } 
     function getInt(){ 
 let a2= []; 
 let step = 0; 
 while(step<25){ 
 let num = Math.floor(Math.random() *countries.length); 
 if(!a2.includes(num)){ 
 a2.push(num); 
 step ++; 
 } 
 } 
 return a2; 
 } 
 function sortNum(a, b) { 
 return a - b; 
 }