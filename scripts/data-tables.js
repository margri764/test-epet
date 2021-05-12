

var buttonId;
var url='';
var contenido= document.querySelector('#contenido');
var divisiones = document.querySelector('#divisiones');

const p_pri= document.querySelector("#p_pri");
const p_seg= document.querySelector("#p_seg");
const s_pri= document.querySelector("#s_pri");
const s_seg= document.querySelector("#s_seg");
const t_pri= document.querySelector("#t_pri");
const t_seg= document.querySelector("#t_seg");
const c_pri= document.querySelector('#c_pri');
const c_seg= document.querySelector('#c_seg');
const q_pri= document.querySelector('#q_pri');
const q_seg= document.querySelector('#q_seg');
const sx_pri= document.querySelector('#sx_pri');
const sx_seg= document.querySelector('#sx_seg');
const sp_pri= document.querySelector('#sp_pri');
const sp_seg= document.querySelector('#sp_seg');

const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const fifth = document.querySelector('#fifth');
const sixth = document.querySelector('#sixth');
const sept = document.querySelector('#sept');


function sendId(id){
    buttonId=id
    return buttonId;
   }

function resetTablet(){
  
    contenido.innerHTML='';
 
}


function show(id){

    switch (id) {

        case "first":
            p_pri.style.display="block";
            p_seg.style.display="block";
            s_pri.style.display="none";
            s_seg.style.display="none";
            t_pri.style.display="none";
            t_seg.style.display="none";
            c_pri.style.display="none";
            c_seg.style.display="none";
            q_pri.style.display="none";
            q_seg.style.display="none";
            sx_pri.style.display="none";
            sx_seg.style.display="none";      
            sp_pri.style.display="none";
            sp_seg.style.display="none"; 

            break;

        case "second":
            s_pri.style.display="block";
            s_seg.style.display="block";
            p_pri.style.display="none";
            p_seg.style.display="none";           
            t_pri.style.display="none";
            t_seg.style.display="none";
            c_pri.style.display="none";
            c_seg.style.display="none";
            q_pri.style.display="none";
            q_seg.style.display="none";
            sx_pri.style.display="none";
            sx_seg.style.display="none";
            sp_pri.style.display="none";
            sp_seg.style.display="none"; 
    
            break;

        case "third":
            t_pri.style.display="block";
            t_seg.style.display="block";
            p_pri.style.display="none";
            p_seg.style.display="none";  
            s_pri.style.display="none";
            s_seg.style.display="none";          
            c_pri.style.display="none";
            c_seg.style.display="none";
            q_pri.style.display="none";
            q_seg.style.display="none";
            sx_pri.style.display="none";
            sx_seg.style.display="none";
            sp_pri.style.display="none";
            sp_seg.style.display="none"; 
        
            break;    

        case "fourth":
            c_pri.style.display="block";
            c_seg.style.display="block";          
            p_pri.style.display="none";
            p_seg.style.display="none";  
            s_pri.style.display="none";
            s_seg.style.display="none"; 
            t_pri.style.display="none";
            t_seg.style.display="none";        
            q_pri.style.display="none";
            q_seg.style.display="none";
            sx_pri.style.display="none";
            sx_seg.style.display="none";
            sp_pri.style.display="none";
            sp_seg.style.display="none";           
        
            break;     
        
        case "fifth":

            q_pri.style.display="block";
            q_seg.style.display="block";   
            p_pri.style.display="none";
            p_seg.style.display="none";  
            s_pri.style.display="none";
            s_seg.style.display="none"; 
            t_pri.style.display="none";
            t_seg.style.display="none"; 
            c_pri.style.display="none";
            c_seg.style.display="none";     
            sx_pri.style.display="none";
            sx_seg.style.display="none";
            sp_pri.style.display="none";
            sp_seg.style.display="none";        
    
        break;    
            
        case "sixth":
            sx_pri.style.display="block";
            sx_seg.style.display="block";
            p_pri.style.display="none";
            p_seg.style.display="none";                    
            s_pri.style.display="none";
            s_seg.style.display="none"; 
            t_pri.style.display="none";
            t_seg.style.display="none"; 
            c_pri.style.display="none";
            c_seg.style.display="none";  
            q_pri.style.display="none";
            q_seg.style.display="none";       
            sp_pri.style.display="none";
            sp_seg.style.display="none";        
        
            break; 

        case "sept":
            sp_pri.style.display="block";
            sp_seg.style.display="block";            
            p_pri.style.display="none";
            p_seg.style.display="none";                    
            s_pri.style.display="none";
            s_seg.style.display="none"; 
            t_pri.style.display="none";
            t_seg.style.display="none"; 
            c_pri.style.display="none";
            c_seg.style.display="none";  
            q_pri.style.display="none";
            q_seg.style.display="none";
            sx_pri.style.display="none";
            sx_seg.style.display="none";     
                    
        
            break;         

        default: 
            break;
    }    
}


    p_pri.addEventListener('click', getData);
    p_seg.addEventListener('click', getData);
    s_pri.addEventListener('click', getData);
    s_seg.addEventListener('click', getData);
    t_pri.addEventListener('click', getData);
    t_seg.addEventListener('click', getData);
    c_pri.addEventListener('click', getData);
    c_seg.addEventListener('click', getData);
    q_pri.addEventListener('click', getData);
    q_seg.addEventListener('click', getData);
    sx_pri.addEventListener('click', getData);
    sx_seg.addEventListener('click', getData);
    sp_pri.addEventListener('click', getData);
    sp_seg.addEventListener('click', getData);
    
    
  
    


function getData(){
    console.log(buttonId)
    resetTablet();
    switch (buttonId) {

        case "p_pri":
            url='../data/p-pri.json',
            p_seg.style.display="none";
            break;

        case "p_seg":
            url='../data/p-seg.json',
            p_pri.style.display='none'          
        break;

        case "s_pri":
            url='../data/s-pri.json',
            s_seg.style.display="none";
            break;

        case "s_seg":
            url='../data/s-seg.json',
            s_pri.style.display='none'          
        break;

        case "t_pri":
            url='../data/t-pri.json',
            t_seg.style.display="none";
            break;

        case "t_seg":
            url='../data/t-seg.json',
            t_pri.style.display='none'          
             break;

        case "c_pri":
            url='../data/c-pri.json',
            c_seg.style.display='none'          
            break;

        case "c_seg":
            url='../data/c-seg.json',
            c_pri.style.display='none'          
            break;

        case "q_pri":
            url='../data/q-pri.json',
            q_seg.style.display='none'          
            break;   
            
        case "q_seg":
            url='../data/q-seg.json',
            q_pri.style.display='none'          
            break;    
        
        case "sx_pri":
            url='../data/sx-pri.json',
            sx_seg.style.display='none'          
            break;   
            
        case "sx_seg":
            url='../data/sx-seg.json',
            sx_pri.style.display='none'          
            break; 

        case "sp_pri":
            url='../data/sp-pri.json',
            sp_seg.style.display='none'          
            break;   
            
        case "sp_seg":
            url='../data/sp-seg.json',
            sp_pri.style.display='none'          
            break; 
        default: 
            break;
    }
    
 
    fetch(url)		
    .then(res =>res.json())		
    .then(res =>{			
  	      data=res;
  	   
          for(let res of data){
             contenido.innerHTML+=`	
 


            <tr>					
            <td>${res.materia}</td>
            <td id="oculto">${res.docente} </td>		
            <td> ${res.codigo}</td>
            <td id="oculto">${res.email}</td>
            </tr>
        ` 
       


 }


})



}






var anchoVentana = window.innerWidth;

function sizeAlert () {


if(anchoVentana == 360){
      alert("Para ver el contenido completo girar el telefono");

 }
}

// window.onload = traer();
window.onload = sizeAlert();
