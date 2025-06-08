import { useController } from "react-hook-form"
import TextInput from "./TextInput"
import  { type InputConfig } from "../Vehicle/InputConfig"
import { MultiSelect } from "./MultiSelect"
import Selector from "./Selector"
import CheckBox from "./CheckBox"
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
        control,
        defaultValue: false
    })


    switch(config?.type){
        case 'text':
        case 'number':
        case 'email':
        case 'password':
            return (
                <TextInput
                    { ...field }
                    defaultValue={config?.defaultValue || ''}
                />
            )
        // case 'select-multiple':
        //     return (
        //          <MultiSelect
        //             {...field}
        //             options={config.multipleSelectOptions || []}
        //             label={config.label}
        //             defaultValue={config?.defaultValue || ''}
        //             asChild

        //         />
        //     )
        case 'select':
            return (
               <Selector
                   {...field}
                   options={config.options || []}
                   defaultValue={config?.defaultValue.value}
                   value={field.value}
                   onChange={field.onChange}
               />
            )
        case 'checkbox':
            return (
                <CheckBox 
                    {...field}
                    label={config.label} 
                    defaultChecked={field.value} 
                    defaultValue={config?.defaultValue || ''}
                    disabled={field.disabled} 
                    id={config.id}
                />
            )
        default:
            return null
    }
    // Add more cases for other input types as needed
    
}