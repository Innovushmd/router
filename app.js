import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Game from './components/Game.js';

const app = document.getElementById('app');

app.appendChild(Header());
app.appendChild(Game());
app.appendChild(Footer());
