    import React from 'react'
    import Image from 'next/image'

    export const Hero = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <Image src="/hero.svg" alt="Hero" width={500} height={300}/>
            <div>
                <h1 className="text-6xl font-bold">Every Success starts with a little knowledge</h1>
                <p className="py-6 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
                
                
                <div className="w-full max-w-xl stats stats-vertical lg:stats-horizontal shadow">
                <div className="stat text-center">
                    <div className="stat-value">99+</div>
                    <div className="stat-desc">User</div>
                </div>
                
                <div className="stat text-center">
                    <div className="stat-value">1K+</div>
                    <div className="stat-desc">Activity</div>
                </div>
                
                <div className="stat text-center">
                    <div className="stat-value">6</div>
                    <div className="stat-desc">Category</div>
                </div>
                
                </div>
            </div>
        </div>
        </div>
    )
    }
