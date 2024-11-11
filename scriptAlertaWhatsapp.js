async function enviarAlertasEstafa(maxAlertas = 10) {
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

  for (let alertaNumero = 1; alertaNumero <= maxAlertas; alertaNumero++) {
    const mensaje = `Alerta de estafa n° ${alertaNumero}`;

    textarea.focus();
    document.execCommand("insertText", false, mensaje);
    textarea.dispatchEvent(new Event("input", { bubbles: true }));

    // Esperamos para que el botón de enviar aparezca en caso de que sea necesario
    await new Promise((resolve) => setTimeout(resolve, 100));

    const botonEnviar = main
      .querySelector(`button span[data-icon="send"]`)
      ?.closest("button");
    if (!botonEnviar) {
      console.error("No se encontró el botón de enviar.");
      return;
    }

    // Hacemos clic en el botón de enviar
    botonEnviar.click();

    console.log(`Mensaje enviado: ${mensaje}`);

    // Esperamos 5 segundos antes de enviar la siguiente alerta
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}

enviarAlertasEstafa(10); // Cambia el número 10 por la cantidad de alertas que desees enviar
