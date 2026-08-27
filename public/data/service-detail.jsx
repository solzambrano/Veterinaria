import vaccine from "../../src/assets/icons/vaccine.svg";
import grooming from "../../src/assets/icons/grooming.svg";
// import emergency from "../../src/assets/icons/emergency.svg";
import microscopy from "../../src/assets/icons/microscopy.svg";
import health from "../../src/assets/icons/health.svg";
import scalpel from "../../src/assets/icons/scalpel.svg";
import calendar from "../../src/assets/icons/calendar.svg";
import Phone from "../../src/assets/icons/phone.svg";
import Serum from "../../src/assets/icons/medical-drip.svg";
import Emergency from "../../src/assets/icons/emergency-home.svg";
import BodyUrgency from "../../src/view/Services/ServiceDetail/Bodies/Urgency";
import BodyCirugy from "../../src/view/Services/ServiceDetail/Bodies/Cirugy";
import BodyLaboratory from "../../src/view/Services/ServiceDetail/Bodies/ClinicalLaboratory";
import BodyConsultation from "../../src/view/Services/ServiceDetail/Bodies/GeneralConsultation";
import BodyGrooming from "../../src/view/Services/ServiceDetail/Bodies/Grooming";
import BodyVaccination from "../../src/view/Services/ServiceDetail/Bodies/Vaccination";
import HeaderUrgency from "../../src/assets/images/UrgencyHeader.jpg";
import HeaderGrooming from "../../src/assets/images/GroomingHeader.png";
import HeaderConsultation from "../../src/assets/images/ConsultationHeader.jpg";
import HeaderCirugy from "../../src/assets/images/CirugyHeader.jpg";
import HeaderVaccination from "../../src/assets/images/VaccinationHeader.png";
import HeaderLaboratory from "../../src/assets/images/LaboratoryHeader.png";

const serviceDetail = [
  {
    image: emergency,
    slug: "urgency",
    title: "Urgencias 24h",
    description:
      "Contamos con un profesional las 24 hs, atención inmediata cuando cada segundo cuenta.",
    color: "#f0a47494",
    hover: "#f0630bba",
    header: {
      iconEmergency: Emergency,
      span: "DISPONIBLE 24/7 SIN CITA PREVIA",
      title: [
        { text: "Urgencias y", color: "normal" },
        { text: " Cuidados Críticos", color: "green" },
        { text: " 24/7", color: "normal" },
      ],
      subtitle:
        "Cada segundo es vital.Contamos con un equipo de especialistes de élite y tecnologia de vanguardia para intervenir en situaciones críticas de forma inmediata",
      firstText: "+54399999999",
      iconPhone: Phone,
      filterIcon:
        "invert(16%) sepia(78%) saturate(2748%) hue-rotate(347deg) brightness(85%) contrast(94%)",
      secondText: "Pulse para llamar emergencias inmediatas",
      sectionImage: {
        image: HeaderUrgency,
        title: "Respuesta Zero%",
        icon: Serum,
        subtitle: "Protocolo de estabilizacion en menos de 2 minutos",
      },
    },
    body: BodyUrgency,
  },
  {
    image: health,
    slug: "atention",
    title: "Consulta general",
    description:
      "Cuidado preventivo y revisiones de rutina para asegurar el bienestar diario de tu mejor amigo.",
    color: "#abf096a8",
    hover: "#6ce946c9",
    header: {
      span: "CUIDADO PREVENTIVO",
      title: [{ text: "Consulta General", color: "normal" }],
      subtitle:
        "La salud de tu mascota comienza con la prevencion.Nuestras consultas de bienestar regulares son el pilar para una vida larga,activa y feliz junto a tu compañero",
      filterIcon:
        "invert(16%) sepia(78%) saturate(2748%) hue-rotate(347deg) brightness(85%) contrast(94%)",
      firstText: "Agenda una consulta preventiva",
      secondText: "Ver especialistas",
      sectionImage: {
        image: HeaderConsultation,
        title: "Salud 100%",
        icon: Serum,
        subtitle: "Monitoreo constante para la tranquilidad de tu familia",
      },
    },
    body: BodyConsultation,
    imageConsultation: HeaderConsultation,
  },
  {
    image: grooming,
    slug: "grooming",
    title: "Grooming",
    description:
      "Higiene y estética para que luzcan y se sientan bien, con productos hipoalergénicos.",
    color: "#b498f0a3",
    hover: "#723ee1a3",
    header: {
      span: "CUIDADO HOLÍSTICO",
      title: [{ text: "Peluqeria y Bienestar", color: "normal" }],
      subtitle:
        "Más que un corte, una experiencia de salud.Nos enfocamos en la higiene profunda, la salud dermatológica y el manejo libre de estrés para que tu compñaero se sienta tan bien como luce.",
      firstText: "Reservar Cita",
      iconPhone: calendar,
      filterIcon:
        "invert(16%) sepia(78%) saturate(2748%) hue-rotate(347deg) brightness(85%) contrast(94%)",
      secondText: "Ver Galería",
      sectionImage: {
        image: HeaderGrooming,
      },
    },
    body: BodyGrooming,
  },
  {
    image: vaccine,
    slug: "vacunation",
    title: "Vacunacion",
    description:
      "Protege a tu mascota contra las enfermedades más comunes con nuestros protocolos actualizados.",
    color: "#34e78b70",
    hover: "#08f67cd4",
    header: {
      span: "CUIDADO PREVENTIVO",
      title: [
        { text: "Vacunación y", color: "normal" },
        { text: " Prevención", color: "green" },
      ],
      subtitle:
        "Proteja a sus compañeros de vida de enfermedades infecciosas graves.En Veterinaria Coquetos, combinamos protocolos cientificos avanzados con un trato cálido y libre de estrés",
      firstText: "Programar Vacuna",
      secondText: "Ver Calendario",
      sectionImage: {
        image: HeaderVaccination,
        title: "Respuesta Zero%",
        icon: Serum,
        subtitle: "Protocolo de estabilizacion en menos de 2 minutos",
      },
    },
    body: BodyVaccination,
  },
  {
    image: microscopy,
    slug: "laboratory",
    title: "Laboratorio Clinico",
    description:
      "Pruebas rápidas y precisas para un diagnóstico certero sin esperas innecesarias.",
    color: "#cf7e9963",
    hover: "#ec3f7882",
    header: {
      iconEmergency: "",
      span: "Servicios Especializados",
      title: [
        { text: "Laboratorio Clínico ", color: "normal" },
        { text: " y Diagnóstico", color: "green" },
      ],
      subtitle:
        "Proporcionamos servicios de diagnóstico de alta precisión utilizando tecnlogía de vanguardia.Nuestro objetivo es ofrecer resultados rápidos y certeros para guiar el tratamiento adecuado y asegurar el bienestar de tu mascota",
      firstText: "Agendar Analisis",
      iconPhone: Phone,
      filterIcon:
        "invert(16%) sepia(78%) saturate(2748%) hue-rotate(347deg) brightness(85%) contrast(94%)",
      secondText: "Pulse para llamar emergencias inmediatas",
      sectionImage: {
        image: HeaderLaboratory,
        title: "Respuesta Zero%",
        icon: Serum,
        subtitle: "Protocolo de estabilizacion en menos de 2 minutos",
      },
    },
    body: BodyLaboratory,
  },
  {
    image: scalpel,
    slug: "cirugy",
    title: "Cirugias",
    description:
      "Procedimientos quirúrgicos avanzados con anestesia segura y monitorizacion constante, controles y estudios antes y después del procedimiento ",
    color: "#3366cc42",
    hover: "#2c72ff6e",
    header: {
      iconEmergency: Emergency,
      span: "Servicios Especializados",
      title: [{ text: "Cirugía y Quirófano", color: "normal" }],
      subtitle:
        "Infraestructura de vangaurdia y precisión quirúrgica para garantizar la salud y el bienestar de los que más quieres",
      firstText: "Agenda una cita",
      filterIcon:
        "invert(16%) sepia(78%) saturate(2748%) hue-rotate(347deg) brightness(85%) contrast(94%)",
      secondText: "Ver especialistas",
      sectionImage: {
        image: HeaderCirugy,
        title: "Especialistas certificados",
        icon: Serum,
        subtitle: "Protocolos de primera calidad",
      },
    },
    body: BodyCirugy,
  },
];
export default serviceDetail;
