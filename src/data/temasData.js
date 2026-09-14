// src/data/temasData.js

export const temasData = [
  // ==========================================
  // MÓDULO 1: HOJAS DE CÁLCULO Y EXCEL PRÁCTICO
  // ==========================================
  {
    id: "excel-operaciones-basicas",
    modulo: "Hojas de Cálculo y Excel",
    titulo: "Operaciones Básicas y Referencias de Celdas",
    descripcion: "Dominio de la sintaxis fundamental para suma, resta, multiplicación, división y referencias absolutas ($A$1).",
    dificultad: "Principiante",
    duracionEstimada: "25 min",
    teoria: {
      introduccion: "En Excel y Google Sheets, todas las fórmulas deben comenzar con el signo de igual (`=`). Las operaciones aritméticas se procesan siguiendo la jerarquía estándar: paréntesis `()`, exponenciación `^`, multiplicación `*` y división `/`, y finalmente suma `+` y resta `-`.",
      conceptosClave: [
        {
          concepto: "Jerarquía de Operaciones",
          detalle: "En `=A1 + B1 * C1`, primero se multiplica `B1*C1` y luego se suma `A1`. Para alterar este orden, usa paréntesis: `=(A1 + B1) * C1`."
        },
        {
          concepto: "Referencias Relativas vs. Absolutas",
          detalle: "Una referencia relativa (ej. `A1`) cambia al arrastrar la fórmula. Una referencia absoluta (ej. `$A$1`) permanece fijada en la fila y columna exactas."
        }
      ],
      formulasClave: [
        { nombre: "Suma Directa", formula: "=SUMA(A1:A10)", uso: "Suma un rango contiguo de celdas." },
        { nombre: "Resta / Operaciones Combinadas", formula: "=A2 - B2", uso: "Resta de valores numéricos directos o referencias." },
        { nombre: "Multiplicación y División", formula: "=A2 * B2 / C2", uso: "Cálculos de importes y coeficientes." }
      ]
    },
    ejemplos: [
      {
        titulo: "Cálculo de Importes con Precio e Impuesto",
        enunciado: "Se tiene la Cantidad en A2 (5 unidades), Precio Unitario en B2 ($12.50) y Tasa IVA en $F$1 (16%). Calcula el Total.",
        pasos: [
          "Paso 1: Multiplicar Cantidad por Precio Unitario: `=A2 * B2` (Subtotal = 62.50).",
          "Paso 2: Aplicar el IVA fijando la celda con referencia absoluta: `=A2 * B2 * (1 + $F$1)`.",
          "Resultado final: `$72.50`"
        ]
      }
    ],
    ejercicios: [
      {
        id: "ex-op-1",
        pregunta: "Si en la celda A1 tienes el valor 2350, en B1 tienes 143 y en C1 tienes 963, ¿cuál es el resultado de la fórmula `=A1 - (B1 + C1)`?",
        opciones: ["1244", "2107", "1430", "3456"],
        respuestaCorrecta: 0,
        pista: "Primero realiza la suma dentro del paréntesis (143 + 963) y réstasela a 2350.",
        explicacion: "B1 + C1 = 143 + 963 = 1106. Luego 2350 - 1106 = 1244."
      },
      {
        id: "ex-op-2",
        pregunta: "¿Qué tipo de referencia debes usar para evitar que la celda de la tasa de descuento cambie al copiar la fórmula hacia abajo?",
        opciones: ["Referencia Mixta (A$1)", "Referencia Relativa (A1)", "Referencia Absoluta ($A$1)", "Nombre de Rango Sin Signos"],
        respuestaCorrecta: 2,
        pista: "Requiere fijar tanto la columna como la fila con el símbolo del dólar.",
        explicacion: "El símbolo '$' antes de la letra y del número ($A$1) inmoviliza por completo la celda."
      }
    ],
    examen: [
      {
        id: "q-excel-op-1",
        pregunta: "En una hoja de cálculo, se requiere calcular el total de ventas diarias sumando el Pago en Contado (Columna B) y Pago con Tarjeta (Columna C). ¿Qué fórmula es la más óptima para la fila 6?",
        opciones: ["=B6 + C6", "=SUMA(B6, C6)", "=PAGO(B6:C6)", "Las opciones A y B son válidas"],
        respuestaCorrecta: 3,
        explicacion: "Tanto el operador de suma `+` como la función `=SUMA()` ofrecen el resultado exacto."
      },
      {
        id: "q-excel-op-2",
        pregunta: "Si divides 49 entre 9 en Excel usando `=ROUND(49/9, 2)` u `=ENTERO(49/9)`, ¿cuál es la parte entera?",
        opciones: ["5", "6", "5.44", "5.45"],
        respuestaCorrecta: 0,
        explicacion: "49 / 9 = 5.4444... La parte entera es 5."
      }
    ]
  },
  {
    id: "excel-densidad-crecimiento",
    modulo: "Hojas de Cálculo y Excel",
    titulo: "Cálculo de Densidades y Tasas de Crecimiento Natural",
    descripcion: "Aplicación de fórmulas estadísticas y demográficas: Densidad de Población y Tasa de Crecimiento Natural.",
    dificultad: "Intermedio",
    duracionEstimada: "30 min",
    teoria: {
      introduccion: "Las hojas de cálculo son la herramienta estándar para procesar indicadores demográficos y territoriales masivos. En este tema se estudian las fórmulas empleadas en análisis geográficos y financieros.",
      conceptosClave: [
        {
          concepto: "Densidad Poblacional",
          detalle: "Mide el número medio de habitantes por unidad de superficie. Fórmula: `Densidad = Habitantes / Superficie(km²)`."
        },
        {
          concepto: "Tasa de Crecimiento Natural (TCN)",
          detalle: "Representa el balance entre nacimientos y defunciones en un periodo. Fórmula: `TCN = Tasa de Nacimiento - Tasa de Mortalidad`."
        }
      ],
      formulasClave: [
        { nombre: "Densidad de Población", formula: "= B5 / C5", uso: "Donde B5 = Habitantes y C5 = Superficie km²." },
        { nombre: "Crecimiento Natural", formula: "= B5 - B6", uso: "Donde B5 = Tasa Nacimiento y B6 = Tasa Mortalidad." }
      ]
    },
    ejemplos: [
      {
        titulo: "Cálculo de Densidad de la Ciudad de Monterrey",
        enunciado: "Población: 3,740,000 habitantes. Superficie: 380.64 km². Calcula la densidad hab/km².",
        pasos: [
          "Fórmula en Excel: `= 3740000 / 380.64`",
          "Resultado obtenido: `9,825.55` hab/km² (Aproximado a `9,826`)."
        ]
      }
    ],
    ejercicios: [
      {
        id: "ex-dens-1",
        pregunta: "Si una provincia tiene 1,821,517 habitantes y una superficie de 154 km², ¿cuál es su densidad aproximada hab/km²?",
        opciones: ["11,828 hab/km²", "8,450 hab/km²", "14,200 hab/km²", "9,850 hab/km²"],
        respuestaCorrecta: 0,
        pista: "Divide el número total de habitantes entre los km² de superficie.",
        explicacion: "1,821,517 / 154 = 11,828.03 hab/km²."
      },
      {
        id: "ex-dens-2",
        pregunta: "En 2011, la Tasa de Nacimiento fue de 17.49 y la Tasa de Mortalidad fue de 5.26. ¿Cuál fue la Tasa de Crecimiento Natural?",
        opciones: ["12.23", "22.75", "3.32", "11.85"],
        respuestaCorrecta: 0,
        pista: "Resta la tasa de mortalidad a la tasa de nacimiento.",
        explicacion: "17.49 - 5.26 = 12.23."
      }
    ],
    examen: [
      {
        id: "q-excel-dens-1",
        pregunta: "Una región presenta 800,000 habitantes y 702 km² de superficie. ¿Qué densidad hab/km² le corresponde?",
        opciones: ["1,140 hab/km²", "1,280 hab/km²", "950 hab/km²", "1,500 hab/km²"],
        respuestaCorrecta: 0,
        explicacion: "800,000 / 702 = 1,139.60, redondeado a 1,140."
      }
    ]
  },

  // ==========================================
  // MÓDULO 2: ÁLGEBRA Y ECUACIONES
  // ==========================================
  {
    id: "algebra-ecuaciones-lineales",
    modulo: "Álgebra y Operaciones",
    titulo: "Ecuaciones Lineales y Sistemas de Ecuaciones",
    descripcion: "Resolución sistemática de ecuaciones de primer grado y métodos de solución para sistemas 2x2.",
    dificultad: "Principiante",
    duracionEstimada: "35 min",
    teoria: {
      introduccion: "Una ecuación lineal es una igualdad algebraica donde la variable tiene exponente 1. El objetivo es despejar la incógnita aplicando operaciones inversas en ambos miembros de la ecuación.",
      conceptosClave: [
        {
          concepto: "Propiedad de Uniformidad",
          detalle: "Si sumas, restas, multiplicas o divides el mismo valor en ambos lados de la igualdad, la solución no varía."
        },
        {
          concepto: "Sistemas de Ecuaciones 2x2",
          detalle: "Conjunto de dos ecuaciones con dos incógnitas. Métodos principales: Sustitución, Reducción (Eliminación) e Igualación."
        }
      ],
      formulasClave: [
        { nombre: "Forma General Lineal", formula: "ax + b = 0", uso: "Solución general: x = -b / a (con a ≠ 0)." },
        { nombre: "Método de Reducción", formula: "a1x + b1y = c1;  a2x + b2y = c2", uso: "Se multiplican las ecuaciones para eliminar una variable al sumar." }
      ]
    },
    ejemplos: [
      {
        titulo: "Resolución de Sistema 2x2 por Reducción",
        enunciado: "Resolver: 1) 2x + 3y = 13 | 2) x - y = 4",
        pasos: [
          "Paso 1: Multiplicar la segunda ecuación por 3: 3x - 3y = 12.",
          "Paso 2: Sumar con la primera ecuación: (2x + 3x) + (3y - 3y) = 13 + 12 => 5x = 25 => x = 5.",
          "Paso 3: Sustituir x = 5 en la segunda ecuación: 5 - y = 4 => y = 1.",
          "Solución final: x = 5, y = 1."
        ]
      }
    ],
    ejercicios: [
      {
        id: "ex-alg-1",
        pregunta: "Resuelve para x: 4x - 7 = 2x + 9",
        opciones: ["x = 8", "x = 4", "x = 2", "x = 16"],
        respuestaCorrecta: 0,
        pista: "Agrupa los términos con 'x' a la izquierda y los números a la derecha.",
        explicacion: "4x - 2x = 9 + 7 => 2x = 16 => x = 8."
      },
      {
        id: "ex-alg-2",
        pregunta: "En el sistema: x + y = 10 y x - y = 4, ¿cuál es el valor de x?",
        opciones: ["x = 7", "x = 3", "x = 6", "x = 8"],
        respuestaCorrecta: 0,
        pista: "Suma ambas ecuaciones para eliminar la variable y.",
        explicacion: "(x + y) + (x - y) = 10 + 4 => 2x = 14 => x = 7."
      }
    ],
    examen: [
      {
        id: "q-alg-1",
        pregunta: "Determina el valor de x que satisface: 3(x - 2) + 5 = 20",
        opciones: ["x = 7", "x = 5", "x = 9", "x = 3"],
        respuestaCorrecta: 0,
        explicacion: "3x - 6 + 5 = 20 => 3x - 1 = 20 => 3x = 21 => x = 7."
      }
    ]
  },

  // ==========================================
  // MÓDULO 3: ESTADÍSTICA Y PROBABILIDAD
  // ==========================================
  {
    id: "estadistica-descriptiva",
    modulo: "Estadística y Probabilidad",
    titulo: "Medidas de Tendencia Central y Dispersión",
    descripcion: "Análisis cualitativo y cuantitativo de datos: Media, Mediana, Moda, Varianza y Desviación Estándar.",
    dificultad: "Intermedio",
    duracionEstimada: "40 min",
    teoria: {
      introduccion: "La estadística descriptiva permite resumir conjuntos de datos mediante indicadores numéricos que representan el centro y la dispersión de las observaciones.",
      conceptosClave: [
        {
          concepto: "Media Aritmética (Promedio)",
          detalle: "Suma de todos los valores dividida entre el número total de datos."
        },
        {
          concepto: "Mediana",
          detalle: "Valor central cuando los datos están ordenados de menor a mayor. Si N es par, es el promedio de los dos datos centrales."
        },
        {
          concepto: "Desviación Estándar",
          detalle: "Indica cuánto se alejan los datos en promedio con respecto a la media aritmética."
        }
      ],
      formulasClave: [
        { nombre: "Media Aritmética", formula: "x̄ = (∑ xi) / n", uso: "Cálculo del promedio numérico." },
        { nombre: "Varianza Muestral", formula: "s² = ∑ (xi - x̄)² / (n - 1)", uso: "Medición del grado de dispersión al cuadrado." }
      ]
    },
    ejemplos: [
      {
        titulo: "Cálculo de Media y Mediana",
        enunciado: "Conjunto de datos: [4, 8, 3, 7, 8, 10, 2]",
        pasos: [
          "Paso 1: Ordenar los datos: [2, 3, 4, 7, 8, 8, 10] (n = 7).",
          "Paso 2: Calcular la Media: (2+3+4+7+8+8+10)/7 = 42/7 = 6.",
          "Paso 3: Calcular la Mediana: El elemento central (posición 4) es 7.",
          "Paso 4: La Moda es 8 (se repite dos veces)."
        ]
      }
    ],
    ejercicios: [
      {
        id: "ex-est-1",
        pregunta: "En la lista de calificaciones [85, 90, 75, 95, 100], ¿cuál es la Media aritmética?",
        opciones: ["89", "90", "88", "92"],
        respuestaCorrecta: 0,
        pista: "Suma los 5 valores y divide entre 5.",
        explicacion: "(85 + 90 + 75 + 95 + 100) / 5 = 445 / 5 = 89."
      }
    ],
    examen: [
      {
        id: "q-est-1",
        pregunta: "Si la varianza de una muestra es 16, ¿cuál es la desviación estándar?",
        opciones: ["4", "8", "256", "2"],
        respuestaCorrecta: 0,
        explicacion: "La desviación estándar es la raíz cuadrada positiva de la varianza: √16 = 4."
      }
    ]
  }
];