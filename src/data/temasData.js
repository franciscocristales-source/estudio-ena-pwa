export default [
  {
    id: 1,
    titulo: "Matemáticas Básicas y Álgebra para Agronomía",
    descripcion: "Ecuaciones de primer y segundo grado aplicadas al cálculo de áreas, volúmenes y proporciones de fertilizantes.",
    contenidoTeorico: "El álgebra en la agronomía es fundamental para resolver problemas de dosificación, conversión de unidades y diseño de parcelas agrícolas. Las proporciones y reglas de tres permiten calcular la cantidad exacta de insumos por hectárea.",
    ejemplos: [
      "Si se requiere aplicar 150 kg de nitrógeno por hectárea y el fertilizante contiene 46% de N, ¿cuántos kg de fertilizante se necesitan por hectárea? Respuesta: 150 / 0.46 = 326.08 kg.",
      "Cálculo de área rectangular: Largo = 200 m, Ancho = 20 m. Área = 200 * 20 = 4000 m² (0.4 hectáreas)."
    ],
    preguntas: [
      {
        pregunta: "¿Cuántos metros cuadrados equivalen a una hectárea?",
        opciones: ["1,000 m²", "5,000 m²", "10,000 m²", "100,000 m²"],
        respuestaCorrecta: 2
      },
      {
        pregunta: "Si una parcela tiene forma rectangular con 50 metros de frente y 200 metros de fondo, ¿cuál es su área total?",
        opciones: ["10,000 m²", "5,000 m²", "25,000 m²", "40,000 m²"],
        respuestaCorrecta: 0
      }
    ]
  },
  {
    id: 2,
    titulo: "Biología y Botánica General",
    descripcion: "Estructura celular vegetal, fotosíntesis, anatomía de la raíz, tallo y hoja, y fisiología de cultivos.",
    contenidoTeorico: "La botánica estudia los tejidos vegetales, el transporte de agua y nutrientes a través del xilema y floema, y el proceso de fotosíntesis donde la planta convierte energía lumínica en compuestos orgánicos.",
    ejemplos: [
      "El xilema transporta agua y sales minerales desde la raíz hacia las hojas.",
      "El floema transporta los productos de la fotosíntesis (azúcares) hacia toda la planta."
    ],
    preguntas: [
      {
        pregunta: "¿Qué tejido vegetal es el encargado principal de transportar el agua y los minerales desde la raíz?",
        opciones: ["Floema", "Xilema", "Parénquima", "Colénquima"],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿En qué orgánulo celular vegetal se lleva a cabo principalmente el proceso de la fotosíntesis?",
        opciones: ["Mitocondria", "Ribosoma", "Cloroplasto", "Núcleo"],
        respuestaCorrecta: 2
      }
    ]
  },
  {
    id: 3,
    titulo: "Química Agrícola y Suelos",
    descripcion: "Propiedades físicas y químicas del suelo, pH, macronutrientes esenciales (N, P, K) y fertilidad.",
    contenidoTeorico: "El suelo es un sistema complejo compuesto por minerales, materia orgánica, agua y aire. El pH del suelo determina la disponibilidad de nutrientes para los cultivos; un rango óptimo para la mayor parte de plantas está entre 6.0 y 7.0.",
    ejemplos: [
      "Nitrógeno (N): Estimula el crecimiento vegetativo y el desarrollo de hojas.",
      "Fósforo (P): Esencial para el desarrollo radicular y la floración.",
      "Potasio (K): Mejora la resistencia a enfermedades y calidad del fruto."
    ],
    preguntas: [
      {
        pregunta: "¿Cuál de los siguientes elementos es considerado un macronutriente primario indispensable para las plantas?",
        opciones: ["Hierro (Fe)", "Nitrógeno (N)", "Zinc (Zn)", "Boro (B)"],
        respuestaCorrecta: 1
      },
      {
        pregunta: "¿Qué rango de pH en el suelo se considera generalmente óptimo para la mayor disponibilidad de nutrientes?",
        opciones: ["3.0 a 4.5", "6.0 a 7.0", "8.5 a 10.0", "2.0 a 3.5"],
        respuestaCorrecta: 1
      }
    ]
  }
];