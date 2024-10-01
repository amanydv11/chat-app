import React from 'react'

const GenderCheckBox = () => {
  return (
    <div className='flex gap-2'>
        <div className="form-control"></div>
        <label className="label gap-2 cursor-pointer">
    <span className="label-text text-black">Male</span>
    <input type="checkbox" className="checkbox border-slate-50" />
  </label>
  <div className="form-control"></div>
        <label className="label gap-2 cursor-pointer">
    <span className="label-text text-black ">female</span>
    <input type="checkbox" className="checkbox border-slate-50" />
  </label>
    </div>
  )
}

export default GenderCheckBox
