import Vaccine from "../../src/assets/icons/vaccine.svg";
import Grooming from "../../src/assets/icons/grooming.svg";
import Microscopy from "../../src/assets/icons/microscopy.svg";
import Health from "../../src/assets/icons/health.svg";
import Scalpel from "../../src/assets/icons/scalpel.svg";
import Phone from "../../src/assets/icons/phone.svg";
import Calendar from "../../src/assets/icons/calendar.svg";
import Verify from "../../src/assets/icons/verify-filled.svg";
import Check from "../../src/assets/icons/shield-check.svg";
import Serum from "../../src/assets/icons/medical-drip.svg";
import Speed from "../../src/assets/icons/speed.svg";
import HealthServices from "../../src/assets/icons/health-services.svg";
import Flask from "../../src/assets/icons/erlenmeyer-flask.svg";
import Arrow from "../../src/assets/icons/arrow-right.svg";
import Emergency from "../../src/assets/icons/emergency.svg";
import EmergencyHome from "../../src/assets/icons/emergency-home.svg";
import BodyUrgency from "../../src/view/Services/ServiceDetail/Bodies/Urgency";
import BodyCirugy from "../../src/view/Services/ServiceDetail/Bodies/Cirugy";
import BodyLaboratory from "../../src/view/Services/ServiceDetail/Bodies/ClinicalLaboratory";
import BodyConsultation from "../../src/view/Services/ServiceDetail/Bodies/GeneralConsultation";
import BodyGrooming from "../../src/view/Services/ServiceDetail/Bodies/Grooming";
import BodyVaccination from "../../src/view/Services/ServiceDetail/Bodies/Vaccination";
import HeaderUrgency from "../../src/assets/images/UrgencyHeader.png";
import HeaderGrooming from "../../src/assets/images/GroomingHeader.png";
import HeaderConsultation from "../../src/assets/images/ConsultationHeader.png";
import HeaderCirugy from "../../src/assets/images/CirugyHeader.jpg";
import HeaderVaccination from "../../src/assets/images/VaccinationHeader.png";
import HeaderLaboratory from "../../src/assets/images/LaboratoryHeader.png";

const serviceDetail = [
  {
    image: Emergency,
    slug: "urgency",
    title: "Urgencias 24h",
    description:
      "Contamos con un profesional las 24 hs, atención inmediata cuando cada segundo cuenta.",
    color: "#f0a47494",
    hover: "#f0630bba",
    header: {
      infoSup: {
        iconSpan: EmergencyHome,
        filter:
          "invert(16%) sepia(78%) saturate(2748%) hue-rotate(347deg) brightness(85%) contrast(94%)",
        span: "DISPONIBLE 24/7 SIN CITA PREVIA",
        variant: "urgent",
      },
      content: {
        titleHeader: [
          { text: "Urgencias y", color: "normal" },
          { text: " Cuidados Críticos", color: "green" },
          { text: " 24/7", color: "normal" },
        ],
        description:
          "Cada segundo es vital.Contamos con un equipo de especialistes de élite y tecnologia de vanguardia para intervenir en situaciones críticas de forma inmediata",
      },
      primaryLink: {
        textPrimary: "+54399999999",
        iconPrimary: Phone,
        filter:
          "invert(93%) sepia(7%) saturate(0%) hue-rotate(158deg) brightness(105%) contrast(109%)",
        variant: "urgent",
      },
      secondaryLink: {
        textSecondary: "Pulse para llamar emergencias inmediatas",
        variant: "default",
      },
      sectionImage: {
        image: HeaderUrgency,
        width: 1764,
        height: 891,
        variant: "urgent",
      },
      additional: {
        title: "Respuesta Zero",
        icon: Speed,
        filter:
          "invert(30%) sepia(71%) saturate(6943%) hue-rotate(352deg) brightness(90%) contrast(129%)",
        subtitle:
          "Evaluación inmediata al llegar.Protocolo de estabilizacion en menos de 2 minutos",
        variant: "default",
      },
    },
    body: BodyUrgency,
  },
  {
    image: Health,
    slug: "atention",
    title: "Consulta general",
    description:
      "Cuidado preventivo y revisiones de rutina para asegurar el bienestar diario de tu mejor amigo.",
    color: "#abf096a8",
    hover: "#6ce946c9",
    header: {
      infoSup: {
        span: "CUIDADO PREVENTIVO",
        variant: "health",
      },
      content: {
        titleHeader: [{ text: "Consulta General", color: "normal" }],
        description:
          "La salud de tu mascota comienza con la prevencion.Nuestras consultas de bienestar regulares son el pilar para una vida larga,activa y feliz junto a tu compañero",
      },
      primaryLink: {
        textPrimary: "Agenda una consulta preventiva",
        variant: "info",
      },
      secondaryLink: {
        textSecondary: "Ver especialistas",
        variant: "secondary",
      },

      sectionImage: {
        image: HeaderConsultation,
        width: 1537,
        height: 1023,
        variant: "consultation",
      },
      additional: {
        title: "Salud 100%",
        filter:
          "invert(94%) sepia(11%) saturate(6295%) hue-rotate(69deg) brightness(90%) contrast(102%)",
        icon: Check,
        subtitle: "Monitoreo constante para la tranquilidad de tu familia",
        variant: "info",
      },
    },
    body: BodyConsultation,
  },
  {
    image: Grooming,
    slug: "grooming",
    title: "Grooming",
    description:
      "Higiene y estética para que luzcan y se sientan bien, con productos hipoalergénicos.",
    color: "#b498f0a3",
    hover: "#723ee1a3",
    header: {
      infoSup: {
        span: "CUIDADO HOLÍSTICO",
        variant: "holistic",
      },
      content: {
        titleHeader: [{ text: "Peluqeria y Bienestar", color: "normal" }],
        description:
          "Más que un corte, una experiencia de salud.Nos enfocamos en la higiene profunda, la salud dermatológica y el manejo libre de estrés para que tu compañero se sienta tan bien como luce.",
      },
      primaryLink: {
        textPrimary: "Reservar Cita",
        iconPrimary: Calendar,
        variant: "info",
      },
      secondaryLink: {
        textSecondary: "Ver Galería",
        variant: "secondary",
      },
      sectionImage: {
        image: HeaderGrooming,
        width: 1514,
        height: 1039,
        variant: "grooming",
      },
    },
    body: BodyGrooming,
  },
  {
    image: Vaccine,
    slug: "vacunation",
    title: "Vacunacion",
    description:
      "Protege a tu mascota contra las enfermedades más comunes con nuestros protocolos actualizados.",
    color: "#34e78b70",
    hover: "#08f67cd4",
    header: {
      infoSup: {
        span: "CUIDADO PREVENTIVO",
        variant: "prevention",
      },
      content: {
        titleHeader: [
          { text: "Vacunación y", color: "normal" },
          { text: " Prevención", color: "green" },
        ],
        description:
          "Proteja a sus compañeros de vida de enfermedades infecciosas graves.En Veterinaria Coquetos, combinamos protocolos cientificos avanzados con un trato cálido y libre de estrés",
      },
      primaryLink: {
        textPrimary: "Programar Vacuna",
        variant: "info",
      },
      secondaryLink: {
        textSecondary: "Ver Calendario",
        variant: "outline",
      },

      sectionImage: {
        image: HeaderVaccination,
        width: 1537,
        height: 1023,
        variant: "vaccination",
      },
    },
    body: BodyVaccination,
  },
  {
    image: Microscopy,
    slug: "laboratory",
    title: "Laboratorio Clinico",
    description:
      "Pruebas rápidas y precisas para un diagnóstico certero sin esperas innecesarias.",
    color: "#cf7e9963",
    hover: "#ec3f7882",
    header: {
      infoSup: {
        iconSpan: Flask,
        filter:
          "invert(76%) sepia(18%) saturate(7330%) hue-rotate(85deg) brightness(104%) contrast(88%)",
        span: "Servicios Especializados",
        variant: "special",
      },
      content: {
        titleHeader: [
          { text: "Laboratorio Clínico ", color: "normal" },
          { text: " y Diagnóstico", color: "green" },
        ],
        description:
          "Proporcionamos servicios de diagnóstico de alta precisión utilizando tecnlogía de vanguardia.Nuestro objetivo es ofrecer resultados rápidos y certeros para guiar el tratamiento adecuado y asegurar el bienestar de tu mascota",
      },
      primaryLink: {
        textPrimary: "Agendar Analisis",
        iconPrimary: Arrow,
        variant: "info",
      },
      sectionImage: {
        image: HeaderLaboratory,
        width: 1477,
        height: 1065,
        variant: "lab",
      },
    },
    body: BodyLaboratory,
  },
  {
    image: Scalpel,
    slug: "cirugy",
    title: "Cirugias",
    description:
      "Procedimientos quirúrgicos avanzados con anestesia segura y monitorizacion constante, controles y estudios antes y después del procedimiento ",
    color: "#3366cc42",
    hover: "#2c72ff6e",
    header: {
      infoSup: {
        icon: HealthServices,
        iconSpan: "Servicios Especializados",
        variant: "sanity",
      },
      content: {
        titleHeader: [{ text: "Cirugía y Quirófano", color: "normal" }],
        description:
          "Infraestructura de vangaurdia y precisión quirúrgica para garantizar la salud y el bienestar de los que más quieres",
      },
      primaryLink: {
        textPrimary: "Agenda una cita",
        variant: "info",
      },
      secondaryLink: {
        textSecondary: "Ver especialistas",
        variant: "outline",
      },
      filterIcon:
        "invert(16%) sepia(78%) saturate(2748%) hue-rotate(347deg) brightness(85%) contrast(94%)",
      sectionImage: {
        image: HeaderCirugy,
        width: 1376,
        height: 768,
        variant: "cirugy",
      },
      additional: {
        title: "Especialistas certificados",
        icon: Verify,
        filter: "",
        subtitle: "Protocolos de primera calidad",
        variant: "default",
      },
    },
    body: BodyCirugy,
  },
];
export default serviceDetail;
