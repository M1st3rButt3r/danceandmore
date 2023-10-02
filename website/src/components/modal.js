"use client"

import Image from "next/image";
import Link from "next/link";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";


export default function Modal(props) {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            loop: true
        }
    )

    return (
        <div className="flex fixed top-0 bottom-0 left-0 right-0 z-10">
            
            <div className="fixed w-full h-full bg-slate-950 opacity-25 z-40"></div>
            <div className="p-12 rounded-lg relative m-auto sm:h-4/5 align sm:w-2/3 h-full w-full small-scrollbar bg-slate-100 z-40 overflow-hidden">
                <Link scroll={false} href={props.closeHref} className="absolute top-5 right-6 mr">
                    <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                </Link>
                <div className="h-1/6">
                    <p className="text-slate-400 font-semibold mb-3">Winter 2022</p>
                    <h3 className="text-3xl font-bold mb-2">{props.title}</h3>
                </div>

                <div className="overflow-y-scroll h-5/6 w-full small-scrollbar">
                    {/*<div className="my-7 m-auto rounded-lg xl:w-96 xl:h-96 sm:w-80 sm:h-80 w-60 h-60 overflow-hidden">
                        <Image
                            src={props.imageUrl}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                            className="object-cover"
                        />
                        
                    </div>*/}
                    <div className="m-auto w-full h-72 mb-7 max-w-xl xl:h-96 xl:max-w-2xl flex">
                        
                        <div ref={sliderRef} className="keen-slider bg-slate-200 h-full rounded-lg">
                            <FontAwesomeIcon onClick={() => instanceRef.current?.prev()} icon={faChevronLeft} size="xl" className="text-white absolute z-40 left-0 top-1/2 -translate-y-1/2 cursor-pointer p-5"/>
                            <FontAwesomeIcon onClick={() => instanceRef.current?.next()}  icon={faChevronRight} size="xl" className="text-white absolute z-40 right-0 top-1/2 -translate-y-1/2 cursor-pointer p-5"/>
                            {
                                props.images.map((image) => {
                                    return <div className="m-auto xl:w-96 xl:h-96 sm:w-80 sm:h-80 w-60 h-60 overflow-hidden keen-slider__slide">
                                    <Image
                                        key={image.id}
                                        src={image.url}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: '100%' }}
                                        className="object-cover"
                                    />
                                </div>
                                })
                            }
                        </div>
                        
                    </div>

                    <p className="text-justify text-slate-700 mb-4 pr-2">{props.text}</p>
                </div>

            </div>
        </div>
      
    )
  }
  