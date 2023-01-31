import { StyledHero, StyledHeroContent } from "./styles"

const Hero = () => {
  return (
    <StyledHero>
        <div className='container'>
            <StyledHeroContent>
                <h1>Find Your Dream Home</h1>
                <div className='hero__content-cta'>
                    <button className='btn active'>Buy</button>
                    <button className='btn'>Rent</button>
                    <button className='btn'>Sell</button>
                </div>
                <form className='hero__content-form'>
                    <input type="text" placeholder='Enter Keyword'/>
                    <input type="text" placeholder='Property Type'/>
                    <input type="text" placeholder='Location'/>
                    <div className='hero__form-btn'>
                      <button className='btn active'>Search</button>
                    </div>
                </form>
            </StyledHeroContent>
        </div>
    </StyledHero>
  )
}

export default Hero