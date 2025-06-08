

export  interface InputConfig  {
    id?:string,
    name:string,
    type:'text' | 'number' | 'select' | 'radio' | 'checkbox' | 'select' | 'select-multiple' | 'password' | 'email' | 'textarea' | 'date' | 'time' | 'file' | 'color',
    label:string | 'No label',
    options?: string[] | { value: string, label: string }[],
    multipleSelectOptions?: { value: string, label: string, icon?:React.ComponentType<{ className?: string } >}[],
    disabled?:boolean,
    description?:string,
    maxCount?: number,
    animation?: number,
    placeholder?: string,
    defaultValue?: string | number | string[] | number[],
    defaultChecked?: boolean,
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
    },
    {
        name:"CC Ability 2",
        type:"select",
        label:"CC",
        description:"The engine capacity of the vehicle in cubic centimeters",
        options: [
            { value: "100cc", label: "100cc"},
            { value: "200cc", label: "200cc"},
            { value: "300cc", label: "300cc"},
            { value: "400cc", label: "400cc"},
            { value: "500cc", label: "500cc"},
        ],
        placeholder: "Select CC"
    }
]


export const formFields: InputConfig[] = [
  {
    name: 'fullName',
    type: 'text',
    label: 'Full Name',
    placeholder: 'Enter your name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'you@example.com'
  },
  {
    name:'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter a secure password'
  },
  {
    name:'gender',
    type: 'select',
    label: 'Gender',
    placeholder: 'Choose gender',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' }
    ]
  },
  {
    name: 'terms and conditions acceptance',
    type: 'checkbox',
    label: 'I accept the Terms',
    defaultChecked: false
  }
]
export default VehicleInputConfig;

