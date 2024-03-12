import React from 'react'

const ProgressBar = ({progress}) => {
  return (
    <div className="bg-gray-400 w-full mt-3 h-4 border rounded-full text-center">
       <div className="bg-primary rounded-full h-4 text-white text-[10px]" style={{width: `${progress}%`}}>    {`${Number(progress).toFixed(0)}%`}</div>
    </div>
  )
}

export default ProgressBar