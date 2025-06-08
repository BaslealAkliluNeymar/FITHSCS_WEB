
const CheckBox =({  label , id, disabled , defaultChecked ,...props}
    :{
        label: string,
        id?: string,
        disabled?: boolean,
        defaultChecked?: boolean
    }
) =>{
    return (
        <div {...props}>
            <label htmlFor={id} className="text-sm font-medium text-gray-700">
                {label}
            </label>
            <input type="checkbox" id={id} disabled={disabled} defaultChecked={defaultChecked} />
        </div>
    )
}


export default CheckBox;