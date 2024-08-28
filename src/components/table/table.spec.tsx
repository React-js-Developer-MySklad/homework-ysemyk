import {render} from "@testing-library/react";
import {Agent, Table} from './table';


describe('table', () => {

    const editEntry = jest.fn();
    const removeEntry = jest.fn();
    const agents: Agent[] = [
        { id: '10', name: 'first', inn: '10', address: 'address10', kpp: '10' },
        { id: '20', name: 'second', inn: '20', address: 'address20', kpp: '20' },
    ]
    const {getByText} = render(<Table editEntry={editEntry} removeEntry={removeEntry} data={agents}/>);

    it('should render table headers and 4 users by default', () => {
        expect(getByText("ID")).toBeTruthy();
        expect(getByText("Наименование")).toBeTruthy();
        expect(getByText("Инн")).toBeTruthy();
        expect(getByText("Адрес")).toBeTruthy();
        expect(getByText("КПП")).toBeTruthy();
        expect(getByText("first")).toBeTruthy();
        expect(getByText("second")).toBeTruthy();
    });
})