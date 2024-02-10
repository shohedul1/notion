import Image from "next/image"
import {
  PiFacebookLogoFill,
  PiInstagramLogo,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiTwitterLogoFill,
  PiYoutubeLogoFill
} from 'react-icons/pi';
import Logo from "../../components/navbar/_components/logo";

const Footer = () => {
  return (
    <div className="flex lg:items-center  pb-10 flex-col px-8 lg:px-0 xl:w-3/4 mx-auto 2xl:w-[55%]">
      <div className="lg:flex lg:space-x-32 md:px-0">
        <div className="pt-8">
          <Logo />
          <div className="flex space-x-2 mt-5">
            <PiInstagramLogoFill className="text-2xl text-gray-500" />
            <PiFacebookLogoFill className="text-2xl text-gray-500" />
            <PiInstagramLogo className="text-2xl text-gray-500" />
            <PiTwitterLogoFill className="text-2xl text-gray-500" />
            <PiLinkedinLogoFill className="text-2xl text-gray-500" />
            <PiYoutubeLogoFill className="text-2xl text-gray-500" />
          </div>
        </div>
        <div className="flex-col space-y-6">
          <div className="pt-10 font-medium">PRODUCT</div>
          <div className="font-light space-y-4 text-sm">
            <div>Home</div>
            <div>Product</div>
            <div>What&apos;s New</div>
            <div>Pricing</div>
            <div>Premium</div>
          </div>
        </div>

        <div className="flex-col space-y-6 flex">
          <div className="pt-10 font-medium">USE CASES</div>
          <div className="font-light space-y-4 text-sm">
            <div>Company</div>
            <div>Leadership</div>
            <div>Customers</div>
            <div>Diversity</div>
          </div>

        </div>

        <div className="flex-col space-y-6 flex">
          <div className="pt-10 font-medium">FOR BUSINESS</div>
          <div className="font-light space-y-4 text-sm">
            <div>Project Management</div>
            <div>Goal Management</div>
            <div>Work Management</div>
            <div>Project Planning</div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Footer