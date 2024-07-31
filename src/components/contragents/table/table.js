import html from "./table.html";
import './table.css';
import {showEditModal} from "../modal/modal";

let counteragents = [
    {id: 11021, name: 'Romashka', inn: 19248025762, address: 'Moscow, Mirnaya st., 15', kpp: 852893691},
    {id: 11022, name: 'Ivanov P.A.', inn: 82251876231, address: 'Moscow, Lenina st., 29', kpp: 817591127},
    {id: 11023, name: 'Romashka', inn: 80168251127, address: 'Moscow, Volskaya st., 1', kpp: 821782909},
    {id: 11024, name: 'Romashka', inn: 80726152991, address: 'Moscow, Krasnaya st., 6', kpp: 826723927},
];

let idCounter = 11024; //Чтобы солидно выглядело, будто у нас большая база :)

const node = document.createElement('div');
node.innerHTML = html;

const headerTemplate = node.querySelector('#header-template');
const headerInsertPoint = node.querySelector('#table-head');
const headerNames = ['ID','Наименование', 'Инн', 'Адрес', 'КПП', ''];
const tableBodyInsertPoint = node.querySelector('#table-body');
const rowTemplate = node.querySelector('#row-template');
const rowWithButtonTemplate = node.querySelector('#row-button-template');

renderTable();

function renderTable() {
    createHeaders();
    createContent(counteragents);
}

function createHeaders(){
    headerInsertPoint.innerHTML = "";
    for (let name of headerNames) {
        let header = createHeader(name);
        headerInsertPoint.appendChild(header);
    }
}

function createHeader(name) {
    let header = headerTemplate.content.children[0].cloneNode();
    header.innerHTML = name;
    return header;
}

function createContent(counteragents) {
    tableBodyInsertPoint.innerHTML = "";
    for (let i = 0; i < counteragents.length; i++) {
        const row = createContentRow(counteragents[i]);
        tableBodyInsertPoint.appendChild(row);
    }
}

function createContentRow(agent) {
    const row = document.createElement('tr');
    row.classList.add("content-row");
    row.appendChild(createContentCol(agent.id, rowTemplate));
    row.appendChild(createContentCol(agent.name, rowTemplate));
    row.appendChild(createContentCol(agent.inn, rowTemplate));
    row.appendChild(createContentCol(agent.address, rowTemplate));
    row.appendChild(createContentCol(agent.kpp, rowTemplate));
    let deleteButtonColumn = createContentCol(rowWithButtonTemplate.innerHTML, rowTemplate)
    deleteButtonColumn.addEventListener('click', function (event) {
        tableBodyInsertPoint.removeChild(row);
        removeAgent(agent);
        event.stopPropagation();
    });
    row.appendChild(deleteButtonColumn);
    row.addEventListener('dblclick', function (event) {
        showEditModal(agent);
    });
    return row;
}

function createContentCol(value, template) {
    const rowColumn = template.content.children[0].cloneNode(true);
    rowColumn.innerHTML = value;
    return rowColumn;
}

function removeAgent(agent) {
    let index = counteragents.indexOf(agent);
    if (index > -1) {
        counteragents.splice(index, 1);
    }
}

function addAgent(agent) {
    counteragents.push(agent);
    renderTable();
}

function updateAgent(agent) {
    counteragents.forEach((current) => {
        if (current.id == agent.id) {
            current.name = agent.name;
            current.inn = agent.inn;
            current.address = agent.address;
            current.kpp = agent.kpp;
        }
    });
    renderTable();
}

function getNewId() {
    idCounter = idCounter + 1;
    return idCounter;
}

export default () => node;
export const addCounteragent = (agent) => addAgent(agent);
export const updateCounteragent = (agent) => updateAgent(agent);
export const generateId = () => getNewId();