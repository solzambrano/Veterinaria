import stethoscope from '../../src/assets/icons/stethoscope.svg';
import vaccine from '../../src/assets/icons/vaccine.svg';
import emergency from '../../src/assets/icons/emergency.svg';
import calendar from '../../src/assets/icons/calendar.svg';
import hairdryer from '../../src/assets/icons/hairdry.svg';

const Categories =[
    {
        id:1,
        slug:'atencion',
        image:stethoscope,
        title:'Atencion Medica'
    },
      {
        id:2,
        slug:'emergencia',
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
        image:vaccine,
        title:'Mi perfil'
    },
      {
        id:5,
        slug:'citas',
        image:calendar,
        title:'Servicios'
    },
]
export default Categories