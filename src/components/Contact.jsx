import { useState } from 'react'
import { db } from "../fireBase";
import { addDoc, collection } from 'firebase/firestore';



const Contact = () => {

    // const [nombre, setNombre] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // const userCollectionRef = collection (db, "contactdata");

    const initialStateValues = {
        name:"",
        email:"",
        message: "",
    }


            

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
        
    };
    
    const handleSubmit = e => {
        e.preventDefault();
    }

    // const handleSubmit = () => {
    //      addDoc(userCollectionRef,
    //         {name: nombre,
    //          email:email,
    //          message:message   
    //         })
    // }

    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='py-3 text-3xl sm:text-4xl font-bold inline border-b-4 border-gray-500 lg:flex lg:flex-col lg:text-center'>Contact</p>
                    <p className='py-6 lg:flex lg:flex-col lg:text-center'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form  className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter your name' onChange={handleInputChange} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="text" name='email' placeholder='Enter your email' onChange={handleInputChange} className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10" onChange={handleInputChange} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter your message'>

                        </textarea>
                        <button onClick={handleSubmit}                        className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk!</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact;