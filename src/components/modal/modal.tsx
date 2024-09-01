import * as css from './modal.module.css'
import React, {useEffect, useState} from "react";
import {useEditor} from "../../hooks/useEditor/editor.hook";
import {useCounteragents} from "../../hooks/useCounteragents/counteragents.hook";
import { Form, Field } from 'react-final-form'
import {composeValidators, fieldLenghtRestricted, fieldRequired, fieldWithNumbers} from "./modal.validation";


export const Modal = () => {
    const {agentForEditing, modalShown, closeWindow, editMode} = useEditor();
    const {addNewAgent, updateExistingAgent, counteragents} = useCounteragents();


    let [id, setId] = useState('');
    let [name, setName] = useState('');
    let [inn, setInn] = useState('');
    let [address, setAddress] = useState('');
    let [kpp, setKpp] = useState('');
    let [mode, setMode] = useState('Создать запись');


    useEffect(() => {
        setMode(editMode);
    }, [editMode]);


    useEffect(() => {
        setId(editMode == 'Создать запись' ? getLastId().toString() : agentForEditing.id);
        setName(agentForEditing.name);
        setInn(agentForEditing.inn);
        setAddress(agentForEditing.address);
        setKpp(agentForEditing.kpp);
    }, [agentForEditing]);

    const getLastId = () => {
        const ids: number[] = counteragents.map((c) => Number(c.id));
        return ids.length > 0 ? Math.max(...ids) + 1 : 1;
    }

    const onSubmitForm = (values: any) => {
        let agent = {id: values.id, name: values.name, inn: values.inn, address: values.address, kpp: values.kpp};
        if (mode == 'Создать запись') {
            addNewAgent(agent);
        } else {
            updateExistingAgent(agent);
        }
        closeWindow();
    }

    return (
        <div id="modal" tabIndex={-1} aria-hidden="true"
             className={`${css.modal_container} ${modalShown ? "shown" : "hidden"}`}>
            <div className={css.outer_container}>
                {/* Modal content */}
                <div className={css.content}>
                    {/* Modal header */}
                    <div className={css.header}>
                        <button type="button" onClick={closeWindow}
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
                        <Form validateOnBlur initialValues={{id: id, name: name, inn: inn, address: address, kpp: kpp}}
                              onSubmit={onSubmitForm} render={({ handleSubmit, form, submitting, pristine, values })=> (
                            <form onSubmit={handleSubmit}>

                                <div className={css.field_wrapper}>
                                    <Field name="id" defaultValue={id}>
                                        {
                                            ({input}) => (
                                                <div>
                                                    <label className={css.field_label}>ID</label>
                                                    <input {...input} disabled className={css.id_field_disabled} type="text" name="id" id="id"/>
                                                </div>
                                            )
                                        }
                                    </Field>
                                </div>

                                <div className={css.field_wrapper}>
                                    <Field name="name" validate={fieldRequired}>
                                        {
                                            ({input, meta}) => (
                                                <div>
                                                    <label className={css.field_label}>Наименование</label>
                                                    <input {...input} className={css.std_input} type="text"/>
                                                    {meta.error && meta.touched && <span className={css.error_label}>{meta.error}</span>}
                                                </div>
                                            )
                                        }
                                    </Field>
                                </div>

                                <div className={css.field_wrapper}>
                                    <Field name="inn" validate={composeValidators(fieldRequired, fieldWithNumbers, fieldLenghtRestricted(11))} >
                                        {
                                            ({input, meta}) => (
                                                <div>
                                                    <label className={css.field_label}>ИНН</label>
                                                    <input {...input} className={css.std_input} type="text"/>
                                                    {meta.error && meta.touched && <span className={css.error_label}>{meta.error}</span>}
                                                </div>
                                            )
                                        }
                                    </Field>
                                </div>

                                <div className={css.field_wrapper}>
                                    <Field name="address" validate={fieldRequired}>
                                        {
                                            ({input, meta}) => (
                                                <div>
                                                    <label className={css.field_label}>Адрес</label>
                                                    <input {...input} className={css.std_input} type="text"/>
                                                    {meta.error && meta.touched && <span className={css.error_label}>{meta.error}</span>}
                                                </div>
                                            )
                                        }
                                    </Field>
                                </div>

                                <div className={css.field_wrapper}>
                                    <Field name="kpp" validate={composeValidators(fieldRequired, fieldWithNumbers, fieldLenghtRestricted(9))}>
                                        {
                                            ({input, meta}) => (
                                                <div>
                                                    <label className={css.field_label}>КПП</label>
                                                    <input {...input} className={css.std_input} type="text"/>
                                                    {meta.error && meta.touched && <span className={css.error_label}>{meta.error}</span>}
                                                </div>
                                            )
                                        }
                                    </Field>
                                </div>

                                <button className={css.save_button} type="submit">
                                    Сохранить
                                </button>
                                <div  onClick={closeWindow} className={css.close_button}>
                                    Отменить
                                </div>
                            </form>
                        )}>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}