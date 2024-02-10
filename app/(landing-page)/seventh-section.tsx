'use client';
import Image from "next/image";
import { PiArrowRight, PiCalendarCheckFill, PiCheckCircleFill, PiClipboardLight, PiFlagCheckeredFill, PiHouseFill, PiWatchFill } from "react-icons/pi";

const items = [
  {
    icon : <PiHouseFill className="text-2xl text-red-600" />,
    name: 'Company Wiki',
    button: (
      <div className="text-sky-500 flex items-center hover:cursor-pointer pt-6" >
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
    image: '/assets/company-wiki-template.webp'
  },
  {
    icon : <PiWatchFill className="text-2xl text-yellow-600" />,
    name: 'Product roadmap',
    button: (
      <div className="text-sky-500 flex items-center hover:cursor-pointer pt-6" >
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon : <PiCalendarCheckFill className="text-2xl text-blue-600" />,
    name: 'Vacation planner',
    button: (
      <div className="text-sky-500 flex items-center hover:cursor-pointer pt-6" >
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon : <PiCalendarCheckFill className="text-2xl text-lime-200" />,
    name: 'Editorial calendar',
    button: (
      <div className="text-sky-500 flex items-center hover:cursor-pointer pt-6" >
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon : <PiClipboardLight className="text-2xl text-green-600" />,
    name: 'OKRs',
    button: (
      <div className="text-sky-500 flex items-center hover:cursor-pointer pt-6" >
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon : <PiCheckCircleFill className="text-2xl text-gray-600" />,
    name: 'Vacation planner',
    button: (
      <div className="text-sky-500 flex items-center hover:cursor-pointer pt-6" >
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  },
  {
    icon : <PiFlagCheckeredFill className="text-2xl text-sky-900" />,
    name: 'Habit Tracker',
    button: (
      <div className="text-sky-500 flex items-center hover:cursor-pointer pt-6" >
        Get template <PiArrowRight className="ml-3 text-sm" />
      </div>
    ),
  }
]
const SeventSection = () => {
  return (
    <>
    <div className="flex flex-col pt-32 items-center justify-center">
      <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
        Endless ways to use it
      </div>
      <div className="text-sky-500 flex items-center hover:underline pt-6 hover:cursor-pointer">
      Browse all templates <PiArrowRight className="ml-3 text-sm"/>
      </div>
    </div>
    <div className="grid xl:grid-cols-4 md:grid-cols-2 md:row-span-1 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
        {items.map((item,index)=>(
          <div key={index}
          className={`${
            index === 0 
          ? 'xl:col-span-2 xl:row-span-3 md:col-span-2 flex-col md:flex-row xl:flex-col' :  ''

          } bg-[#f6f5f4] p-6 rounded-xl flex ${
            index === 0 ? 'justify-center' : ''
          }`}
          >
            <div  className="flex flex-col">
              {item.icon}
              <div className="text-lg font-medium mt-2">{item.name}</div>
              {item.button}
            </div>

            {item.image && (
              <div className={`${index ! == 0 ? 'justify-center' : 'flex-col justify-end'}`}>
                <Image 
                src={item.image}
                alt="image"
                width={500}
                height={500}
                className="mt-10 w-96 rounded-xl bg-white"
                />
              </div>
            )}

          </div>
        ))}
    </div>
    </>
  )
}

export default SeventSection