import React from 'react'

function ModalLoadComponent() {
  return (
    <div className="fixed z-50 bg-black/5  inset-0 w-full h-full">
      <div className="fixed inset-0 w-[150px] rounded-md bg-white h-[150px] z-30 items-center justify-center flex m-auto shadow-xl flex-col space-y-4">
        <span className="w-[60px] h-[60px] rounded-full border-4 border-indigo-600 border-l-indigo-200 animate-spin"></span>
        <span className="text-indigo-500">Loading...</span>
      </div>
    </div>
  );
}

export default ModalLoadComponent