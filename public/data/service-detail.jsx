import vaccine from '../../src/assets/icons/vaccine.svg';
import grooming from '../../src/assets/icons/grooming.svg';
import emergency from '../../src/assets/icons/emergency.svg';
import microscopy from '../../src/assets/icons/microscopy.svg';
import health from '../../src/assets/icons/health.svg';
import scalpel from '../../src/assets/icons/scalpel.svg';
import BodyUrgency from '../../src/view/Services/ServiceDetail/Bodies/Urgency'
import BodyCirugy from '../../src/view/Services/ServiceDetail/Bodies/Cirugy'
import BodyLaboratory from '../../src/view/Services/ServiceDetail/Bodies/ClinicalLaboratory'
import BodyConsultation from '../../src/view/Services/ServiceDetail/Bodies/GeneralConsultation'
import BodyGrooming from '../../src/view/Services/ServiceDetail/Bodies/Grooming'
import BodyVaccination from '../../src/view/Services/ServiceDetail/Bodies/Vaccination'
import HeaderUrgency from '../../src/assets/images/UrgencyHeader.jpg'
import HeaderGrooming from '../../src/assets/images/GroomingHeader.jpg'
import HeaderConsultation from '../../src/assets/images/ConsultationHeader.jpg'
import HeaderCirugy from '../../src/assets/imagesCirugyHeader.jpg'
import HeaderVaccination from '../../src/assets/imagesVaccinationHeader.jpg'
import HeaderLaboratory from '../../src/assets/imagesLaboratoryHeader.jpg'


const serviceDetail = [
    {
        image:emergency,
        slug:'urgency',
        title: 'Urgencias 24h',
        description:'Contamos con un profesional las 24 hs, atención inmediata cuando cada segundo cuenta.',
        color:'#f0a47494',
        hover:'#f0630bba',
        body:BodyUrgency,
        imageUrgency:HeaderUrgency
    },
    {
        image:health,
        slug:'atention',
        title:'Consulta general',
        description:'Cuidado preventivo y revisiones de rutina para asegurar el bienestar diario de tu mejor amigo.',
        color:'#abf096a8',
        hover:'#6ce946c9',
        body:BodyConsultation,
        imageConsultation:HeaderConsultation
    },
    {
        image:grooming,
        slug:'grooming',
        title:'Grooming',
        description:'Higiene y estética para que luzcan y se sientan bien, con productos hipoalergénicos.',
        color:'#b498f0a3',
        hover:'#723ee1a3',
        body:BodyGrooming,
        imageGrooming:HeaderGrooming

    },
    {
        image:vaccine,
        slug:'vacunation',
        title:'Vacunacion',
        description:'Protege a tu mascota contra las enfermedades más comunes con nuestros protocolos actualizados.',
        color:'#34e78b70',
        hover:'#08f67cd4',
        body:BodyVaccination,
        imageVaccination:HeaderVaccination

    },
    {
        image:microscopy,
        slug:'laboratory',
        title:'Laboratorio Clinico',
        description: 'Pruebas rápidas y precisas para un diagnóstico certero sin esperas innecesarias.',
        color:'#cf7e9963',
        hover:'#ec3f7882',
        body:BodyLaboratory,
        imageLaboratory:HeaderLaboratory

    },
      {
        image:scalpel,
        slug:'cirugy',
        title:'Cirugias',
        description: 'Procedimientos quirúrgicos avanzados con anestesia segura y monitorizacion constante, controles y estudios antes y después del procedimiento ',
        color:'#3366cc42',
        hover:'#2c72ff6e',
        body:BodyCirugy,
        imageCirugy:HeaderCirugy
    }
]
export default serviceDetail