import React, { useState } from 'react';
import temasData from './data/temasData';
import MathText from './components/MathText';

export default function App() {
  // Estado de Autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Estado de la Aplicación de Estudio
  const [selectedTema, setSelectedTema] = useState(null);
  const [activeTab, setActiveTab] = useState('teoria');
  const [respuestasUsuario, setRespuestasUsuario] = useState({});
  const [resultadoQuiz, setResultadoQuiz] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    // Credenciales de acceso permitidas
    const userTrim = username.trim().toLowerCase();
    if ((userTrim === 'hermana' && password === 'agro2027') || 
        (userTrim === 'francisco' && password === 'admin2027') ||
        (userTrim === 'estudiante' && password === 'examen2027')) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Usuario o contraseña incorrectos. Intenta nuevamente.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setSelectedTema(null);
  };

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

  // 1. Pantalla de Login si no está autenticado
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 border border-emerald-100">
          <div className="text-center mb-8">
            <span className="text-4xl">🌱</span>
            <h1 className="text-2xl font-black text-slate-900 mt-2">Portal de Estudio ENA</h1>
            <p className="text-sm text-slate-500 mt-1">Ingresa tus credenciales para acceder al contenido</p>
          </div>

          {loginError && (
            <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-3 text-sm text-red-700 rounded">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Usuario</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ej. hermana o estudiante"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Contraseña</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 rounded-xl shadow-lg transition duration-200 text-sm"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-400 border-t pt-4">
            Acceso autorizado • Preparación Examen Admisión Agronomía
          </div>
        </div>
      </div>
    );
  }

  // 2. Aplicación Principal de Estudio
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 flex flex-col">
      {/* Header */}
      <header className="bg-emerald-800 text-white shadow-md p-4 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌱</span>
            <div>
              <h1 className="text-lg font-bold">Preparación Examen Agronomía</h1>
              <p className="text-xs text-emerald-200">Bienvenida, {username.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {selectedTema && (
              <button
                onClick={() => setSelectedTema(null)}
                className="text-xs bg-emerald-700 hover:bg-emerald-900 px-3 py-1.5 rounded-lg transition font-medium"
              >
                ← Temario
              </button>
            )}
            <button
              onClick={handleLogout}
              className="text-xs bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg transition font-medium text-white shadow"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 md:p-6">
        {!selectedTema ? (
          <div>
            <div className="mb-8 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold mb-2">¡Centro de Práctica y Teoría Agronómica!</h2>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Selecciona un módulo de estudio a continuación para repasar conceptos clave, fórmulas y someterte a evaluaciones tipo examen con retroalimentación instantánea.
              </p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">Módulos de Estudio Disponibles ({temasData.length})</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {temasData.map((tema) => (
                <div
                  key={tema.id}
                  onClick={() => handleSeleccionarTema(tema)}
                  className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-emerald-500 cursor-pointer transition duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        Módulo 0{tema.id}
                      </span>
                      <span className="text-xs text-slate-400 group-hover:text-emerald-600 font-semibold transition">
                        {tema.preguntas?.length || 0} Preguntas
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-emerald-800 transition">{tema.titulo}</h4>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{tema.descripcion}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-xs text-emerald-700 font-bold pt-4 border-t border-slate-100">
                    <span>Comenzar repaso</span>
                    <span className="transform group-hover:translate-x-1 transition">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Header del Tema */}
            <div className="bg-slate-900 text-white p-6 md:p-8">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Módulo 0{selectedTema.id}</span>
              <h2 className="text-2xl md:text-3xl font-bold mt-1">{selectedTema.titulo}</h2>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed">{selectedTema.descripcion}</p>

              {/* Tabs */}
              <div className="flex gap-4 mt-6 border-b border-slate-800">
                <button
                  onClick={() => setActiveTab('teoria')}
                  className={`pb-3 px-2 text-sm font-semibold transition border-b-2 ${
                    activeTab === 'teoria' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  📖 Teoría y Conceptos
                </button>
                <button
                  onClick={() => setActiveTab('practica')}
                  className={`pb-3 px-2 text-sm font-semibold transition border-b-2 ${
                    activeTab === 'practica' ? 'border-emerald-400 text-emerald-400' : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  📝 Ejercicios Prácticos ({selectedTema.preguntas?.length || 0})
                </button>
              </div>
            </div>

            {/* Contenido del Tab */}
            <div className="p-6 md:p-8">
              {activeTab === 'teoria' ? (
                <div className="space-y-6">
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-900 mb-3">Resumen Teórico Fundamental</h3>
                    <div className="text-slate-700 leading-relaxed text-base">
                      <MathText text={selectedTema.contenidoTeorico} />
                    </div>
                  </div>

                  {selectedTema.ejemplos && selectedTema.ejemplos.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">💡 Ejemplos Prácticos y Fórmulas</h4>
                      {selectedTema.ejemplos.map((ej, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200/70 p-4 rounded-xl text-slate-700 text-sm leading-relaxed shadow-sm">
                          <MathText text={ej} />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-6 flex justify-end border-t border-slate-100">
                    <button
                      onClick={() => setActiveTab('practica')}
                      className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-xl font-bold shadow-md transition text-sm flex items-center gap-2"
                    >
                      Ir a los ejercicios de práctica <span>→</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {selectedTema.preguntas && selectedTema.preguntas.map((p, pIndex) => (
                    <div key={pIndex} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 shadow-sm">
                      <p className="font-bold text-slate-900 text-base mb-4">
                        <span className="text-emerald-700 mr-2">#{pIndex + 1}</span>
                        <MathText text={p.pregunta} />
                      </p>
                      <div className="space-y-2.5">
                        {p.opciones.map((opcion, oIndex) => {
                          const seleccionado = respuestasUsuario[pIndex] === oIndex;
                          const esCorrecta = resultadoQuiz && p.respuestaCorrecta === oIndex;
                          const esIncorrectoSeleccionado = resultadoQuiz && seleccionado && !esCorrecta;

                          let estilosOpcion = "border-slate-200 bg-white hover:bg-slate-100 text-slate-700";
                          if (seleccionado) estilosOpcion = "border-emerald-600 bg-emerald-50 text-emerald-900 font-medium shadow-sm";
                          if (esCorrecta) estilosOpcion = "border-green-600 bg-green-100 text-green-900 font-bold";
                          if (esIncorrectoSeleccionado) estilosOpcion = "border-red-400 bg-red-50 text-red-900";

                          return (
                            <button
                              key={oIndex}
                              disabled={resultadoQuiz !== null}
                              onClick={() => handleResponder(pIndex, oIndex)}
                              className={`w-full text-left p-4 rounded-xl border transition text-sm flex items-center justify-between ${estilosOpcion}`}
                            >
                              <span><MathText text={opcion} /></span>
                              {resultadoQuiz !== null && esCorrecta && <span className="text-green-700 text-xs font-black uppercase bg-green-200 px-2.5 py-1 rounded-full">✓ Correcta</span>}
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
                      className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-slate-300 text-white py-4 rounded-xl font-bold shadow-lg transition text-base"
                    >
                      Calificar Mis Respuestas
                    </button>
                  ) : (
                    <div className="bg-slate-900 text-white p-8 rounded-2xl text-center space-y-4 shadow-xl">
                      <h3 className="text-2xl font-black">Resultado de la Evaluación</h3>
                      <div className="inline-block bg-emerald-800 text-emerald-200 px-6 py-2 rounded-full text-2xl font-black tracking-wider">
                        {resultadoQuiz.correctas} / {resultadoQuiz.total} Correctas
                      </div>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        {resultadoQuiz.correctas === resultadoQuiz.total ? "¡Impresionante! Has respondido todo de forma perfecta. Estás lista para el examen." : "¡Buen intento! Revisa los conceptos teóricos y vuelve a intentarlo para afianzar tu puntaje."}
                      </p>
                      <button
                        onClick={() => {
                          setResultadoQuiz(null);
                          setRespuestasUsuario({});
                        }}
                        className="mt-4 bg-white text-slate-900 font-bold px-6 py-3 rounded-xl text-sm hover:bg-slate-100 transition shadow"
                      >
                        Reiniciar Práctica
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-6 text-xs text-slate-400 border-t border-slate-200 mt-12 bg-white">
        Plataforma PWA Académica • Optimizada para el Examen de Admisión ENA 2027
      </footer>
    </div>
  );
}