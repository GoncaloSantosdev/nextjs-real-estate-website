import styled from "styled-components";

export const StyledTestemonials = styled.div`
    .swiper {
        width: 100%;
        height: 100%;
        margin-top: 5rem;
    }

    .swiper-slide {
        text-align: center;

    /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    img{
        border-radius: 50%;
        object-fit: cover;
    }

    h3{
        margin-top: 2rem;
    }

    p{
        width: 50%;
        margin: 0 auto;
        margin-top: 1rem;
        font-size: 0.875rem;
    }
`


  