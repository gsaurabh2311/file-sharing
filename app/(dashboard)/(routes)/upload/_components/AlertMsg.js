import React from 'react'
import { AlertCircle } from 'lucide-react';

const AlertMsg = ({msg}) => {
  return (
    <div className="p-4 bg-red-400 mt-5 text-white flex gap-5 items-center">
        <AlertCircle />
        {msg}
    </div>
  )
}

export default AlertMsg