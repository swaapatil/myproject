let body=document.querySelector('body');
let container=document.querySelector('.container')
let circle=document.querySelector('.circle');
let value=document.querySelector('.value');

let parallel=document.querySelector('.prog');
let paravalue=document.querySelector('.pvalue')

let button=document.querySelector('.button');
button.addEventListener('click',()=>{



let valuestart=0,
    valueend=100,
    speed=100;

let progress=setInterval(()=>{
    valuestart++;
    
    value.textContent=paravalue.textContent=`${valuestart}%`

    circle.style.background=`conic-gradient(#7d2ae8,${valuestart*3.6}deg, #ededed 0deg)`;
    parallel.classList.add('active')
    // parallel.style.cssText="width: 300px;height: 20px;padding: 15px; border-radius: 20px;background-color: #dea010;display: flex;justify-content:center; align-items: center; ";
    parallel.style.width=valuestart/2 +"%";
    

    if(valuestart==valueend){
        clearInterval(progress);
         setTimeout(() => {
            container.style.cssText='display:none;'
            setTimeout(()=>{
            let h1=document.createElement('h1');
            h1.innerHTML='Hurray! Your Order Is Placed';
            body.appendChild(h1);
            h1.style.cssText="font-size:4rem;color:white;padding:10px 0px 0px 0px";
        },1000)
            // setTimeout(()=>{
            let img=document.createElement('img');
            img.src="https://i.gifer.com/5Q17.gif ";
            body.appendChild(img);
        //  },1000)
            body.style.cssText="display:flex;justify-containt:center;align-item:center;flex-direction:column;gap:;"
            // img.style.cssText="position:relative;"
           
           
        }, );
       
    }
    console.log(valuestart);

},speed);

    
    
    button.classList.toggle('non')
    // button.style.cssText='display:none';

})