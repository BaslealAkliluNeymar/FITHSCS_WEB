

export  interface InputConfig  {
    id?:string;
    name:string;
    type:'text' | 'number' | 'select' | 'radio' | 'checkbox' | 'select' | 'select-multiple' | 'password' | 'email' | 'textarea' | 'date' | 'time' | 'file' | 'color';
    label:string | 'No label';
    options?: string[] | { value: string, label: string }[] | (() => Promise<{value:string,  label:string}>);
    multipleSelectOptions?: { value: string, label: string, icon?:React.ComponentType<{ className?: string } >}[];
    disabled?:boolean;
    description?:string;
    maxCount?: number;
    animation?: number;
    placeholder?: string;
    defaultValue: string | number | string[] | number[] | boolean | { value: string, label: string } | { value: string, label: string };
    defaultChecked?: boolean;
}
const fetchMockCCOptions = async (): Promise<{ value: string; label: string }[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { value: "600cc", label: "600cc" },
                { value: "700cc", label: "700cc" },
                { value: "800cc", label: "800cc" },
            ]);
        }, 1000);
    });
};



const VehicleInputConfig:InputConfig[] =[
    {
        name:"name",
        type:"text",
        label:"Name",
        defaultValue:"",
        description:"The name of the vehicle"
    },
    {
        name:"CC Ability",
        type:"number",
        label:"CC",
        defaultValue: 0,
        description:"The engine capacity of the vehicle in cubic centimeters"
    },
    {
        name:"CC Ability 2",
        type:"select",
        label:"CC",
        description:"The engine capacity of the vehicle in cubic centimeters",
        options: await fetchMockCCOptions(),
        placeholder: "Select CC",
        defaultValue: "100cc"
    }
]


export const formFields: InputConfig[] = [
  {
    name: 'fullName',
    type: 'text',
    label: 'Full Name',
    defaultValue: '',
    placeholder: 'Enter your name'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    defaultValue: 'm@example.com',
    placeholder: 'you@example.com'
  },
  {
    name:'password',
    type: 'password',
    label: 'Password',
    defaultValue: '',
    placeholder: 'Enter a secure password'
  },
  {
    name:'gender',
    type: 'select',
    label: 'Gender',
    defaultValue: { value: 'male', label: 'Male' },
    placeholder: 'Choose gender',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' }
    ]
  },
  {
    name: 'terms and conditions acceptance',
    type: 'checkbox',
    defaultValue: false,
    label: 'I accept the Terms',
    defaultChecked: false
  }
]
export default VehicleInputConfig;

