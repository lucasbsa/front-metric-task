import styled from 'styled-components'

export const ColunmStyle = styled.div`
       position: absolute;
    margin-top: ${props => props.top};
      /* margin-left: 10px;  */
    width: ${props => props.width};
    color:${props => props.color};
    margin-left:${props => props.left}
`
export const TextArea = styled.div`
    height: 140px;
    overflow: hidden;
    align-items: center;
    background-color: hsl(0,0%,100%);
    border-color: hsl(0,0%,80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;

`