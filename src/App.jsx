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
    const userTrim = username.trim().toLowerCase();
    if ((userTrim === 'hermana' && password === 'agro2027') || 
        (userTrim === 'francisco' && password === 'admin2027') ||
        (userTrim === 'estudiante' && password === 'examen2027')) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Credenciales inválidas. Usa: hermana / agro2027');
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

  // 1. Pantalla de Login (macOS / DeepinOS Glassmorphism Style)
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-mac-relief p-8 relative z-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-2xl mx-auto flex items-center justify-center shadow-lg shadow-emerald-900/50 mb-4 text-3xl">
              🌱
            </div>
            <h1 className="text-2xl font-black text-white tracking-tight">ENA OS • Examen 2027</h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Plataforma Académica de Alto Rendimiento</p>
          </div>

          {loginError && (
            <div className="mb-5 bg-red-950/60 border border-red-500/50 p-3 text-xs text-red-300 rounded-xl backdrop-blur-md">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 ml-1">Usuario Autorizado</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ej. hermana"
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-950/60 border border-slate-700/60 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 focus:border-transparent text-sm transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 ml-1">Contraseña de Acceso</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-950/60 border border-slate-700/60 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/80 focus:border-transparent text-sm transition"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold py-4 rounded-2xl shadow-mac-button transition duration-200 text-sm tracking-wide"
            >
              Iniciar Sesión en ENA OS
            </button>
          </form>

          <div className="mt-8 text-center text-[11px] text-slate-500 border-t border-slate-800/80 pt-4">
            Credenciales de prueba: <span className="text-emerald-400 font-medium">hermana</span> / <span className="text-emerald-400 font-medium">agro2027</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. Aplicación Principal de Estudio (macOS + DeepinOS Desktop Aesthetic)
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Top Navbar (Glassmorphism macOS style) */}
      <header className="bg-slate-900/70 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md text-xl">
              🌱
            </div>
            <div>
              <h1 className="text-base font-extrabold text-white tracking-tight">ENA OS • Agronomía 2027</h1>
              <p className="text-[11px] text-emerald-400 font-medium">Sesión Activa: {username.toUpperCase()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {selectedTema && (
              <button
                onClick={() => setSelectedTema(null)}
                className="text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl border border-white/10 transition font-medium shadow-sm"
              >
                ← Volver al Menú Principal
              </button>
            )}
            <button
              onClick={handleLogout}
              className="text-xs bg-red-950/80 hover:bg-red-900 text-red-200 px-4 py-2 rounded-xl border border-red-500/30 transition font-medium shadow-sm"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 md:p-8">
        {!selectedTema ? (
          <div>
            {/* Hero Welcome Card with Relief & Gradient */}
            <div className="mb-8 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/30 rounded-3xl p-8 shadow-mac-relief relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 text-9xl opacity-10 select-none pointer-events-none">
                🌾
              </div>
              <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-500/30 uppercase tracking-widest">
                Centro de Preparación Exhaustiva
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white mt-4 tracking-tight">Domina cada módulo del examen de admisión</h2>
              <p className="text-slate-300 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Esta interfaz combina teoría avanzada, ecuaciones aplicadas y simulacros con análisis de errores para garantizar tu ingreso a la institución. Selecciona un módulo para comenzar.
              </p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Módulos Temáticos Disponibles ({temasData.length})</h3>
            </div>

            {/* Grid of Cards with Relief and Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {temasData.map((tema) => (
                <div
                  key={tema.id}
                  onClick={() => handleSeleccionarTema(tema)}
                  className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 rounded-3xl p-7 shadow-mac-card hover:shadow-mac-relief cursor-pointer transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition"></div>
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl p-2.5 bg-slate-800/80 rounded-2xl border border-white/5 shadow-inner">
                        {tema.ilustracionIcono}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                        Módulo 0{tema.id}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mt-3 group-hover:text-emerald-400 transition tracking-tight">
                      {tema.titulo}
                    </h4>
                    <p className="text-sm text-slate-400 mt-2.5 leading-relaxed line-clamp-2">
                      {tema.descripcion}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-xs text-slate-300 font-semibold pt-4 border-t border-white/5">
                    <span className="text-emerald-400 font-bold">{tema.preguntas?.length || 0} Preguntas con análisis de error</span>
                    <span className="text-white group-hover:translate-x-1.5 transition transform duration-200">Estudiar Módulo →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-slate-950/80 border border-white/10 rounded-3xl shadow-mac-relief overflow-hidden backdrop-blur-2xl">
            {/* Header del Tema Seleccionado */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 p-8 border-b border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl p-2 bg-slate-800 rounded-xl">{selectedTema.ilustracionIcono}</span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
                  Módulo 0{selectedTema.id}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-2">{selectedTema.titulo}</h2>
              <p className="text-slate-300 text-sm mt-2 leading-relaxed max-w-3xl">{selectedTema.descripcion}</p>

              {/* Tabs with macOS style */}
              <div className="flex gap-3 mt-8 border-b border-white/10">
                <button
                  onClick={() => setActiveTab('teoria')}
                  className={`pb-3 px-4 text-sm font-bold transition border-b-2 rounded-t-lg ${
                    activeTab === 'teoria' 
                      ? 'border-emerald-400 text-emerald-400 bg-white/5' 
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  📖 Teoría y Ejemplos Combinados
                </button>
                <button
                  onClick={() => setActiveTab('practica')}
                  className={`pb-3 px-4 text-sm font-bold transition border-b-2 rounded-t-lg ${
                    activeTab === 'practica' 
                      ? 'border-emerald-400 text-emerald-400 bg-white/5' 
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  📝 Simulacro de Examen ({selectedTema.preguntas?.length || 0})
                </button>
              </div>
            </div>

            {/* Contenido Dinámico del Tab */}
            <div className="p-8">
              {activeTab === 'teoria' ? (
                <div className="space-y-8">
                  {/* Teoría Fundamental Card */}
                  <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-7 shadow-mac-card">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2">
                      <span>💡</span> Explicación Teórica Exhaustiva
                    </h3>
                    <div className="text-slate-200 leading-relaxed text-sm md:text-base">
                      <MathText text={selectedTema.contenidoTeorico} />
                    </div>
                  </div>

                  {/* Ejemplos Combinados Card */}
                  {selectedTema.ejemplos && selectedTema.ejemplos.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-400 ml-1">
                        🔬 Ejemplos Combinados y Fórmulas Resueltas
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedTema.ejemplos.map((ej, idx) => (
                          <div key={idx} className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl text-slate-300 text-sm leading-relaxed shadow-sm">
                            <MathText text={ej} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-6 flex justify-end border-t border-white/10">
                    <button
                      onClick={() => setActiveTab('practica')}
                      className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold px-7 py-3.5 rounded-2xl shadow-mac-button transition text-sm flex items-center gap-2"
                    >
                      Ir al Simulacro de Preguntas <span>→</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {selectedTema.preguntas && selectedTema.preguntas.map((p, pIndex) => (
                    <div key={pIndex} className="p-7 rounded-3xl border border-white/10 bg-slate-900/60 shadow-mac-card">
                      <p className="font-bold text-white text-base md:text-lg mb-5 flex items-start gap-3">
                        <span className="bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs px-2.5 py-1 rounded-xl mt-1">
                          #{pIndex + 1}
                        </span>
                        <span><MathText text={p.pregunta} /></span>
                      </p>

                      <div className="space-y-3">
                        {p.opciones.map((opcion, oIndex) => {
                          const seleccionado = respuestasUsuario[pIndex] === oIndex;
                          const esCorrecta = resultadoQuiz && p.respuestaCorrecta === oIndex;
                          const esIncorrectoSeleccionado = resultadoQuiz && seleccionado && !esCorrecta;

                          let estilosOpcion = "border-white/10 bg-slate-950/50 hover:bg-slate-900 text-slate-300";
                          if (seleccionado) estilosOpcion = "border-emerald-500 bg-emerald-950/40 text-white font-medium shadow-inner";
                          if (esCorrecta) estilosOpcion = "border-green-500/80 bg-green-950/60 text-green-200 font-bold";
                          if (esIncorrectoSeleccionado) estilosOpcion = "border-red-500/80 bg-red-950/60 text-red-200 font-medium";

                          return (
                            <div key={oIndex} className="space-y-1.5">
                              <button
                                disabled={resultadoQuiz !== null}
                                onClick={() => handleResponder(pIndex, oIndex)}
                                className={`w-full text-left p-4 rounded-2xl border transition text-sm flex items-center justify-between ${estilosOpcion}`}
                              >
                                <span><MathText text={opcion} /></span>
                                {resultadoQuiz !== null && esCorrecta && (
                                  <span className="text-green-400 text-xs font-black uppercase bg-green-900/80 px-3 py-1 rounded-full border border-green-500/30">
                                    ✓ Correcta
                                  </span>
                                )}
                              </button>

                              {/* Explicación de Error detallada si ya se calificó */}
                              {resultadoQuiz !== null && p.explicacionesOpciones && p.explicacionesOpciones[oIndex] && (
                                <div className={`text-xs p-3 rounded-xl border mt-1 ${
                                  oIndex === p.respuestaCorrecta 
                                    ? 'bg-green-950/40 border-green-500/30 text-green-300' 
                                    : seleccionado 
                                      ? 'bg-red-950/40 border-red-500/30 text-red-300' 
                                      : 'bg-slate-900/40 border-white/5 text-slate-400 opacity-70'
                                }`}>
                                  <span className="font-bold">Análisis Opción {String.fromCharCode(65 + oIndex)}:</span> {p.explicacionesOpciones[oIndex]}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {resultadoQuiz === null ? (
                    <button
                      onClick={calcularResultado}
                      disabled={Object.keys(respuestasUsuario).length === 0}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-2xl font-bold shadow-mac-button transition text-base"
                    >
                      Calificar Simulacro y Ver Análisis de Errores
                    </button>
                  ) : (
                    <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl text-center space-y-4 shadow-mac-relief">
                      <h3 className="text-2xl font-black text-white">Resultado del Simulacro</h3>
                      <div className="inline-block bg-emerald-950 border border-emerald-500/40 text-emerald-300 px-6 py-2 rounded-2xl text-2xl font-black tracking-wider shadow-inner">
                        {resultadoQuiz.correctas} / {resultadoQuiz.total} Aciertos Correctos
                      </div>
                      <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        {resultadoQuiz.correctas === resultadoQuiz.total 
                          ? "¡Excelente desempeño! Dominas todos los conceptos y análisis de error de este módulo a la perfección." 
                          : "Revisa arriba los análisis detallados de cada opción para comprender por qué fallaste y afianzar tu conocimiento."}
                      </p>
                      <button
                        onClick={() => {
                          setResultadoQuiz(null);
                          setRespuestasUsuario({});
                        }}
                        className="mt-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl text-sm border border-white/10 transition shadow"
                      >
                        Reintentar Simulacro
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-slate-500 border-t border-white/5 mt-12">
        ENA OS • Entorno Avanzado de Estudio • Examen de Admisión 2027
      </footer>
    </div>
  );
}