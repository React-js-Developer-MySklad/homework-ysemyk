import * as css from './header.module.css'
import logo from '../../assets/logo.svg';
import addIcon from '../../assets/add_data.svg';
import {useEditor} from "../../hooks/useEditor/editor.hook";


export const Header = () => {

    const { openCreateWindow } = useEditor();

    return (
        <div className={css.page_header}>
            <img className={css.header_left} src={logo}></img>
            <div className={css.header_middle}></div>
            <button type="button" onClick={() => openCreateWindow()} data-modal-show="modal"
                    className={css.header_right}>
                <img className={css.add_data_img} src={addIcon}></img>
                <div className={css.add_data_div}>Создать</div>
            </button>
        </div>
    )
}