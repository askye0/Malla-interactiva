// Mapa de dependencias const dependencias = { // Inglés curso1: ["curso7"],             // English I ➝ English II curso7: ["curso13"],            // English II ➝ English III curso13: ["curso19"],           // English III ➝ English IV

// Lenguaje y comunicación curso3: ["curso9"],             // Lenguaje y Comunicación I ➝ II

// Expresión gráfica curso5: ["curso11"],            // Analógica I ➝ II curso11: ["curso17"],           // Analógica II ➝ III curso17: ["curso28"],           // Analógica III ➝ Digital I curso28: ["curso34"],           // Digital I ➝ Digital II

// Taller de diseño curso6: ["curso12"],            // Taller I ➝ II curso12: ["curso18"],           // Taller II ➝ III curso18: ["curso24"],           // Taller III ➝ IV curso24: ["curso30"],           // Taller IV ➝ V curso30: ["curso36"],           // Taller V ➝ VI curso36: ["curso42"],           // Taller VI ➝ VII curso42: ["curso48"],           // Taller VII ➝ VIII curso48: ["curso54", "curso53"],// Taller VIII ➝ IX y Seminario de Investigación curso54: ["curso60"],           // Taller IX ➝ Proyecto Integrador

// Construcción y estructuras curso23: ["curso29"],           // Construcción I ➝ II curso29: ["curso35"],           // Construcción II ➝ Estructuras I curso35: ["curso41"],           // Estructuras I ➝ Estructuras II curso41: ["curso47"],           // Estructuras II ➝ Gestión en la Construcción

// Arquitectura curso16: ["curso22"],           // Procesos I ➝ Procesos II curso22: ["curso40", "curso38"],// Procesos II ➝ Arquitectura Peruana y Urban Historical curso46: ["curso52"],           // Arquitectura y Medioambiente ➝ Sostenibilidad y Vivienda Social

// Sociedad y territorio curso8: ["curso14"],            // Realidad Nacional ➝ Ética curso14: ["curso20"],           // Ética ➝ Liderazgo Sostenible curso39: ["curso45"],           // Sociedad y Territorio I ➝ II curso45: ["curso51"],           // Sociedad y Territorio II ➝ Megaproyectos

// Matemática y estadística curso2: ["curso25", "curso33"], // Matemática ➝ Estadística e InfoGeografía curso25: ["curso31"],           // Estadística ➝ Metodología

// Negocios y marketing curso15: ["curso27"],           // Administración ➝ Marketing curso21: ["curso32"],           // Economía ➝ Oportunidades de Negocios curso26: ["curso32"],           // Contabilidad ➝ Oportunidades de Negocios curso27: ["curso32"],           // Marketing ➝ Oportunidades de Negocios

// Otros curso10: ["curso46"],           // Territorio y Hábitat ➝ Arquitectura y Medioambiente curso38: ["curso44"],           // Urban Historical ➝ Diseño Urbano curso51: ["curso59", "curso57"],// Megaproyectos ➝ Real Estate y Geopolítica curso52: ["curso58"]            // Sostenibilidad y Vivienda ➝ Seminario de Sostenibilidad Urbana };

// Función para desbloquear cursos function desbloquear(td) { if (td.classList.contains("desbloqueado")) return; td.classList.add("desbloqueado"); td.innerText = "Desbloqueado ✅";

const id = td.id; if (dependencias[id]) { dependencias[id].forEach(depId => { const siguiente = document.getElementById(depId); if (siguiente && !siguiente.classList.contains("desbloqueado")) { siguiente.classList.remove("bloqueado"); siguiente.innerText = "Bloqueado 🔒 (Click para desbloquear)"; siguiente.style.opacity = 1; } }); } }

// Estilo inicial para cursos bloqueados window.onload = function () { const tds = document.querySelectorAll("td[id^='curso']"); tds.forEach(td => { td.classList.add("bloqueado"); td.innerText = "Bloqueado 🔒"; td.style.opacity = 0.5; }); };

