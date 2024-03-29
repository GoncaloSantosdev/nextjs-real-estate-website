import DefaultLayout from "@/src/layouts/DefaultLayout";
// Components
import { PropertyCard } from "@/src/components";
// Styles
import styled from "styled-components";
import { getProperties } from "@/src/api/getProperties";

const Properties = ({ properties }) => {

  return (
    <>
      <DefaultLayout>
        <div className="container">
          <StyledPropertyList>
          {properties.map((property) => (
            <>
              <PropertyCard property={property}/>
            </>
          ))}
          </StyledPropertyList>
        </div>
      </DefaultLayout>
    </>
  )
}

export default Properties;


export const getStaticProps = async () => {
  // const { hits } = require('../../features/data/properties');
  const properties = await getProperties(25);

  return{
    props: { properties: properties }
    // { properties: hits}
  }
};

// Styles
export const StyledPropertyList = styled.div`
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (min-width: 960px) {
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: row;
    }
`
