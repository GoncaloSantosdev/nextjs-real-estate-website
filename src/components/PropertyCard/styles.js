import styled from "styled-components";

export const StyledPropertyCardContent = styled.div`
     background-color: var(--white);
     margin-top: -6px;
     margin-bottom: 3rem;
     padding: 2rem;
     color: var(--black);
     
     .propertyType{
        text-align: left;
     }

     .propertyNameAddress{
        margin-top: 1rem;
        p{
            font-size: 0.875rem;
            margin-top: .2rem;
        }
        
        .bold{
            font-weight: 600;
        }
     }

     .propertyFeatures{
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 1rem;

        div{
            display: flex;
            align-items: center;
            position: relative;

            p{
                font-size: 0.875rem;
                margin-left: .5rem;
            }
        }

        .m2{
            font-size: 0.5rem;
            position: absolute;
        }
     }
`