import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination'
import styled from 'styled-components';


export const Div = styled.div`
    color: black;
    position: relative;
    margin-left: 1465px;
    /* border-color:black */

    p{
        height: 4px;

        color:black
    }
    span{
        background: rgb(235,234,234) !important

    }
    .page-link{
        border-color:rgb(235,234,234)  !important
    }
    a {
        color:black
    }

`
export const P = styled.p`


    


    
`

export const PaginationList = () => {
    return(
        <Div>
        <Pagination>
        <Pagination.First/>
        <Pagination.Prev />
        <Pagination.Item><p>{1}</p></Pagination.Item>      
        <Pagination.Item><p>{2}</p></Pagination.Item>
        <Pagination.Item><p>{3}</p></Pagination.Item>
        <Pagination.Item active><p>{4}</p></Pagination.Item>
        <Pagination.Item><p>{5}</p></Pagination.Item>
      
        <Pagination.Ellipsis />
        <Pagination.Item><p>{20}</p></Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
        </Div>
        
    );
   
}

//     // const [pagination, setPagination] = useState([
//     //     {Cod:1},
//     //     {Cod:2},
//     //     {Cod:3},
//     //     {Cod:4},
//     //     {Cod:5}
//     // ]);
//     // const [active, setActive] = useState(2);




//     return (
//         <>
//             {
//                     <div>
//                         <Pagination.First />
//                         <Pagination.Prev />
//                         <Pagination size="lg">{item.Cod}</Pagination>
//                         <Pagination.Next />
//                         <Pagination.Last />
//                     </div>





//             }
//         </>
//     );
// }



