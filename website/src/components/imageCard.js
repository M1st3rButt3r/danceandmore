import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ImageCard(props) {
    return (
        <Link href={props.link}>
                <div className="max-w-6xl bg-slate-100 rounded-2xl w-full h-96 mx-auto overflow-hidden transition-transform hover:scale-105">
            <Image
                src={props.coverUrl}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="object-cover -z-50"
            />
            <div className="p-5 bg-gradient-to-bl from-transparent relative z-0 to-neutral-900 w-full h-full -translate-y-full justify-end flex flex-col">
                <h3 className="text-white text text-2xl font-semibold">{props.title}</h3>
                <p className="text-slate-200">{props.description}</p>
                <div className="justify-end right-10 bottom-10 flex gap-2 text-white underline underline-offset-2"><p>Mehr</p><FontAwesomeIcon  size="xl" icon={faArrowRight} className="text-sm" /></div>
            </div>
        </div>
        </Link>

      
    )
  }
  