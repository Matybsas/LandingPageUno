//BOTON PARA SCROLL UP QUE SE OCULTA AL LLEGAR ARRIBA Y SE MUESTRA AL BAJAR

btnUp= document.getElementById('scroll__up');


window.onscroll = function(){
    let scrollUp = document.documentElement.scrollTop;
    if(scrollUp > 100){
        btnUp.style.visibility ='visible';
    }
    else{
        document.getElementById('scroll__up').style.visibility ='hidden';
    }

}









//MENU HAMBURGUESA

//tomamos los datos del toogle__nav(los span del html)

const openToogle= document.querySelector(".toogle__nav");
let navBar = document.querySelector(".navBar");

/*si openToogle es verdadero entonces ejecutamos la funcion click y la clase open para que el icono hamburguesa
se transforme en una cruz, tambien ejecutamos la funcion openmenu.*/

if(openToogle){
    openToogle.addEventListener('click', ()=>{
       //cambiamos la hamburguesa por cruz
        openToogle.classList.toggle("open");
        //desplegamos el menu
        navBar.classList.toggle("openMenu");
 
        
        
    });
}