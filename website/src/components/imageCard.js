import Image from "next/image"

export default function ImageCard(props) {
    return (
        <div className="-translate-z-10 bg-slate-100 rounded-2xl w-full h-96 mx-auto overflow-hidden transition-transform hover:scale-105">
            <Image
                src={"http://127.0.0.1:1337/uploads/das_herz_des_ozeans_b1ef838d2b.jpg"}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="object-cover -z-50"
            />
            <div className="p-5 bg-gradient-to-bl from-transparent relative z-0 to-neutral-900 w-full h-full -translate-y-full justify-end flex flex-col">
                <h3 className="text-white text text-2xl font-semibold">{props.title}</h3>
                <p className="text-slate-200">{props.text}</p>
            </div>
        </div>
      
    )
  }
  