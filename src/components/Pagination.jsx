import { useState } from "react";

function Pagination({handleNext, handlePrev, pageNo}) {
    

   

  return (
    <>
        <div className="flex justify-center items-center mt-8 bg-gray-400 text-white h-[50px]">
            <div onClick={handlePrev} className="px-8  cursor-pointer" >Prev</div>
            <div>{pageNo}</div>
            <div className="px-8 cursor-pointer" onClick={handleNext}>Next</div>
        </div>
    </>
  )
}

export default Pagination