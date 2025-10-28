import React from 'react'

const Loding = () => {
  return (
    <div>
      
      
      
      {true && (
        <div className="absolute inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="text-white text-8xl font-extrabold animate-bounce tracking-widest">
            B
          </div>
        </div>
      )}
    </div>
  )
}

export default Loding
