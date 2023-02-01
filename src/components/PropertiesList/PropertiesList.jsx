// Components
import { PropertyCard } from ".."
// Styles
import { StyledPropertyList, StyledPropertyListGrid } from "./styles"

const Properties = ({ properties }) => {
  return (
    <StyledPropertyList>
      <div className="container">
        <StyledPropertyListGrid>
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property}/>
          ))}
        </StyledPropertyListGrid>
      </div>
    </StyledPropertyList>
  )
}

export default Properties