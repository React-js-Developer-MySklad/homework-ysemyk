import {useContext} from "react";
import {CounteragentsContext} from "./counteragents.context";

export const useCounteragents = () => {
    const context = useContext(CounteragentsContext);
    if (context === null) {
        throw Error('useCounteragents hook outside CounteragenstProvider');
    }

    return context;
}