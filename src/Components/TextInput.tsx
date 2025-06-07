export default function TextInput({
    value, onChange, onBlur, name, label, type = "text" 
}: {
    name: string,
    label?: string,
    type?: string
}) {
    return (
        <>
            <label>{label}</label>
            <input name={name} aria-label={label} type={type} value={value} onChange={onChange} onBlur={onBlur} />
        </>
    )
}