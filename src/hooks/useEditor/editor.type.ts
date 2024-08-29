import {Agent} from "../../components/table/table";

export type EditorState = {
    modalShown: boolean
    editMode: string
    agentForEditing: Agent
    openCreateWindow: () => void
    openEditWindow: (agent: Agent) => void
    closeWindow: () => void
}