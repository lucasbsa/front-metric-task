import React, { createContext, useState, useEffect, useContext } from 'react'
import {ListBoard} from '../../services/ServiceBoard'


const ContextBoard = createContext();

export default function BoardProvider({children}) {

    const [board, setBoard] = useState([]);

    useEffect(()=>{
        
        ListBoard().then(response=>{
            const board = response;
            console.log('retorno do board: ', response);
            setBoard(board);
        })
            
        
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
