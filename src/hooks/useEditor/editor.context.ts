import {createContext} from "react";
import {EditorState} from "./editor.type"

export const EditorContext = createContext<EditorState>(null)