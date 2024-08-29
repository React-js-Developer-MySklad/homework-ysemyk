import React, {PropsWithChildren, useCallback, useState} from "react";
import {EditorState} from "./editor.type";
import {EditorContext} from "./editor.context";
import {Agent} from "../../components/table/table";


export const EditorProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [modalShown, setModalShown] = useState<boolean>()
    const [editMode, setEditMode] = useState<string>()
    const [agentForEditing, setAgentForEditing] = useState<Agent>({id: '', name: '', inn: '', address: '', kpp: ''})

    const openCreateWindow = () => {
        setAgentForEditing({id: '', name: '', inn: '', address: '', kpp: ''});
        setEditMode('Создать запись');
        setModalShown(true);
    }


    const openEditWindow = useCallback((agent: Agent) => {
        setAgentForEditing(agent);
        setEditMode('Редактировать запись');
        setModalShown(true);
    }, [])


    const closeWindow = () => {
        setModalShown(false);
    }


    const context = {
        modalShown,
        editMode,
        agentForEditing,
        openCreateWindow,
        openEditWindow,
        closeWindow
    } as EditorState;


    return (
        <EditorContext.Provider value={context}>
            {children}
        </EditorContext.Provider>
    )
}