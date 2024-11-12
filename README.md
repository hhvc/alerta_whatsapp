# Alerta WhatsApp

Este es un script sencillo para enviar una cantidad definida de mensajes automáticos en una conversación de WhatsApp Web, ideal para emitir alertas o notificaciones repetitivas.

## 🚀 Características

- Envío de mensajes automáticos en WhatsApp Web.
- Personalización del mensaje, cantidad de envíos y tiempo entre cada mensaje.

## 📋 Requisitos

1. **WhatsApp Web**: Accede a WhatsApp Web en tu navegador y abre la conversación donde deseas enviar los mensajes.
2. **Navegador Web**: Se recomienda usar Chrome o Firefox para facilitar la ejecución del script.

## 🛠 Instrucciones de Uso

1. Abre [WhatsApp Web](https://web.whatsapp.com/) e inicia sesión.
2. Abre la conversación a la cual deseas enviar los mensajes.
3. Abre la **Consola de Desarrollador** en el navegador:
   - **Chrome**: `Ctrl + Shift + J` (Windows/Linux) o `Cmd + Option + J` (Mac).
   - **Firefox**: `Ctrl + Shift + K` (Windows/Linux) o `Cmd + Option + K` (Mac).
4. **Permitir pegado en la consola**:
   - En navegadores como Firefox, escribe `permitir pegado` en la consola para habilitar la opción de pegar el script.
5. Pega el código del script en la consola y presiona **Enter**.

## ⚙️ Configuración

Antes de ejecutar el script, puedes personalizar los siguientes parámetros dentro del código:

- **maxAlertas**: Define la cantidad de mensajes que deseas enviar.
- **intervalo**: Ajusta el tiempo (en milisegundos) entre cada mensaje.
- **mensaje**: Cambia el texto del mensaje si es necesario.

Ejemplo de llamada:
```javascript
enviarAlertasEstafa(10, "Alerta de estafa n°", 5000);

## 🚧 Notas

- **Limitaciones del Navegador**: Algunos navegadores pueden bloquear scripts por seguridad. Asegúrate de habilitar la ejecución de scripts si es necesario.
- **Consideraciones de Uso**: Este script es solo para uso personal y no debe utilizarse para spam o usos indebidos que vayan en contra de los términos de servicio de WhatsApp.