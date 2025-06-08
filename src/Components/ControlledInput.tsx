import { useController } from "react-hook-form"
import TextInput from "./TextInput"
import  { type InputConfig } from "../Vehicle/InputConfig"
import { MultiSelect } from "./MultiSelect"
import Selector from "./Selector"
export default function ControlledInput({
    name,
    label,
    fields,
    config,
    control
}:{
    name: string,
    label: string,
    fields: any,
    config?: InputConfig,
    control: any
}) {
    const { field } = useController({
        name, 
        control
    })


    switch(config?.type){
        case 'text':
        case 'number':
        case 'email':
        case 'password':
            return (
                <TextInput
                    { ...field }
                />
            )
        case 'select-multiple':
            return (
                 <MultiSelect
                    {...field}
                    options={config.multipleSelectOptions || []}
                    label={config.label}
                    asChild

                />
            )
        case 'select':
            return (
               <Selector
                   {...field}
                   options={config.options || []}
                   value={field.value}
                   onChange={field.onChange}
               />
            )
        default:
            return null
    }
    // Add more cases for other input types as needed
    
}