import React from 'react'

const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex gap-2'>
        <div className="form-control"></div>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
    
    <span className="label-text text-black">Male</span>
    
    <input type="checkbox" className="checkbox border-slate-50"
    checked={selectedGender === "male"}
    onChange={()=> onCheckboxChange("male")} />
  </label>

  <div className="form-control"></div>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
   
    <span className="label-text text-black ">female</span>
   
    <input type="checkbox" className="checkbox border-slate-50"
     checked={selectedGender === "female"}
     onChange={()=> onCheckboxChange("female")} />
  </label>
    </div>
  )
}

export default GenderCheckBox
