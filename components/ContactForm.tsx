import React, { useState } from "react";

export const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(e.currentTarget); // Cambiado para usar 'e.currentTarget'

    formData.append("access_key", "c8a3e7a6-2dba-4854-b554-b8e9d91486b3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        e.currentTarget.reset(); // Restablece el formulario después del envío exitoso.
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-4xl font-bold mb-8">Contacto</h2>
      <form
        onSubmit={onSubmit}
        className="p-8 rounded-lg shadow-md w-full max-w-md bg-slate-800"
      >
        <div className="mb-6">
          <label className="block font-bold text-white mb-2">Nombre:</label>
          <input
            type="text"
            name="user_name"
            className="w-full border border-gray-300 p-3 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-6">
          <label className="block font-bold text-white mb-2">Correo electrónico:</label>
          <input
            type="email"
            name="user_email"
            className="w-full border border-gray-300 p-3 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div className="mb-6">
          <label className="block font-bold text-white mb-2">Mensaje:</label>
          <textarea
            name="message"
            className="w-full border border-gray-300 p-3 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-white font-bold p-3 rounded-lg hover:bg-orange-700 transition duration-300"
        >
          Enviar
        </button>
      </form>
      <span className="mt-4 text-white">{result}</span>
    </div>
  );
};

export default ContactForm;
