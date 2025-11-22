import {useForm} from 'react-hook-form'
import { Form,Label,Input,TextArea,ButtonSend } from './formContact.styles';
import { useRef } from 'react';
const FormContact = ({IsContact,IsLogin=false}) => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const handleSubmitForm = (inputs) =>{
        console.log(inputs);
    }
    const IsComment =useRef(true)
    
    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Label for="name" > Nombre
                <Input type="text" placeholder="Escribe tu nombre...." {...register('Nombre',{reqired:true,maxLength:25})}></Input>
            </Label>
             <Label for="lastName"> Apellido
                <Input type="text" {...register('Apellido',{reqired:true,maxLength:25})}></Input>
            </Label>
            <Label for="phone"> Telefono
                <Input type='tel' placeholder="388000000" {...register('Phone',{reqired:true},{valueAsNumber:true})}></Input>
            </Label>
            <Label for ="email">Correo  
                <Input type="email" placeholder="usuario@correo.com"{...register('Email',{reqired:true})}></Input>
            </Label>
            
            {IsLogin &&
             <Label for="pass"> Contraseña
                <Input type="password" 
              {...register('Password',{reqired:true,maxLength:8})}
              ></Input>
            </Label>
            }
              { IsContact.current && 
            <Label IsComment={IsComment.current}> Mensaje :
                <TextArea 
                rows="4"
                placeholder="Escribe aqui tu consulta...."
                name="consulta"
                >
                </TextArea>
            </Label>
            }
            <ButtonSend type ="submit">Enviar Mensaje</ButtonSend>
            </Form>
    )
};export default FormContact
