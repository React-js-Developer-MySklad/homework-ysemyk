import {fireEvent, render} from "@testing-library/react";
import {Header} from './header';



describe('header', () => {
    const createWindow = jest.fn();
    const {getByText} = render(<Header showCreateWindow={createWindow}/>);

    it('should render button', () => {
        expect(getByText("Создать")).toBeTruthy();

        fireEvent.click(getByText('Создать'));
        expect(createWindow).toHaveBeenCalledTimes(1);
    });
})