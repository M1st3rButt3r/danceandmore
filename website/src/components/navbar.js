import Image from "next/image"
import Link from "next/link"

export default function Navbar(props) {
    return (
        <div className="fixed z-30">
            <div className="w-screen h-20 bg-slate-100 relative z-30 flex justify-between items-center shadow-lg rounded-b-md">
                <div className="px-5">
                    <Image
                        src="/logo.webp"
                        width={200}
                        height={200}
                        alt="danceandmore"
                    />
                </div>
                <div className="block">
                    <ul className="flex p-4 flex-row space-x-4 w-max text-lg font-medium">
                        
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 0? " decoration-transparent": "")} ><Link href="/">Home</Link></li>
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 1? " decoration-transparent": "")}><Link href="/angebote">Angebote</Link></li>
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 2? " decoration-transparent": "")}><Link href="/auffuehrungen">Aufführungen</Link></li>
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 3? " decoration-transparent": "")}><Link href="/news">News</Link></li>
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 4? " decoration-transparent": "")}><Link href="#">Verein</Link></li>

                    </ul>
                </div>

            </div>
        </div>
      
    )
  }
  