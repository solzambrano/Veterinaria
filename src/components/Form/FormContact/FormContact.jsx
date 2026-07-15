import {useForm} from 'react-hook-form'
import { Form,Label,Input,TextArea,ButtonSend,ContainerLabel } from './formContact.style';
import { useRef } from 'react';
const FormContact = ({IsContact,IsLogin=false}) => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const handleSubmitForm = (inputs) =>{

    }
    
    return (
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
            <ContainerLabel>
                <Label for="name" > Nombre: 
                    <Input type="text" 
                    placeholder="Escribe tu nombre...." 
                    {...register('Nombre',{reqired:true,maxLength:25})}/>
                </Label>
                <Label for="lastName"> Apellido: 
                    <Input type="text" 
                    placeholder="Escribe tu Apellido...."
                    {...register('Apellido',{reqired:true,maxLength:25})}/>
                </Label>
            </ContainerLabel>
            <ContainerLabel>
                <Label for="phone"> Telefono: 
                    <Input type='tel' 
                    placeholder="388XXXXXX" 
                    {...register('Phone',{reqired:true},{valueAsNumber:true})}/>
                </Label>
                <Label for ="email">Correo :  
                    <Input type="email" 
                    placeholder="usuario@correo.com"
                    {...register('Email',{reqired:true})}/>
                </Label>
            </ContainerLabel>
        
            {IsLogin &&
             <Label for="pass"> Contraseña: 
                <Input type="password" 
              {...register('Password',{reqired:true,maxLength:8})}
              ></Input>
            </Label>
            }
              { IsContact.current && 
            <Label >
                <p>Mensaje:</p>
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
