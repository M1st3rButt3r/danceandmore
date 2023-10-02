
import Card from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import getShows from "@/requests";
import Modal from "@/components/modal";

export default async function Auffuehrungen(props) {
    const shows = await getShows();
  return (
    <div>  
      <Navbar active={2}/>
      {
        props.searchParams.modal != undefined && shows.filter((show) => Number(props.searchParams.modal) == show.id).length > 0? 
          <Modal 
            closeHref="auffuehrungen" 
            title={
              shows.filter((show) => Number(props.searchParams.modal) == show.id)[0].attributes.Title 
            }
            text={
              shows.filter((show) => Number(props.searchParams.modal) == show.id)[0].attributes.Text
            }
            imageUrl={
              "http://127.0.0.1:1337" + shows.filter((show) => Number(props.searchParams.modal) == show.id)[0].attributes.Cover.data.attributes.formats.medium.url
            }
          />
        :
          <></>
      }

      <div className="w-full h-20"></div>
      <div className="h-auto md:w-2/3 w-4/5 m-auto">
        <h2 className="md:text-5xl text-3xl font-bold text-center mt-10 mb-4">Aufführungen</h2>
        <p className="text-justify mb-12">Jedes Jahr führen die Theatermusicalgruppen ein großes Theatermusical auf, bei dem zwischen 100 und 150 Darsteller auf der Bühne stehen. Es wird getanzt, gesungen und geschauspielert. Der Text wird von Mille Leverenz selbst geschrieben und die Musik wird von Jakob Deiml komponiert.</p>
        <div className="flex flex-col gap-y-12 mb-12">
            

            {shows.map((show) => {
                return <Card href={"?modal="+ show.id} imageUrl={"http://127.0.0.1:1337" + show.attributes.Cover.data.attributes.formats.medium.url}  right={show.id%2==0} key={show.id} title={show.attributes.Title} abstract={show.attributes.Text.substr(0, 200) + "..."} date={show.attributes.Year}/>
            })}
        </div>
      </div>
    <Footer></Footer>
    </div>
  )
}
