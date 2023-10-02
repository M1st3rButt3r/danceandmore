import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar active={0}/>
      <div className="h-screen ">
        <Image
          src="/main.jpg"
          alt="test"
          layout="fill"
          objectFit="cover"
          className="-z-40"
        />
        <div className="w-full h-full flex">
          <div className="h-1/2 w-1/2 m-auto flex flex-col justify-start">
            <Image
              src="/logoheader.webp"
              alt="test"
              width={1000}
              height={1000}
              className="mx-auto"
            />
            <Link href="" className="mx-auto mt-4 px-4 py-2 bg-blue-500 text-white text-lg border decoration-black font-semibold rounded-full w-max">Reinschnuppern</Link>
          </div>
        </div>
      </div>
      <div className="h-screen">
      </div>
    <Footer></Footer>
    </div>
  )
}
