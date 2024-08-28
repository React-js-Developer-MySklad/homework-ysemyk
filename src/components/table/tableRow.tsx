import * as css from "./table.module.css";
import React from 'react';
import {Agent} from './table';


type Props = {
    agent: Agent
    onEdit: (agent: Agent) => void;
    onDelete: (agent: Agent) => void;
}


export const TableRow = ({agent, onEdit, onDelete}: Props) => {
    return (
        <tr onDoubleClick={() => onEdit(agent)}>
            <td className={css.rows_decor}>{agent.id}</td>
            <td className={css.rows_decor}>{agent.name}</td>
            <td className={css.rows_decor}>{agent.inn}</td>
            <td className={css.rows_decor}>{agent.address}</td>
            <td className={css.rows_decor}>{agent.kpp}</td>
            <td className={css.rows_decor}>
                <div onClick={() => onDelete(agent)} className={css.delete}>Удалить</div>
            </td>
        </tr>
    );
};