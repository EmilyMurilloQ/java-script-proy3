import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { demoUser } from '../utils/auth';

const Login = ({ onLogin, currentUser }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errorLogin, setErrorLogin] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [loginValidated, setLoginValidated] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || '/perfil';

  useEffect(() => {
    if (currentUser) {
      navigate('/perfil', { replace: true });
    }
  }, [currentUser, navigate]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginValidated(true);

    if (!correo || !contrasena) {
      setErrorLogin('Por favor, rellena todos los campos.');
      return;
    }

    setCargando(true);
    setErrorLogin(null);

    setTimeout(() => {
      if (correo === 'user@gmail.com' && contrasena === '123456') {
        setCargando(false);
        onLogin(demoUser);
        navigate(redirectPath, { replace: true });
      } else {
        setCargando(false);
        setErrorLogin('Credenciales incorrectas. Inténtalo de nuevo.');
      }
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-76px)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border-t-4 border-blue-600 p-8 sm:p-10">
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Soft Consultores</h3>
          <p className="text-sm text-gray-500">Ingresa a tu portal privado de soluciones</p>
        </div>

        {errorLogin && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg p-3 mb-6" role="alert">
            {errorLogin}
          </div>
        )}

        <form noValidate onSubmit={handleLoginSubmit} className="space-y-5">
          
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
              Correo Electrónico
            </label>
            <div className="relative">
              <input 
                type="email" 
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" 
                placeholder="nombre@empresa.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            {loginValidated && !correo && (
              <p className="text-xs text-red-500 mt-1">Por favor, ingresa un correo válido.</p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide">
                Contraseña
              </label>
              <button type="button" className="text-xs text-blue-600 hover:underline">
                ¿La olvidaste?
              </button>
            </div>
            <div className="relative">
              <input 
                type="password" 
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm" 
                placeholder="••••••••"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>
            {loginValidated && !contrasena && (
              <p className="text-xs text-red-500 mt-1">Ingresa tu contraseña para continuar.</p>
            )}
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-sm transition-colors flex items-center justify-center text-sm disabled:opacity-50" 
            disabled={cargando}
          >
            {cargando ? 'Autenticando...' : 'Iniciar Sesión'}
          </button>

        </form>

        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            ¿Aún no eres cliente?{' '}
            <Link to="/contact" className="text-blue-600 font-semibold hover:underline">
              Contáctanos aquí
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
