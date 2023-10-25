import styled from "styled-components";


export const ListItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;
    height: 60px;

    :hover{
        background-color: rgba(0,0,0,0.2);
    }
`

export const Avatar = styled.img`
    border-radius: 50px;
    margin-right: 10px;
    height: 30px;
    width: 30px;
`