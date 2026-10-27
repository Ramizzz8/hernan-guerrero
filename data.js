/* ==========================================================
   DATOS DEL PORTAFOLIO
   Todo el contenido editable vive aquí. Lo usan index.html
   (script.js) y la plantilla de CV imprimible (cv.html).
   ========================================================== */

const PERFIL = {
  nombre: "Hernán Guerrero Aguilera",
  titular: "Profesional polivalente en hostelería, logística y bienestar",
  subtitulo:
    "Experiencia internacional en Colombia, Países Bajos y España. Responsable, puntual y orientado al trabajo en equipo.",
  ciudad: "Valencia, España",
  telefono: "612249774",
  telefonoVisible: "612 249 774",
  email: "hernanguerrero1968@gmail.com",
  whatsapp: "https://wa.me/34612249774",
  disponibilidad: "Incorporación inmediata · Abierto a traslado",
};

const SECTORES = [
  {
    id: "hosteleria",
    nombre: "Hostelería y Housekeeping",
    corto: "Hostelería",
    resumen: "Camarero de piso en hotel internacional y camarero de barra, terraza y sala.",
    roles: [
      {
        id: "piso",
        destacados: [
          { valor: "14 meses", texto: "Housekeeping en hotel de Ámsterdam" },
          { valor: "3 países", texto: "Colombia, Países Bajos y España" },
          { valor: "Inmediata", texto: "Disponibilidad de incorporación" },
        ],
        titulo: "Camarero de Piso · Housekeeping",
        perfil:
          "Profesional de housekeeping con experiencia internacional en hotelería, especializado en limpieza, puesta a punto y mantenimiento de habitaciones y zonas comunes. Trabaja con altos estándares de calidad, higiene y presentación. Responsable, organizado, discreto y orientado a la satisfacción del huésped.",
        experiencia: [
          {
            puesto: "Camarero de Piso / Housekeeping",
            empresa: "Hotel Huygens Place",
            lugar: "Ámsterdam, Países Bajos",
            periodo: "14 meses · hasta dic. 2024",
            nota: "A través de WUAMANGA",
            tareas: [
              "Limpieza, acondicionamiento y puesta a punto de habitaciones.",
              "Cambio y reposición de ropa de cama, toallas y amenities.",
              "Limpieza profunda y desinfección de baños y superficies.",
              "Revisión de habitaciones y comunicación de incidencias.",
              "Organización del carro de trabajo y control de productos.",
              "Limpieza y mantenimiento de zonas comunes.",
              "Respeto de la privacidad del huésped y de los procedimientos de seguridad.",
            ],
          },
        ],
        competencias: [
          "Housekeeping",
          "Limpieza profunda y desinfección",
          "Presentación de habitaciones",
          "Lencería y amenities",
          "Control de calidad",
          "Gestión del tiempo",
          "Protocolos de higiene y seguridad",
          "Discreción con el huésped",
        ],
      },
      {
        id: "barra",
        destacados: [
          { valor: "12 meses", texto: "En barra, terraza y sala en Sevilla" },
          { valor: "TPV", texto: "Comandas, cobros y caja" },
          { valor: "Inmediata", texto: "Disponibilidad de incorporación" },
        ],
        titulo: "Camarero de Barra, Terraza y Sala",
        perfil:
          "Camarero orientado a un servicio ágil, profesional y de calidad. Experiencia en preparación de cafés y bebidas, toma de comandas, TPV y cobros, organización de barra, reposición, apertura y cierre del establecimiento.",
        experiencia: [
          {
            puesto: "Camarero de barra",
            empresa: "Bar Restaurante M. Morales",
            lugar: "Sevilla",
            periodo: "9 meses",
            tareas: [
              "Atención y servicio en barra; cafés, bebidas, combinados y tapas.",
              "Toma de comandas, manejo de TPV y cobros.",
              "Coordinación con cocina y apoyo en momentos de alto volumen.",
              "Preparación de la barra y reposición de bebidas, productos y cámaras.",
              "Apertura y cierre del establecimiento.",
              "Limpieza de cafetera, vajilla, cristalería, utensilios y lavavajillas.",
            ],
          },
          {
            puesto: "Camarero de barra, terraza y salón",
            empresa: "Bodeguita El Botellín",
            lugar: "San Jerónimo y Torre de la Reina",
            periodo: "3 meses",
            tareas: [
              "Servicio de barra, terraza y salón; toma de comandas.",
              "Montaje y recogida de mesas; atención y orientación al cliente.",
              "Manejo de cobros y reposición de productos.",
              "Apoyo en apertura, cierre y preparación del siguiente servicio.",
            ],
          },
        ],
        competencias: [
          "Atención al cliente",
          "Barra, terraza y salón",
          "TPV y cobros",
          "Cafés y bebidas",
          "Comandas",
          "Coordinación con cocina",
          "Trabajo bajo presión",
          "Limpieza e higiene",
        ],
      },
    ],
  },
  {
    id: "logistica",
    nombre: "Logística y Almacén",
    corto: "Logística",
    resumen: "Operario de bodega, carretillero, centro de distribución y reposición de supermercado.",
    roles: [
      {
        id: "logistica",
        destacados: [
          { valor: "≈ 6 años", texto: "En distribución y reposición" },
          { valor: "Carretilla", texto: "Manejo de carretilla elevadora" },
          { valor: "Inmediata", texto: "Disponibilidad de incorporación" },
        ],
        titulo: "Operario de Bodega · Carretillero · Reponedor",
        perfil:
          "Profesional con experiencia en logística, distribución y operaciones de supermercado: preparación de pedidos, embalaje, expedición, reposición y manejo de carretilla elevadora. Orientado a la seguridad, el orden y la productividad, acostumbrado a trabajar en equipo y con ritmo.",
        experiencia: [
          {
            puesto: "Reponedor de Supermercado",
            empresa: "Albert Heijn",
            lugar: "Ámsterdam, Países Bajos",
            periodo: "01/2022 – 08/2024",
            tareas: [
              "Reposición y colocación de productos en lácteos, bebidas y snacks.",
              "Recepción, traslado y ubicación de mercancía desde almacén hasta los lineales.",
              "Control visual de existencias y detección de necesidades de reposición.",
              "Rotación de producto, comprobación de fechas y retirada de caducados.",
              "Mantenimiento de lineales, cámaras y zonas de trabajo limpias y ordenadas.",
            ],
          },
          {
            puesto: "Operario de Centro de Distribución",
            empresa: "Grupo Éxito · CDI",
            lugar: "Colombia",
            periodo: "08/2009 – 12/2012",
            tareas: [
              "Preparación y organización de pedidos para distintos almacenes.",
              "Selección, clasificación, acondicionamiento y embalaje de mercancía.",
              "Verificación de cantidades, referencias y estado antes de la salida.",
              "Apoyo en la carga y organización de expediciones.",
            ],
          },
          {
            puesto: "Carretillero",
            empresa: "Operaciones de almacén",
            lugar: "",
            periodo: "",
            tareas: [
              "Carga, descarga, traslado y ubicación de mercancía con carretilla elevadora.",
              "Cumplimiento de procedimientos de seguridad y prevención de riesgos.",
              "Organización del almacén y apoyo a la preparación y expedición de pedidos.",
            ],
          },
        ],
        competencias: [
          "Carretilla elevadora",
          "Preparación de pedidos",
          "Carga y descarga",
          "Embalaje y expedición",
          "Organización de almacén",
          "Reposición y rotación",
          "Prevención de riesgos",
          "Ritmo y productividad",
        ],
      },
    ],
  },
  {
    id: "bienestar",
    nombre: "Masaje y Bienestar",
    corto: "Bienestar",
    resumen: "Masajista y quiromasajista con unos 7 años de experiencia y formación certificada.",
    roles: [
      {
        id: "masaje",
        destacados: [
          { valor: "≈ 7 años", texto: "En masaje y terapias manuales" },
          { valor: "6", texto: "Formaciones certificadas" },
          { valor: "3 países", texto: "Colombia, Países Bajos y España" },
        ],
        titulo: "Masajista Profesional · Quiromasajista",
        perfil:
          "Unos 7 años de experiencia en Colombia, Países Bajos y España. Especializado en masaje relajante, deportivo y descontracturante, drenaje linfático, maderoterapia y técnicas faciales Kobido. Atención personalizada en entornos profesionales de bienestar y SPA.",
        experiencia: [
          {
            puesto: "Masajista / Quiromasajista autónomo",
            empresa: "Actividad propia",
            lugar: "Sevilla",
            periodo: "2023 – actualidad",
            tareas: [
              "Valoración de cada cliente y adaptación personalizada de los tratamientos.",
              "Masaje relajante, deportivo y descontracturante.",
              "Drenaje linfático, maderoterapia y técnicas faciales.",
              "Atención a deportistas, personas mayores y particulares.",
              "Preparación, higiene y mantenimiento del espacio y del material.",
            ],
          },
          {
            puesto: "Masajista en SPA",
            empresa: "Entorno SPA y bienestar",
            lugar: "Ámsterdam, Países Bajos",
            periodo: "≈ 1,5 años",
            tareas: [
              "Masaje orientado a la relajación, el bienestar y la recuperación muscular.",
              "Cumplimiento de estándares de higiene, presentación y calidad.",
              "Adaptación de los tratamientos a las preferencias de cada cliente.",
            ],
          },
          {
            puesto: "Quiromasajista y terapias manuales",
            empresa: "Ejercicio profesional",
            lugar: "Colombia",
            periodo: "≈ 7 años",
            tareas: [
              "Masaje terapéutico, relajante, deportivo y descontracturante.",
              "Atención individualizada basada en la confianza y el trato personal.",
            ],
          },
        ],
        formacion: [
          { titulo: "Quiromasaje Básico", centro: "Escuela de Quiromasajes Bambú, Sevilla", horas: "50 h teóricas + 40 h prácticas" },
          { titulo: "Quiromasaje Deportivo", centro: "Escuela de Quiromasajes Bambú, Sevilla", horas: "40 h teóricas + 30 h prácticas" },
          { titulo: "Maderoterapia", centro: "Escuela Técnica de Quiromasajes Bambú, Sevilla", horas: "8 h teóricas + 2 h prácticas" },
          { titulo: "Lifting Facial Kobido", centro: "Escuela Técnica de Quiromasajes Bambú, Sevilla", horas: "16 h teórico-prácticas" },
          { titulo: "Quiromasajista profesional y masajes relajantes", centro: "Manbu Quiro School, Sevilla", horas: "" },
          { titulo: "Masaje deportivo y técnicas ancestrales", centro: "Manbu Quiro School, Sevilla", horas: "" },
        ],
        competencias: [
          "Masaje relajante",
          "Masaje deportivo",
          "Descontracturante",
          "Quiromasaje",
          "Drenaje linfático",
          "Maderoterapia",
          "Kobido facial",
          "Atención personalizada",
        ],
      },
    ],
  },
];

const FORTALEZAS = [
  { titulo: "Responsable y puntual", texto: "Cumple horarios, turnos y compromisos sin necesidad de supervisión." },
  { titulo: "Atención al detalle", texto: "Cuida la presentación, el orden y la calidad del resultado final." },
  { titulo: "Trabajo en equipo", texto: "Se coordina con compañeros, cocina, housekeeping o almacén." },
  { titulo: "Rapidez con calidad", texto: "Mantiene el ritmo en momentos de alta demanda sin descuidar el trabajo." },
  { titulo: "Trabajo bajo presión", texto: "Acostumbrado a picos de servicio y plazos de preparación ajustados." },
  { titulo: "Adaptabilidad", texto: "Ha trabajado en tres sectores y tres países distintos." },
  { titulo: "Experiencia internacional", texto: "Colombia, Países Bajos y España." },
  { titulo: "Discreción y trato", texto: "Respeto por la privacidad del cliente y del huésped." },
];

/* Un PDF por perfil profesional, generado a partir de cv.html */
const CVS = [
  { id: "piso", titulo: "Camarero de Piso · Housekeeping", sector: "Hostelería", archivo: "cv/cv-camarero-de-piso.pdf" },
  { id: "barra", titulo: "Camarero de Barra, Terraza y Sala", sector: "Hostelería", archivo: "cv/cv-camarero-de-barra.pdf" },
  { id: "logistica", titulo: "Operario de Bodega · Carretillero", sector: "Logística", archivo: "cv/cv-logistica-carretillero.pdf" },
  { id: "masaje", titulo: "Masajista · Quiromasajista", sector: "Bienestar", archivo: "cv/cv-masajista.pdf" },
];
