import veterinary from '../../src/assets/icons/veterinary-care.svg';
import user from '../../src/assets/icons/user.svg';
import emergency from '../../src/assets/icons/emergency.svg';
import stethoscope from '../../src/assets/icons/stethoscope.svg';
import hairdryer from '../../src/assets/icons/hairdry.svg';

const Categories =[
    {
        id:1,
        slug:'atencion',
        image:veterinary,
        title:'Atencion Medica'
    },
      {
        id:2,
        slug:'urgencias',
        image:emergency,
        title:'Servicio de Emergencia'
    },
      {
        id:3,
        slug:'grooming',
        image:hairdryer,
        title:'Grooming'
    },
      {
        id:4,
        slug:'perfil',
        image:user,
        title:'Mi cuenta'
    },
      {
        id:5,
        slug:'servicios',
        image:stethoscope,
        title:'Servicios'
    },
]
export default Categories