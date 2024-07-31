import html from "./header.html";
import './header.css';

const element = document.createElement('div');
element.innerHTML = html;
element.classList.add("page-header");

export default () => element;