import React from "react";
import {EditorContext} from "./editor.context";

const MockEditorProvider = ({children, mockValue}) => (
    <EditorContext.Provider value={mockValue}>
        {children}
    </EditorContext.Provider>
)

export default MockEditorProvider;