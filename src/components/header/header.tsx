import * as css from './header.module.css'
import logo from '../../assets/logo.svg';
import addIcon from '../../assets/add_data.svg';

type Props = {
    showCreateWindow: () => void;
}

export const Header = ({showCreateWindow}: Props) => {

    return (
        <div className={css.page_header}>
            <img className={css.header_left} src={logo}></img>
            <div className={css.header_middle}></div>
            <button type="button" onClick={showCreateWindow} data-modal-show="modal"
                    className={css.header_right}>
                <img className={css.add_data_img} src={addIcon}></img>
                <div className={css.add_data_div}>Создать</div>
            </button>
        </div>
    )
}