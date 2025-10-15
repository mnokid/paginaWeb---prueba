const classesData = [
    { name: 'Yoga para Principiantes', days: ['Lunes', 'Miércoles'], time: '18:00 - 19:00', professor: 'Ana Pérez', type: 'Principiante' },
    { name: 'Yoga Intermedio', days: ['Martes', 'Jueves'], time: '19:30 - 20:30', professor: 'Carlos Gómez', type: 'Intermedio' },
    { name: 'Yoga Avanzado', days: ['Viernes'], time: '17:00 - 18:30', professor: 'Sofía Martínez', type: 'Avanzado' },
    { name: 'Yoga Restaurativo', days: ['Sábados'], time: '10:00 - 11:00', professor: 'Laura Torres', type: 'Restaurativo' },
    { name: 'Vinyasa Flow', days: ['Lunes', 'Miércoles'], time: '09:00 - 10:00', professor: 'Carlos Gómez', type: 'Vinyasa' },
    { name: 'Meditación Guiada', days: ['Jueves'], time: '20:45 - 21:30', professor: 'Laura Torres', type: 'Meditación' }
];

document.addEventListener('DOMContentLoaded', function() {
  // Get the navigation links
  const navLinks = document.querySelectorAll('nav a');

  // Get the main content area
  const mainContent = document.querySelector('main');

  // Function to load content based on the link clicked
  function loadContent(page) {
      let content = '';

      switch (page) {
          case 'Inicio':
              content = `<h2>Bienvenido a So Ham Yoga</h2>
                         <p>Descubre la paz interior y el bienestar físico con nuestras clases de yoga.</p>
                         <div class="info-cards-container">
                              <!-- Tarjeta de Misión -->
                              <div class="info-card">
                              <div class="card-title">
                                  <h3>Nuestra Misión</h3>
                              </div>
                              <div class="card-content">
                                  <h3>Nuestra Misión</h3>
                                  <p>Proporcionar un espacio sagrado y acogedor donde cada individuo pueda explorar la práctica del yoga para cultivar el equilibrio, la fuerza y la serenidad en cuerpo, mente y espíritu.</p>
                              </div>
                              </div>
                          
                              <!-- Tarjeta de Visión -->
                              <div class="info-card">
                              <div class="card-title">
                                  <h3>Nuestra Visión</h3>
                              </div>
                              <div class="card-content">
                                  <h3>Nuestra Visión</h3>
                                  <p>Ser un referente en la comunidad de bienestar, inspirando a las personas a vivir una vida más consciente y saludable a través de la sabiduría ancestral del yoga, adaptada al mundo moderno.</p>
                              </div>
                              </div>
                          
                              <!-- Tarjeta de Valores -->
                              <div class="info-card">
                              <div class="card-title">
                                  <h3>Nuestros Valores</h3>
                              </div>
                              <div class="card-content">
                                  <h3>Nuestros Valores</h3>
                                  <ul>
                                  <li><strong>Bienestar:</strong> Comprometidos con la salud integral.</li>
                                  <li><strong>Comunidad:</strong> Fomentamos la conexión y el apoyo mutuo.</li>
                                  <li><strong>Respeto:</strong> Honramos el camino único de cada practicante.</li>
                                  <li><strong>Autenticidad:</strong> Enseñamos desde la experiencia y el corazón.</li>
                                  </ul>
                              </div>
                              </div>
                          </div>
                          <section class="products-carousel-container">
                            <h2>Nuestros Productos</h2>
                            <div class="products-carousel">
                              <div class="product-item">
                                <img src="images/producto-esterilla.jpg" alt="Esterilla de Yoga Premium">
                                <p>Esterilla de Yoga Premium</p>
                              </div>
                              <div class="product-item">
                                <img src="images/producto-bloques.jpg" alt="Bloques de Yoga de Corcho">
                                <p>Bloques de Yoga de Corcho</p>
                              </div>
                              <div class="product-item">
                                <img src="images/producto-cinturon.jpg" alt="Cinturón de Yoga de Algodón">
                                <p>Cinturón de Yoga de Algodón</p>
                              </div>
                                    <div class="product-item">
                                <img src="images/producto-zafu.jpg" alt="Zafú de Meditación">
                                <p>Zafú de Meditación</p>
                              </div>
                              <div class="product-item">
                                <img src="images/producto-botella.jpg" alt="Botella de Agua Reutilizable">
                                <p>Botella de Agua Reutilizable</p>
                              </div>
                            </div>
                          </section>
                        `;
              break;
          case 'Clases':
              content = `<h2>Nuestras Clases</h2>
                         <img src="images/clases-yoga.jpg" alt="Personas en una clase de yoga" class="page-banner-image">
                         <p>Ofrecemos una variedad de clases para todos los niveles. ¡Elige la que mejor se adapte a ti!</p>
                         <div class="filters-container">
                           <select id="filter-type" aria-label="Filtrar por tipo de yoga">
                             <option value="all">Todos los tipos</option>
                           </select>
                           <select id="filter-day" aria-label="Filtrar por día">
                             <option value="all">Todos los días</option>
                           </select>
                           <select id="filter-professor" aria-label="Filtrar por profesor">
                             <option value="all">Todos los profesores</option>
                           </select>
                         </div>
                         <div class="classes-grid-container"></div>`;
              break;
          case 'Horarios':
              content = '<div id="calendar"></div>';
              break;
          case 'Instructores':
              content = `<h2>Nuestros Instructores</h2>
                         <p>Conoce al equipo de profesionales que te guiarán en tu práctica.</p>
                         <div class="instructors-carousel-container">
                           <div class="instructors-carousel">
                             <div class="instructor-item">
                               <img src="images/instructor-ana-perez.jpg" alt="Instructor Ana Pérez">
                               <h3>Ana Pérez</h3>
                               <p>Especialista en Vinyasa y Hatha Yoga. Su enfoque se centra en la alineación y la respiración consciente.</p>
                             </div>
                             <div class="instructor-item">
                               <img src="images/instructor-carlos-gomez.jpg" alt="Instructor Carlos Gómez">
                               <h3>Carlos Gómez</h3>
                               <p>Experto en Ashtanga y Power Yoga. Sus clases son dinámicas y desafiantes, ideales para fortalecer el cuerpo.</p>
                             </div>
                             <div class="instructor-item">
                               <img src="images/instructor-sofia-martinez.jpg" alt="Instructor Sofía Martínez">
                               <h3>Sofía Martínez</h3>
                               <p>Certificada en Yoga Terapéutico y Restaurativo. Ayuda a sus alumnos a encontrar sanación y calma.</p>
                             </div>
                             <div class="instructor-item">
                               <img src="images/instructor-laura-torres.jpg" alt="Instructor Laura Torres">
                               <h3>Laura Torres</h3>
                               <p>Guía de meditación y Mindfulness. Sus sesiones están diseñadas para reducir el estrés y aumentar la claridad mental.</p>
                             </div>
                           </div>
                         </div>`;
              break;
          case 'Iniciar Sesión':
              content = `
                <div class="auth-container">
                  <!-- Formulario de Inicio de Sesión -->
                  <div id="login-form">
                    <h2>Iniciar Sesión</h2>
                    <form class="auth-form">
                      <div class="form-group">
                        <label for="login-email">Correo Electrónico</label>
                        <input type="email" id="login-email" required>
                      </div>
                      <div class="form-group">
                        <label for="login-password">Contraseña</label>
                        <input type="password" id="login-password" required>
                      </div>
                      <button type="submit" class="auth-button">Ingresar</button>
                    </form>
                    <p class="toggle-form">¿No tienes una cuenta? <a id="show-register">Crea una aquí</a></p>
                  </div>

                  <!-- Formulario de Registro -->
                  <div id="register-form">
                    <h2>Crear Cuenta</h2>
                    <form class="auth-form">
                      <div class="form-group">
                        <label for="register-name">Nombre</label>
                        <input type="text" id="register-name" required>
                      </div>
                      <div class="form-group">
                        <label for="register-email">Correo Electrónico</label>
                        <input type="email" id="register-email" required>
                      </div>
                      <div class="form-group">
                        <label for="register-password">Contraseña</label>
                        <input type="password" id="register-password" required>
                      </div>
                      <button type="submit" class="auth-button">Registrarse</button>
                    </form>
                    <p class="toggle-form">¿Ya tienes una cuenta? <a id="show-login">Inicia sesión</a></p>
                  </div>

                  <div class="divider">o</div>

                  <button class="google-btn">
                    <img src="https://www.google.com/favicon.ico" alt="Google" width="20" height="20">
                    Continuar con Google
                  </button>
                </div>
              `;
              break;
          default:
              content = '<h2>Página no encontrada</h2><p>Contenido no disponible.</p>';
      }

      mainContent.innerHTML = content;
      if (page === 'Horarios') {
          renderCalendar();
      }
      if (page === 'Clases') {
        setupClassFilters();
    }
    if (page === 'Iniciar Sesión') {
        setupAuthForms();
    }
    }

    function setupAuthForms() {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const showRegisterLink = document.getElementById('show-register');
        const showLoginLink = document.getElementById('show-login');

        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        });

        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        });

        // NOTA: Para que el botón de Google funcione, se necesita un backend.
        // 1. Configurar un proyecto en Google Cloud Console y obtener un Client ID.
        // 2. El botón redirigiría al usuario a la página de consentimiento de Google.
        // 3. Google redirigiría de vuelta a tu sitio (a una URL de callback) con un código.
        // 4. Tu backend intercambiaría ese código por un token de acceso y la información del usuario.
    }

    // Add click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const page = this.textContent; // Get the text content of the link
            loadContent(page); // Load the content for the corresponding page
        });
    });

    // Función para convertir los datos de clases en eventos para FullCalendar
    function convertClassesToEvents(classes) {
        const dayMap = { 'Lunes': 1, 'Martes': 2, 'Miércoles': 3, 'Jueves': 4, 'Viernes': 5, 'Sábados': 6, 'Domingo': 0 };
        
        return classes.map(cls => {
            const [startTime, endTime] = cls.time.split(' - ');
            const daysOfWeek = cls.days.map(day => dayMap[day]);

            return {
                title: cls.name,
                startTime: startTime,
                endTime: endTime,
                daysOfWeek: daysOfWeek,
                extendedProps: {
                    professor: cls.professor,
                    type: cls.type
                },
                // Damos un color a los eventos para que se vean mejor
                backgroundColor: '#5E8B7E',
                borderColor: '#5E8B7E'
            };
        });
    }

    function renderCalendar() {
        const calendarEl = document.getElementById('calendar');
        if (!calendarEl) return;

        const calendarEvents = convertClassesToEvents(classesData);

        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'timeGridWeek', // Vista semanal es más útil para horarios
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: calendarEvents,
            locale: 'es', // Traduce los botones y títulos al español
            eventTimeFormat: { hour: '2-digit', minute: '2-digit', hour12: false }, // Formato de 24h
            eventClick: function(info) {
                info.jsEvent.preventDefault(); // Evita que el navegador siga un enlace

                const event = info.event;
                const title = event.title;
                const professor = event.extendedProps.professor;
                const type = event.extendedProps.type;
                // Formateamos la hora de inicio y fin
                const startTime = event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
                const endTime = event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

                showClassModal(title, professor, type, `${startTime} - `);
            }
        });
        calendar.render();
    }

    function showClassModal(title, professor, type, time) {
        // Crear el contenido del modal dinámicamente
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'class-modal-overlay';
        modalOverlay.innerHTML = `
            <div class="class-modal-content">
                <button class="close-modal-btn">&times;</button>
                <h3></h3>
                <p><strong>Profesor:</strong> </p>
                <p><strong>Tipo:</strong> </p>
                <p><strong>Horario:</strong> </p>
            </div>
        `;
        document.body.appendChild(modalOverlay);

        // Añadir la clase para mostrarlo con una transición
        setTimeout(() => modalOverlay.classList.add('visible'), 10);

        // Lógica para cerrar el modal
        const closeModal = () => modalOverlay.remove();
        modalOverlay.querySelector('.close-modal-btn').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

  function renderClasses(classesToRender) {
    const grid = document.querySelector('.classes-grid-container');
    if (!grid) return;
    if (classesToRender.length === 0) {
        grid.innerHTML = '<p class="no-results">No hay clases que coincidan con tu búsqueda.</p>';
        return;
    }
    grid.innerHTML = classesToRender.map(cls => `
        <div class="class-item">
            <h3>${cls.name}</h3>
            <p>Horario: ${cls.days.join(' y ')}, ${cls.time}</p>
            <p>Profesor: ${cls.professor}</p>
        </div>
    `).join('');
  }

  function setupClassFilters() {
    const typeFilter = document.getElementById('filter-type');
    const dayFilter = document.getElementById('filter-day');
    const professorFilter = document.getElementById('filter-professor');

    // Populate filters
    const types = [...new Set(classesData.map(c => c.type))];
    const days = [...new Set(classesData.flatMap(c => c.days))].sort();
    const professors = [...new Set(classesData.map(c => c.professor))];

    types.forEach(type => typeFilter.innerHTML += `<option value=""></option>`);
    days.forEach(day => dayFilter.innerHTML += `<option value=""></option>`);
    professors.forEach(prof => professorFilter.innerHTML += `<option value=""></option>`);

    // Add event listeners
    [typeFilter, dayFilter, professorFilter].forEach(filter => {
        filter.addEventListener('change', () => {
            const selectedType = typeFilter.value;
            const selectedDay = dayFilter.value;
            const selectedProfessor = professorFilter.value;

            let filteredClasses = classesData;

            if (selectedType !== 'all') filteredClasses = filteredClasses.filter(c => c.type === selectedType);
            if (selectedDay !== 'all') filteredClasses = filteredClasses.filter(c => c.days.includes(selectedDay));
            if (selectedProfessor !== 'all') filteredClasses = filteredClasses.filter(c => c.professor === selectedProfessor);

            renderClasses(filteredClasses);
        });
    });

    // Initial render
    renderClasses(classesData);
  }

    // Load the content for the default page (Home)
    loadContent('Inicio');
});
document.addEventListener('DOMContentLoaded', function() {
    var footer = document.querySelector('footer');
    var lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add/remove 'scrolled' class to body for header shadow
        if (scrollTop > 0) {
            document.body.classList.add('scrolled');
        } else {
            document.body.classList.remove('scrolled');
        }

        if (scrollTop > lastScrollTop) {
            // Scroll abajo
            footer.style.bottom = '-100%'; // Oculta el footer
        } else {
            // Scroll arriba
            footer.style.bottom = '0'; // Muestra el footer
        }
        lastScrollTop = scrollTop;
    });

    // --- Chatbot functionality ---
    const chatbotToggleButton = document.getElementById('chatbot-toggle-button');
    const chatbotContainer = document.getElementById('chatbot-container');
    const closeChatbotButton = document.querySelector('.close-chatbot-button');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInputField = document.getElementById('chatbot-input-field');
    const chatbotSendButton = document.getElementById('chatbot-send-button');

    if (chatbotToggleButton && chatbotContainer) { // Asegura que los elementos existan antes de añadir listeners
        // Alternar visibilidad del chatbot
        chatbotToggleButton.addEventListener('click', () => {
            chatbotContainer.classList.toggle('open');
            if (chatbotContainer.classList.contains('open')) {
                chatbotInputField.focus(); // Enfoca el input al abrir
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Desplaza al final de los mensajes
            }
        });

        closeChatbotButton.addEventListener('click', () => {
            chatbotContainer.classList.remove('open');
        });

        // Array para mantener el historial de mensajes
        let messageHistory = [];

        // Función para añadir un mensaje al chat
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', `-message`);
            messageDiv.textContent = text;
            chatbotMessages.appendChild(messageDiv);

            // Añadir al historial y guardar en sessionStorage
            messageHistory.push({ text, sender });
            try {
                sessionStorage.setItem('chatHistory', JSON.stringify(messageHistory));
            } catch (e) {
                console.error("No se pudo guardar el historial del chat:", e);
            }

            chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Desplaza al último mensaje
        }

        // Función para obtener la respuesta de la IA desde nuestro servidor backend
        async function getAIResponse(userMessage) {
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        message: userMessage,
                        context: { classes: classesData } // Enviamos el contexto de las clases
                    }),
                });

                if (!response.ok) {
                    throw new Error('La respuesta del servidor no fue exitosa.');
                }

                const data = await response.json();
                return data.reply;
            } catch (error) {
                console.error('Error al contactar la IA:', error);
                return 'Lo siento, estoy teniendo problemas para conectarme. Por favor, intenta de nuevo más tarde.';
            }
        }

        // Manejar el envío de mensajes
        async function sendMessage() {
            const userMessage = chatbotInputField.value.trim();
            if (userMessage === '') return;

            addMessage(userMessage, 'user');
            chatbotInputField.value = '';

            // Muestra el indicador de "escribiendo..."
            const typingIndicator = document.createElement('div');
            typingIndicator.classList.add('message', 'bot-message', 'typing-indicator');
            typingIndicator.innerHTML = '<span></span><span></span><span></span>';
            chatbotMessages.appendChild(typingIndicator);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

            // Obtiene la respuesta de la IA y la muestra
            const botResponse = await getAIResponse(userMessage);

            // Elimina el indicador de "escribiendo"
            const typingIndicatorElement = document.querySelector('.typing-indicator');
            if (typingIndicatorElement) {
                typingIndicatorElement.remove();
            }

            addMessage(botResponse, 'bot');
        }

        // Función para cargar el historial del chat desde sessionStorage
        function loadChatHistory() {
            const savedHistory = sessionStorage.getItem('chatHistory');
            if (savedHistory) {
                messageHistory = JSON.parse(savedHistory);
                // Limpiamos el mensaje inicial y renderizamos el historial
                chatbotMessages.innerHTML = ''; 
                messageHistory.forEach(msg => {
                    // Re-creamos los mensajes sin volver a guardar en sessionStorage
                    const messageDiv = document.createElement('div');
                    messageDiv.classList.add('message', `${msg.sender}-message`);
                    messageDiv.textContent = msg.text;
                    chatbotMessages.appendChild(messageDiv);
                });
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        }

        chatbotSendButton.addEventListener('click', sendMessage);

        chatbotInputField.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });

        // Cargar el historial al iniciar
        loadChatHistory();

        // NOTA IMPORTANTE PARA LA INTEGRACIÓN DE IA REAL:
        // Para conectar este chatbot a una API de IA real (como ChatGPT de OpenAI o Gemini de Google),
        // normalmente necesitarías un componente del lado del servidor.
        // 1. Tu JavaScript del lado del cliente (este archivo) enviaría el mensaje del usuario a tu servidor.
        // 2. Tu servidor (por ejemplo, Node.js, Python, PHP) realizaría la llamada a la API de OpenAI/Gemini,
        //    utilizando tu clave API de forma segura en el lado del servidor.
        // 3. El servidor recibiría la respuesta de la IA y la enviaría de vuelta a tu JavaScript del lado del cliente.
        // 4. Tu JavaScript del lado del cliente mostraría entonces la respuesta de la IA.
        // Esto evita exponer tu clave API directamente en el navegador.
        // Para una demostración simple, la función `getBotResponse` anterior proporciona respuestas estáticas.
    }
});
