import './style.css'
import {createRoot} from "react-dom/client";
import Button from './components/button/button';
import logoPng from './assets/logo.svg';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement)
root.render(
    <div className='layout'>
        <Button/>
        <img src={logoPng} style={{width: 200, height: 200}}
             alt='Logo'/>
    </div>
)