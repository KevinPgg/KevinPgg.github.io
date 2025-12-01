// Inicializar Iconos al principio
lucide.createIcons();

// ==========================================
//  CONFIGURACIÓN INICIAL (EDITA ESTO)
// ==========================================

// 1. FECHA DE INICIO DE LA RELACIÓN
// Formato: Año, Mes (0 = Enero, 5 = Junio), Día
const startDate = new Date(2025, 4, 30,12,0,0);

// 2. LAS CARTAS Y HITOS
const milestones = [
    {
        monthsReq: 6,
        label: '0.6',
        title: 'Nuestros primeros 6 meses',
        content: `Hola mi amor,<br><br>Parece que fue ayer cuando paseamos todo el puerto santa como 3 veces,<br><br>
                    parece que fue ayer cuando cocinamos por primera vez,
                    parece que fue ayer cuando nos dimos nuestro primer beso apasionado,
                    parece que fue ayer cuando conoci a parte de tu linda familia,
                    parece que fue ayer cuando comencé a enamorarme de tí,
                    parece que fue ayer que nos descubrieramos el uno al otro.
                    amor mío parece que fue ayer que te amo más y más, parece que fue ayer cuando no sabía cuanto te amaría mañana.
                    Gracias por todo Alejandra Navia, eres una mujer muy linda e intersante, me encanta tu cuerpo, me encanta tu alma,
                    me encanta tu manera de ser y tu lindura, me encantan tus valores y que reflexiones sin tapujo sobre cosas de importancia,
                    me encanta como al principio decías que no sueles hablar de cosas intimas con nadie pero conmigo fue tan fácil,
                    me encantas tú y solo tú, te adoro mi cachetona/sapa/rata/ratita/chiquistriquis/, hermosa, linda, preciosa, novia mía.`
    },
    {
        monthsReq: 12,
        label: '1.0',
        title: '¡Un Año Juntos!',
        content: `Feliz primer aniversario...`
    },
    {
        monthsReq: 18,
        label: '1.6',
        title: 'Año y medio',
        content: `Seguimos sumando momentos...`
    },
    {
        monthsReq: 24,
        label: '2.0',
        title: 'Dos Años',
        content: `Dos años de aventuras...`
    },
    {
        monthsReq: 36,
        label: '3.0',
        title: 'Tres Años Mágicos',
        content: `Tres años. Wow...`
    },
    {
        monthsReq: 9999,
        label: '∞',
        title: 'Hacia el infinito',
        content: `Y esto apenas comienza...`
    }
];

// ==========================================
//  AQUÍ EDITAS LAS FOTOS DE LA GALERÍA
// ==========================================
// Asegúrate de crear una carpeta llamada 'img' al lado de este archivo index.html
// y pon tus fotos ahí. Luego, escribe sus nombres exactos aquí abajo.
const photoFilenames = [
    'ale.jpg', 'aleyo.jpg','aleyopanora.jpg',
    'aleyotop.jpg', 'canela.jpg', 'payaso.jpg', 'yo.jpg', 'ale-alealesita.jpg',
    'ale-barba.jpg', 'ale-cumple-giftsetup.jpg', 'ale-darkera.jpg',
    'ale-erahumilde.jpg', 'ale-eresrara.jpg', 'aleyo-beforedanny.jpg',
    'ale-floresamarillas.jpg', 'ale-leona.jpg', 'ale-policia.jpg', 'ale-waparubia.jpg',
    'aleyo-caras.jpg', 'aleyo-casares.png', 'aleyo-cochinos2.jpg', 'aleyo-cochinos.jpg',
    'aleyo-cumpleale-loquitos1.jpg', 'aleyo-cumpleale-loquitos2.jpg', 'aleyo-dannyocean.jpg',
    'aleyo-gorra.jpg', 'aleyo-gym.jpg', 'aleyo-happymoment1.jpg', 'aleyo-jejeje-mascarilla.jpg',
    'aleyo-jejeje.jpg', 'aleyo-patos.jpg', 'aleyo-placidez.jpg', 'aleyo-placidez2.jpg',
    'aleyo-portones.jpg', 'aleyo-promise.jpg', 'aleyo-skincare.jpg', 'alyo-casares-6m-muack.jpg',
    'alyo-casares-6m.jpg', 'merhaba.jpg', 'provolatta.jpg', 'suchi.jpg', 'yo-cerofetiche.jpg',
    'yo-corteintento1000.jpg', 'yo-hailhitler.jpg', 'yo-paratisapa2.jpg',
    'yo-paratisapa.jpg', 'yo-pumplips.jpg'
];


// ==========================================
//  LÓGICA DEL PROGRAMA
// ==========================================

// --- LÓGICA DE LA LÍNEA DE TIEMPO (HITOS) ---
const gridContainer = document.getElementById('timeline-grid');
const modal = document.getElementById('letter-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');

function getMonthsPassed(start) {
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += now.getMonth();
    if (now.getDate() < start.getDate()) {
        months--;
    }
    return months;
}

const monthsPassed = getMonthsPassed(startDate);
console.log(`Fecha inicial: ${startDate} - MesesConcurrido: ${monthsPassed}`)
// const monthsPassed = 20; // Descomenta para probar

milestones.forEach((item, index) => {
    const isUnlocked = monthsPassed >= item.monthsReq;

    const card = document.createElement('div');
    card.className = `
                relative p-6 rounded-2xl flex flex-col items-center justify-center gap-3 
                transition-all duration-300 border-2 
                ${isUnlocked
            ? 'bg-white border-rose-300 cursor-pointer hover:scale-105 unlocked-glow text-rose-600'
            : 'bg-gray-100 border-gray-300 cursor-not-allowed text-gray-400 grayscale opacity-80'}
            `;

    const iconHtml = isUnlocked
        ? `<i data-lucide="heart-handshake" class="w-10 h-10 fill-rose-100"></i>`
        : `<i data-lucide="lock" class="w-8 h-8"></i>`;

    const labelHtml = `<span class="text-xl font-bold font-sans">${item.label}</span>`;
    const statusText = isUnlocked ? "Leer Carta" : "A1 miamor u u";

    card.innerHTML = `
                ${iconHtml}
                ${labelHtml}
                <span class="text-xs uppercase tracking-widest">${statusText}</span>
            `;

    if (isUnlocked) {
        card.onclick = () => openModal(item);
    } else {
        card.onclick = () => {
            card.classList.add('animate-pulse');
            setTimeout(() => card.classList.remove('animate-pulse'), 500);
        };
    }

    gridContainer.appendChild(card);
});

// --- LÓGICA DE LA GALERÍA DE FOTOS ---
const galleryContainer = document.getElementById('photo-gallery');

photoFilenames.forEach(filename => {
    const photoContainer = document.createElement('div');
    photoContainer.className = 'photo-container shadow-sm';

    const img = document.createElement('img');
    img.src = `img/${filename}`; // Asume que las fotos están en la carpeta 'img'
    img.alt = filename;
    img.className = 'photo-img';

    // Manejador de error: Si la imagen no carga
    img.onerror = function () {
        this.style.display = 'none'; // Oculta la etiqueta img rota

        // Crea el contenido de fallback
        const fallback = document.createElement('div');
        fallback.className = 'photo-fallback';
        // Usamos un icono de cámara tachada de Lucide
        fallback.innerHTML = `
                    <i data-lucide="camera-off" class="w-8 h-8 mb-2"></i>
                    <span class="text-xs break-all font-sans">${filename}</span>
                `;
        photoContainer.appendChild(fallback);

        // Importante: Re-escanear el DOM para que Lucide renderice el nuevo icono
        lucide.createIcons();
    };

    photoContainer.appendChild(img);
    galleryContainer.appendChild(photoContainer);
});


// --- FUNCIONES GLOBALES Y EFECTOS ---

// Re-inicializar iconos al final de toda la generación de HTML
lucide.createIcons();

function openModal(item) {
    modalTitle.innerText = item.title;
    modalContent.innerHTML = item.content;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function createFallingElements() {
    const container = document.getElementById('background-effects');
    const symbols = ['❤️', '💖', '💌', '💕', '📸', '✨'];

    setInterval(() => {
        const el = document.createElement('div');
        el.classList.add('falling-item');
        el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        el.style.left = Math.random() * 100 + 'vw';
        const duration = Math.random() * 3 + 4;
        el.style.animationDuration = duration + 's';
        el.style.fontSize = (Math.random() * 20 + 15) + 'px';
        container.appendChild(el);
        setTimeout(() => { el.remove(); }, duration * 1000);
    }, 400);
}

createFallingElements();
