import Link from "next/link";
import Image from "next/image";
// Hook
import { usePropertyFormat } from "@/src/features/hooks/usePropertyFormat";
// Styles
import { StyledPropertyCardContent } from "./styles";
// Icons
import { FaBed } from 'react-icons/fa';
import { GiBathtub } from 'react-icons/gi';
import { Md6FtApart } from 'react-icons/md';

// Truncate String 
const truncate = (str, length) => {
    return str.length > length
    ? `${str.substr(0, length)}...`
    : str;
}

const PropertyCard = ({ property }) => { 
  const { address, coverPhoto, propertyType, price, title, rooms, baths, purpose, sqSize, externalID } = usePropertyFormat(property);

  return (
    <div className='property__card'>
        <Link href={`/properties/${externalID}`}>
            <Image 
                src={coverPhoto}
                width={380}
                height={250}
                style={{
                    objectFit: 'cover'  
                }}
            />

            <StyledPropertyCardContent>
                <div className="propertyType">
                    {propertyType}
                </div>
                <div className="propertyNameAddress">
                    <p><span className="bold">Price:</span> {price}</p>
                    <p><span className="bold">Address:</span> {truncate(address, 30)}</p>
                    <p><span className="bold">Title:</span> {truncate(title, 30)}</p>
                </div>
                <div className="propertyFeatures">
                    <div>
                        <FaBed />
                        <p>{rooms}</p>
                    </div>
                    <div>
                        <GiBathtub />
                        <p>{baths}</p>
                    </div>
                    <div>
                        <Md6FtApart />
                        <p>{sqSize}<span className="m2">m2</span></p>
                    </div>
                </div>
            </StyledPropertyCardContent>
        </Link>
    </div>
  )
}

export default PropertyCard