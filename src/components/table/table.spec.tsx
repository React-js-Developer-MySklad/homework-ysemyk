import {fireEvent, getAllByText, render} from "@testing-library/react";
import {Agent, Table} from './table';
import MockEditorProvider from "../../hooks/useEditor/editor.mock";
import MockCounteragentsProvider from "../../hooks/useCounteragents/counteragents.mock";


const openCreateWindow = jest.fn();
const openEditWindow = jest.fn();
const closeWindow = jest.fn();
const editorMockValue = {modalShown: false, editMode: 'Создать запись',
    agentForEditing: { id: '', name: '', inn: '', address: '', kpp: '' },
    openCreateWindow, openEditWindow, closeWindow};

const counteragents: Agent[] = [
    { id: '1', name: 'name1', inn: 'inn1', address: 'address1', kpp: 'kpp1' },
    { id: '2', name: 'name2', inn: 'inn2', address: 'address2', kpp: 'kpp2' }
]
const addNewAgent = jest.fn();
const updateExistingAgent = jest.fn();
const removeAgent = jest.fn();
const counteragentsMockValue = {counteragents, addNewAgent, updateExistingAgent, removeAgent};

describe('table', () => {

    const {getAllByText} = render(
        <MockCounteragentsProvider mockValue={counteragentsMockValue}>
            <MockEditorProvider mockValue={editorMockValue}>
                <Table/>
            </MockEditorProvider>
        </MockCounteragentsProvider>
    );

    it('should render table headers and 2 users by default', () => {
        expect(getAllByText("ID")[0]).toBeTruthy();
        expect(getAllByText("Наименование")[0]).toBeTruthy();
        expect(getAllByText("Инн")[0]).toBeTruthy();
        expect(getAllByText("Адрес")[0]).toBeTruthy();
        expect(getAllByText("КПП")[0]).toBeTruthy();
        expect(getAllByText("name1")[0]).toBeTruthy();
        expect(getAllByText("name2")[0]).toBeTruthy();
        fireEvent.doubleClick(getAllByText('name1')[0]);
        expect(openEditWindow).toHaveBeenCalledTimes(1);
        fireEvent.click(getAllByText('Удалить', )[0]);
        expect(removeAgent).toHaveBeenCalledTimes(1);
    });
})