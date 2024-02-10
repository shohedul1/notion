'use client';
import Image from "next/image";
import {motion} from "framer-motion";
import { useRef,useState } from "react";
import { PiBookOpenTextLight,PiCompassLight,PiHeadset,PiMegaphone,PiRocketLaunchFill,PiSparkleLight} from "react-icons/pi";

const tabs = [
  {
    icon: <PiSparkleLight/>,
    name: 'Enginnering',
    image: '/assets/Engineering.webp'
  },
  {
    icon: <PiMegaphone/>,
    name: 'Design',
    image: '/assets/Design.PNG'
  },
  {
    icon: <PiBookOpenTextLight/>,
    name: 'Product',
    image: '/assets/Product.PNG'
  },
  {
    icon: <PiCompassLight/>,
    name: 'Marketing',
    image: '/assets/Marketing.PNG'
  },
  {
    icon: <PiHeadset/>,
    name: 'Operations',
    image: '/assets/Operations.PNG'
  },
  {
    icon: <PiRocketLaunchFill/>,
    name: 'HR',
    image: '/assets/HR.webp'
  }
]

const FifthSection = () => {
  const [activeTb, setActiveTab] = useState(tabs[0]);

  return (
    <div className="relative flex justify-center items-center flex-col px-8 md:px-0 xl:w-3/4 mx-auto 2xl:[55%]">
      <div className="pt-20 lg:pt-0 text-3xl xl:text-5xl font-medium text-center pb-8">
      Every team, side-by-side
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 md:row-span-1 ga-4 xl:gap-6 mt-8 xl:px-0">
         {
          tabs.map((tab)=>(
            <div key={tab.name}
             className={`flex p-1 md:px-8 cursor-pointer ${activeTb.name === tab.name ? 
             'md:rounded-xl rounded-md bg-[#f6f5f4] md:bg-white border-gray-200 md:border items-center justify-center flex flex-1' 
            : 'md:bg-[#f6f5f4] rounded-md  md:rounded-xl p-1 items-center justify-center hover:bg-[#eae7e7]'
            }`}
            onClick={()=>setActiveTab(tab)}
            >
              <div className="flex flex-col items-center md:justify-center mx-auto">
                <div className="hidden md:flex text-4xl">{tab.icon}</div>
                <div className="font-medium text-sm xl:text-lg mt-1">{tab.name} </div>

              </div>

            </div>
          ))
         }
      </div>

      {/* display content based on which tab is active */}
      <div className="py-10 lg:px-16 xl:px-0 md:px-16 w-full">
        {activeTb && (
          <div className="flex justify-center items-center flex-col">
            <Image 
            src={activeTb.image}
            alt="image"
            width={500}
            height={500}
            className="w-full border p-20 xl:p-40 rounded-xl"
            />

          </div>
        )}

      </div>
    </div>
  )
}

export default FifthSection