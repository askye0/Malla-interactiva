// Lista de cursos con nombres y relaciones
const cursos = [
  { id: 1, nombre: "English I", desbloquea: [7] },
  { id: 2, nombre: "Matemática", desbloquea: [25, 33] },
  { id: 3, nombre: "Lenguaje y Comunicación", desbloquea: [9] },
  { id: 4, nombre: "Fundamentos en Competencias Digitales", desbloquea: [] },
  { id: 5, nombre: "Expresión Gráfica Analógica I", desbloquea: [11] },
  { id: 6, nombre: "Taller de Diseño I: Elementos", desbloquea: [12] },
  { id: 7, nombre: "English II", desbloquea: [13] },
  { id: 8, nombre: "Realidad Nacional y Globalización", desbloquea: [14] },
  { id: 9, nombre: "Lenguaje y Comunicación II", desbloquea: [] },
  { id: 10, nombre: "Territorio y Hábitat Sostenible", desbloquea: [46] },
  { id: 11, nombre: "Expresión Gráfica Analógica II", desbloquea: [17] },
  { id: 12, nombre: "Taller de Diseño II: Elementos", desbloquea: [18] },
  { id: 13, nombre: "English III", desbloquea: [19] },
  { id: 14, nombre: "Ética y Ciudadanía", desbloquea: [20] },
  { id: 15, nombre: "Administración para los Negocios", desbloquea: [27] },
  { id: 16, nombre: "Procesos de la Arquitectura I", desbloquea: [22] },
  { id: 17, nombre: "Expresión Gráfica Analógica III", desbloquea: [28] },
  { id: 18, nombre: "Taller de Diseño III: Sistemas", desbloquea: [24] },
  { id: 19, nombre: "English IV", desbloquea: [] },
  { id: 20, nombre: "Fundamentos del Liderazgo Sostenible", desbloquea: [] },
  { id: 21, nombre: "Principios de Economía", desbloquea: [32] },
  { id: 22, nombre: "Procesos de la Arquitectura II", desbloquea: [40, 38] },
  { id: 23, nombre: "Construcción I", desbloquea: [29] },
  { id: 24, nombre: "Taller de Diseño IV: Espacios Urbanos y Territoriales", desbloquea: [30] },
  { id: 25, nombre: "Estadística Descriptiva e Inferencia Estadística", desbloquea: [31] },
  { id: 26, nombre: "Fundamentos Contables y Financieros", desbloquea: [] },
  { id: 27, nombre: "Marketing", desbloquea: [32] },
  { id: 28, nombre: "Expresión Gráfica Digital I", desbloquea: [34] },
  { id: 29, nombre: "Construcción II", desbloquea: [35] },
  { id: 30, nombre: "Taller de Diseño V: Ciudades", desbloquea: [36] },
  { id: 31, nombre: "Metodología de la Investigación Científica", desbloquea: [] },
  { id: 32, nombre: "Oportunidades de Negocios", desbloquea: [] },
  { id: 33, nombre: "Sist. Inf. Geografía y Topografía", desbloquea: [] },
  { id: 34, nombre: "Expresión Gráfica Digital II", desbloquea: [] },
  { id: 35, nombre: "Estructuras I", desbloquea: [41] },
  { id: 36, nombre: "Taller de Diseño VI: Urbanismo", desbloquea: [42] },
  { id: 37, nombre: "Normatividad y Gestión", desbloquea: [] },
  { id: 38, nombre: "Urban Historical Processes", desbloquea: [44] },
  { id: 39, nombre: "Sociedad, Ciudad y Territorio I", desbloquea: [45] },
  { id: 40, nombre: "Procesos de la Arquitectura Peruana", desbloquea: [] },
  { id: 41, nombre: "Estructuras II", desbloquea: [47] },
  { id: 42, nombre: "Taller de Diseño VII: Territorios", desbloquea: [48] },
  { id: 43, nombre: "Electivo 1", desbloquea: [] },
  { id: 44, nombre: "Diseño Urbano", desbloquea: [] },
  { id: 45, nombre: "Sociedad, Ciudad y Territorio II", desbloquea: [51] },
  { id: 46, nombre: "Arquitectura y Medioambiente", desbloquea: [52] },
  { id: 47, nombre: "Gestión en la Construcción", desbloquea: [] },
  { id: 48, nombre: "Taller de Diseño VIII: Infraestructura", desbloquea: [53, 54] },
  { id: 49, nombre: "Electivo 2", desbloquea: [] },
  { id: 50, nombre: "Electivo 3", desbloquea: [] },
  { id: 51, nombre: "Megaproyectos", desbloquea: [59, 57] },
  { id: 52, nombre: "Sostenibilidad y Vivienda Social", desbloquea: [58] },
  { id: 53, nombre: "Seminario de Investigación y Tesis", desbloquea: [] },
  { id: 54, nombre: "Taller de Diseño IX: Proyecto de Tesis", desbloquea: [60] },
  { id: 55, nombre: "Electivo 4", desbloquea: [] },
  { id: 56, nombre: "Electivo 5", desbloquea: [] },
  { id: 57, nombre: "Visión Geopolítica", desbloquea: [] },
  { id: 58, nombre: "Seminario de Sostenibilidad Urbana", desbloquea: [] },
  { id: 59, nombre: "Real Estate Marketing", desbloquea: [] },
  { id: 60, nombre: "Proyecto Integrador", desbloquea: [] }
];

// Crear visualmente los cursos
const malla = document.getElementById("malla");

cursos.forEach(curso => {
  const div = document.createElement("div");
  div.className = "curso bloqueado";
  div.textContent = curso.nombre;
  div.id = "curso" + curso.id;
  malla.appendChild(div);
});

// Lógica de desbloqueo
function desbloquear(id) {
  const curso = cursos.find(c => c.id === id);
  curso.desbloquea.forEach(d => {
    const desbloqueado = document.getElementById("curso" + d);
    if (desbloqueado && !desbloqueado.classList.contains("aprobado")) {
      desbloqueado.classList.remove("bloqueado");
      desbloqueado.classList.add("desbloqueado");
    }
  });
}

// Hacer clic en cursos desbloqueados
document.querySelectorAll(".curso").forEach(div => {
  div.addEventListener("click", () => {
    if (div.classList.contains("desbloqueado")) {
      div.classList.remove("desbloqueado");
      div.classList.add("aprobado");
      const id = parseInt(div.id.replace("curso", ""));
      desbloquear(id);
    }
  });
});

// Activar automáticamente los cursos que nadie los desbloquea
const idsDesbloqueados = new Set(cursos.flatMap(c => c.desbloquea));

cursos.forEach(curso => {
  if (!idsDesbloqueados.has(curso.id)) {
    const div = document.getElementById("curso" + curso.id);
    div.classList.remove("bloqueado");
    div.classList.add("desbloqueado");
  }
});
