import {fireEvent, render} from "@testing-library/react";
import {Modal} from './modal';
import {Agent} from "../table/table";


describe('tableRow', () => {

    const modalShown = true;
    const closeModal = jest.fn();
    const editorData: Agent = { id: '10', name: 'first', inn: '11', address: 'address10', kpp: '12' };
    const createAgent = jest.fn();
    const editAgent = jest.fn();
    const selectedMode = 'Создать запись';

    const {getByText} = render(<Modal modalShown={modalShown} closeModal={closeModal} editorData={editorData}
                                      createAgent={createAgent} editAgent={editAgent} selectedMode={selectedMode}/>);

    it('should render window with fields', () => {
        expect(getByText("Создать запись")).toBeTruthy();
        expect(getByText("ID")).toBeTruthy();
        expect(getByText("Наименование")).toBeTruthy();
        expect(getByText("ИНН")).toBeTruthy();
        expect(getByText("Адрес")).toBeTruthy();
        expect(getByText("КПП")).toBeTruthy();
        expect(getByText("Сохранить")).toBeTruthy();
        expect(getByText("Отменить")).toBeTruthy();
        fireEvent.click(getByText('Сохранить'));
        expect(createAgent).toHaveBeenCalledTimes(1);
        fireEvent.click(getByText('Отменить'));
        expect(closeModal).toHaveBeenCalledTimes(1);
    });
})