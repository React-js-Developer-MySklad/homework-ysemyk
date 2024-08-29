import {createContext} from "react";
import {CounteragentsState} from "./counteragents.type"

export const CounteragentsContext = createContext<CounteragentsState>(null)