// import {useImage} from "react-image"
import { FiShoppingCart } from "react-icons/fi";
import Button from './Button'
import CoffeeBeanImage from '../assets/coffeebean.jpg'

// eslint-disable-next-line react/prop-types
const ProductCard = ({image, name, description, basePrice, isDiscount, isBestSeller}) => {

    // const {src} = useImage({
    //     srcList: `../../../backend-beginner/uploads/${image}`
    // })

    return (
        <div className='flex flex-col items-center flex-1 relative'>
            {isBestSeller && <span className="bg-red-500 text-[0.5rem] md:text-sm font-semibold rounded-full p-2 top-3 left-3 absolute">FLASH SALE!</span>  }                     
            <div className="max-w-md w-full aspect-square">{<img className="w-full" src={image} alt="" /> || <img className="w-full" src={CoffeeBeanImage} alt="" />}</div>
            <div className='bg-white shadow-md rounded-b p-3 mx-3 -mt-10 flex flex-col gap-4 flex-1'>
                <div className='text-base md:text-2xl font-bold'>{name}</div>
                <div className='flex flex-1 text-[0.50rem] md:text-base text-gray-500 tracking-wide'>{description}</div>
                <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
                    {isDiscount && <span className='text-[0.6rem] md:text-xs font-bold text-red-500'><del>Rp {Number(basePrice).toLocaleString('id')},-</del></span>}
                    
                    <span className='text-sm md:text-xl font-bold text-orange-500'>Rp {Number(basePrice).toLocaleString('id')},-</span>
                </div>
                <div className='flex flex-row gap-2'>
                    <Button className='bg-orange-500 flex-1 py-1 md:py-2 text-[0.60rem] md:text-sm'>Buy</Button>
                    <Button className='border border-orange-500 px-3 md:px-5 text-xs md:text-base'>
                        <FiShoppingCart className="text-orange-500"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard