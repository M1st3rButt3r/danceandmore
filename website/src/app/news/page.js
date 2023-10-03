
import Card from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getNews, getNewsPage } from "@/requests";
import Modal from "@/components/modal";

export default async function Shows(props) {
  const newss = await getNews();
  const newsPage = await getNewsPage();
  return (
    <div> 
      <Navbar active={3}/>
      {
        props.searchParams.modal != undefined && newss.filter((news) => Number(props.searchParams.modal) == news.id).length > 0? 
          <Modal 
            closeHref="news" 
            date = {
                newss.filter((news) => Number(props.searchParams.modal) == news.id)[0].date 
            }
            title={
                newss.filter((news) => Number(props.searchParams.modal) == news.id)[0].title 
            }
            text={
                newss.filter((news) => Number(props.searchParams.modal) == news.id)[0].text
            }
            images={
                newss.filter((news) => Number(props.searchParams.modal) == news.id)[0].images
            }
          />
        :
          <></>
      }

      <div className="w-full h-20"></div>
      <div className="h-auto md:w-2/3 w-4/5 m-auto">
        <h2 className="md:text-5xl text-3xl font-bold text-center mt-10 mb-4">{newsPage.title}</h2>
        <p className="text-justify mb-12">{newsPage.text}</p>
        <div className="flex flex-col-reverse gap-y-12 mb-12">
            

            {newss.map((news) => {
                return <Card href={"?modal="+ news.id} imageUrl={news.images[0].url}  right={!news.odd} key={news.id} title={news.title} abstract={news.text.substr(0, 200) + "..."} date={news.date}/>
            })}
        </div>
      </div>
    <Footer></Footer>
    </div>
  )
}
