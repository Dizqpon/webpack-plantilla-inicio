import '../css/componentes.css';
import WebPackLogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'Sin nombre') => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `hola, ${nombre}...`;
    document.body.append(h1);

    //Img

    // const img = document.createElement('img');
    // img.src = WebPackLogo;
    // document.body.append(img);
};


