
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

const EightSection = () => {
    return (
        <div className="py-20 xl:py-24 flex justify-center items-center flex-col border-b">
            <div className="text-4xl xl:text-5xl font-medium text-center">
                Get start for free
            </div>
            <div className="py-4 xl:w-1/3 text-center px-10">
                Play around with it first. Pay and add your team later.
            </div>
            <div className="flex items-center gap-3">
                <Button>Try Notion free</Button>
                <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
                    Request a demo <PiArrowRight className="ml-3 text-sm" />
                </div>
            </div>
            <Image
                src="/assets/banner.webp"
                alt='image'
                width={1000}
                height={1000}
                className="w-[500px] pt-10"
            />

        </div>
    )
}

export default EightSection