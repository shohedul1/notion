
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

const logos = [
    { image: '/logo/amazon.png' },
    { image: '/logo/angel-list.png' },
    { image: '/logo/doordash.png' },
    { image: '/logo/figma.png' },
    { image: '/logo/General_Electric_logo.png' },
    { image: '/logo/headspace_logo.png' },
    { image: '/logo/nike.png' },
    { image: '/logo/pinterest_logo.png' },
    { image: '/logo/pixar.png' },
    { image: '/logo/plaid.png' },
    { image: '/logo/robinhood.png' },
    { image: '/logo/snowflake_logo.png' },
    { image: '/logo/toyota.png' },
    { image: '/logo/uber.png' },


]


const SecondScetion = () => {
    return (
        <div className="pt-16 flex justify-center items-center flex-col">
            <div className="text-4xl w-3/4 text-center xl:text-5xl font-medium">
                Millions run on Notion every day
            </div>
            <div className="py-4 xl:w-1/4 text-center px-8">
                Powering the world&apos;s best teams, from next-generation startups to established enterprises.
            </div>
            <div className="text-skt-500 flex items-center hover:underline hover:cursor-pointer">
                Read customer staries <PiArrowRight className="ml-3 text-sm" />
            </div>
            {
                <div className="grid grid-cols-3 xl:grid-cols-4 items-center justify-center px-10 md:px-20 lg:px-0 lg:w-1/2 pt-10 gap-10 text-center mx-auto">
                    {
                        logos.map((logo) => (
                            <div key={logo.image}>
                                <Image src={logo.image} alt="logo" width={200} height={200} className="w-24" />

                            </div>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default SecondScetion