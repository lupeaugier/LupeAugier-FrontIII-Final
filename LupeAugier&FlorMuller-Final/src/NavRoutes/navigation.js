import Home from "../Routes/Home";
import Favs from "../Routes/Favs";
import Contact from "../Routes/Contact";


export const rutas = [
    {
        id: 1,
        path: '/',
        Element: Home
    },
    {
        id: 2,
        path: '/favs',
        Element: Favs
    },
    {
        id: 3,
        path: '/contact',
        Element: Contact
    }

];