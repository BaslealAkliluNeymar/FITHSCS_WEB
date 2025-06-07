export  interface InputConfig  {
    name:string,
    type:'text' | 'number' | 'select' | 'radio' | 'checkbox',
    label:string,
    options?: string[] | { value: string, label: string }[],
    disabled?:boolean,
    description?:string
}


const VehicleInputConfig:InputConfig[] =[
    {
        name:"name",
        type:"text",
        label:"Name",
        description:"The name of the vehicle"
    },
    {
        name:"CC Ability",
        type:"number",
        label:"CC",
        description:"The engine capacity of the vehicle in cubic centimeters"
    }
]


export default VehicleInputConfig;
