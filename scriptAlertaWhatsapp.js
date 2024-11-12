// Variables configurables
const MensajeAEnviar = "Alerta de estafa n°"; // Mensaje base que se enviará
const CantidadMensajesAEnviar = 10; // Número total de mensajes a enviar
const TiempoEnMilisegundosEntreMensajeYMensaje = 5000; // Intervalo entre mensajes en milisegundos

// Función principal
async function enviarAlertasEstafa() {
  const main =
    document.querySelector("#main") || document.querySelector("._3FRCZ");
  if (!main) {
    console.error("No se encontró el elemento principal del chat (#main)");
    return;
  }

  const textarea =
    main.querySelector(`div[contenteditable="true"]`) ||
    document.querySelector("._3uMse");
  if (!textarea) {
    console.error("No se encontró el área de texto para escribir mensajes.");
    return;
  }

  for (let alertaNumero = 1; alertaNumero <= CantidadMensajesAEnviar; alertaNumero++) {
    const mensaje = `${MensajeAEnviar} ${alertaNumero}`;

    textarea.focus();
    document.execCommand("insertText", false, mensaje);
    textarea.dispatchEvent(new Event("input", { bubbles: true }));

    await new Promise((resolve) => setTimeout(resolve, 100));

    const botonEnviar = main
      .querySelector(`button span[data-icon="send"]`)
      ?.closest("button");
    if (!botonEnviar) {
      console.error("No se encontró el botón de enviar.");
      return;
    }

    botonEnviar.click();
    console.log(`Mensaje enviado: ${mensaje}`);

    await new Promise((resolve) => setTimeout(resolve, TiempoEnMilisegundosEntreMensajeYMensaje));
  }
}

// Llama a la función para enviar los mensajes o alertas
enviarAlertasEstafa();
