import { useForm } from 'react-hook-form'
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Field from './Field'
import '../style/form.css';
import { useCustomForm } from '../hooks';
import Submit from './Submit';


const Form = () => {
 
    const { submitForm , userErrors , userRegister} = useCustomForm();


   
  
    return (
    <form onSubmit={(e)=>submitForm(e)} className='form' id='form' name='form'>
        <Field 
            type="text"
            name={`user.name`}
            label="Username"
            register={userRegister}
            error={userErrors?.user?.name}
             
        />

         <Field 
            type="text"
            name={`user.role`}
            label="Role"
            register={userRegister}
            error={userErrors?.user?.role}
        />
         <Submit />
    </form>
  )
}

export default Form
