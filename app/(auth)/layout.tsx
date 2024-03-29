import Navbar from "@/components/navbar/navbart";
import Footer from "../(landing-page)/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
      <Navbar/>
      <div className="min-h-screen flex items-center justify-center bg-blue-500">
        <div className="w-full flex items-center justify-center mx-auto">
          {children}
        </div>
      </div>
      <Footer/>
      </>
    );
  };
  
  export default Layout;
  