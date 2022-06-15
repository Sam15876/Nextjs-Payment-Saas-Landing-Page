// NextJS
import Image from "next/image"

// Images
import iphoneImage1 from '../../public/iPhone/iPhone-back.png'
import iphoneImage2 from '../../public/iPhone/iPhone-front-charts.png'
import iphoneImage3 from '../../public/iPhone/iPhone-front-cardDetails.png'

export default function FeaturesComponent() {
    return(
        <div className='w-full flex justify-center'>

            {/* Left section */}
            <div className='basis-[35%] flex flex-col justify-between max-w-xs'>
                <div>
                    <h2 className='font-bold text-3xl py-4'>Send Money</h2>
                    <p className='text-lg leading-7 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.</p>
                </div>
                <div>
                    <h2 className='font-bold text-3xl py-4'>Money Request</h2>
                    <p className='text-lg leading-7 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.</p>
                </div>
            </div>

            {/* Centre section */}
            <div className='relative grow max-w-[620px] w-full aspect-square rounded-full bg-primary/[15%]'>

                {/* iPhones*/}
                <div className='w-full absolute flex justify-center translate-x-28 translate-y-12'><Image src={iphoneImage1} width={500} height={500} objectFit='contain' /></div>
                <div className='w-full absolute flex justify-center -translate-x-28'><Image src={iphoneImage3} width={500} height={500} objectFit='contain' /></div>
                <div className='w-full absolute flex justify-center translate-y-32'><Image src={iphoneImage2} width={500} height={500} objectFit='contain' /></div>
            </div>

            {/* Right section */}
            <div className='basis-[35%] flex flex-col justify-between max-w-xs'>
                <div>
                    <h2 className='font-bold text-3xl py-4'>Pay Bill</h2>
                    <p className='text-lg leading-7 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.</p>
                </div>
                <div className='relative'>
                    <h2 className='font-bold text-3xl py-4'>Mobile Recharge</h2>
                    <p className='text-lg leading-7 opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui id lobortis pretium blandit.</p>
                    
                    {/* Decorative circle */}
                    <div className='w-12 h-12 rounded-full bg-primary/[15%] absolute top-0 left-0 -translate-y-full' />
                </div>
            </div>
        </div>
    )
}