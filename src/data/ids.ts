export const blog = 
`
<h2>Como funcionan  IDS / FIREWALL</h2>

<p> Los 2 elementos son complementarios e imprencindibles para una red y funcionan en base a reglas escritas. Ya sean añadidas o por defecto.
Comparan el trafico entrante con esas reglas y ejecutan las acciones que tengan establecidad.
</p>


<blockquote>
    Diferencias: <br>
        · Firewall: Bloquea todo excepto lo que yo permita. Suelen centrarse en el analisis de cabeceras<br>
        · IDS: Solo analiza e informa si alguna regla coincide. Suelen centrarse en el payload o carga util (el contenido vamos)<br>
</blockquote>


<h4>Como funciona IDS y tipos</h4>
<p> Un IDS puede detectar amenazas de diferentes formas:
<blockquote>
        · Firmas: Comparando ya ataques o patrones conocidos<br>
        · Reputacion: Usado en los antivirus o antimalwares.
        · Comportamiento o anomalias: Analiza la red para detectar comportamientos no deseados o fuera de lo normal<br>
</blockquote>

<p> Hay dos tipos: <br>
Los de tipo Host que solo pueden analizar las entras y salidas de un dispositivos.<br>
Los de tipo Red que son capaces de analizar toda una red.</p>
</p> 


<h2>Vamos al turron! Practica con CyberOps de Cisco y SNORT</h2>

<p>Vamos a configurar un IDS/IPS a nivel de software en un router, la arquitectura es la siguiente:</p>
<img src="./assets/img/idsips.png">

<p>Simplemente practica para ver que el IDS cuando un ordenador de la red se descarga un archivo malicioso se queja, esto se conectaría a nuestro SIEM que veriamos la alerta
en tiempo real y apartir de aqui se procederia a bloquear el trafico de ese servidor. Aunque supongo que habrá alguna manera de automatizar que si la detección viene de una fuente firmada
se autobloquee.
</p>

<img src="./assets/img/ids1.png">


<p>Ahora no dirigimos al firewall y bloqueamos ese trafico del puerto concreto, cosa que solo nos bloqueará ese servicio y no la maquina entera</p>
<blockquote>
	-I FORWARD: inserta una regla nueva en la cadena FORWARD.<br>
	-p tcp: especifica el protocolo TCP.<br>
	-d 209.165.202.133: especifica el destino del paquete.<br>
	-dport 6666: especifica el puerto de destino.<br>
	-j DROP: define la acción a descartar. <br>
</blockquote>



<img src="./assets/img/ids2.png">


<p>El tráfico que ingresa al firewall y tiene como destino al propio dispositivo de firewall es manejado por la cadena <b>INPUT</b>. Como ejemplo de este tráfico podemos mencionar a los paquetes de ping provenientes de cualquier otro dispositivo en cualquier red y enviados a cualquiera de las interfaces del firewall.<br><br>
El tráfico que se origina en el propio dispositivo de firewall y tiene como destino cualquier otro lugar es manejado por la cadena <b>OUTPUT</b>. Un ejemplo de este tráfico son las respuestas de ping generadas por el propio dispositivo de firewall.<br><br>
El tráfico originado en cualquier otro lugar y que atraviesas el dispositivo de firewall es manejado por la cadena <b>FORWARD.</b> Un ejemplo de este tráfico son los paquetes que está enrutando el firewall.<br><br>
</p>
`