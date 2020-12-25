import '../css/styles.scss';
import '../fonts/Montserrat.css';

import Siema from 'siema';
const mySiema = new Siema();
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
