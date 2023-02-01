import styled from "styled-components";

export const StyledPropertyList = styled.div`
    margin: 5rem 0;
`

export const StyledPropertyListGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

    @media screen and (min-width: 960px) {
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
    }
`