
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageCard from "@/components/imageCard";
import { getOfferPage, getOffers } from "@/requests";

export default async function Offers() {
  const offers = await getOffers();
  const offerPage = await getOfferPage();
  return (
    <div>
        
      <Navbar active={1}/>
      <div className="w-full h-20"></div>
      <div className="h-auto md:w-2/3 w-4/5 m-auto">
        <h2 className="md:text-5xl text-3xl font-bold text-center mt-10 mb-4">{offerPage.title}</h2>
        <p className="text-justify mb-12">{offerPage.text}</p>
        <div className="flex flex-col gap-y-12 mb-12">
            {offers.map((offer) => {
              return <ImageCard key={offer.id} title={offer.title} description={offer.description} coverUrl={offer.coverUrl} link={offer.link}/>
            })}
        </div>
      </div>
    <Footer></Footer>
    </div>
  )
}
