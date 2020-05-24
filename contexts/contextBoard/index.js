import React, { createContext, useState, useEffect, useContext } from 'react'
import {ListBoard} from '../../services/ServiceBoard'


const ContextBoard = createContext();

export default function BoardProvider({children}) {

    const [board, setBoard] = useState([]);

    useEffect(()=>{
        
        async function LoadBoard() {
            const board = await ListBoard();
            setBoard(board);
        }
        LoadBoard();
    },[]);

    return (
        <ContextBoard.Provider
            value=
            {{
                board,
                setBoard,
            }}>
            {children}
        </ContextBoard.Provider>
    )
}

export function useContextBoard() {
    const context = useContext(ContextBoard);
    const { board, setBoard, } = context;
    return { board, setBoard,  }

}
