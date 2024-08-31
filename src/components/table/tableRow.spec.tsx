import {fireEvent, render} from "@testing-library/react";
import {TableRow} from './tableRow';
import {Agent} from "./table";


describe('tableRow', () => {

    const onEdit = jest.fn();
    const onDelete = jest.fn();
    const agent: Agent = { id: '10', name: 'first', inn: '11', address: 'address10', kpp: '12' };

    const {getByText} = render(<TableRow onEdit={onEdit} onDelete={onDelete} agent={agent}/>);

    it('should render table row with double click handler', () => {
        expect(getByText("10")).toBeTruthy();
        expect(getByText("first")).toBeTruthy();
        expect(getByText("11")).toBeTruthy();
        expect(getByText("address10")).toBeTruthy();
        expect(getByText("12")).toBeTruthy();
        fireEvent.doubleClick(getByText('first'));
        expect(onEdit).toHaveBeenCalledTimes(1);
        fireEvent.click(getByText('Удалить'));
        expect(onDelete).toHaveBeenCalledTimes(1);
    });
})