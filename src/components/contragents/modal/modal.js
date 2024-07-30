import html from "../modal/modal.html";
import './modal.css';
import {Modal} from "flowbite";
import {addCounteragent, updateCounteragent, generateId} from "../table/table";

const element = document.createElement('div');
element.innerHTML = html;

const target = element.querySelector('div');
const modalWindow = new Modal(target, { placement: "center", backdrop: "dynamic", "closable": true });

const idField = () => document.getElementById('id');
const nameField = () => document.getElementById('name');
const innField = () => document.getElementById('inn');
const addressField = () => document.getElementById('address');
const kppField = () => document.getElementById('kpp');
const title = () => document.getElementById('modal-title');

const cancelButton = element.querySelector('.close-button');
const xButton = element.querySelector('.x-button');
const saveButton = element.querySelector('.save-button');
let mode = "create";

setCloseHandlers();
setSaveHandler();

function setCloseHandlers() {
    cancelButton.addEventListener('click', evt => {
        modalWindow.hide();
        evt.preventDefault();
    });

    xButton.addEventListener('click', evt => {
        modalWindow.hide();
        evt.preventDefault();
    });
}

function setSaveHandler() {
    saveButton.addEventListener('click', evt => {
        let errors = validateFields();
        if (errors.innInvalid || errors.kppInvalid) {
            outlineErrors(errors);
        } else {
            const agent = {
                id: mode == "create" ? generateId() : idField().value,
                name: nameField().value,
                inn: innField().value,
                address: addressField().value,
                kpp: kppField().value
            }

            mode == "create" ? addCounteragent(agent) : updateCounteragent(agent);
            modalWindow.hide();
        }
        evt.preventDefault();
    });
}

function validateFields() {
    let errors = { innInvalid : false, kppInvalid : false };
    errors.innInvalid = !/^[0-9]{11}$/.test(innField().value);
    errors.kppInvalid = !/^[0-9]{9}$/.test(kppField().value);
    if ( errors.innInvalid || errors.kppInvalid) {
        return errors;
    }
    return errors;
}

function outlineErrors(errors) {
    if (errors.innInvalid) {
        innField().classList.add("invalid-field")
    } else {
        innField().classList.remove("invalid-field");
    }
    if (errors.kppInvalid) {
        kppField().classList.add("invalid-field")
    } else {
        kppField().classList.remove("invalid-field");
    }
}

function setCreateHandler(createButton) {
    createButton.addEventListener('click', evt => {
        create();
    });
}

function edit(agent) {
    mode = "edit";
    clearFields();
    title().innerHTML = "Редактировать запись";
    console.log("Editing agent #" + agent.id);
    idField().value = agent.id;
    nameField().value = agent.name;
    innField().value = agent.inn;
    addressField().value = agent.address;
    kppField().value = agent.kpp;
    modalWindow.show();
}

function create() {
    mode = "create";
    title().innerHTML = "Создать запись";
    clearFields();
    console.log("CREATE");
    modalWindow.show();
}

function clearFields() {
    clearOutline();
    idField().value = "";
    nameField().value = "";
    innField().value = "";
    addressField().value = "";
    kppField().value = "";
}

function clearOutline() {
    innField().classList.remove("invalid-field");
    kppField().classList.remove("invalid-field");
}

export default () => element;
export const showEditModal = (agent) => edit(agent);
export const setCreateButtonHandler = (createButton) => setCreateHandler(createButton);