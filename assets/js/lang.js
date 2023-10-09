// Define the language reload anchors
var language = {
  es: {
    profileTitle: "Perfil",
    profileDescription:
      "Ingeniero en Informática y Desarrollador Web FrontEnd. Tengo varios años de experiencia en el campo laboral y me gusta seguir mejorando mis habilidades de desarrollo. Altamente motivado y orientado a resultados. Quiero ser parte de tu éxito ofreciendo un trabajo de alta responsabilidad y calidad, quiero ser útil trabajando en lo que me gusta, aprender mucho, aceptar y afrontar nuevos retos.",
    title: "Resumen CV - Oscar Romero Silva",
    home: "Inicio",
    profileHome: "Perfil",
    profileEducation: "Educación",
    profileSkills: "Habilidades",
    profileExperience: "Experiencia",
    profileCertificates: "Certificados",
    profession: "Desarrollador Web Frontend",
    english: "Inglés",
    spanish: "Español",
    educationTitle1: "Ingeniero en Ciencias Informáticas",
    educationTitle2: "Técnico Medio en Informática",
    seeMore: "Ver Más",
    duration0: "Desde Marzo 2022 hasta la actualidad | ObsidianSoft",
    duration1: "Desde Enero 2021 hasta Febrero de 2022 | Smart&Fun",
    descriptionJob0:
      "Desarrollo de diferentes módulos para la plataforma ObsidianSoft en diferentes versiones de la plataforma.",
    descriptionJob1:
      "Desarrollador FrontEnd para el sitio PlusHolidays, con el objetivo de reservar propiedades administradas por la empresa PlusHolidays en España.",
    descriptionJob2:
      "Desarrollo de todas las vistas responsivas, Notificaciones, Configuraciones y otros módulos con gestión CRUD total que consume servicios API Rest. Incluye los servicios públicos para mostrar, filtrar y calcular reglas para la búsqueda personalizada de alojamientos y ubicaciones mediante filtros complejos.",
    descriptionJob3:
      "Trabajo totalmente remoto, completando las tareas asignadas en los requisitos de tiempo y trabajando bajo presión.",
    descriptionJob4:
      "Informes diarios del progreso del trabajo siguiendo el flujo de trabajo establecido por el equipo usando Git/GitLab como control de versiones, Trello para guiar el proceso SCRUM y Slack para las reuniones diarias.",
    techUsed: "Tecnologías utilizadas",
    descriptionJob5:
      "Sistema de gestión para el registro de Mercados y Comercios que permite el manejo personalizado de negocios para sus propietarios y empleados. Permita rastrear pedidos comerciales y publicar productos utilizando configuraciones personalizadas para manejar modelos comerciales B2B y B2C.",
    descriptionJob6:
      "Desarrollo de varios módulos para administración Comercios, Usuarios, Empleados y notificaciones que consumen servicios API Rest",
    fullStack: "Desarrollador Full-Stack",
    duration2: "Del 12/2019 al 01/2021 | BitingBit Campus S.L.U.",
    descriptionJob7:
      "Desarrollador web en diferentes aplicaciones web como LogAnalyser, un proyecto interno para analizar los registros de Alexa. También trabajé en una aplicación web SyncScript para una empresa EuroSync en Alemania. También trabajé en proyectos y colaboraciones para otros clientes.",
    duration3:
      "De 2016 a 2018 | Sociedad de Defensa de las Tecnologías de la Información (XETID). La Habana, Cuba",
    descriptionJob8:
      "Desarrollo de soluciones informáticas en el área 3D, modelado y animación de objetos 3d, creación de interfaces animadas 2d. Entre las aplicaciones trabajadas están:",
    subDescriptionJob1:
      "- Recorrido Virtual Realista por la Sala Principal de Reuniones del Banco Central de Cuba.",
    subDescriptionJob2: "- Tour Virtual por las áreas de la empresa XETID.",
    subDescriptionJob3:
      "- Video demostrativo del Acto Central en la Plaza de la Revolución.",
    subDescriptionJob4:
      "- Video demostrativo de maniobras combativas del Ejército cubano.",
    subDescriptionJob5:
      '- Conjunto de videojuegos que integran la plataforma de entretenimiento y publicidad CONBOX, la cual consta de siete (7) videojuegos y utiliza Kinect para su funcionamiento, estos juegos son: Homeruns Derby, Penalties, Car race, Boxing game, Bowling game, Athletics juego y Juego "Los sueños, los sueños son"',
    certificate1: "Certificado en Fundamentos de Scrum",
    certificateDescription1:
      "Proporcionar conocimientos y habilidades para aplicar y seguir las mejores prácticas en el marco SCRUM.",
    idiomas: "Idiomas",
    interest: "Intereses",
    music: "Música",
    workout: "Ejercicio",
    cofee: "Café",
    travel: "Viajar",
  },
};
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
  const langSelector = document.querySelector("#language-selector");
  if (window.location.hash == "#es") {
    langSelector.value = "es";
    document.querySelectorAll("#translate").forEach((item) => {
      item.textContent = language.es[item.lang];
    });
  } else {
    langSelector.value = "en";
  }
}
