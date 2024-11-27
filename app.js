// Establecemos la fecha actual y la variable para controlar la visibilidad de la agenda
let fechaActual = new Date(); // Fecha actual
let agendaVisible = true; // Controla si la agenda está visible

// Datos de citas por día
const citasPorDia = {
  "26-11-2024": [
    { hora: "9:00", texto: "Corte barba<br>Juan Pérez", personal: "Kevin García" },
    { hora: "10:00", texto: "Corte barba<br>Ana González", personal: "Kevin García" },
    { hora: "11:00", texto: "Corte barba<br>Luis Torres", personal: "Kevin García" },
    { hora: "12:00", texto: "Corte barba<br>Daniel Mauna", personal: "Kevin García" },
    { hora: "13:00", texto: "Peinado<br>Marlon Gómez", personal: "Robert Rodríguez" },
    { hora: "14:00", texto: "Peinado<br>Karent Pérez", personal: "Robert Rodríguez" },
    { hora: "15:00", texto: "Manicura<br>Carlos Díaz", personal: "Camilo Ruiz" },
    { hora: "16:00", texto: "Manicura<br>María Fernández", personal: "Camilo Ruiz" },
    { hora: "17:00", texto: "Pedicura<br>Juan López", personal: "Daniel Ramírez" },
    { hora: "18:00", texto: "Pedicura<br>Sofia Pérez", personal: "Daniel Ramírez" },
  ],
  "27-11-2024": [
    { hora: "9:00", texto: "Corte cabello<br>Patricia Gómez", personal: "Angely Martínez" },
    { hora: "10:00", texto: "Peinado<br>Eduardo Sánchez", personal: "Miguel Álvarez" },
    { hora: "11:00", texto: "Maquillaje<br>Rosa Morales", personal: "Luis Torres" },
    { hora: "12:00", texto: "Corte cabello<br>Isabel Castro", personal: "Angely Martínez" },
    { hora: "13:00", texto: "Peinado<br>Laura Martínez", personal: "Miguel Álvarez" },
    { hora: "14:00", texto: "Manicura<br>Teresa Rodríguez", personal: "Luis Torres" },
    { hora: "15:00", texto: "Pedicura<br>Carmen Gómez", personal: "Gian Sánchez" },
    { hora: "16:00", texto: "Pedicura<br>Carla Díaz", personal: "Gian Sánchez" },
    { hora: "17:00", texto: "Corte barba<br>Felipe Ramírez", personal: "Luis Torres" },
    { hora: "18:00", texto: "Corte barba<br>Pedro Hernández", personal: "Luis Torres" },
  ],
  "28-11-2024": [
    { hora: "9:00", texto: "Corte de cabello<br>Mariana García", personal: "Daniel Ramírez" },
    { hora: "10:00", texto: "Peinado<br>Clara Mendoza", personal: "Marlon Gómez" },
    { hora: "11:00", texto: "Corte barba<br>Eduardo Sánchez", personal: "Miguel Álvarez" },
    { hora: "12:00", texto: "Manicura<br>Raquel Fernández", personal: "Robert Rodríguez" },
    { hora: "13:00", texto: "Pedicura<br>Inés González", personal: "Luis Torres" },
    { hora: "14:00", texto: "Maquillaje<br>Marta Pérez", personal: "Karent Pérez" },
    { hora: "15:00", texto: "Pedicura<br>Cristina Sánchez", personal: "Daniel Ramírez" },
    { hora: "16:00", texto: "Peinado<br>Sandra Torres", personal: "Marlon Gómez" },
    { hora: "17:00", texto: "Manicura<br>Carmen López", personal: "Robert Rodríguez" },
    { hora: "18:00", texto: "Corte barba<br>Mario Álvarez", personal: "Miguel Álvarez" },
  ],
  "29-11-2024": [
    { hora: "8:00", texto: "Maquillaje<br>Sofía Pérez", personal: "Gian Sánchez" },
    { hora: "9:00", texto: "Corte cabello<br>Enrique Torres", personal: "Kevin García" },
    { hora: "10:00", texto: "Pedicura<br>Gabriela López", personal: "Karent Pérez" },
    { hora: "11:00", texto: "Manicura<br>Carmen García", personal: "Luis Torres" },
    { hora: "12:00", texto: "Peinado<br>Verónica Pérez", personal: "Marlon Gómez" },
    { hora: "13:00", texto: "Corte barba<br>Hugo Gómez", personal: "Daniel Ramírez" },
    { hora: "14:00", texto: "Corte de cabello<br>Laura González", personal: "Luis Torres" },
    { hora: "15:00", texto: "Peinado<br>Elena Martínez", personal: "Karent Pérez" },
    { hora: "16:00", texto: "Maquillaje<br>Alicia Sánchez", personal: "Gian Sánchez" },
    { hora: "17:00", texto: "Pedicura<br>Patricia Díaz", personal: "Marlon Gómez" },
  ],
  "30-11-2024": [
    { hora: "9:00", texto: "Corte de cabello<br>José Rodríguez", personal: "Juan Pérez" },
    { hora: "10:00", texto: "Manicura<br>Raquel Jiménez", personal: "Ana González" },
    { hora: "11:00", texto: "Pedicura<br>Clara García", personal: "Pedro Rodríguez" },
    { hora: "12:00", texto: "Corte de cabello<br>Andrés López", personal: "Jaime Fernández" },
    { hora: "13:00", texto: "Pedicura<br>Elena Sánchez", personal: "Pedro Rodríguez" },
    { hora: "14:00", texto: "Peinado<br>Sergio Díaz", personal: "Rodrigo Martínez" },
    { hora: "15:00", texto: "Tinte de cabello<br>Marta Gómez", personal: "Rodrigo Martínez" },
    { hora: "16:00", texto: "Manicura<br>Elena Ruiz", personal: "Ana González" },
    { hora: "17:00", texto: "Corte barba<br>Miguel Torres", personal: "Jaime Fernández" },
    { hora: "18:00", texto: "Pedicura<br>Sonia González", personal: "Pedro Rodríguez" },
  ]
};


// Función para renderizar el calendario del mes
function renderizarCalendario() {
  const mesAño = document.getElementById("mesAño"); // Elemento donde se muestra el mes y año
  const diasCalendario = document.getElementById("diasCalendario"); // Elemento donde se muestran los días
  const mes = fechaActual.getMonth(); // Obtener el mes actual
  const año = fechaActual.getFullYear(); // Obtener el año actual

  // Mostramos el mes y el año en la cabecera
  mesAño.textContent = `${fechaActual.toLocaleString("default", {
    month: "long",
  })} ${año}`;

  const primerDia = new Date(año, mes, 1).getDay(); // Primer día del mes
  const ultimoDia = new Date(año, mes + 1, 0).getDate(); // Último día del mes

  diasCalendario.innerHTML = ""; // Limpiamos el contenido previo del calendario

  // Creamos celdas vacías antes del primer día del mes
  for (let i = 0; i < primerDia; i++) {
    const divVacio = document.createElement("div");
    diasCalendario.appendChild(divVacio); // Añadimos celdas vacías antes del primer día
  }

  // Creamos las celdas de los mnombres de los días del mes
  for (let dia = 1; dia <= ultimoDia; dia++) {
    const diaDiv = document.createElement("div");
    diaDiv.textContent = dia; // Agregamos el número del día
    diaDiv.onclick = () => abrirCalendario(dia, mes + 1, año); // Se pasa el día, mes y año

    // Resaltamos el día actual
    if (
      dia === new Date().getDate() &&
      mes === new Date().getMonth() &&
      año === new Date().getFullYear()
    ) {
      diaDiv.id = "hoy"; // Le asignamos un ID especial para destacar el día
    }

    diasCalendario.appendChild(diaDiv); // Añadimos el día al calendario
  }

  // Añadimos celdas vacías para completar la cuadrícula del calendario
  const totalCeldas = primerDia + ultimoDia;
  const celdasRestantes = 42 - totalCeldas;

  // Creamos celdas vacías para completar las filas del calendario
  for (let i = 0; i < celdasRestantes; i++) {
    const divVacio = document.createElement("div");
    diasCalendario.appendChild(divVacio);
  }
}

// Función para cambiar el mes mostrado (adelante o atrás)
function cambiarMes(desplazamiento) {
  fechaActual.setMonth(fechaActual.getMonth() + desplazamiento); // Aumentamos o disminuimos el mes
  renderizarCalendario(); // Vuelvo a renderizar el calendario con el nuevo mes
}

// Función para abrir el calendario cuando se hace clic en un día
function abrirCalendario(dia, mes, año) {
  const fechaClave = formatDate(dia, mes, año);
  const citas = citasPorDia[fechaClave] || []; // Buscamos las citas de ese día
  renderizarAgenda(citas, dia, mes, año); // Renderizamos la agenda con las citas

  // Controlamos la visibilidad de la agenda
  const agenda = document.getElementById("agenda");
  const agendaGrid = document.getElementById("agendaGrid");

  // Ocultar el mensaje inicial y mostrar la agenda
  agendaGrid.style.display = "grid"; // Mostramos la agenda
  agenda.style.display = "block"; // Mostramos el contenedor de la agenda
  agendaVisible = true; // Marcamos que la agenda está visible
}

// Función para formatear las fechas en formato 'dd-mm-aaaa'
function formatDate(dia, mes, año) {
  return `${String(dia).padStart(2, "0")}-${String(mes).padStart(
    2,
    "0"
  )}-${año}`;
}
// Función para determinar cuántos días mostrar en el calendario según el tamaño de la pantalla
function getPersonalAMostrar() {
  if (window.innerWidth <= 995) return 3;
  if (window.innerWidth <= 1059) return 4;
  if (window.innerWidth <= 1221) return 5;
  if (window.innerWidth <= 1258) return 6;
  return 6; // si no esta enre esos rangos se pone por defecto mostramos 6 días
}

function renderizarAgenda(citas, dia, mes, año) {
  const agendaGrid = document.getElementById("agendaGrid");
  agendaGrid.innerHTML = ""; // Limpiamos la agenda actual

  const horas = [
    "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00",
  ];

  // Creamos la celda de 'HORARIO' en la primera fila
  agendaGrid.appendChild(createCell("HORARIO", "headerCelda"));

  // Obtener la lista de personal para este día
  const personalUnico = [...new Set(citas.map((cita) => cita.personal))];

  const personalAMostrar = getPersonalAMostrar(); // Obtén el número de personal a mostrar

  // Limitar el número de personal visible según el número máximo
  const personalVisible = personalUnico.slice(0, personalAMostrar);

  // Si el número de personal es menor que el máximo de columnas, completamos con "Staff no definido"
  const cantidadFaltante = personalAMostrar - personalVisible.length;
  const personalConStaffNoDefinido = [
    ...personalVisible,
    ...Array(cantidadFaltante).fill("Staff no definido"),
  ];

  // Mostrar el personal como encabezados, o "Staff no definido" si no hay suficiente personal
  personalConStaffNoDefinido.forEach((nombrePersonal) => {
    const cell = createCell(nombrePersonal, "headerCelda");
    agendaGrid.appendChild(cell);
  });

  // Recorremos las horas y mostramos las citas por personal
  horas.forEach((hour) => {
    agendaGrid.appendChild(createCell(hour, "celdaTiempo")); // Añadimos la columna de horas

    personalConStaffNoDefinido.forEach((nombrePersonal) => {
      if (nombrePersonal === "Staff no definido") {
        // Si es "Staff no definido", dejamos la celda vacía o con un texto de aviso
        const cell = createCell("", "diaCelda");
        agendaGrid.appendChild(cell); // Insertar celda vacía para esa hora
      } else {
        // Si hay citas, buscamos las citas para este personal en esta hora
        const cita = citas.find((c) => c.hora === hour && c.personal === nombrePersonal);

        // Si encontramos una cita, formateamos el texto
        const textoCita = cita
          ? cita.texto.includes(" - ")
            ? `${cita.texto.split(" - ")[0]}<br>${cita.texto.split(" - ")[1]}`
            : cita.texto // Si no tiene " - ", mostramos el texto completo sin cambio
          : ""; // Si no hay cita, dejamos la celda vacía

        const cell = createCell("", "diaCelda");

        if (cita) {
          cell.classList.add("cita"); // Agregar la clase "cita" si hay una cita
          cell.style.backgroundColor = "#A88B73"; // Estilo para citas
          cell.innerHTML = textoCita; // Usamos innerHTML para renderizar el <br> correctamente
        }

        agendaGrid.appendChild(cell); // Insertar la celda de citas o vacía
      }
    });
  });
}






// Función para actualizar la agenda al hacer clic en un día
function actualizarAgenda(dia, mes, año) {
  const fechaClave = formatDate(dia, mes, año);
  const citas = citasPorDia[fechaClave] || [];
  renderizarAgenda(citas, dia, mes, año); //  // Actualizamos la agenda con las citas de ese día
}

// Función para crear una celda de la agenda
function createCell(text, className) {
  const cell = document.createElement("div");
  cell.className = `celda ${className}`;
  cell.textContent = text;
  return cell;
}

// Evento que cierra la agenda si se hace clic fuera de ella
document.addEventListener("click", function (event) {
  const agenda = document.getElementById("agenda");
  const calendarioDiv = document.getElementById("diasCalendario");
  const mensajeInicial = document.getElementById("mensajeInicial");
  const agendaGrid = document.getElementById("agendaGrid");

  // Verifica si el clic es fuera del calendario y de la agenda
  if (
    agendaVisible &&
    !agenda.contains(event.target) &&
    !calendarioDiv.contains(event.target)
  ) {
    agendaGrid.style.display = "none"; // Ocultamos la agenda
    mensajeInicial.style.display = "block"; // Mostramos el mensaje inicial
    agendaVisible = false; // Marcamos que la agenda no está visible
  }
});

// Prevenir que el clic en los días de la agenda cierre el modal
document
  .getElementById("agendaGrid")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Esto evita que el clic en la agenda se propague al evento de cierre del modal
  });

window.addEventListener("resize", function () {
  if (agendaVisible) {
    const diaSeleccionado = fechaActual.getDate(); // Obtiene el día seleccionado
    const mesSeleccionado = fechaActual.getMonth() + 1; // Obtiene el mes seleccionado (sumando 1 porque los meses en JavaScript comienzan desde 0)
    const añoSeleccionado = fechaActual.getFullYear(); // Obtiene el año seleccionado

    // Vuelve a renderizar la agenda con la fecha actual seleccionada
    renderizarAgenda([], diaSeleccionado, mesSeleccionado, añoSeleccionado);
  }
});

// Evento que se ejecuta cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  renderizarCalendario(); // Inicializa el calendario al cargar la página

  const agenda = document.getElementById("agenda"); // Obtiene el contenedor de la agenda
  const mensajeInicial = document.getElementById("mensajeInicial"); // Obtiene el mensaje inicial
  const agendaGrid = document.getElementById("agendaGrid"); // Obtiene la cuadrícula de la agenda

  // Muestra el mensaje inicial y oculta la agenda al cargar la página
  agenda.style.display = "block"; // Muestra el contenedor de la agenda
  mensajeInicial.style.display = "block"; // Muestra el mensaje inicial
  agendaGrid.style.display = "none"; // Oculta la cuadrícula de la agenda
});
