// Create a schema for a form called Vehicle
// Create the InputConfiguration for every input element 
// Create a list of the inputs required with in the vehicle form/dialogue
// Create a controlled input component that uses the useController hook from react-hook-form to create the input elements
// Call the controlled input component in the App component 
import { formFields } from './Vehicle/InputConfig'
import { useForm } from 'react-hook-form'
import ControlledInput from './Components/ControlledInput';
function App() {
  const { handleSubmit, control } = useForm();

  
  return (
    
    <form onSubmit={handleSubmit((data) => console.log(data))} className="App">
      {
        formFields.map((config) => (
          <ControlledInput  
            key={config.name}
            name={config.name}
            label={config.label}
            control={control}
            config={config}
          />
        ))
      }  
        
     
      <input type="submit" value="Submit" />
      
    </form>
  )
}

export default App
