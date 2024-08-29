import {fireEvent, render} from "@testing-library/react";
import {Modal} from './modal';
import MockEditorProvider from "../../hooks/useEditor/editor.mock";
import MockCounteragentsProvider from "../../hooks/useCounteragents/counteragents.mock";
import {Agent} from "../table/table";

describe('tableRow', () => {
    const openCreateWindow = jest.fn();
    const openEditWindow = jest.fn();
    const closeWindow = jest.fn();
    const editorMockValue = {modalShown: true, editMode: 'Создать запись',
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

    const {getByText} = render(
        <MockCounteragentsProvider mockValue={counteragentsMockValue}>
            <MockEditorProvider mockValue={editorMockValue}>
                <Modal/>
            </MockEditorProvider>
        </MockCounteragentsProvider>
    );

    it('should render window with fields', () => {
        expect(getByText("Создать запись")).toBeTruthy();
        expect(getByText("ID")).toBeTruthy();
        expect(getByText("Наименование")).toBeTruthy();
        expect(getByText("ИНН")).toBeTruthy();
        expect(getByText("Адрес")).toBeTruthy();
        expect(getByText("КПП")).toBeTruthy();
        expect(getByText("Сохранить")).toBeTruthy();
        expect(getByText("Отменить")).toBeTruthy();
        fireEvent.click(getByText('Отменить'));
        expect(closeWindow).toHaveBeenCalledTimes(1);
    });
})