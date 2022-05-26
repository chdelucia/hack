export const blog =
`
<p><b>Sguil</b> Se trata de un sistema de detección de intrusiones IDS / IPS cuyo motor está basado en Suricata</p>
<br><br>

<h3>Objetivos</h3>
En esta práctica de laboratorio revisará archivos de registro durante el ataque a una vulnerabilidad documentada para determinar los hosts y el archivo comprometidos.
<blockquote>
Parte 1: Revisar alertas en Sguil<br>
Parte 2: Pivotar a Wireshark<br>
Parte 3: Pivotar a Kibana<br>
</blockquote>

<h3>Antecedentes / Escenario</h3>
Los administradores de TI utilizan el método de 5 tuplas cuando necesitan identificar los requisitos necesarios para crear un entorno de red operativo y seguro. Los componentes de 5-Tuple son los siguientes: la dirección IP y el número de puerto de origen, la dirección IP y el número de puerto de destino y el protocolo en uso. Este es el campo de protocolo del encabezado del paquete IP.
En esta práctica de laboratorio también revisará los archivos de registros para identificar los hosts comprometidos y el contenido del archivo afectado.

<h3>Al turrón!</h3>
<p>Abrimos Sguil y vemos las alertas registradas. Hay varis de trojanos pero vamos analizar la que pone ataque.<br>
Nos situamos sobre el Alert ID de la alerta y con boton derecho hacemos transcript o en la misma herramienta o en wireshark para ver mas detalles.</p>
<img src="./assets/img/sguil-1.PNG">


<p>Nos ponemos encima de IP origen y con boton derecho abrimos Kibana y cambiamos la fecha a todos los tiempos para analizar paquetes FTP</p>


<p>Una vez en kibana en el menu lateal vamos a bro_ftp o zookFTP</p>
<img src="./assets/img/sguil1.png">
<img src="./assets/img/sguil2.png">

<p>Scroleamos mucho hasta abajo hasta acceder a los logs y picamos sobre su id, y podremos observar que se ha borrado un archivo</p>
<img src="./assets/img/sguil-2.PNG">


<p>Para recuperar la información del archivo debemos ir a la pantalla de inici lateral izquierdo en files y file ftp</p>
<img src="./assets/img/sguil-3.PNG">



`