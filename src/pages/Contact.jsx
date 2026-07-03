import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es obligatorio';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Cuéntanos brevemente qué necesitas';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // No tenemos backend de contacto, así que simulamos el envío
    setSent(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contáctanos</h1>
          <p className="text-gray-600">
            ¿Tienes dudas sobre alguna solución o quieres una cotización? Escríbenos.
          </p>
        </div>

        {sent && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            ✓ Tu mensaje fue enviado. Te responderemos a la brevedad.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block font-semibold text-gray-700 mb-1">
              Asunto (opcional)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-gray-700 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700 transition-colors"
          >
            Enviar Mensaje
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-center">
          <div className="bg-white rounded-lg shadow-sm p-5">
            <p className="font-bold text-gray-900">Email</p>
            <p className="text-gray-600 text-sm">info@softconsultores.com</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5">
            <p className="font-bold text-gray-900">Teléfono</p>
            <p className="text-gray-600 text-sm">+51 234 567 890</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5">
            <p className="font-bold text-gray-900">Horario</p>
            <p className="text-gray-600 text-sm">Lun - Vie, 9am - 6pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
