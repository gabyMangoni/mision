const urlPageTitle = 'Misión Mangundze'

document.addEventListener("click", (e) => {
    const { target } = e;
    if (!target.matches("nav a") ) {
        return;
    }
    console.log(e.target.tagName)
    e.preventDefault();
    route();
});


const routes = {
    404: {
        template: "/templates/404.html",
        title: "404 |" + urlPageTitle,
        description: "Page not found",
    },

    "/": {
        template: "/templates/home.html",
        title: "Home | " + urlPageTitle,
        description: "Bienvenidos a la Misión Mangundze",
    },
    "/nosotros": {
        template: "/templates/nosotros.html",
        title: "Nosotros |" + urlPageTitle,
        description: "Misión Mangundze, Juan Gabriel Arias",
    },

    "/proyectos": {
        template: "/templates/proyectos.html",
        title: "Proyectos | " + urlPageTitle,
        description: "El Parroco de la Mision San Benito de Mangundze es el padre Juan Gabriel Arias, quien realiza distintos proyectos sociales y de salud.",
    },

    "/donar": {
        template: "/templates/donar.html",
        title: "Donar | " + urlPageTitle,
        description: "Misión Mangundze, tu donación servirá para seguir sumando esfuerzos y ayudar a quienes más lo necesitan",
    },

    "/proyecto-larcio-langane": {
        template: "/templates/proyecto-larcio-langane.html",
        title: "Proyectos | " + urlPageTitle,
        description: "Larcio fue uno de los dos primeros chicos mozambicanos en recibir la posibilidad de estudiar en la UCA",
    },

    "/proyecto-juan-gabriel-arias": {
        template: "/templates/proyecto-juan-gabriel-arias.html",
        title: "Proyectos | " + urlPageTitle,
        description: "Juan Gabriel Arias, cura párroco de San Benito de Mangundze",
    },

    "/proyecto-ciudadania": {
        template: "/templates/proyecto-ciudadania.html",
        title: "Proyectos | " + urlPageTitle,
        description: "El proyecto ciudadanía busca que los jóvenes se pregunten que quieren hacer con su comunidad.",
    },
    

    
};

//url
const route = (event) => {
    event = event || window.event; // get window.event if event argument not provided
    event.preventDefault();
    // window.history.pushState(state, unused, target link);
    window.history.pushState({}, "", event.target.href);
    locationHandler();

};

//manejo de rutas
const locationHandler = async () => {
    const location = window.location.pathname; // get the url path
   //llamado a la función para el 1 ingreso
    if (location.length == 0) {
        location = "/";
    }

    // get the route object from the urlRoutes object
    const route = routes[location] || routes[404];
    // get the html from the template
    const html = await fetch(route.template)
    
    .then((response) => response.text());
    // set the content of the content div to the html
    document.querySelector('main').innerHTML = html;
    // guardo una copia local
   
    // set the title of the document to the title of the route
    document.title = route.title;
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};


// add an event listener to the window that watches for url changes
window.onpopstate = locationHandler;

// call the urlLocationHandler function to handle the initial url
window.route = route;

// call the urlLocationHandler function to handle the initial url
locationHandler();
