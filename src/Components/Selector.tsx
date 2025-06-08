

const Selector = ({ options, value, onChange,defaultValue, ...props }: {
    options: { value: string, label: string }[],
    value: string,
    defaultValue?: string,
    onChange: (value: string) => void
}) => {
    return (
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)} {...props}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}


export default Selector;