import * as css from './table.module.css'
import React, {useState} from 'react';

let counteragents_array = [
    {id: 11021, name: 'Romashka', inn: 19248025762, address: 'Moscow, Mirnaya st., 15', kpp: 852893691},
    {id: 11022, name: 'Ivanov P.A.', inn: 82251876231, address: 'Moscow, Lenina st., 29', kpp: 817591127},
    {id: 11023, name: 'Spring Co', inn: 80168251127, address: 'Moscow, Volskaya st., 1', kpp: 821782909},
    {id: 11024, name: 'Petrov the Petr', inn: 80726152991, address: 'Moscow, Krasnaya st., 6', kpp: 826723927},
];

let idCounter = 11024; //Чтобы солидно выглядело, будто у нас большая база :)

const headerNames = ['ID','Наименование', 'Инн', 'Адрес', 'КПП', ''];

function renderTableHeaders() {
    return (
        <tr className={css.table_header}>
            {headerNames.map(h => <th scope="col" className={css.headers_decor}>{h}</th>)}
        </tr>
    )
}

export default () => {

    const [counteragents, setCounteragents] = useState(counteragents_array);

    return (
        <div className={css.dimensions}>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead
                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>
                <tbody>
                {renderTableHeaders()}
                {counteragents.map(c =>
                    <tr onDoubleClick={() => openModal()} key={c.toString()}>
                        <td key={c.id} className={css.rows_decor}>{c.id}</td>
                        <td key={c.name} className={css.rows_decor}>{c.name}</td>
                        <td key={c.inn} className={css.rows_decor}>{c.inn}</td>
                        <td key={c.address} className={css.rows_decor}>{c.address}</td>
                        <td key={c.kpp} className={css.rows_decor}>{c.kpp}</td>
                        <td className={css.rows_decor}>
                            <div onClick={() => removeAgent(c.id)} className={css.delete}>Удалить</div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );



    function openModal() {
        alert("Должна открыться модалка с заполненными данными");
    }

    function removeAgent(id: number) {
        let index = counteragents.indexOf(counteragents.filter((a) => a.id == id)[0]);
        if (index > -1) {
            counteragents.splice(index, 1);
            setCounteragents([...counteragents]);
        }
    }
}
