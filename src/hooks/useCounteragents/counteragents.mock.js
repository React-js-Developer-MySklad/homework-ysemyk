import React from "react";
import {CounteragentsContext} from "./counteragents.context";

const MockCounteragentsProvider = ({children, mockValue}) => (
    <CounteragentsContext.Provider value={mockValue}>
        {children}
    </CounteragentsContext.Provider>
)

export default MockCounteragentsProvider;