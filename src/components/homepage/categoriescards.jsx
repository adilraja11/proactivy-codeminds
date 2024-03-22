import React from 'react'
import Link from 'next/link'

export const CategoriesCards = ({id, name, description}) => {
  return (
    <Link href={`/${id}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body flex-row gap-4">
                <div className="flex items-center">
                    <div className="bg-slate-400 rounded-full w-16 h-16 justify-center"></div>
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
