import React, { useState } from 'react';
import temasData from './data/temasData';
import MathText from './components/MathText';

export default function App() {
  const [selectedTema, setSelectedTema] = useState(null);
  const [activeTab, setActiveTab] = useState('teoria');
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [resultadoQuiz, setResultadoQuiz] = useState(null);

  const handleSeleccionarTema = (tema) => {
    setSelectedTema(tema);
    setActiveTab('teoria');
    setRespuestasUsuario({});
    setResultadoQuiz(null);
  };

  const handleResponder = (preguntaIndex, opcionIndex) => {
    setRespuestasUsuario({
      ...respuestasUsuario,
      [preguntaIndex]: opcionIndex
    });
  };

  const calcularResultado = () => {
    if (!selectedTema || !selectedTema.preguntas) return;
    let correctas = 0;
    selectedTema.preguntas.forEach((p, index) => {
      if (respuestasUsuario[index] === p.respuestaCorrecta) {
        correctas++;
      }
    });
    setResultadoQuiz({
      correctas,
      total: selectedTema.preguntas.length
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <header className="bg-emerald-700 text-white shadow-md p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">
            🌱 Preparación Examen Agronomía
          </h1>
          {selectedTema && (
            <button
              onClick={() => setSelectedTema(null)}
              className="text-sm bg-emerald-800 hover:bg-emerald-900 px-3 py-1 rounded transition"
            >
              ← Volver al Temario
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-6">
        {!selectedTema ? (
          <div>
            <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-emerald-900 mb-1">¡Bienvenida al Centro de Estudio!</h2>
              <p className="text-sm text-emerald-700">
                Selecciona un módulo temático para repasar la teoría clave y evaluar tus conocimientos con ejercicios prácticos.
              </p>
            </div>

            <h3 className="text-md font-bold text-slate-700 mb-3 uppercase tracking-wider">Temas de Estudio</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {temasData.map((tema) => (
                <div
                  key={tema.id}
                  onClick={() => handleSeleccionarTema(tema)}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-emerald-500 cursor-pointer transition flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Módulo {tema.id}</span>
                    <h4 className="text-lg font-bold text-slate-900 mt-1">{tema.titulo}</h4>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-2">{tema.descripcion}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                    <span>{tema.preguntas?.length || 0} preguntas prácticas</span>
                    <span className="text-emerald-700 font-medium">Estudiar →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <div className="bg-slate-900 text-white p-6">
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">Módulo {selectedTema.id}</span>
              <h2 className="text-2xl font-bold mt-1">{selectedTema.titulo}</h2>
              <p className="text-slate-300 text-sm mt-2">{selectedTema.descripcion}</p>

              <div className="flex gap-2 mt-6 border-b border-slate-800">
                <button
                  onClick={() => setActiveTab('teoria')}
                  className={`pb-2 px-4 text-sm font-medium transition border-b-2 ${
                    activeTab === 'teoria' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  📖 Teoría y Conceptos
                </button>
                <button
                  onClick={() => setActiveTab('practica')}
                  className={`pb-2 px-4 text-sm font-medium transition border-b-2 ${
                    activeTab === 'practica' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  📝 Práctica ({selectedTema.preguntas?.length || 0})
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'teoria' ? (
                <div className="space-y-6">
                  <div className="prose max-w-none text-slate-700 leading-relaxed">
                    <MathText text={selectedTema.contenidoTeorico} />
                  </div>

                  {selectedTema.ejemplos && selectedTema.ejemplos.length > 0 && (
                    <div className="mt-6 bg-slate-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                      <h4 className="font-bold text-slate-800 mb-2">💡 Ejemplos Resueltos</h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {selectedTema.ejemplos.map((ej, idx) => (
                          <li key={idx} className="bg-white p-3 rounded border border-slate-200 shadow-sm">
                            <MathText text={ej} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setActiveTab('practica')}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-medium shadow transition text-sm"
                    >
                      Ir alos ejercicios prácticos →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {selectedTema.preguntas && selectedTema.preguntas.map((p, pIndex) => (
                    <div key={pIndex} className="p-4 rounded-lg border border-slate-200 bg-slate-50/50">
                      <p className="font-semibold text-slate-900 mb-3">
                        {pIndex + 1}. <MathText text={p.pregunta} />
                      </p>
                      <div className="space-y-2">
                        {p.opciones.map((opcion, oIndex) => {
                          const seleccionado = respuestasUsuario[pIndex] === oIndex;
                          const esCorrecta = resultadoQuiz && p.respuestaCorrecta === oIndex;
                          const esIncorrectoSeleccionado = resultadoQuiz && seleccionado && !esCorrecta;

                          let estilosOpcion = "border-slate-200 bg-white hover:bg-slate-100 text-slate-700";
                          if (seleccionado) estilosOpcion = "border-emerald-500 bg-emerald-50 text-emerald-900 font-medium";
                          if (esCorrecta) estilosOpcion = "border-green-500 bg-green-100 text-green-900 font-medium";
                          if (esIncorrectoSeleccionado) estilosOpcion = "border-red-400 bg-red-50 text-red-900";

                          return (
                            <button
                              key={oIndex}
                              disabled={resultadoQuiz !== null}
                              onClick={() => handleResponder(pIndex, oIndex)}
                              className={`w-full text-left p-3 rounded-lg border transition text-sm flex items-center justify-between ${estilosOpcion}`}
                            >
                              <span><MathText text={opcion} /></span>
                              {resultadoQuiz !== null && esCorrecta && <span className="text-green-600 font-bold">✓ Correcta</span>}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {resultadoQuiz === null ? (
                    <button
                      onClick={calcularResultado}
                      disabled={Object.keys(respuestasUsuario).length === 0}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white py-3 rounded-lg font-semibold shadow transition"
                    >
                      Calificar Respuestas
                    </button>
                  ) : (
                    <div className="bg-emerald-900 text-white p-6 rounded-xl text-center space-y-3">
                      <h3 className="text-xl font-bold">Resultados del Examen</h3>
                      <p className="text-2xl font-extrabold text-emerald-300">
                        {resultadoQuiz.correctas} / {resultadoQuiz.total} correctas
                      </p>
                      <p className="text-sm text-emerald-100">
                        {resultadoQuiz.correctas === resultadoQuiz.total ? "¡Excelente trabajo! Dominas este tema a la perfección." : "Sigue repasando los conceptos teóricos para mejorar tu puntaje."}
                      </p>
                      <button
                        onClick={() => {
                          setResultadoQuiz(null);
                          setRespuestasUsuario({});
                        }}
                        className="mt-2 bg-white text-emerald-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-emerald-50 transition"
                      >
                        Reintentar Test
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-6 text-xs text-slate-400 border-t border-slate-200 mt-12">
        PWA Estudio Agronomía • Optimizada para repaso móvil y web
      </footer>
    </div>
  );
}