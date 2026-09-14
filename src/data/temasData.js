export default [
  {
    id: 1,
    titulo: "Matemáticas Aplicadas y Dosificación Agronómica",
    descripcion: "Cálculo preciso de áreas, volúmenes de riego por goteo/aspersión, conversiones de unidades y dosificación estequiométrica de fertilizantes.",
    ilustracionIcono: "📐",
    contenidoTeorico: "En agronomía, el cálculo exacto de insumos previene sobredosis tóxicas y déficits nutricionales. Las proporciones directas y reglas de tres permiten transformar concentraciones comerciales de fertilizantes (como Urea al 46% de N) a kilogramos reales por hectárea (ha).",
    ejemplos: [
      "Fórmula de Dosificación: $\text{Kg de Fertilizante} = \frac{\text{Dosis requerida de nutriente}}{\text{% de concentración del nutriente}}$",
      "Ejemplo práctico: Si se recomiendan 150 kg/ha de Nitrógeno y disponemos de Urea (46% N): $150 / 0.46 = 326.08 \text{ kg de urea/ha}$.",
      "Cálculo de Volumen de Riego: Para una lámina de 40 mm en 1 hectárea ($10,000 \text{ m}^2$), el volumen es $10,000 \times 0.04 = 400 \text{ m}^3$ ($400,000 \text{ litros}$).",
      "Conversión de pendientes: Una pendiente del 5% significa un desnivel vertical de 5 metros por cada 100 metros horizontales."
    ],
    preguntas: [
      {
        pregunta: "Si un cultivo requiere 120 kg/ha de Nitrógeno y se utiliza Nitrato de Amonio (33% N), ¿cuántos kg de fertilizante comercial se deben aplicar por hectárea?",
        opciones: [
          "363.63 kg/ha",
          "396.00 kg/ha",
          "300.50 kg/ha",
          "412.10 kg/ha"
        ],
        respuestaCorrecta: 0,
        explicacionesOpciones: [
          "¡Correcto! Se divide la dosis requerida entre la proporción decimal del nutriente: 120 / 0.33 = 363.63 kg.",
          "Error común: Multiplicaste en lugar de dividir o usaste un porcentaje incorrecto.",
          "Error común: Cálculo incompleto de la proporción decimal del fertilizante.",
          "Error común: Error aritmético en la división de concentraciones."
        ]
      },
      {
        pregunta: "¿Cuál es el volumen total de agua en litros correspondiente a una lámina de riego de 50 mm aplicada sobre un terreno de 2 hectáreas?",
        opciones: [
          "500,000 litros",
          "1,000,000 litros",
          "2,000,000 litros",
          "10,000,000 litros"
        ],
        respuestaCorrecta: 1,
        explicacionesOpciones: [
          "Error común: Calculaste para una sola hectárea o convertiste mal los milímetros.",
          "¡Excelente! 2 ha = 20,000 m². 50 mm = 0.05 m. Volumen = 20,000 * 0.05 = 1,000 m³. Como 1 m³ = 1,000 litros, el total es 1,000,000 litros.",
          "Error común: Duplicaste el cálculo del volumen base por error de unidades.",
          "Error común: Confusión grave en la conversión de metros cúbicos a litros."
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "Botánica y Fisiología Vegetal Avanzada",
    descripcion: "Anatomía de tejidos vasculares (xilema y floema), fotosíntesis (fases lumínica y oscura), transpiración y regulación estomática.",
    ilustracionIcono: "🌿",
    contenidoTeorico: "La fisiología vegetal rige la productividad de los cultivos. El xilema transporta agua y minerales brutos unidireccionalmente desde la raíz impulsado por la tensión-cohesión de la transpiración foliar. El floema transporta savia elaborada (azúcares y aminoácidos) bidireccionalmente desde las fuentes hacia los sumideros.",
    ejemplos: [
      "Fotosíntesis neta: $6CO_2 + 6H_2O + \text{Luz} \rightarrow C_6H_{12}O_6 + 6O_2$. Ocurre en cloroplastos.",
      "Regulación estomática: Los iones de potasio ($K^+$) y el ácido abscísico controlan la apertura y cierre de las células oclusivas para evitar el estrés hídrico.",
      "Fotoperiodismo: Plantas de día corto vs. día largo controlan su floración según la duración de la noche."
    ],
    preguntas: [
      {
        pregunta: "¿Qué tejido vascular es el responsable principal del transporte de agua y sales minerales disueltas desde el sistema radical hasta el follaje?",
        opciones: [
          "El floema con savia elaborada",
          "El xilema bajo tensión hídrica",
          "El parénquima cortical de reserva",
          "El colénquima de soporte mecánico"
        ],
        respuestaCorrecta: 1,
        explicacionesOpciones: [
          "Error común: Confundiste el transporte ascendente de agua (xilema) con el transporte de azúcares (floema).",
          "¡Perfecto! El xilema transporta agua y minerales brutos de forma ascendente gracias a la transpiración.",
          "Error común: El parénquima almacena sustancias pero no es el tejido conductor principal.",
          "Error común: El colénquima otorga soporte estructural flexible, no conducción vascular."
        ]
      },
      {
        pregunta: "¿Cuál es el subproducto gaseoso liberado a la atmósfera durante la fase dependiente de luz de la fotosíntesis?",
        opciones: [
          "Dióxido de carbono ($CO_2$)",
          "Oxígeno molecular ($O_2$)",
          "Nitrógeno atmosférico ($N_2$)",
          "Monóxido de carbono ($CO$)"
        ],
        respuestaCorrecta: 1,
        explicacionesOpciones: [
          "Error común: El dióxido de carbono es consumido en el ciclo de Calvin (fase oscura), no liberado.",
          "¡Correcto! La fotólisis del agua en los fotosistemas libera oxígeno molecular como subproducto.",
          "Error común: El nitrógeno atmosférico no participa directamente en la fotólisis fotosintética.",
          "Error común: El monóxido de carbono es un gas tóxico que no es producido por plantas sanas."
        ]
      }
    ]
  },
  {
    id: 3,
    titulo: "Edafología, Química de Suelos y Nutrición",
    descripcion: "Propiedades fisicoquímicas del suelo, triángulo textural, pH, Capacidad de Intercambio Catiónico (CIC) y macronutrientes N-P-K.",
    ilustracionIcono: "🧪",
    contenidoTeorico: "El suelo es un sistema coloidal vivo. El pH del suelo regula drásticamente la disponibilidad química de los nutrientes: valores menores a 5.5 provocan fijación de fósforo con aluminio/hierro y deficiencias severas. Los macronutrientes primarios son Nitrógeno (vegetativo), Fósforo (enraizamiento y energía ATP) y Potasio (regulación osmótica y llenado de frutos).",
    ejemplos: [
      "Textura del suelo: Proporciones porcentuales de arena, limo y arcilla determinadas por el triángulo textural USDA.",
      "CIC (Capacidad de Intercambio Catiónico): Mide la cantidad de cationes intercambiables ($Ca^{2+}, Mg^{2+}, K^+, Na^+, H^+$) que el suelo puede retener.",
      "Corrección de acidez: Aplicación de cal agrícola ($CaCO_3$) para elevar el pH y neutralizar aluminio intercambiable."
    ],
    preguntas: [
      {
        pregunta: "¿Qué función fisiológica principal cumple el Fósforo (P) en las plantas cultivadas?",
        opciones: [
          "Estimular únicamente el crecimiento de tallos y hojas verdes",
          "Favorecer el desarrollo radicular profundo, la transferencia de energía (ATP) y la floración",
          "Mejorar exclusivamente la apertura estomática y la resistencia a heladas",
          "Formar parte directa de la estructura de la clorofila"
        ],
        respuestaCorrecta: 1,
        explicacionesOpciones: [
          "Error común: Esa es la función característica del Nitrógeno (N), no del fósforo.",
          "¡Exacto! El fósforo es clave en el almacenamiento y transferencia de energía (ATP), desarrollo de raíces y reproducción.",
          "Error común: Esa es la función principal del Potasio (K).",
          "Error común: El elemento central de la molécula de clorofila es el Magnesio (Mg)."
        ]
      },
      {
        pregunta: "¿Qué consecuencia directa provoca un suelo excesivamente ácido con un pH menor a 5.0 en la disponibilidad de nutrientes?",
        opciones: [
          "Alta disponibilidad y toxicidad por aluminio y fijación de fósforo",
          "Aumento exponencial de la disponibilidad de calcio y magnesio libre",
          "Inactivación total de los microorganismos benéficos fijadores de carbono",
          "Neutralización automática de la salinidad del agua de riego"
        ],
        respuestaCorrecta: 0,
        explicacionesOpciones: [
          "¡Correcto! En suelos ácidos, el aluminio soluble se vuelve tóxico para las raíces y el fósforo reacciona formando fosfatos insolubles.",
          "Error común: Con pH ácido, el calcio y magnesio suelen lavarse (lixiviarse) con facilidad.",
          "Error común: Aunque afecta a algunos microbios, la consecuencia directa más grave es la toxicidad por aluminio y fijación de fósforo.",
          "Error común: La acidez del suelo no neutraliza por sí misma la salinidad."
        ]
      }
    ]
  },
  {
    id: 4,
    titulo: "Fitoprotección, Patología y Manejo Integrado (MIP)",
    descripcion: "Diagnóstico de plagas insectiles, enfermedades fúngicas/bacterianas, malezas y estrategias de Manejo Integrado de Plagas.",
    ilustracionIcono: "🛡️",
    contenidoTeorico: "El Manejo Integrado de Plagas (MIP) optimiza métodos biológicos, culturales, físicos y químicos para mantener las poblaciones nocivas por debajo del Umbral de Daño Económico (UDE). La rotación de cultivos interrumpe ciclos biológicos de patógenos específicos.",
    ejemplos: [
      "Control Biológico: Liberación de parasitoides como *Trichogramma pretiosum* para controlar huevos de lepidópteros plaga.",
      "Enfermedades Fúngicas: El mildiu y el tizón tardío (*Phytophthora infestans*) prosperan en condiciones de alta humedad relativa y temperaturas moderadas.",
      "Umbral Económico: Nivel de población de plaga donde el costo del control es igual al valor del daño evitado."
    ],
    preguntas: [
      {
        pregunta: "¿Qué define el concepto de Umbral de Daño Económico (UDE) en un programa de Manejo Integrado de Plagas?",
        opciones: [
          "El momento en que la plaga causa la muerte del 100% de la plantación",
          "La densidad poblacional de plaga donde el costo económico del control iguala las pérdidas causadas por el daño",
          "El límite máximo de plaguicida permitido por las normativas de exportación",
          "El número de insectos benéficos requeridos para erradicar una plaga"
        ],
        respuestaCorrecta: 1,
        explicacionesOpciones: [
          "Error común: Esperar la muerte total de la plantación genera pérdidas irreversibles; el UDE se aplica antes.",
          "¡Excelente definición! El UDE marca el punto exacto donde la intervención de control financiero se justifica.",
          "Error común: Eso corresponde a límites máximos de residuos (LMR), no al umbral de daño de plagas.",
          "Error común: Los benéficos actúan en el control biológico, pero el UDE mide el impacto financiero del daño."
        ]
      },
      {
        pregunta: "¿Cuál es una práctica cultural altamente efectiva para romper el ciclo biológico de patógenos específicos del suelo en una parcela agrícola?",
        opciones: [
          "Aplicación intensiva anual del mismo fungicida sistémico",
          "La rotación de cultivos con familias botánicas no emparentadas",
          "Eliminación total de toda la materia orgánica y microorganismos del suelo",
          "Aumento desproporcionado del riego por inundación continua"
        ],
        respuestaCorrecta: 1,
        explicacionesOpciones: [
          "Error común: El uso continuo del mismo plaguicida genera resistencia genética acelerada en patógenos.",
          "¡Correcto! Rotar cultivos de diferentes familias (ej. gramíneas con solanáceas) priva al patógeno específico de su huésped natural.",
          "Error común: Esterilizar el suelo destruye la microflora benéfica y degrada la fertilidad edáfica.",
          "Error común: El exceso de riego favorece enfermedades radiculares como *Phytophthora* y *Pythium*."
        ]
      }
    ]
  }
];