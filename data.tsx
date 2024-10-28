import {CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Airplay } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alberto-vera-510867234/",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alberto-vera-510867234/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alberto-vera-510867234/",
    },
    {
        id: 4,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alberto-vera-510867234/",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/alberto-vera-510867234/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 4,
        title: "Target",
        icon: <Airplay size={25} color="#fff" strokeWidth={1} />,
        link: "/otherprojects",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/contact",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Ingenieria Mecánica UMA",
        subtitle: "Grado (sin finalizar) en ingenieria mecánica",
        description: "Aprendizaje de lógica sobre todo en lenguaje c++ en la universidad en ejercicios como algoritmos y consiguracion de maquinas",
        date: "2019-24",
    },
    {
        id: 2,
        title: "Frontend Developer",
        subtitle: "Academia Udemy",
        description: "Curso extenso de más de 60h en creacion de aplicaciones con lenguaje JavaScript, TypeScript y React.",
        date: "Dic 2023 ",
    },
    {
        id: 3,
        title: "React y varios",
        subtitle: "Academia Udemy",
        description: "Dominio de varias tecnologias esenciales como TailWindCSS, react-routerDom, Zod, MongoDB y aplicaciones full stack con MERN y PERN. Tambien testing de apps con supertest o Jest.",
        date: "March 2024",
    },
    {
        id: 4,
        title: "Especialista en IA",
        subtitle: "Certificado Google becado",
        description: "Dominio de las últimas inteligencias artificiales para la creacion de aplicaciones y conocimientos extensos sobre promt engineering.",
        date: "Sept 2023",
    },
    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Año de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 20,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    }
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Profesor IA",
        description: "Te enseño a utilizar una IA para cuestiones básicas como edición de fotos, video, escribir blogs...",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Entrenador personal",
        description: "Creación de rutinas totalemente personalizadas para un cambio físico o para mantener una vida sana",
    },
    {
        icon: <Rocket />,
        title: "Entrenador de tu felicidad",
        description: "Te ayudo a descubrir cómo mejorar tu felicidad basal a raiz de la creacion de ciertos habitos y reflexiones",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Clon de Netflix - AlberFlix",
        image: "/Alberflix.png",
        urlGithub: "https://alberflix.netlify.app",
        description: "Clon de aplicacion de peliculas con verificacion de inicio de sesion, selección de perfiles, lista de películas favoritas,más populares y en tendencias.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Nextjs", "Prisma"],
    },
    {
        id: 2,
        title: "Landing de Tesla - FrontEnd",
        image: "/Tesla.png",
        urlGithub: "https://teslaberto.netlify.app",
        description: "Clon del landing de Tesla con todos los efectos visuales y todos los modelos que ellos traen disponibles",
        technologies: ["HTML", "CSS", "JavaScript", "Astro", "React"],
    },
    {
        id: 3,
        title: "Clon de Spotify - FrontEnd",
        image: "/Spotify.png",
        urlGithub: "https://spotifyalberto.netlify.app",
        description: "Clon de la aplicacion de música Spotify con varios álbumes y varias listas de canciones Lo-Fi",
        technologies: ["HTML", "CSS", "JavaScript", "Astro", "React"],
    },
    {
        id: 4,
        title: "Aplicación de bebidas y cócteles",
        image: "/Bebidas.png",
        urlGithub: "https://bebidas-zustand.netlify.app",
        description: "Aplicacion para mirar cientos de recetas de bebidas, cócteles, cafés, etc. Tiene varios filtros y apartado de favoritos.",
        technologies: ["HTML", "CSS", "JavaScript", "Zustand", "React"],
    },
   
];

export const otrosProyectos = [
    {
        id: 1,
        title: "App para el clima con api",
        image: "/AppTiempo.png",
        urlGithub: "https://climaconapi.netlify.app",
        description: "App para mirar el tiempo con temperaturas máximas y mínimas en todo el mundo. Está enlazado a una api la cual permite que sean datos actualizados todo el tiempo.",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Vite"],
    },
    {
        id: 2,
        title: "Cotizador de Criptomonedas",
        image: "/ApiCriptos.png",
        urlGithub: "https://cotizadorcripto1302.netlify.app/",
        description: "Cotizador de criptomonedas para saber su precio en cada momento. Vinculado a una api para estar actualizado.",
        technologies: ["HTML", "CSS", "JavaScript", "Zustand", "React"],
    },
    {
        id: 3,
        title: "Planificador de gastos",
        image: "/Gastos.png",
        urlGithub: "https://planificadorgastos1302.netlify.app/",
        description: "App para planificar tus gastos, ingresos y demas. Tiene varios filtros y apartados y es muy útil",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
        id: 4,
        title: "Tienda de guitarras - GuitarLA",
        image: "/Guitarras.png",
        urlGithub: "https://carritoguitarrasusered.netlify.app",
        description: "Tienda de guitarras con gran variedad de tipos y diferentes precios.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    
];