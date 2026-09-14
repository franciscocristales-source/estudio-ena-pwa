export default [
  {
    id: 1,
    titulo: "Matemáticas Aplicadas y Dosificación",
    descripcion: "Cálculo de áreas, volúmenes de riego, conversiones de unidades y dosificación de fertilizantes por hectárea.",
    contenidoTeorico: "En agronomía, el cálculo preciso de insumos previene pérdidas económicas y daños ambientales. Las proporciones y reglas de tres directas son esenciales para determinar concentraciones de nutrientes y volúmenes de agua en campo.",
    ejemplos: [
      "Dosificación: Si se recomiendan 120 kg/ha de Nitrógeno y la urea tiene 46% de N, la cantidad de fertilizante es 120 / 0.46 = 260.86 kg por hectárea.",
      "Riego: 1 hectárea = 10,000 m². Una lámina de riego de 50 mm (0.05 m) equivale a un volumen de 500 m³ de agua."
    ],
    preguntas: [
      {
        pregunta: "¿Cuántos litros de agua equivalen a un metro cúbico (m³)?",
        opciones: ["10 litros", "100 litros", "1,000 litros", "10,000 litros"],
        respuestaCorrecta: 2
      },
      {
        pregunta: "Si una parcela cuadrada mide 100 metros por lado, ¿cuál es su superficie exacta en hectáreas?",
        opciones: ["0.1 hectáreas", "1 hectárea", "10 hectáreas", "100 hectáreas"],
        respuestaCorrecta: 1
      }
    ]
  },
  {
    id: 2,
    titulo: "Botánica y Fisiología Vegetal",
    descripcion: "Anatomía de órganos vegetales, fotosíntesis, respiración, transpiración y sistemas de transporte (xilema y floema).",
    contenidoTeorico: "La fisiología vegetal estudia cómo funcionan las plantas. El xilema conduce agua y minerales en bruto desde la raíz hasta el follaje impulsado por la transpiración foliar, mientras que el floema distribuye los fotoasimilados (savia elaborada).",
    ejemplos: [
      "La fotosíntesis ocurre principalmente en el mesófilo de la hoja, transformando $CO_2$ y agua en glucosa mediante energía lumínica.",
      "Los estomas regulan el intercambio gaseoso y la pérdida de agua de la planta."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál es la principal función del tejido conductor llamado xilema?",
        opciones: [
          "Transportar azúcares y aminoácidos elaborados",
          "Transportar agua y sales minerales desde la raíz",
          "Almacenar almidón en reservas subterráneas",
          "Proteger el tallo contra la radiación solar"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿A través de qué estructuras ocurre principalmente la transpiración y el intercambio gaseoso en las hojas?",
        opciones: ["Lenticelas", "Estomas", "Tricomas", "Cutícula"],
        respuestaCorrecta: 1
      }
    ]
  },
  {
    id: 3,
    titulo: "Edafología y Química de Suelos",
    descripcion: "Propiedades físicas y químicas del suelo, textura, estructura, CIC, pH y disponibilidad de nutrientes (N, P, K).",
    cmteorico: "El suelo es un medio vivo. El pH del suelo regula de forma directa la disponibilidad de macro y micronutrientes. Un pH extremadamente ácido (< 5.5) fija el fósforo y genera toxicidad por aluminio.",
    contenidoTeorico: "El suelo está compuesto por fases sólida, líquida y gaseosa. Los macronutrientes primarios indispensables son el Nitrógeno (crecimiento vegetativo), Fósforo (raíces y energía) y Potasio (regulación osmótica y calidad).",
    ejemplos: [
      "El triángulo textural permite clasificar los suelos según sus porcentajes de arena, limo y arcilla.",
      "La Capacidad de Intercambio Catiónico (CIC) mide la habilidad del suelo para retener nutrientes cargados positivamente."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál de los siguientes elementos es considerado un macronutriente primario para la nutrición vegetal?",
        opciones: ["Calcio (Ca)", "Fósforo (P)", "Hierro (Fe)", "Boro (B)"],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué rango de pH en el suelo se considera generalmente óptimo para la mayor disponibilidad general de nutrientes?",
        opciones: ["4.0 a 5.0", "6.0 a 7.0", "8.5 a 9.5", "3.0 a 4.0"],
        respuestaCorrecta: 1
      }
    ]
  },
  {
    id: 4,
    titulo: "Fitoprotección y Manejo de Plagas",
    descripcion: "Identificación de insectos plaga, enfermedades fúngicas, arvenses (malezas) y principios de Manejo Integrado de Plagas (MIP).",
    contenidoTeorico: "El Manejo Integrado de Plagas (MIP) combina métodos culturales, biológicos, físicos y químicos para mantener las poblaciones de plagas por debajo del umbral de daño económico, reduciendo el impacto ambiental.",
    ejemplos: [
      "Control biológico: Uso de insectos benéficos como *Trichogramma* o *Ladybugs* para controlar lepidópteros y áfidos.",
      "Rotación de cultivos: Rompe el ciclo biológico de patógenos específicos del suelo."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál es el objetivo principal del Manejo Integrado de Plagas (MIP)?",
        opciones: [
          "Eliminar el 100% de los insectos del ecosistema agrícola",
          "Mantener las plagas por debajo del umbral económico usando múltiples métodos",
          "Depender exclusivamente de plaguicidas sistémicos de alta potencia",
          "Evitar por completo el uso de semillas certificadas"
        ],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué tipo de organismo causa principalmente enfermedades como la cenicilla o el tizón tardío?",
        opciones: ["Bacterias patógenas", "Hongos fitopatógenos", "Nematodos gailógenos", "Ácaros fitófagos"],
        respuestaCorrecta: 1
      }
    ]
  }
];