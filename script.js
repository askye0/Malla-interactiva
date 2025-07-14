const cursos = [
  { id: 1, nombre: "English I", semestre: 1, desbloquea: [7] },
  { id: 2, nombre: "Matemática", semestre: 1, desbloquea: [25, 30] },
  { id: 3, nombre: "Lenguaje y Comunicación", semestre: 1, desbloquea: [8] },
  { id: 4, nombre: "Fundamentos en Competencias Digitales", semestre: 1, desbloquea: [] },
  { id: 5, nombre: "Expresión Gráfica Analógica I", semestre: 1, desbloquea: [9] },
  { id: 6, nombre: "Taller de Diseño I: Elementos", semestre: 1, desbloquea: [10] },

  { id: 7, nombre: "English II", semestre: 2, desbloquea: [13] },
  { id: 8, nombre: "Lenguaje y Comunicación II", semestre: 2, desbloquea: [] },
  { id: 9, nombre: "Expresión Gráfica Analógica II", semestre: 2, desbloquea: [24] },
  { id: 10, nombre: "Taller de Diseño II: Elementos", semestre: 2, desbloquea: [14] },
  { id: 11, nombre: "Realidad Nacional y Globalización", semestre: 2, desbloquea: [12] },
  { id: 12, nombre: "Ética y Ciudadanía", semestre: 3, desbloquea: [15] },

  { id: 13, nombre: "English III", semestre: 3, desbloquea: [16] },
  { id: 14, nombre: "Taller de Diseño III: Sistemas", semestre: 3, desbloquea: [18] },
  { id: 15, nombre: "Fundamentos del Liderazgo Sostenible", semestre: 4, desbloquea: [] },
  { id: 16, nombre: "English IV", semestre: 4, desbloquea: [] },
  { id: 17, nombre: "Administración para los Negocios", semestre: 3, desbloquea: [27] },
  { id: 18, nombre: "Taller de Diseño IV: Espacios Urbanos y Territoriales", semestre: 4, desbloquea: [28] },
  { id: 19, nombre: "Procesos de la Arquitectura I", semestre: 3, desbloquea: [20] },
  { id: 20, nombre: "Procesos de la Arquitectura II", semestre: 4, desbloquea: [35, 40] },
  { id: 21, nombre: "Construcción I", semestre: 4, desbloquea: [22] },
  { id: 22, nombre: "Construcción II", semestre: 5, desbloquea: [29] },
  { id: 23, nombre: "Expresión Gráfica Analógica III", semestre: 3, desbloquea: [26] },

  { id: 24, nombre: "Expresión Gráfica Digital I", semestre: 5, desbloquea: [31] },
  { id: 25, nombre: "Estadística Descriptiva e Inferencia Estadística", semestre: 5, desbloquea: [32] },
  { id: 26, nombre: "Expresión Gráfica Digital II", semestre: 6, desbloquea: [] },
  { id: 27, nombre: "Marketing", semestre: 5, desbloquea: [33] },
  { id: 28, nombre: "Taller de Diseño V: Ciudades", semestre: 5, desbloquea: [34] },
  { id: 29, nombre: "Estructuras I", semestre: 6, desbloquea: [36] },
  { id: 30, nombre: "Sist. Inf. Geografía y Topografía", semestre: 6, desbloquea: [] },
  { id: 31, nombre: "Estructuras II", semestre: 7, desbloquea: [42] },
  { id: 32, nombre: "Metodología de la Investigación Científica", semestre: 6, desbloquea: [48] },
  { id: 33, nombre: "Oportunidades de Negocios", semestre: 6, desbloquea: [] },
  { id: 34, nombre: "Taller de Diseño VI: Urbanismo", semestre: 6, desbloquea: [37] },

  { id: 35, nombre: "Procesos de la Arquitectura Peruana", semestre: 7, desbloquea: [] },
  { id: 36, nombre: "Normatividad y Gestión", semestre: 7, desbloquea: [] },
  { id: 37, nombre: "Taller de Diseño VII: Territorios", semestre: 7, desbloquea: [43] },
  { id: 38, nombre: "Urban Historical Processes", semestre: 7, desbloquea: [41] },
  { id: 39, nombre: "Sociedad, Ciudad y Territorio I", semestre: 7, desbloquea: [44] },

  { id: 40, nombre: "Diseño Urbano", semestre: 8, desbloquea: [] },
  { id: 41, nombre: "Arquitectura y Medioambiente", semestre: 8, desbloquea: [46] },
  { id: 42, nombre: "Gestión en la Construcción", semestre: 8, desbloquea: [] },
  { id: 43, nombre: "Taller de Diseño VIII: Infraestructura", semestre: 8, desbloquea: [45, 47] },
  { id: 44, nombre: "Sociedad, Ciudad y Territorio II", semestre: 8, desbloquea: [49] },

  { id: 45, nombre: "Taller de Diseño IX: Proyecto de Tesis", semestre: 9, desbloquea: [51] },
  { id: 46, nombre: "Sostenibilidad y Vivienda Social", semestre: 9, desbloquea: [50] },
  { id: 47, nombre: "Seminario de Investigación y Tesis", semestre: 9, desbloquea: [] },
  { id: 48, nombre: "Seminario de Sostenibilidad Urbana", semestre: 10, desbloquea: [] },
  { id: 49, nombre: "Megaproyectos", semestre: 9, desbloquea: [52, 53] },

  { id: 50, nombre: "Seminario de Sostenibilidad Urbana", semestre: 10, desbloquea: [] },
  { id: 51, nombre: "Proyecto Integrador", semestre: 10, desbloquea: [] },
  { id: 52, nombre: "Real Estate Marketing", semestre: 10, desbloquea: [] },
  { id: 53, nombre: "Visión Geopolítica", semestre: 10, desbloquea: [] },
];

// Mostrar los cursos por semestre
const contenedor = document.getElementById("malla");
for (let s = 1; s <= 10; s++) {
  const bloque = document.createElement("div");
  const titulo = document.createElement("h2");
  titulo.textContent = `📚 Semestre ${s}`;
  titulo.style.margin = "25px 0 10px";
  bloque.appendChild(titulo);

  const cursosDelSemestre = cursos.filter(c => c.semestre === s);
  const fila = document.createElement("div");
  fila.className = "contenedor-malla";

  cursosDelSemestre.forEach(curso => {
    const div = document.createElement("div");
    div.textContent = curso.nombre;
    div.className = "curso bloqueado";
    div.id = "curso" + curso.id;
    fila.appendChild(div);
  });

  bloque.appendChild(fila);
  contenedor.appendChild(bloque);
}

// Activar los cursos iniciales (sin prerrequisitos)
const idsDesbloqueados = new Set(cursos.flatMap(c => c.desbloquea));
cursos.forEach(curso => {
  if (!idsDesbloqueados.has(curso.id)) {
    const div = document.getElementById("curso" + curso.id);
    div.classList.remove("bloqueado");
    div.classList.add("desbloqueado");
  }
});

// Funcionalidad de clic
document.querySelectorAll(".curso").forEach(curso => {
  curso.addEventListener("click", () => {
    if (!curso.classList.contains("desbloqueado")) return;

    curso.classList.remove("desbloqueado");
    curso.classList.add("aprobado");

    const idCurso = parseInt(curso.id.replace("curso", ""));
    const cursoData = cursos.find(c => c.id === idCurso);

    cursoData.desbloquea.forEach(idDesbloqueado => {
      const siguiente = document.getElementById("curso" + idDesbloqueado);
      if (siguiente.classList.contains("bloqueado")) {
        siguiente.classList.remove("bloqueado");
        siguiente.classList.add("desbloqueado");
      }
    });
  });
});
