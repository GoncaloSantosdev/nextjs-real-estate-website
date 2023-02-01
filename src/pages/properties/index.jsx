import DefaultLayout from "@/src/layouts/DefaultLayout";
// Components
import { PropertiesList } from "@/src/components";

const Properties = ({ properties }) => {
  console.log(properties);

  return (
    <>
      <DefaultLayout>
        <section className='properties__list'>
          <PropertiesList properties={properties}/>
        </section>
      </DefaultLayout>
    </>
  )
}

export default Properties;


export const getStaticProps = async () => {
  const { hits } = require('../../features/data/properties');

  return{
    props: { properties: hits}
  }
};