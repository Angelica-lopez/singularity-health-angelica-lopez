import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-orange-500">404</h1>
        <p className="text-2xl mt-4 text-gray-700">
          ¡Vaya! Página no encontrada
        </p>
        <p className="mt-2 text-lg text-gray-600">
          Lo sentimos, pero la página que buscas no existe.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
