export default function TextInput({
    value, onChange, onBlur, name, label, type = "text" ,defaultValue,...props
}: {
    name: string,
    label?: string,
    type?: string,
    defaultValue?: string,

}) {
    return (
        <div {...props}>
            <label>{label}</label>
            <input name={name} aria-label={label} type={type} value={value ? value : defaultValue} onChange={onChange} onBlur={onBlur} />
        </div>
    )
}