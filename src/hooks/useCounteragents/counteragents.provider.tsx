import React, {PropsWithChildren, useCallback, useEffect, useState} from "react";
import {CounteragentsState} from "./counteragents.type";
import {CounteragentsContext} from "./counteragents.context";
import {httpRequest} from "../../tools/http-request";
import {Agent} from "../../components/table/table";

export const CounteragentsProvider: React.FC<PropsWithChildren> = ({children}) => {

    const [counteragents, setCounteragents] = useState<Agent[]>([])
    const path = "http://localhost:3000/agents";

    useEffect(() => {
        updateState();
    }, []);

    const updateState = useCallback(() => {
        httpRequest<Agent[]>(path, {
            headers: {'Content-Type': 'application/json'}, method: 'GET'
        }).then((agents) => setCounteragents([...agents]))
    }, []);

    const addNewAgent = useCallback((agent: Agent) => {
        httpRequest<Agent[]>(path, {
            headers: {'Content-Type': 'application/json'}, method: 'POST', body: JSON.stringify(agent)
        }).then(updateState).catch(err => console.log("error on create agent"))
    }, []);


    const updateExistingAgent = useCallback((agent: Agent) => {
        httpRequest<Agent[]>(`${path}/${agent.id}`, {
            headers: {'Content-Type': 'application/json'}, method: 'PUT', body: JSON.stringify(agent)
        }).then(updateState).catch(err => console.log("error on update agent"))
    }, []);

    const removeAgent = useCallback((agent: Agent) => {
        httpRequest<Agent[]>(`${path}/${agent.id}`, {
            headers: {'Content-Type': 'application/json'}, method: 'DELETE'
        }).then(updateState).catch(err => console.log("error on delete agent"))
    }, []);


    const context = {
        counteragents,
        addNewAgent,
        updateExistingAgent,
        removeAgent
    } as CounteragentsState;


    return (
        <CounteragentsContext.Provider value={context}>
            {children}
        </CounteragentsContext.Provider>
    )
}