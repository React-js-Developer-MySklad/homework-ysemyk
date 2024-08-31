import {fireEvent, render} from "@testing-library/react";
import {Header} from './header';
import MockEditorProvider from "../../hooks/useEditor/editor.mock";


describe('header', () => {
    const openCreateWindow = jest.fn();
    const openEditWindow = jest.fn();
    const closeWindow = jest.fn();
    const editorMockValue = {modalShown: false, editMode: 'Создать запись',
        agentForEditing: { id: '', name: '', inn: '', address: '', kpp: '' },
        openCreateWindow, openEditWindow, closeWindow};

    const {getByText} = render(
        <MockEditorProvider mockValue={editorMockValue}>
        <Header/>
        </MockEditorProvider>
    );

    it('should render button', () => {
        expect(getByText("Создать")).toBeTruthy();

        fireEvent.click(getByText('Создать'));
        expect(openCreateWindow).toHaveBeenCalledTimes(1);
    });
})