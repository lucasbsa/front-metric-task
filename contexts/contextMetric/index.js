import React, { createContext, useState, useEffect, useContext } from 'react'
import { GetMetric } from '../../services/ServiceMetric'
import {ListBoard} from '../../services/ServiceBoard'
import {GetSprintForBoard} from '../../services/ServiceSprint'

const ContextMetric = createContext();

export default function MetricProvider({ children }) {

    const [metric, setMetric] = useState([]);

    const [metricUser, setMedtriUser] = useState([]);
    const [idUserFilter, setIdUserFilter] = useState(0);
    const [idSprintFilter, setIdSprintFilter] = useState(0);
    const [idBoardFilter, setIdBoardFilter] = useState(0);

    const [board, setBoard] = useState([]);
    const [sprint, setSprint] = useState([]);

    async function getMetricUser(IdUser) {

        const response = await GetMetric(IdUser);
        setMedtriUser(response);
    }

    

    async function GetBoardUser(idUser){
        const response = await ListBoard(idUser);
        setBoard(response);

    }
    async function GetSprintUser(idBoard){
        const response = await GetSprintForBoard(idBoard);
        setSprint(response);
    }


    return (
        <ContextMetric.Provider
            value=
            {{
                metric,
                setMetric,
                getMetricUser,
                metricUser,
                idUserFilter,
                setIdUserFilter,
                idSprintFilter,
                setIdSprintFilter,
                idBoardFilter,
                setIdBoardFilter,
                board,
                sprint,
                GetBoardUser,
                GetSprintUser
            }}>
            {children}
        </ContextMetric.Provider>
    )
}

export function useContextMetric() {
    const context = useContext(ContextMetric);
    const {
        metric,
        setMetric,
        getMetricUser,
        metricUser,
        idUserFilter,
        setIdUserFilter,
        idSprintFilter,
        setIdSprintFilter,
        idBoardFilter,
        setIdBoardFilter,
        board,
        sprint,
        GetBoardUser,
        GetSprintUser
    } = context;
    return {
        metric,
        setMetric,
        getMetricUser,
        metricUser,
        idUserFilter,
        setIdUserFilter,
        idSprintFilter,
        setIdSprintFilter,
        idBoardFilter,
        setIdBoardFilter,
        board,
        sprint,
        GetBoardUser,
        GetSprintUser
    }

}
