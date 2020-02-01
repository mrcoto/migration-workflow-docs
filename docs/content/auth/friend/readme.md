# Amigos

## Añadir Amigo

<HttpAction action="POST" api="/api/friend" />

Parámetros:

|Parámetro|Requerido|Tipo|Descripción
|-|-|-|-|
|friend_id|Si|Int|Id del amigo (usuario)

Ejemplo de petición:

<<< @/docs/content/auth/data/friend.request.json

## Eliminar Amigo

Solo puedes eliminar un amigo si pertenece a tu lista de amigos.

<HttpAction action="DELETE" api="/api/friend/{id}" />

## Lista de Amigos

<HttpAction action="GET" api="/api/friend" />