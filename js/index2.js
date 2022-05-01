var spin=document.getElementById("spinner");
var count=0;
window.addEventListener("load",()=>
{

    document.getElementById("home").style.borderBottom="1px solid cyan";
    
});

function ShowLucky()
{
 timer(); 
    if(count==0)
    {
     spin.style.transform="rotate(4000deg)";
   count=1;  
   
 }
    else if(count==1)
    {
     spin.style.transform="rotate(0deg)";
     count=0;
  
    }
    
    
}
var count2=0;
var tim=0;
function timer()
{
   var inter= setInterval(Set,100);
      tim=0; 
   
   function Set()
   
    {
     tim++;
     if(tim<40)
     {

    
        if(count2==0)
     {
         var point=document.getElementById("pointer");
      point.style.transform="rotate(10deg)";
      count2=1;
     }
     else if(count2==1)
     {
         var point=document.getElementById("pointer");
      point.style.transform="rotate(0deg)"; 
      
      count2=0;
     }
    
       
    
 }
 else{
     var point=document.getElementById("pointer");
      point.style.transform="none";
      window.clearInterval(inter);
      document.getElementById("popup").style.display="block";
      setTimeout(function()
      {
        document.getElementById("popup").style.display="none";
      },1500)
 }
     
    }
}
var fb=document.getElementById("fb");
var insta=document.getElementById("insta");
var ema=document.getElementById("email");
function facebook()
{
    window.open("https://www.google.com/search?q=cms&oq=cm&aqs=chrome.0.69i59j69i57j35i39j0i67i433j0i67j69i60l3.1791j0j7&sourceid=chrome&ie=UTF-8","_BLANK");
    
}
fb.addEventListener("click",facebook)
;
function Contact()
{
    document.body.createElement("input");

}
function changeBackground(d,r)
{
   var bd= document.getElementById("bdy");
   bd.style.backgroundImage="url("+d;
    r.style.bakground="gray";
}
window.onload=function()
{
    var time=new Date().getHours();
    document.getElementById("greetings");
    if(time<12)
    {
        
        document.getElementById("greetings").innerHTML="Good Morning User"; 
    }
    else if(time>12 && time<15)
    {
        document.getElementById("greetings").innerHTML="What a brilliant Afternoon!!"; 
    }
    else if(time>15 && time<19)
    {
        document.getElementById("greetings").innerHTML="This is a nice a evenning"; 
    }
    else if(time>=19 && time<23)
    {
        document.getElementById("greetings").innerHTML="What a Peaceful Night!";  
    }
}


function Animatetext()
{
    var text=["Iam a software developer ","I design   "," , Develop  "," , Build   ",", Publish  "," Websites and  " ," Softwares"];
    var element=document.querySelector("#dynamic");
     let count=0;
     let count2=0;
    
         setInterval(() => {
          if(count==0)
          {
              element.innerHTML+=text[count][count2];
              count2++;
              element.style.color="purple"
              if(count2==text[count].length-1)
              {
                  count++;
                  count2=0;
                  element.innerHTML="";
              }
          }  
            
         else if(count==1)
          {
              element.innerHTML+=text[count][count2];
              count2++;
              element.style.color="black"
              if(count2==text[count].length-1)
              {
                  count++;
                  count2=0;
                  element.innerHTML="";
              }
          }  
         else if(count==2)
          {
              element.innerHTML+=text[count][count2];
              count2++;
              if(count2==text[count].length-1)
              {
                  count++;
                  count2=0;
                  element.innerHTML="";
              }
          }  
         else if(count==3)
          {
              element.innerHTML+=text[count][count2];
              count2++;
              element.style.color="seagreen"
              if(count2==text[count].length-1)
              {
                  count++;
                  count2=0;
                  element.innerHTML="";
              }
          }  
         else if(count==4)
          {
              element.innerHTML+=text[count][count2];
              count2++;
              if(count2==text[count].length-1)
              {
                  count++;
                  count2=0;
                  element.innerHTML="";
              }
          }  
         else if(count==5)
          {
              element.innerHTML+=text[count][count2];
              count2++;
              if(count2==text[count].length-1)
              {
                  count++;
                  count2=0;
                  element.innerHTML="";
              }
          }  
          else if(count==6)
          {
              element.innerHTML+=text[count][count2];
              count2++;
              if(count2==text[count].length-1)
              {
                  
                  count2=0;
                  element.innerHTML="";
                  count=0;
              }
          }  


         }, 250);
     
}
Animatetext();

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
document.getElementById("cv").addEventListener("click",()=>
{
    let elem=document.createElement("a");
    elem.style.display="none";
    elem.href="files/cv.txt";
    elem.download="Sample cv";
    elem.click();
    document.removeChild(elem);
    
});
var toggle1=0;
function ShowMenu()
{
    
    if(toggle1==0)
        {
            document.getElementById("nav").style.height="230px";
            toggle1=1;
        }
        else{
            document.getElementById("nav").style.height="0px"; 
            toggle1=0;
        }
}
function SendMessage()
{
    let form=document.getElementById("form");
    if(form.children[1].value ==="" && form.children[4].value ==="")
    {
        alert("email and message required");
    }
    else if(form.children[1].value !="" && form.children[4].value !=""){
        alert("message send successifully");
        form.children[1].value="";
        form.children[4].value="";
    }
    
}