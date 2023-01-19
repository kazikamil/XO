var mat=[[0,0,0],[0,0,0],[0,0,0]];
let put="Group 2.png";
let sens;
let t=1;
let pla1=0;
let pla2=0;
let poss=["Group 2.png","Exclude.png","Group 3.png","Exclude1.png"];
function clearmat()
{
   for(let i=0;i<3;i++)
       for(let j=0;j<3;j++)
           mat[i][j]=0;
}
function clearXO()
{
     document.querySelector("#zone1 img").setAttribute("src","");
     document.querySelector("#zone2 img").setAttribute("src","");
     document.querySelector("#zone3 img").setAttribute("src","");
     document.querySelector("#zone4 img").setAttribute("src","");
     document.querySelector("#zone5 img").setAttribute("src","");
     document.querySelector("#zone6 img").setAttribute("src","");
     document.querySelector("#zone7 img").setAttribute("src","");
     document.querySelector("#zone8 img").setAttribute("src","");
     document.querySelector("#zone9 img").setAttribute("src","");
}
document.getElementById("restart").onclick=function(event)
{
event.stopPropagation();
clearmat();
t=1;
put=poss[0];
clearXO();
}
function matched(i,j,n)
{
    if(i==j&&mat[0][0]==n&&mat[1][1]==n&&mat[2][2]==n)
       { if(put===poss[0])
            {
               pla1++;
               document.getElementById("pl1").innerHTML=pla1;
            }
         else
         {
            pla2++;
            document.getElementById("pl2").innerHTML=pla2;
         }   
         t=0;
         return "d";
       }  
    if(mat[i][0]==n&&mat[i][1]==n&&mat[i][2]==n)
      {  if(put===poss[0])
      {
         pla1++;
         document.getElementById("pl1").innerHTML=pla1;
      }
   else
   {
      pla2++;
      document.getElementById("pl2").innerHTML=pla2;
   }   
         t=0;    
       return "v";
      } 
    if(mat[0][j]==n&&mat[1][j]==n&&mat[2][j]==n)
       {if(put===poss[0])
       {
          pla1++;
          document.getElementById("pl1").innerHTML=pla1;
       }
    else
    {
       pla2++;
       document.getElementById("pl2").innerHTML=pla2;
    }   
         t=0;
        return "h";
       }

    if(mat[0][2]==n&&mat[1][1]==n&&mat[2][0]==n)
       { if(put===poss[0])
       {
          pla1++;
          document.getElementById("pl1").innerHTML=pla1;
       }
    else
    {
       pla2++;
       document.getElementById("pl2").innerHTML=pla2;
    }   
         t=0;
         return "ad";
       }  
    return 0;   
}
function change(ch)
{
    if(ch===poss[0])
       return poss[1];
    return poss[0];   
}
function remplir(ch)
{
    if(ch===poss[0])
       return 1;
    return 2; 
}
function success(ch)
{
   if(put==poss[0])
      return poss[2];
   return poss[3];   
}
document.getElementById("new_game").onclick=function(event)
{
   event.stopPropagation();
   put=poss[0];
   clearmat();
   clearXO();
   pla1=0;
   pla2=0;
   t=1;
   document.getElementById("pl1").innerHTML=pla1;
   document.getElementById("pl2").innerHTML=pla2;
}
document.getElementById("zone1").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[0][0]&&t)
       {
           mat[0][0]=remplir(put);
           document.querySelector("#zone1 img").setAttribute("src",put);
           sens=matched(0,0,mat[0][0])
           if(sens!=0)
            {
                if(sens==="d")
                  {
                     document.querySelector("#zone1 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone9 img").setAttribute("src",success(put));
                  }
                else if(sens==="v")
                  {
                     document.querySelector("#zone1 img").setAttribute("src",success(put));
                     document.querySelector("#zone2 img").setAttribute("src",success(put));
                     document.querySelector("#zone3 img").setAttribute("src",success(put));
                  }
                else
                {
                     document.querySelector("#zone1 img").setAttribute("src",success(put));
                     document.querySelector("#zone4 img").setAttribute("src",success(put));
                     document.querySelector("#zone7 img").setAttribute("src",success(put));
                } 
            }
            put=change(put);
       }
}
document.getElementById("zone2").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[0][1]&&t)
       {
           mat[0][1]=remplir(put);
           document.querySelector("#zone2 img").setAttribute("src",put);
           sens=matched(0,1,mat[0][1])
           if(sens!=0)
            {
                if(sens==="v")
                  {
                     document.querySelector("#zone1 img").setAttribute("src",success(put));
                     document.querySelector("#zone2 img").setAttribute("src",success(put));
                     document.querySelector("#zone3 img").setAttribute("src",success(put));
                  }
                else
                {
                  document.querySelector("#zone2 img").setAttribute("src",success(put));
                  document.querySelector("#zone5 img").setAttribute("src",success(put));
                  document.querySelector("#zone8 img").setAttribute("src",success(put));
                } 
            }
            put=change(put);
       }
}
document.getElementById("zone3").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[0][2]&&t)
       {
           mat[0][2]=remplir(put);
           document.querySelector("#zone3 img").setAttribute("src",put);
           sens=matched(0,2,mat[0][2])
           if(sens!=0)
            {
                if(sens==="ad")
                  {
                     document.querySelector("#zone3 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone7 img").setAttribute("src",success(put));
                  }
                else if(sens==="v")
                  {
                     document.querySelector("#zone1 img").setAttribute("src",success(put));
                     document.querySelector("#zone2 img").setAttribute("src",success(put));
                     document.querySelector("#zone3 img").setAttribute("src",success(put));
                  }
                else
                {
                  document.querySelector("#zone3 img").setAttribute("src",success(put));
                  document.querySelector("#zone6 img").setAttribute("src",success(put));
                  document.querySelector("#zone9 img").setAttribute("src",success(put));
                } 
            }
            put=change(put);
       }
}
document.getElementById("zone4").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[1][0]&&t)
       {
           mat[1][0]=remplir(put);
           document.querySelector("#zone4 img").setAttribute("src",put);
           sens=matched(1,0,mat[1][0])
           if(sens!=0)
            {
                if(sens==="v")
                  {
                     document.querySelector("#zone4 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone6 img").setAttribute("src",success(put));
                  }
                else
                {
                  document.querySelector("#zone1 img").setAttribute("src",success(put));
                  document.querySelector("#zone4 img").setAttribute("src",success(put));
                  document.querySelector("#zone7 img").setAttribute("src",success(put));
                } 
            }
            put=change(put);
       }
}
document.getElementById("zone5").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[1][1]&&t)
       {
           mat[1][1]=remplir(put);
           document.querySelector("#zone5 img").setAttribute("src",put);
           sens=matched(1,1,mat[1][1])
           if(sens!=0)
            {
                if(sens==="d")
                  {
                     document.querySelector("#zone1 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone9 img").setAttribute("src",success(put));
                  }
               else  if(sens==="ad")
                  {
                     document.querySelector("#zone3 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone7 img").setAttribute("src",success(put));
                  }  
                else if(sens==="v")
                  {
                     document.querySelector("#zone4 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone6 img").setAttribute("src",success(put));
                  }
                else
                {
                  document.querySelector("#zone2 img").setAttribute("src",success(put));
                  document.querySelector("#zone5 img").setAttribute("src",success(put));
                  document.querySelector("#zone8 img").setAttribute("src",success(put));
                } 
            }
            put=change(put);
       }
}
document.getElementById("zone6").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[1][2]&&t)
       {
           mat[1][2]=remplir(put);
           document.querySelector("#zone6 img").setAttribute("src",put);
           sens=matched(1,2,mat[1][2])
           if(sens!=0)
            {
                if(sens==="v")
                  {
                     document.querySelector("#zone4 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone6 img").setAttribute("src",success(put));
                  }
                else
                {
                  document.querySelector("#zone3 img").setAttribute("src",success(put));
                  document.querySelector("#zone6 img").setAttribute("src",success(put));
                  document.querySelector("#zone9 img").setAttribute("src",success(put));
                } 
            }
            put=change(put);
       }
}
document.getElementById("zone7").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[2][0]&&t)
       {
           mat[2][0]=remplir(put);
           document.querySelector("#zone7 img").setAttribute("src",put);
           sens=matched(2,0,mat[2][0])
           if(sens!=0)
            {
                if(sens==="ad")
                  {
                     document.querySelector("#zone3 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone7 img").setAttribute("src",success(put));
                  }
                else if(sens==="v")
                  {
                     document.querySelector("#zone7 img").setAttribute("src",success(put));
                     document.querySelector("#zone8 img").setAttribute("src",success(put));
                     document.querySelector("#zone9 img").setAttribute("src",success(put));
                  }
                else
                {
                  document.querySelector("#zone1 img").setAttribute("src",success(put));
                  document.querySelector("#zone4 img").setAttribute("src",success(put));
                  document.querySelector("#zone7 img").setAttribute("src",success(put));
                } 
            }
         put=change(put);   
       }
}
document.getElementById("zone8").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[2][1]&&t)
       {
           mat[2][1]=remplir(put);
           document.querySelector("#zone8 img").setAttribute("src",put);
           sens=matched(2,1,mat[2][1])
           if(sens!=0)
            {
                if(sens==="v")
                  {
                     document.querySelector("#zone7 img").setAttribute("src",success(put));
                     document.querySelector("#zone8 img").setAttribute("src",success(put));
                     document.querySelector("#zone9 img").setAttribute("src",success(put));
                  }
                else
                {
                  document.querySelector("#zone2 img").setAttribute("src",success(put));
                  document.querySelector("#zone5 img").setAttribute("src",success(put));
                  document.querySelector("#zone8 img").setAttribute("src",success(put));
                } 
            }
            put=change(put);
       }
}
document.getElementById("zone9").onclick=function(event)
{
   event.stopPropagation();
    if(!mat[2][2]&&t)
       {
           mat[2][2]=remplir(put);
           document.querySelector("#zone9 img").setAttribute("src",put);
           sens=matched(2,2,mat[2][2])
           if(sens!=0)
            {
                if(sens==="d")
                  {
                     document.querySelector("#zone1 img").setAttribute("src",success(put));
                     document.querySelector("#zone5 img").setAttribute("src",success(put));
                     document.querySelector("#zone9 img").setAttribute("src",success(put));
                  }
                else if(sens==="v")
                  {
                     document.querySelector("#zone7 img").setAttribute("src",success(put));
                     document.querySelector("#zone8 img").setAttribute("src",success(put));
                     document.querySelector("#zone9 img").setAttribute("src",success(put));
                  }
                else
                {
                  document.querySelector("#zone3 img").setAttribute("src",success(put));
                  document.querySelector("#zone6 img").setAttribute("src",success(put));
                  document.querySelector("#zone9 img").setAttribute("src",success(put));
                } 
            }
            put=change(put);
       }
}
