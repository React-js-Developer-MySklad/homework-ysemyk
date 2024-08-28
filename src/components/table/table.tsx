import * as css from './table.module.css'
import React, {useEffect, useState} from 'react';
import {TableRow} from './tableRow';

export type Agent = {
    id: string;
    name: string;
    inn: string;
    address: string;
    kpp: string;
}

type Props = {
    editEntry: (agent: Agent) => void;
    removeEntry: (agent: Agent) => void;
    data: Agent[];
}

const headerNames = ['ID','Наименование', 'Инн', 'Адрес', 'КПП', ''];

export const Table = ({editEntry, removeEntry, data}: Props) => {

    const [counteragents, setCounteragents] = useState([]);


    useEffect(()=> {
        setCounteragents(data);
    }, [data]);


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
                    <TableRow key={agent.id} agent={agent} onEdit={() => editEntry(agent)} onDelete={() => removeEntry(agent)}/>)
                }
                </tbody>
            </table>
        </div>
    );
}
