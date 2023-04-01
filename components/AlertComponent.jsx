import React from 'react'

export default function AlertComponent({text, color}) {
  return (
    <div>
      <div className={`alert ${color} text-white font-bold`} role="alert">
       {text}
      </div>
    </div>
  );
}
