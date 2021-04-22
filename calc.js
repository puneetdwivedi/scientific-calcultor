console.log("hello")
let numbers=document.getElementsByClassName("numbers");
for(let i=0;i<numbers.length;i++){
    numbers[i].addEventListener('click',()=>{
        let x=numbers[i].innerText;
        let screendata=document.getElementsByClassName('calc-screen')[0];
        
        if(screendata.innerText == "0"){
            screendata.innerText=x;
        }
        else{
            screendata.innerText+=x;
        }
    });
}

let enterbutton=document.getElementById("enter");
enterbutton.addEventListener('click',()=>{
    let expression=document.getElementsByClassName('calc-screen')[0].innerText;
    
});