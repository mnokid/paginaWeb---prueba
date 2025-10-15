// Importa las librerías necesarias
const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const path = require('path');
require('dotenv').config(); // Para cargar variables de entorno desde un archivo .env

// --- Configuración ---
const app = express();
const port = 3000; // Puedes cambiar el puerto si lo necesitas

// Configura la API de Google Gemini
// Asegúrate de tener tu API Key en un archivo .env como GEMINI_API_KEY=...
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// --- Middlewares ---
// Permite al servidor entender JSON en las peticiones
app.use(express.json());
// Sirve los archivos estáticos (HTML, CSS, JS, imágenes) de tu proyecto
app.use(express.static(path.join(__dirname)));

// --- Rutas (Endpoints) ---

// Ruta principal para servir tu página web
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlKarla.html'));
});

// Ruta para el chatbot
app.post('/api/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const context = req.body.context; // Recibimos el contexto

        if (!userMessage) {
            return res.status(400).json({ error: 'No se recibió ningún mensaje.' });
        }

        // Creamos un prompt de sistema más detallado que incluye la información de las clases
        const systemPrompt = `Eres un asistente virtual amigable y servicial para un centro de yoga llamado 'So Ham Yoga'. Responde de manera concisa y útil a las preguntas de los usuarios sobre clases, horarios, precios y temas relacionados con el yoga y el bienestar.
        
        Aquí está la información actual de las clases. Úsala para responder preguntas sobre horarios, profesores, etc.:
        ${JSON.stringify(context.classes, null, 2)}
        
        Hoy es ${new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}. Tenlo en cuenta para preguntas como "¿qué clases hay hoy?".`;

        // Inicia una conversación con el historial y el prompt del sistema
        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: systemPrompt }] },
                { role: "model", parts: [{ text: "¡Entendido! Estoy listo para ayudar a los usuarios de So Ham Yoga." }] }
            ]
        })

        // Envía el mensaje del usuario a Gemini
        const result = await chat.sendMessage(userMessage);
        const response = await result.response;
        const botReply = response.text();

        // Envía la respuesta de vuelta al frontend
        res.json({ reply: botReply });

    } catch (error) {
        console.error("Error en la llamada a la API de IA:", error);
        res.status(500).json({ error: 'Hubo un error al procesar tu solicitud.' });
    }
});

// --- Iniciar el servidor ---
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log('¡Tu página web con chatbot IA está lista!');
});