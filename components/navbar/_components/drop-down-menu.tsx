'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { BarChart, Code, DollarSign, Headphones, PaintBucket, Settings, UserPlus } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


interface DropDownMenuProps {
  onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {

  const handleLinkClick = () => {
    onClose();
  }
  return (
    <div className="
    mt-10 
    w-screen 
    h-screen
  bg-white
    px-4
    items-center
    justify-center
    absolute
    right-0 
    xl:hidden">
      <Accordion type="single" className="pl-2" collapsible>
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger>Product</AccordionTrigger>
          <AccordionContent defaultValue={'item-1'} className="space-y-2">
            <Link href={"/"} className="flex">
              <div><BarChart className="h-5 w-5 mr-2 text-orange-400" /></div>
              <div>All</div>
            </Link>
            <Link href={"/"} className="flex">
              <div><Code className="h-5 w-5 mr-2 text-yellow-400" /></div>
              <div>Docs</div>
            </Link>
            <Link href={"/"} className="flex">
              <div><DollarSign className="h-5 w-5 mr-2 text-red-400" /></div>
              <div>Wikis</div>
            </Link>
            <Link href={"/"} className="flex">
              <div><Headphones className="h-5 w-5 mr-2 text-green-400" /></div>
              <div>Projects</div>
            </Link>
            <Link href={"/"} className="flex">
              <div><PaintBucket className="h-5 w-5 mr-2 text-blue-400" /></div>
              <div>Calendar <span className="rounded-full bg-orange-300 text-orange-500 p-1">New</span></div>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="mt-6 border-b" value="item-2">
          <AccordionTrigger>Solutions</AccordionTrigger>
          <AccordionContent defaultValue={'item-1'} className="space-y-2">
            <div className="mt-0">
              <div className="text-gray-400 mb-2">BY TEAM SIZE</div>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Enterprise</div>
              </Link>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Small business</div>
              </Link>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Personal</div>
              </Link>
            </div>

            <div className="mt-5">
              <div className="text-gray-400 mb-2">BY TEAM FUNCTION</div>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Design</div>
              </Link>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Enginnering</div>
              </Link>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Product</div>
              </Link>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Managers</div>
              </Link>

            </div>
            <div className="mt-5">
              <div className="text-gray-400 mb-2">NOTTION FOR</div>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Startups</div>
              </Link>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Remote work</div>
              </Link>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Education</div>
              </Link>
              <Link href={"/"} className="flex">
                <div className="text-[16px]">Nonprofits</div>
              </Link>
            </div>


          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="mt-6 border-b" value="item-3">
          <AccordionTrigger>Resources</AccordionTrigger>
          <AccordionContent defaultValue={'item-1'} className="space-y-2">
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Blog</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Notion Academy</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Guides & tutorails</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Webbinars</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Help Center</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">API docs</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Community</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Here a consultant</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="mt-6 border-b" value="item-4">
          <AccordionTrigger>Download</AccordionTrigger>
          <AccordionContent defaultValue={'item-1'} className="space-y-2">
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Notion</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Calendar</div>
            </Link>
            <Link href={"/"} className="flex">
              <div className="text-[16px]">Web Clipper</div>
            </Link>
            <div className="text-gray-400 text-[16px]">
              Notion is always at home right<Link href={"/"} className="underline">in your browser</Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <Link href={"/"} className="flex flex-1 items-center justify-between py-4 border-b text-[16px]">
          Pricing
        </Link>

        <Link href={"/contact-sales"} className="flex flex-1 items-center justify-between py-4 border-b text-[16px]">
          Request a demo
        </Link>
      </Accordion>

      <div className="pt-12">
        <div className="space-y-4 flex flex-col px-4">
          <Button className="w-full">
            Get Notion free
          </Button>
        </div>
        <div className="space-y-4 flex flex-col px-4 mt-4">

          <Button variant={'outline'} className="w-full">
            {/* <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href={'/sign-in'} style={{ textDecoration: 'none' }}>
                sing in
              </Link>
            </SignedOut> */}
          </Button>
        </div>

      </div>

    </div>
  )
}

export default DropDownMenu