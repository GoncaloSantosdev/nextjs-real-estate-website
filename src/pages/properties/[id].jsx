// Components
import PropertySlider from '@/src/components/PropertySlider/PropertySlider';
// Hooks
import { usePropertyFormat } from '@/src/features/hooks/usePropertyFormat';
// Layout
import DefaultLayout from '@/src/layouts/DefaultLayout';
// Styles
import { StyledSinglePropertyContentFeaturesSlider } from '@/src/components/PropertySlider/styles';
import styled from 'styled-components';
// React Icons
import { CiLocationOn } from 'react-icons/ci';
import { FaBed } from 'react-icons/fa';
import { GiBathtub } from 'react-icons/gi';
import { Md6FtApart } from 'react-icons/md';
import { IoMdPricetag } from 'react-icons/io';
import { getProperty } from '@/src/api/getProperty';

const SingleProperty = ({ property }) => {
  const {  
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    panorama,
    amenities,
    furnished 
    } = usePropertyFormat(property);

  return (
    <DefaultLayout>
        <StyledSingleProperty>
            <div className="container">
                <StyledSinglePropertyContent>
                    {/* Heading */}
                    <StyledSinglePropertyContentTitle>
                        <h3>{propertyType}{title}</h3>
                        <div className="singlePropertyContent__title-address">
                            <p><CiLocationOn size={18}/> {address} - ID: {externalID}</p>
                        </div>
                    </StyledSinglePropertyContentTitle>

                    {/* Content */}
                    <StyledSinglePropertyContentFeatures>
                        {/* Image Slider */}
                        <StyledSinglePropertyContentFeaturesSlider>
                            <PropertySlider photos={photos} />
                        </StyledSinglePropertyContentFeaturesSlider>

                        {/* Property Info */}
                        <div className='singlePropertyContent__features-info'>
                            <div className="singlePropertyContent__features-info-rooms">
                                <div>
                                    <FaBed size={24}/>
                                    <p><span className='bold'>Room:</span> {rooms}</p>
                                </div>
                                <div>
                                    <GiBathtub size={24}/>
                                    <p><span className='bold'>Baths:</span> {baths}</p>
                                </div>
                                <div>
                                    <Md6FtApart size={24}/>
                                    <p><span className='bold'>Size:</span> {sqSize}</p>
                                </div>
                                <div>
                                    <IoMdPricetag size={24}/>
                                    <p><span className='bold'>Price:</span> {price}</p>
                                </div>
                            </div>
                            <div className='singlePropertyContent__features-info-description'>
                                <h3>Description</h3>
                                <hr />
                                <p>{description}</p>
                            </div>
                            <div className="singlePropertyContent__features-info-amenities">
                                <h3>Amenities</h3>
                                <hr />
                                <ul>
                                {amenities.length ? amenities.map((item) => <li>{item}</li>) : 'Please contact us for more info.'}
                                </ul>
                            </div>
                        </div>
                    </StyledSinglePropertyContentFeatures>

                </StyledSinglePropertyContent>
            </div>
        </StyledSingleProperty>
    </DefaultLayout>
  )
}

export default SingleProperty;

export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const property = await getProperty(id);
    
    // const property = require('../../features/data/property');

    return{
        props: { property: property }
    }
}

// Styles
export const StyledSingleProperty = styled.section`
    background-color: #e7e7e7;
`

export const StyledSinglePropertyContent = styled.div`
    padding: 2rem 0;
`

export const StyledSinglePropertyContentTitle = styled.div`
        h3{
            font-size: 1.5rem;
            font-weight: 500;
        }

        p{
            margin-top: 1rem;
            color: var(--blue);
        }
`

export const StyledSinglePropertyContentFeatures = styled.div`
    margin-top: 2rem;

    @media screen and (min-width: 960px) {
        display: flex;
        justify-content: space-between;
    }

    .singlePropertyContent__features-info{
        margin-top: 2rem;

        @media screen and (min-width: 960px) {
            margin-top: 0rem;
            margin-left: 2rem;
        }
    }

    .singlePropertyContent__features-info-rooms{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        div{
            display: flex;
            align-items: center;

            svg{
                display: none;

                @media screen and (min-width: 960px) {
                    display: block;
                }
            }

            p{
                font-size: 0.875rem;
                
                @media screen and (min-width: 960px) {
                    display: flex;
                    align-items: center;
                    margin-left: 0.8rem;
                    font-size: 1rem;
                }
            }

            .bold{
                font-weight: bold;
            }
        }
    }

    .singlePropertyContent__features-info-description{
        margin-top: 2rem;

        hr{
            margin: 1rem 0;
        }

        p{
            font-size: 0.875rem;
            text-align: justify;
            word-break: break-all;
        }
    }

    .singlePropertyContent__features-info-amenities{
        margin-top: 2rem;

        hr{
            margin: 1rem 0;
        }

        ul{
            display: flex;
            flex-wrap: wrap;
            
            li{
                font-size: 0.875rem;
                margin-left: 1rem;
                padding: .3rem;
            }
        }

    }
`
