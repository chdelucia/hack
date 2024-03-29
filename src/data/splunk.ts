export const blog = 
`
<h2>Que es un SIEM</h2>

<p> ¿Qué es un sistema SIEM? La información sobre seguridad y gestión de eventos o SIEM (Security Information and Event Management) es un sistema de seguridad que persigue proporcionar a las empresas una respuesta rápida y precisa para detectar y responder ante cualquier amenaza sobre sus sistemas informáticos.
En palabras humanas un dashboard bonito que registra en un unico sitio todo lo que pasa en la red, o en la web, o en el servicio que quieras.
A partir de ahi puedes configurar avisos por sms o email u otras acciones.</p>

<h2> Empezamos al turrón!</h2>

<blockquote>
    Pre-requisitos: <br>
        · Instalar Splunk en tu entorno favorito.<br>
        · Connectarte con tus credenciales en: http://localhost:8000/<br>
        · Descarga la tutorial data de la web oficial: <a target="_blank" href="https://docs.splunk.com/Documentation/Splunk/8.2.6/SearchTutorial/Systemrequirements#Download_the_tutorial_data_files">Splunk tutorial Data</a>
</blockquote>


<h4>Paso 1: Añadir los datos</h4>
<p> Una vez todo instalado vereís la pantalla que se muestra justo debajo. Aqui tendremos que seleccionar la opcion 
<strong>"Add Data"</strong> que viene del ingles y su traducción seria
"vamos a darle un poco de chicha al programita que lo veo mas parao que un molinillo de viento el 24 de Agosto en el centro de Graná".<br>
Después pincharemos en <strong>"Upload" (imangen 2) y subimos el ZIP completo</strong>
</p> 
<img class="responsive" src="./assets/img/splunk1.PNG">
<img class="responsive" src="./assets/img/splunk2.PNG">

<h4>Paso 2: Configuración</h4>

<p>Antes de darle next next como locos QUIETOS PARAOS! hay que configurar una cosilla como se muestra en la siguiente foto.<br>
Seleccionamos la opción <strong>Segment in path</strong> con la opción a 1. Y ahora SI! next next next... y por ultima el botoncito verde empezar a buscar.
</p>
<img class="responsive" src="./assets/img/splunk3.PNG">
<img class="responsive" src="./assets/img/splunk4.PNG">

<h4>Paso 3: Empieza lo bueno</h4>
<p>Ya tenemos todos los datos cargados solo tenemos que recordar el nombre de nuestro zip para acceder a los datos de búsqueda <strong>source="tutorialdata.zip:*"</strong>
<br><br>
A partir de aqui existen 1 millon de combinaciones posibles para buscar información, y como es muy dificil explicarlo escrito he creado un video explicando muy rápidamente los conceptos generales.
<br><br>
<iframe width="935" height="526" src="https://www.youtube.com/embed/rpWYXp2u2aQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>


</p>



`