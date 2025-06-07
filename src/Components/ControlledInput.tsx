import { useController } from "react-hook-form"
import TextInput from "./TextInput"
import  { type InputConfig } from "../Vehicle/InputConfig"
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
            return (
                <TextInput
                    { ...field }
                />
            )

        default:
            return null 
    }
    
}