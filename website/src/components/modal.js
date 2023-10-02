"use client"

import Image from "next/image";
import Link from "next/link";


export default function Modal(props) {
    return (
        <div className="flex fixed top-0 bottom-0 left-0 right-0">
            <div className="fixed w-full h-full bg-slate-950 opacity-25 z-40"></div>
            <div className="p-12 rounded-lg relative m-auto sm:h-4/5 align sm:w-2/3 h-full w-full small-scrollbar bg-slate-100 z-50 overflow-hidden">
                <Link scroll={false} href={props.closeHref} className="absolute top-5 right-6 mr">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </Link>
                <div className="h-1/6">
                    <p className="text-slate-400 font-semibold mb-3">Winter 2022</p>
                    <h3 className="text-3xl font-bold mb-2">{props.title}</h3>
                </div>

                <div className="overflow-y-scroll h-5/6 w-full small-scrollbar">
                    <div className="my-7 m-auto rounded-lg xl:w-96 xl:h-96 sm:w-80 sm:h-80 w-60 h-60 overflow-hidden">
                        <Image
                            src={props.imageUrl}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                            className="object-cover"
                        />
                    </div>
                    
                    <p className="text-justify text-slate-700 mb-4 pr-2">{props.text}</p>
                </div>

            </div>
        </div>
      
    )
  }
  