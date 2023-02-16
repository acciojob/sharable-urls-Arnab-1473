// your code here
const nameInput = document.getElementById('name');
const yearInput = document.getElementById('year');
const urlText = document.getElementById('url');
const btn = document.getElementById('button');
 
btn.addEventListener('click', () =>{
    if(nameInput.value.length>0 && yearInput.value.length <= 0){
        urlText.innerHTML = `https://localhost:8080/`;
        urlText.innerHTML += `?name=${nameInput.value}`;
    }
    if(yearInput.value.length >0 && nameInput.value.length<= 0){
        urlText.innerHTML = `https://localhost:8080/`;
        urlText.innerHTML += `?year=${yearInput.value}`;
    }
    if(yearInput.value.length >0 && nameInput.value.length> 0){
        urlText.innerHTML = `https://localhost:8080/`;
        urlText.innerHTML += `?name=${nameInput.value}&year=${yearInput.value}`;
    }
} )
