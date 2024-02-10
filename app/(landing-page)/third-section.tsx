
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Lora({
    subsets: ['latin'],
    weight: ['400'],
});



const ThirdSection = () => {
    return (
        <div className="xl:pt-32 pt-24 relative flex justify-center items-center flex-col">
            <div className="xl:text-5xl text-3xl 2xl:w-3/5 w-3/5 xl:w-1/2 font-medium mx-auto text-center">
                Consolidate tools.Cut costs.
            </div>
            <Image src={'/logo/logo.png'} alt='image' width={1000} height={1000} className="pt-10 w-4/5 xl:w-1/3"/>
            <div className={cn(font.className,'flex items-center justify-center text-2xl xl:text-3xl pt-10 pb-4 xl:py-10 px-8 text-center w-4/5')}>
                   &quot;We got rid of nearly a dozen different tools because of what Notion does for us.&quot;
            </div>
            <div className="items-center flex justify-center flex-col">
                <Image src={'/logo/logo2.webp'}  alt="image" width={1000} height={1000} 
                className="pt-2 xl:pt-0 w-20 xl:w-24"/>
                <div className="text-center">
                    <div className=" font-medium pt-4">Justin Watt</div>
                   <div className="">Director of Ops & Marketing, MetaLab</div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection