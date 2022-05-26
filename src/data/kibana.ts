export const blog =
`
<p><b>Kibana</b> Se trata de un sistema de detección de intrusiones IDS / IPS cuyo motor está basado en Suricata</p>
<br><br>


<h3>Objetivos</h3>
En esta práctica de laboratorio, analizará registros durante un explotamiento malicioso de vulnerabilidades HTTP y DNS documentadas.
<blockquote>
Parte 1: Investigar un ataque de Inyección SQL<br>
Parte 2: Investigar la exfiltración de datos DNS<br>
</blockquote>

<h3>Antecedentes / Escenario</h3>
<p>MySQL es una base de datos popular que utilizan numerosas aplicaciones web. Desafortunadamente, la Inyección SQL es una técnica de hacking web común. Es una técnica de inyección de código en la que un atacante ejecuta comandos SQL maliciosos para controlar el servidor de bases de datos de una aplicación web.
Los servidores de nombres de dominio (Domain Name Servers, DNS) son directorios de nombres de dominio y traducen los nombres de dominio a direcciones IP. Este servicio puede utilizarse para exfiltrar datos. 
El personal de ciberseguridad ha determinado que una vulnerabilidad ha ocurrido, y los datos que contienen PII pueden haber estado expuestos a agentes de amenazas En este laboratorio, utilizará Kibana para investigar las vulnerabilidades para determinar los datos que se exfiltraron utilizando HTTP y DNS durante los ataques.
</p>


<h3>Al turrón!</h3>
<p>Abrimos Kibana filtramos en el menu lateral por HTTP. y nos vamos abajo del todo para ver los logs</p>
<img src="./assets/img/kibana1.png">
<img src="./assets/img/kibana2.png">

<p>Clickamos en el id del registro para abrir el log y ver el slq injection union</p>
<img src="./assets/img/kibana3.png">

<p>En el mismo archivo podemos ver la respuesta del servidor con todos los users y pwd</p>
<img src="./assets/img/kibana4.png">

<p>Nos ponemos encima de IP origen y con boton derecho abrimos Kibana y cambiamos la fecha a todos los tiempos para analizar paquetes FTP</p>


<h2>Parte 2: Analice la exfiltración de DNS.</h2>

<p>Para esta parte volvemos a la home de kibana y filtramos por DNS. Si vamso bajando viendo los diferentes graficos podemos ver que no tenemos alertas de pishing pero
si tenemos envio de informacion con subdominios.</p>
<img src="./assets/img/dnspishing1.png">
<img src="./assets/img/dnspishing2.png">

<p>Siguiente paso es analizar esta fuga de información mediante subdominios falsos. Intentamos decodificar la info que se ha mandado</p>
<img src="./assets/img/dnspishing3.png">

<p>Esta vez la codificación es facil y obtenemos el mensaje:</p>
<pre>CONFIDENTIAL DOCUMENT
NO COMPARTIR
Este documento contiene información sobre la última brecha de seguridad.
</pre>
`