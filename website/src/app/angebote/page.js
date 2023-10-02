
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageCard from "@/components/imageCard";

export default async function Angebote() {
  return (
    <div>
        
      <Navbar active={1}/>
      <div className="w-screen h-20"></div>
      <div className="h-auto md:w-2/3 w-4/5 m-auto">
        <h2 className="md:text-5xl text-3xl font-bold text-center mt-10 mb-12">Angebote</h2>
        <div className="flex flex-col gap-y-12 mb-12">
            <ImageCard imageUrl="/das_herz_des_ozeans.jpg"></ImageCard>
            <ImageCard/>
        </div>
      </div>
    <Footer></Footer>
    </div>
  )
}
