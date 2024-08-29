import {useContext} from "react";
import {EditorContext} from "./editor.context";

export const useEditor = () => {
    const context = useContext(EditorContext);
    if (context === null) {
        throw Error('useEditor hook outside EditorProvider');
    }

    return context;
}