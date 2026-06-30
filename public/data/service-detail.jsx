import vaccine from '../../src/assets/icons/vaccine.svg'
import grooming from '../../src/assets/icons/grooming.svg'
import emergency from '../../src/assets/icons/emergency.svg'
import microscopy from '../../src/assets/icons/microscopy.svg'
import health from '../../src/assets/icons/health.svg'
import scalpel from '../../src/assets/icons/scalpel.svg'

const serviceDetail = [
    {
        image:emergency,
        title: 'Urgencias 24h',
        description:'Contamos con un profesional las 24 hs, atención inmediata cuando cada segundo cuenta.',
        color:'#f0a47494',
        hover:'#f0630bba'
    },
    {
        image:health,
        title:'Consulta general',
        description:'Cuidado preventivo y revisiones de rutina para asegurar el bienestar diario de tu mejor amigo.',
        color:'#abf096a8',
        hover:'#6ce946c9'
    },
    {
        image:grooming,
        title:'Grooming',
        description:'Higiene y estética para que luzcan y se sientan bien, con productos hipoalergénicos.',
        color:'#b498f0a3',
        hover:'#723ee1a3'
    },
    {
        image:vaccine,
        title:'Vacunacion',
        description:'Protege a tu mascota contra las enfermedades más comunes con nuestros protocolos actualizados.',
        color:'#34e78b70',
        hover:'#08f67cd4'
    },
    {
        image:microscopy,
        title:'Laboratorio Clinico',
        description: 'Pruebas rápidas y precisas para un diagnóstico certero sin esperas innecesarias.',
        color:'#cf7e9963',
        hover:'#ec3f7882'
    },
      {
        image:scalpel,
        title:'Cirugias',
        description: 'Procedimientos quirúrgicos avanzados con anestesia segura y monitorizacion constante, controles y estudios antes y después del procedimiento ',
        color:'#3366cc42',
        hover:'#2c72ff6e'
    }
]
export default serviceDetail