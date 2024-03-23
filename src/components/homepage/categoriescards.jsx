import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const CategoriesCards = ({id, name, description}) => {
    let imageSrc = "";
    if (name == "PAUD"){
        imageSrc = "/categories/paud.svg";
    } else if (name == "SD"){
        imageSrc = "/categories/sd.svg";
    } else if (name == "TK"){
        imageSrc = "/categories/tk.svg";
    } else if (name == "SMP"){
        imageSrc = "/categories/smp.svg";
    } else if (name == "SMA"){
        imageSrc = "/categories/sma.svg";
    } else if (name == "Kuliah"){
        imageSrc = "/categories/kuliah.svg";
    } else if (name == "Profesional"){
        imageSrc = "/categories/profesional.svg";
    }

  return (
    <Link href={`/${id}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body flex-row gap-4 h-[120px]">
                <div className="flex items-center">
                    <Image src={imageSrc} alt="icon" width={52} height={52}/>
                </div>
                <div className="flex flex-col justify-center">
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}
