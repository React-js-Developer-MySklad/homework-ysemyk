import * as css from './modal.module.css'
import React, {FormEvent, useEffect, useState} from "react";
import {Agent} from "../table/table";

type Props = {
    modalShown: boolean;
    closeModal: () => void;
    editorData?: Agent;
    createAgent: (agent: Agent) => void;
    editAgent: (agent: Agent) => void;
    selectedMode: string;
}

export const Modal = ({modalShown, closeModal, editorData, createAgent, editAgent, selectedMode}: Props) => {

    let [id, setId] = useState('');
    let [name, setName] = useState(editorData ? editorData.name : '');
    let [inn, setInn] = useState(editorData ? editorData.inn : '');
    let [address, setAddress] = useState(editorData ? editorData.address : '');
    let [kpp, setKpp] = useState(editorData ? editorData.kpp : '');
    let [mode, setMode] = useState('Создать запись');


    useEffect(()=> {
        setId(editorData.id);
        setName(editorData.name);
        setInn(editorData.inn);
        setAddress(editorData.address);
        setKpp(editorData.kpp);
        setMode(selectedMode);
    }, [editorData]);


    const onFormSubmit = (e: FormEvent) => {
        let agent = {id: id, name: name, inn: inn, address: address, kpp: kpp};
        if (mode == 'Создать запись') {
            createAgent(agent);
        } else {
            editAgent(agent);
        }
        e.preventDefault();
    }


    return (
        <div id="modal" tabIndex={-1} aria-hidden="true"
             className={`${css.modal_container} ${modalShown ? "shown" : "hidden"}`}>
            <div className={css.outer_container}>
                {/* Modal content */}
                <div className={css.content}>
                    {/* Modal header */}
                    <div className={css.header}>
                        <button type="button" onClick={closeModal}
                                className={css.x_button}>
                            <svg className={css.x_button_img} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className={css.close_modal}>Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className={css.modal_body}>
                        <div id="modal-title"
                             className={css.modal_header}>
                            {mode}
                        </div>
                        <form className={css.main_form} onSubmit={onFormSubmit}>
                            <div className={css.field_wrapper}>
                                <label className={css.field_label_pass}>ID</label>
                                <input disabled maxLength={20} type="text" value={id}
                                       className={css.id_field_disabled}
                                       required/>
                            </div>
                            <div className={css.field_wrapper}>
                                <label className={css.field_label_pass}>Наименование</label>
                                <input maxLength={30} type="text" value={name}
                                       className={css.std_input}
                                       required
                                       onChange={event => setName(event.target.value)}
                                />
                            </div>
                            <div className={css.field_wrapper}>
                                <label className={css.field_label_pass}>ИНН</label>
                                <input maxLength={11} type="text" value={inn}
                                       className={css.std_input}
                                       required
                                       onChange={event => setInn(event.target.value)}
                                />
                            </div>
                            <div className={css.field_wrapper}>
                                <label className={css.field_label_pass}>Адрес</label>
                                <input maxLength={30} type="text" value={address}
                                       className={css.std_input}
                                       required
                                       onChange={event => setAddress(event.target.value)}
                                />
                            </div>
                            <div className={css.field_wrapper}>
                                <label className={css.field_label_pass}>КПП</label>
                                <input maxLength={9} type="text" value={kpp}
                                       className={css.std_input}
                                       required
                                       onChange={event => setKpp(event.target.value)}
                                />
                            </div>
                            <button className={css.save_button} type="submit">
                                Сохранить
                            </button>
                            <div  onClick={closeModal} className={css.close_button}>
                                Отменить
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}