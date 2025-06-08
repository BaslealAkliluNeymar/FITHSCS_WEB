import React from 'react'

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id?: string
}

const CheckBox = ({ label, id,defaultValue, ...props }: CheckBoxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" id={id}  {...props} />
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  )
}

export default CheckBox
