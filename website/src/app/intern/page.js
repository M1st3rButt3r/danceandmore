
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageCard from "@/components/imageCard";

export default async function Intern() {
  return (
    <div>
        
      <Navbar active={1}/>
      <div className="w-screen h-20"></div>
      <div className="h-auto md:w-2/3 w-4/5 m-auto">
        <h2 className="md:text-5xl text-3xl font-bold text-center mt-10 mb-12">Intern</h2>
        
      </div>
    <Footer></Footer>
    </div>
  )
}
