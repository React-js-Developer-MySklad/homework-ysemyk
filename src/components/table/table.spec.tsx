import {render} from "@testing-library/react";
import Table from './table';



describe('table', () => {

    const {getByText} = render(<Table/>);

    it('should render table headers and 4 users by default', () => {
        expect(getByText("ID")).toBeTruthy();
        expect(getByText("Наименование")).toBeTruthy();
        expect(getByText("Инн")).toBeTruthy();
        expect(getByText("Адрес")).toBeTruthy();
        expect(getByText("КПП")).toBeTruthy();
        expect(getByText("Romashka")).toBeTruthy();
        expect(getByText("Ivanov P.A.")).toBeTruthy();
        expect(getByText("Spring Co")).toBeTruthy();
        expect(getByText("Petrov the Petr")).toBeTruthy();
    });
})