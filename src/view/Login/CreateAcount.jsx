import {useForm} from 'react-hook-form'

const CreateAccount = () =>{
    const {register,handleSubmit,formState:{errors}}=useForm()
    const handleSubmitForm = (inputs) =>{
        console.log(inputs);
        
    }
    return(
        <>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label for="name"> Nombre
                <input type="text" {...register('Nombre',{reqired:true,maxLength:25})}
                />
            </label>
             <label for="lastName"> Apellido
                <input type="text" {...register('Apellido',{reqired:true,maxLength:25})}
                />
            </label>
            <label for="phone"> Telefono
                <input type='tel' {...register('Phone',{reqired:true},{valueAsNumber:true})}/>
            </label>
            <label for ="email">Correo
                <input type="email" {...register('Email',{reqired:true})}></input>
            </label>
            <label for="pass"> Contraseña
                <input type="password" 
              {...register('Password',{reqired:true,maxLength:8})}
                />
            </label>
            <button type ="submit">Sign Up</button>
        </form>
        </>
    )
}
export default CreateAccount