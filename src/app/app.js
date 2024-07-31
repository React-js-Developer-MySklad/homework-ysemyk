import html from "./app.html";
import './app.css'
import header from "../components/contragents/header/header";
import table from "../components/contragents/table/table";
import modal from "../components/contragents/modal/modal";
import {setCreateButtonHandler} from "../components/contragents/modal/modal";

const rootElement = document.getElementById('root');
rootElement.innerHTML = html;

const head = rootElement.querySelector('header');
const main = rootElement.querySelector('main');
const footer = rootElement.querySelector('footer');
head.append(header());
main.append(table());
footer.append(modal());

const createButton = () => document.getElementById('create-button');
setCreateButtonHandler(createButton());