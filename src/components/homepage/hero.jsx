import React from 'react'

export const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="w-full max-w-sm rounded-lg shadow-2xl" />
        <div>
            <h1 className="text-5xl font-bold">Every Success starts with a little knowledge</h1>
            <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar massa vel odio lobortis consequat.</p>
            
            
            <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
                <div className="stat-value">99+</div>
                <div className="stat-desc">User</div>
            </div>
            
            <div className="stat">
                <div className="stat-value">1K+</div>
                <div className="stat-desc">Activity</div>
            </div>
            
            <div className="stat">
                <div className="stat-value">6</div>
                <div className="stat-desc">Category</div>
            </div>
            
            </div>
        </div>
    </div>
    </div>
  )
}
