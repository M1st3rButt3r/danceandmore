import Image from "next/image"

export default function Navbar(props) {
    return (
        <div className="fixed">
            <div className="w-screen h-20 z-30 bg-slate-100 relative flex justify-between items-center shadow-lg rounded-b-md">
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
                        
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 0? " decoration-transparent": "")} ><a href="/">Home</a></li>
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 1? " decoration-transparent": "")}><a href="/angebote">Angebote</a></li>
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 2? " decoration-transparent": "")}><a href="/auffuehrungen">Aufführungen</a></li>
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 3? " decoration-transparent": "")}><a href="#">News</a></li>
                        <li className={"p-2 underline decoration-red-600 decoration-4" + (props.active != 4? " decoration-transparent": "")}><a href="#">Verein</a></li>

                    </ul>
                </div>

            </div>
        </div>
      
    )
  }
  