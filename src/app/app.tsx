import {Header} from '../components/header/header';
import {Table, Agent} from '../components/table/table';
import {Footer} from '../components/footer/footer';
import {Modal} from '../components/modal/modal';
import React, {useCallback, useState} from "react";

let agentDefault = {id: 'DEFAULT_ID', name: "DEFAULT_NAME", inn: 'DEFAULT_INN', address: "DEFAULT_ADDRESS", kpp: 'DEFAULT_KPP'}

let counteragents_array : Agent[] = [
    {id: '11021', name: 'Romashka', inn: '19248025762', address: 'Moscow, Mirnaya st., 15', kpp: '852893691'},
    {id: '11022', name: 'Ivanov P.A.', inn: '82251876231', address: 'Moscow, Lenina st., 29', kpp: '817591127'},
    {id: '11023', name: 'Spring Co', inn: '80168251127', address: 'Moscow, Volskaya st., 1', kpp: '821782909'},
    {id: '11024', name: 'Petrov the Petr', inn: '80726152991', address: 'Moscow, Krasnaya st., 6', kpp: '826723927'},
];

let idCounter = 11024; //Чтобы солидно выглядело, будто у нас большая база :)

const getNextId = () => {
    return idCounter+1;
}


export const App = () => {
    const [modalShown, setModalShown] = useState(false);
    const [editorData, setEditorData] = useState(agentDefault);
    const [counteragents, setCounteragents] = useState(counteragents_array);
    const [selectedMode, setSelectedMode] = useState('Создать запись');


    const createNewEntry = () => {
        const agent = {id: getNextId().toString(), name: '', inn: '', address: '', kpp: ''}
        console.log("Modal window mode set to: CREATING")
        setEditorData(agent);
        setSelectedMode('Создать запись');
        openModal();
    }


    const addNewAgentToDB = useCallback((agent: Agent) => {
        console.log("Create new agent with id: " + agent.id);
        counteragents.push(agent);
        setCounteragents([...counteragents]);
        closeModal();
        idCounter++;
    }, [counteragents]);


    const editEntry = useCallback((agent: Agent) => {
        console.log("Modal window mode set to: EDITING")
        setEditorData(agent);
        setSelectedMode('Редактировать запись');
        openModal();
    }, []);


    const updateAgentInDB = useCallback((agent: Agent) => {
        console.log("Update existing agent with id: " + agent.id);
        counteragents.forEach((current) => {
            if (current.id == agent.id) {
                current.name = agent.name;
                current.inn = agent.inn;
                current.address = agent.address;
                current.kpp = agent.kpp;
            }
        });
        setCounteragents([...counteragents]);
        closeModal();
    }, [counteragents]);


    function removeEntry(agent: Agent) {
        let index = counteragents.indexOf(agent);
        if (index > -1) {
            counteragents.splice(index, 1);
            setCounteragents([...counteragents]);
        }
    }


    const openModal = () => {
        setModalShown(true);
    }


    const closeModal = () => {
        setModalShown(false);
    }


    return (
    <>
        <Header showCreateWindow={createNewEntry}/>
        <Table editEntry={editEntry} removeEntry={removeEntry} data={counteragents}/>
        <Footer/>
        <Modal modalShown={modalShown} closeModal={closeModal} editorData={editorData}
               createAgent={addNewAgentToDB} editAgent={updateAgentInDB} selectedMode={selectedMode}/>
    </>
    )
}