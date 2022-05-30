const capturo = document.querySelector('main')

console.dir(capturo)


const proyectoFun = ()=>{
    let proyecto = document.querySelector('main')
    let section = proyecto.querySelector('a')
    console.dir(section)
  
    section.addEventListener("click", (e) => {
        if (!target.matches("a") ) {
            return;
        }
        
    e.preventDefault();
    route();
});




        let html =        fetch(route.template)
            
    
    document.querySelector('main').innerHTML = html;
}

//idioma.addEventListener(click, ()=> {console.log('click')})
