import { StyledHeading } from "./styles"

const Heading = ({ subTitle, title }) => {
  return (
    <StyledHeading>
        <h3>{subTitle}</h3>
        <h2>{title}</h2>
    </StyledHeading>
  )
}

export default Heading