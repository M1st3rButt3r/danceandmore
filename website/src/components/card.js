import Image from "next/image"
import Link from "next/link"

export default function Card(props) {
    return (
        <div className="hover:scale-105 transition-transform bg-slate-100 rounded-2xl md:p-10 p-5 flex flex-col lg:flex-row flex-initial max-w-6xl mx-auto w-full">
            <div className={" rounded-lg m-auto  xl:w-96 xl:h-96 sm:w-80 sm:h-80 w-60 h-60  shrink-0 overflow-hidden" + (props.right == true? " lg:hidden" : "")}>
            <Image
                src={props.imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="object-cover"
            />
            </div>
 
            
            <div className="mt-4 lg:m-auto lg:mx-10">
                <p className="text-slate-400 font-semibold mb-3">{props.date}</p>
                <h3 className="text-2xl font-bold mb-2">{props.title}</h3>
                <p className="text-justify text-slate-700 mb-4">{props.abstract}</p>
                <Link scroll={false}  className="px-4 py-2 bg-blue-700 text-white rounded-full w-max" href={props.href}>Mehr</Link>
            </div>
            

            <div className={"m-auto rounded-lg xl:w-96 xl:h-96 sm:w-80 sm:h-80 w-60 h-60  shrink-0 overflow-hidden hidden" + (props.right == true? " lg:block" : "")}>
            <Image
                src={props.imageUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="object-cover"
            />
            </div>
        </div>
      
    )
  }
  