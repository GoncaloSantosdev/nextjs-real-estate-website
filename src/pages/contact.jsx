import DefaultLayout from '../layouts/DefaultLayout';
// Styles
import styled from 'styled-components';

const Contact = () => {
  return (
    <DefaultLayout>
        <section className='contact'>
            <div className="container">
               <StyledContactWrapper>
                    <StyledContactForm>
                        <h3>Contact Us</h3>
                        <hr />
                        <form>
                            <input type="text" placeholder='Name'/>
                            <input type="text" placeholder='Email'/>
                            <input type="text" placeholder='Phone'/>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                            <button className='btn active'>Submit</button>
                        </form>
                    </StyledContactForm>

                    <StyledContactInfo>
                        <h3>For Inquires Contact:</h3>
                        <hr />
                        <div>
                            <p>Linnet Cubin</p>
                            <p>Public Relations Manager</p>
                            <p>774 NE 84th St Miami, FL</p>
                            <p>33879</p>
                        </div>
                        <div>
                            <p>Rodd Epsley</p>
                            <p>Public Relations Manager</p>
                            <p>774 NE 84th St Miami, FL</p>
                            <p>33879</p>
                        </div>
                    </StyledContactInfo>
               </StyledContactWrapper>  
            </div>
        </section>
    </DefaultLayout>
  )
}

export default Contact;

export const StyledContactWrapper = styled.div`
    margin-top: 2rem;
    
    @media screen and (min-width: 960px) {
        display: flex;
        justify-content: space-between;
    }
    `

export const StyledContactForm = styled.div`
    background-color: var(--white);
    border-radius: 10px;
    padding: 3rem 2rem;
    
    @media screen and (min-width: 960px) {
        padding: 4rem 3rem;
    }


    @media screen and (min-width: 960px) {
        width: 70%;
    }

    hr{
        margin-top: 0.5rem;
    }

    form{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;


        input, textarea{
            padding: 1rem;
            border: 1px solid black;
            margin: 1rem 0;
        }

        button{
            margin-top: 1rem;
        }
    }
`

export const StyledContactInfo = styled.div`
    background-color: var(--white);
    border-radius: 10px;
    padding: 3rem 2rem;
    margin-top: 2rem;

    @media screen and (min-width: 960px) {
        margin-top: 0rem;
        height: 370px;
        padding: 4rem 3rem;
    }

    hr{
        margin-top: 0.5rem;
    }

    div{
        margin-top: 1rem;

        p{
            font-size: 0.875rem;
        }
    }
`