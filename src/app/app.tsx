import {Header} from '../components/header/header';
import {Table} from '../components/table/table';
import {Footer} from '../components/footer/footer';
import {Modal} from '../components/modal/modal';
import React from "react";
import {CounteragentsProvider} from "../hooks/useCounteragents/counteragents.provider";
import {EditorProvider} from "../hooks/useEditor/editor.provider";


export const App = () => {
    return (
        <CounteragentsProvider>
            <EditorProvider>
                <Header/>
                <Table/>
                <Footer/>
                <Modal/>
            </EditorProvider>
        </CounteragentsProvider>
    )
}