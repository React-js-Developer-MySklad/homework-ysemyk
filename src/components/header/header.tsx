import * as css from './header.module.css'
import logo from '../../assets/logo.svg';
import addIcon from '../../assets/add_data.svg';

export default () => {

    return (
        <div className={css.page_header}>
            <img className={css.header_left} src={logo}></img>
            <div className={css.header_middle}></div>
            <button type="button" onClick={() => openModal()}
                    className={css.header_right}>
                <img className={css.add_data_img} src={addIcon}></img>
                <div className={css.add_data_div}>Создать</div>
            </button>
        </div>
    )
}

function openModal() {
    alert("Должна открыться модалка с ПУСТЫМИ данными");
}