import {Agent} from "../../components/table/table";


export type CounteragentsState = {
    counteragents: Agent[];
    addNewAgent: (agent: Agent) => void;
    updateExistingAgent: (agent: Agent) => void;
    removeAgent: (agent: Agent) => void;
}