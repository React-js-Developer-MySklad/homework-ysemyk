import * as css from './table.module.css'
import React from 'react';
import {TableRow} from './tableRow';
import {useCounteragents} from "../../hooks/useCounteragents/counteragents.hook";
import {useEditor} from "../../hooks/useEditor/editor.hook";

export type Agent = {
    id: string;
    name: string;
    inn: string;
    address: string;
    kpp: string;
}


const headerNames = ['ID','Наименование', 'Инн', 'Адрес', 'КПП', ''];

export const Table = () => {
    const { counteragents, removeAgent } = useCounteragents();
    const { openEditWindow } = useEditor();


    function renderTableHeaders() {
        return (
            <tr className={css.table_header}>
                {headerNames.map(header =>
                    <th key={header} scope="col" className={css.headers_decor}>{header}</th>)}
            </tr>
        )
    }


    return (
        <div className={css.dimensions}>
            <table className={css.table_common}>
                <thead
                    className={css.table_head}></thead>
                <tbody>
                {renderTableHeaders()}
                {counteragents.map(agent=>
                    <TableRow key={agent.id} agent={agent} onEdit={() => openEditWindow(agent)} onDelete={() => removeAgent(agent)}/>)
                }
                </tbody>
            </table>
        </div>
    );
}
