import React from 'react'

export default function AlertComponent({text, color}) {
  return (
    <div>
      <div class={`alert ${color} text-white font-bold`} role="alert">
       {text}
      </div>
    </div>
  );
}
