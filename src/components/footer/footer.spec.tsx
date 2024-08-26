import {render} from "@testing-library/react";
import Footer from './footer';



describe('footer', () => {

    const {getByText} = render(<Footer/>);

    it('should render copyright label', () => {
        expect(getByText("© 2007-2024 ООО «Логнекс»")).toBeTruthy();
    });
})