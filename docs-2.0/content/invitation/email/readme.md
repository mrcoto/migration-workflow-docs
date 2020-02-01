# Invitación por Correo

## Enviar Email

Envía un correo electrónico a todos los amigos indicados.

<HttpAction action="POST" api="/api/email" />

Parámetros:

|Parámetro|Requerido|Tipo|Descripción
|-|-|-|-|
|title|Si|String|Asunto del correo electrónico. Máximo 100 caracteres.
|message|No|String|Cuerpo del correo electrónico.
|friends|Si|Array|ID de los amigos que recibirán el correo electrónico.

Ejemplo de petición:

<<< @/docs/content/invitation/data/email.request.json