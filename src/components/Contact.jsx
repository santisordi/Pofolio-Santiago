import { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = (props) => {
    
    const initialStateValues = {
        name:"",
        email:"",
        message: "",
    }
    const [values, setValues] = useState(initialStateValues);
    const [formKey, setFormKey] = useState(0);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        
    };

    const resetForm = () => {
        setValues(initialStateValues);
        setFormKey((prevKey) => prevKey + 1); // Actualiza la clave del formulario
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validar los datos del formulario
        if (!values.name || !values.email || !values.message) {
          Swal.fire('Error', 'Please fill in all fields.', 'error');
          return;
        }
        
        // Validar el formato del correo electrónico 
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(values.email)) {
          Swal.fire('Error', 'Please enter a valid email address.', 'error');
          return;
        }
        
        // Si la validación es exitosa, enviar los datos y restablecer el formulario
        props.addOrEditLink(values);
        resetForm();
        
        // Mostrar una alerta de éxito
        Swal.fire('Success', 'Form submitted successfully.', 'success');
      };
      

    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='py-3 text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500 lg:flex lg:flex-col lg:text-center'>Contact</p>
                    <p className='py-6 lg:flex lg:flex-col lg:text-center'>Submit the form below to get in touch with me</p>
                </div>
                <div  className='flex justify-center items-center'>

                    <form key={formKey} className='flex flex-col w-full md:w-1/2'>
                        <input onChange={handleInputChange} type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input onChange={handleInputChange} type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea onChange={handleInputChange} name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message'>
                        </textarea>
                        <button onClick={handleSubmit} className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk!</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact;