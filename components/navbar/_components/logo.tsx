import Link from "next/link";
import { Pacifico} from "next/font/google";
const pacifico = Pacifico({ subsets: ["latin"],weight:'400'});



const Logo = () => {
  return (
    <Link href={"/"} className={`${pacifico.className} font-bold text-2xl hover:text-red-500 w-24 ml-5`}>
       Shohidul
    </Link>
  )
}

export default Logo