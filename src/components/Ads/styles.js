import styled from "styled-components";

export const StyledAds = styled.section`
    background-image: url('https://images.unsplash.com/photo-1543969082-403d62815e2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
    background-position: center center;
    object-fit: cover;
    margin-top: 8rem;
    height: 30vh;
    
    div{
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1{
        color: white;
        font-size: 2rem;
    }

    button{
        margin-top: 1rem;
    }
`