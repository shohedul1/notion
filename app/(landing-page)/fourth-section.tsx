'use client';
import Image from "next/image";
import { useRef, useState } from 'react';
import { cn } from "@/lib/utils";
import { TbSwimming, TbSwitch, TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ['latin'],
  weight: ['400'],
})

const tabs = [
  {
    icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600" />,
    header: 'Visualize , filter & sory any way you want',
    subheading: 'Show only tasks assingned to you , or  items marked as urgent. Break donw any project in the is more helpful to you',
    images: [
      { title: 'Board', picture: '/image/image1.png' },
      { title: 'Table', picture: '/image/image2.png' },
      { title: 'Timeline', picture: '/image/image3.png' },
      { title: 'Calendar', picture: '/image/image4.png' },
      { title: 'Gallery', picture: '/image/image5.png' },
      { title: 'List', picture: '/image/image6.jpg' },

    ],

    description: 'Choose from a veriety of colors'
  },
  {
    icon: <PiEyeLight className="text-3xl mr-2 text-sky-600" />,
    header: 'Customize the info you tracik',
    subheading: 'Create your own labels,tags,ownners, and more, so everyone has context and everything stays organized.',
    image: '/image/image1.png'
  },
  {
    icon: <PiPaletteLight className="text-3xl mr-2 text-sky-600" />,
    header: 'Choose from a variety of colors',
    subheading: 'Everything is customizable.Chose your own colors, icons, and more to make notion work for your',
    image: '/image/image2.png'
  },
]

type Tab = {
  icon: JSX.Element,
  header: string,
  subheading: string,
  images?: { title: string, picture: string }[],
  description?: string,
  image?: string,
}

const FourthSection = () => {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="flex flex-col pt-20 xl:py-32 items-center justify-center">
      <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
        Powerfull building blocks
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 md:row-span-1 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
        {tabs.map((tab, index) => (
          <div key={index}
            className={`${index === 0 ? 'xl:col-span-4 xl:row-span-3 md:col-span-2 flex-col' :
              'xl:col-span-2 xl:row-span-3 flex-col'
              } bg-[#f6f5f4] p-6 rounded-xl flex`}
          >
            <div className="flex flex-col">
              {tab.icon}
              <div className="text-lg font-medium mt-2">{tab.header}</div>
              <div className="mt-2">{tab.subheading}</div>
            </div>

            <>
              {index === 0 && tab.images && (
                <div>
                  <Image
                    src={tab.images[activeImageIndex].picture}
                    alt="image"
                    width={500}
                    height={500}
                    className="flex justify-center my-10 xl:my-16 rounded-xl mx-auto"
                  />

                  <div className="grid grid-cols-5 xl:grid-cols-6 xl:w-1/2 mx-auto gap-1 xl:space-x-2 ">
                    {tab.images.map((image, index) => (
                      <div key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`${index === activeImageIndex ? 'rounded-md bg-[#dbd9d9] items-center justify-center flex p-1' :
                          'rounded-md p-1 items-center justify-center bg-[#f6f5f4] hover:bg-[#eae7e7e]'
                          }`}
                      >
                        <div className="">
                          {image.title}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}

            </>

            <>
              {index !== 0 && (
                <div className="mt-4">
                  <Image
                    src={tab?.image || ''}
                    alt="image"
                    width={500}
                    height={500}
                    className="mt-10 rounded-xl"
                  />

                </div>
              )}

            </>

          </div>
        ))}

      </div>
      <div className={cn(font.className, 'flex items-center justify-center text-2xl xl:text-3xl pt-10 pb-4 xl:py-10 px-8 text-center w-4/5 xl:w-2/5')}>
        &quot;Notion adapts to your needs.It’s as minimal or as powerful as you need it to be.&quot;
      </div>
      <div className="items-center flex justify-center flex-col">
        <Image src={'/logo/match-group.webp'} alt="image" width={1000} height={1000}
          className="pt-2 xl:pt-0 w-20 xl:w-24" />
        <div className="text-center">
          <div className=" font-medium pt-4">Rahim Makani</div>
          <div className="">Director of Product, Matchgroup</div>
        </div>
      </div>

    </div>
  )
}

export default FourthSection