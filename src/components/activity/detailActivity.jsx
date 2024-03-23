'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const DetailActivity = ({detailResource}) => {
  return (
    <div className='flex items-center'>
        <div className='flex space-x-12 items-center'>
            <div className="carousel max-w-[440px]">
                <div id="slide1" className="carousel-item relative">
                    <Image src="https://fakeimg.pl/440x320/" width={440} height={320} alt="Shoes"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative">
                    <Image src="https://fakeimg.pl/440x320/" width={440} height={320} alt="Shoes"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative">
                    <Image src="https://fakeimg.pl/440x320/" width={440} height={320} alt="Shoes"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative">
                    <Image src="https://fakeimg.pl/440x320/" width={440} height={320} alt="Shoes"/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h1>{detailResource.title}</h1>
                <div className='space-x-2'>
                    <div className="badge badge-secondary badge-sm">{detailResource.category.name}</div>
                    <div className="badge badge-primary badge-sm">{detailResource.pricing}</div>
                </div>
                <p>{detailResource.description}</p>
                <Link target='_blank' className='block' href={detailResource.linkUrl}>
                    <button className="btn btn-info btn-md">Go to Resource</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
