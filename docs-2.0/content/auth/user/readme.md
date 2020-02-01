# Usuario

## Registro

<HttpAction action="POST" api="/api/register" />

Parámetros:

|Parámetro|Requerido|Tipo|Descripción
|-|-|-|-|
|username|Si|String|Nombre de usuario. Máximo 20 caracteres.
|email|Si|String|Correo electrónico. Máximo 80 caracteres.
|password|Si|String|Contraseña. Mínimo 6 caracteres.

Ejemplo de petición:

<<< @/docs/content/auth/data/register.request.json

## Login

<HttpAction action="POST" api="/api/login" />

Parámetros:

|Parámetro|Requerido|Tipo|Descripción
|-|-|-|-|
|username|Si|String|Nombre de usuario. Máximo 20 caracteres.
|password|Si|String|Contraseña. Mínimo 6 caracteres.

Ejemplo de petición:

<<< @/docs/content/auth/data/login.request.json

## Actualizar Perfil

Actualiza el perfil del usuario (nombre de usuario y email).
Solo puede actualizarse si no está en uso el nombre de usuario o email.

<HttpAction action="PUT" api="/api/profile" />

Parámetros:

|Parámetro|Requerido|Tipo|Descripción
|-|-|-|-|
|username|Si|String|Nombre de usuario. Máximo 20 caracteres.
|email|Si|String|Correo electrónico. Máximo 80 caracteres.

Ejemplo de petición:

<<< @/docs/content/auth/data/updateprofile.request.json