import {render} from "@testing-library/react";
import Header from './header';



describe('header', () => {

    const {getByText} = render(<Header/>);

    it('should render button', () => {
        expect(getByText("Создать")).toBeTruthy();
    });
})