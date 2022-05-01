var link=document.querySelectorAll("a");
function Show(image)
{
   
   for(var i=0; i<link.length; i++)
   {
    link[i].href=image.src;
   }
}

window.addEventListener("scroll",()=>
{
     console.log(this.scrollY);
    if(window.scrollY>200 && window.scrollY<400)
    {
       
        document.querySelector("body").style.background="rgba(123,251,70,0.5)";
    }
    else if(window.scrollY> 400 && window.scrollY <600)
    {
        document.querySelector("body").style.background="rgba(120,102,110,0.4)";
    }
    else if(window.scrollY > 600 && window.scrollY <800 )
    {
        document.querySelector("body").style.background="violet";
        
    }
    else if(window.scrollY > 600)
    {
        document.querySelector("body").style.background="rgba(150,219,10,0.2)";
        
    }
   
})