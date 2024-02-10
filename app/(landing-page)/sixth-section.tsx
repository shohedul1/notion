'use client';
import { Lora } from "next/font/google";
import Image from "next/image";
import { useRef, useState } from "react";
import { PiArrowRight } from "react-icons/pi";
import { TbSwitch3 } from "react-icons/tb";
const font = Lora({
    subsets: ['latin'],
    weight: ['400']
});

const tabs = [
    {
        text: '1M+',
        subtext: 'community members'
    },
    {
        text: '150+',
        subtext: 'community groups'
    },
    {
        text: '50+',
        subtext: 'countries represented'
    },
    {
        header: 'An always-on support network',
        subheading: 'Swap setups and share tips in over 149 online communities.',
        image: '/assets/image1.webp',
    },
    {
        header: 'Choose your language',
        subheading: 'Notion currently supports English, Korean, Japanese, French, German, Spanish, and Portuguese. With more to come!',
        image: '/assets/image.webp',
    },
    {
        icon: <TbSwitch3 className="text-3xl mr-2 text-sky-600 rounded-md" />,
        ititle: "Visualize,filter && sort any way you want",
        description: 'Show only tasks assigned to you, or items marked as urgeunt.Break down any project in the way that is most helpful to you.',
        images: [
            { title: 'Community meet-up in Tokyo', picture: '/image/slider1.jpg' },
            { title: 'Notion ambassador event in New York', picture: '/image/slider2.jpg' },
            { title: 'Sharing Notion setups in San Francisco', picture: '/image/slider3.jpg' },
            { title: 'Coffee pop-up in London', picture: '/image/slider4.jpg' },

        ],
    },
    {
        profile: "/image/logo1.avif",
        userName: 'Deborah Mecca',
        userHandle: '@Deborah Mecca',
        userText: (
            <div className="md:mt-6">
                <span className="text-sky-500">@DebMecca</span>
                I used to HATE documenting things. And then I started using @NotionHQ and I document a lot. A LOT A LOT. Now I just realize that it wasn&apos;t that I hated documenting, I just hated Google Docs.
            </div>
        )
    },
    {
        profile: "/image/logo2.png",
        userName: 'Andre Blackman',
        userHandle: '@André Blackman',
        userText: (
            <div className="md:mt-6">
                <span className="text-sky-500">@mindofandre</span>
                One of the most incredible things about @NotionHQ is the dynamic community being built creating and sharing at its best.

            </div>
        )
    },
    {
        profile: "/image/logo3.png",
        userName: 'Oliver Peyre',
        userHandle: '@Oliver Peyre',
        userText: (
            <div className="md:mt-6">
                <span className="text-sky-500">@opeyre</span>
                @NotionHQ Truly impressed by the velocity and quality of your work. Making using Notion even more fun week after week!
            </div>
        )
    }


]

const SixSection = () => {
    const ref = useRef(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const handleDotClick = (index: any) => {
        setActiveImageIndex(index);
    }

    return (
        <div className="pt-20 xl:pt-24 flex justify-center items-center flex-col">
            <div className="text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/2 text-center">
                Join a global movement. Unleash your creativity.
            </div>
            <div className="py-4 px-10 xl:w-1/2 2xl:w-1/3 md:w-2/3 text-center">
                Our vibrant community produces content, teaches courses, and leads events all over the world.
            </div>
            <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
                Learn more<PiArrowRight className="ml-3 text-sm" />
            </div>
            <div className="grid grid-cols-12 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
                {
                    tabs.map((tab, index) => (
                        <div key={index}
                            className={`col-span-12 ${index <= 2 ? 'md:col-span-6 lg:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex'
                                : index <= 4 ? 'md:col-span-6 bg-[#f6f4f4] p-6 rounded-xl '
                                    : index === 5 ? 'md:col-span-6 lg:col-span-8 lg:row-span-3 bg-[#f6f5f4] p-6 rounded-xl '
                                        : index > 5
                                            ? 'col-span-12 lg:col-span-4 md:col-span-4 bg-[#f6f5f4] px-6 rounded-xl flex-col' : ''}`}>
                            {index <= 2 ? (
                                <div className="flex flex-col">
                                    <div className="text-5xl font-medium text-sky-600">
                                        {tab.text}
                                    </div>
                                    <div className="text-sm"> {tab.subtext} </div>
                                </div>
                            ) : index <= 4 ? (
                                <div>
                                    <div className="text-2xl font-medium">{tab.header}</div>
                                    <div className="text-sm mt-2">{tab.subheading}</div>
                                    <div className="flex justify-center items-center flex-col">
                                        <Image
                                            src={tab.image || ''}
                                            alt="image"
                                            width={500}
                                            height={500}
                                            className="w-full rounded-xl p-10 xl:p-20"
                                        />
                                    </div>

                                </div>
                            ) : index === 5 ? (
                                <>
                                    {tab.images && (
                                        <div className="flex justify-center items-center flex-col">
                                            <Image
                                                src={tab.images[activeImageIndex].picture}
                                                alt="iamge"
                                                width={500}
                                                height={500}
                                                className="w-full rounded-xl"
                                            />
                                            <div>
                                                <div className="text-xl font-medium  md:mt-20 pb-4 ">
                                                    {tab.images[activeImageIndex].title}
                                                </div>
                                            </div>

                                            <div className="flex space-x-2 xl:space-x-6 ">
                                                {tab.images.map((image, index) => (
                                                    <div
                                                        key={index}
                                                        onClick={() => handleDotClick(index)}
                                                        className={`${index === activeImageIndex ? 'p-2 rounded-full bg-green-400' : 'p-2 rounded-full bg-blue-400'}`}
                                                    >

                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    )}
                                </>
                            ) : index > 5 && (
                                <>
                                    <div className="flex flex-col">
                                        <Image
                                            src={tab.profile || ''}
                                            alt="image"
                                            width={500}
                                            height={500}
                                            className="w-12 h-12 rounded-full border" />
                                        <div className="text-xxl font-normal">{tab.userName}</div>
                                        <div className="text-sm">{tab.userHandle}</div>
                                        <div className="text-sm font-normal mt-10 md:mt-0 pb-4">{tab.userText}</div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default SixSection