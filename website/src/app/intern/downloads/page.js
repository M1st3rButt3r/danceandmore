
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ImageCard from "@/components/imageCard";
import Link from "next/link";

export default async function Downloads() {
  return (
    <div>
        
      <Navbar active={1}/>
      <div className="w-full h-20"></div>
      <div className="h-screen md:w-2/3 w-4/5 m-auto">
        <h2 className="md:text-5xl text-3xl font-bold text-center mt-10 mb-12">Downloads</h2>
        <div className="rounded-lg border-separate">
          <table className="table-auto w-full text-left text-gray-500 rounded-lg">
            <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b ">
                <td className="px-6 py-4">Probenplan.docx</td>
                <td className="px-6 py-4"><Link href={"#"}>Download</Link></td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4">Probenplan.docx</td>
                <td className="px-6 py-4"><Link href={"#"}>Download</Link></td>
              </tr>    
              <tr className="bg-white border-b">
                <td className="px-6 py-4">Probenplan.docx</td>
                <td className="px-6 py-4"><Link href={"#"}>Download</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    <Footer></Footer>
    </div>
  )
}
