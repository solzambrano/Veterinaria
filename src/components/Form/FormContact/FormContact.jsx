import {useForm} from 'react-hook-form'
import { Form,Label,Input } from './formContact.styles';

const FormContact = ({IsContact,IsLogin=false}) => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const handleSubmitForm = (inputs) =>{
        console.log(inputs);
    }
    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Label for="name"> Nombre
                <Input type="text" {...register('Nombre',{reqired:true,maxLength:25})}></Input>
            </Label>
             <Label for="lastName"> Apellido
                <Input type="text" {...register('Apellido',{reqired:true,maxLength:25})}></Input>
            </Label>
            <Label for="phone"> Telefono
                <Input type='tel' {...register('Phone',{reqired:true},{valueAsNumber:true})}></Input>
            </Label>
            <Label for ="email">Correo
                <Input type="email" {...register('Email',{reqired:true})}></Input>
            </Label>
            
            {IsLogin &&
             <Label for="pass"> Contraseña
                <Input type="password" 
              {...register('Password',{reqired:true,maxLength:8})}
              ></Input>
            </Label>
            }
              { IsContact && 
            <Label> Mensaje
                <textarea>

                </textarea>
            </Label>
            }
            <button type ="submit">Sign Up</button>
            </Form>
    )
};export default FormContact
