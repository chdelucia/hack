export const blog =
`
<p>Recalcar que todas las herramientas y comandos utilizados son de manera pasiva, es decir información que ya existe en internet
evitando peticiones a servidores web</p>
<br><br>
<h3>Información básica</h3>
<p>Lo primero que tenemos que saber es la ip o ips empresariales y quienes son. Esta información tambien se puede obtener de https://nic.es/</p>
<div class="terminal">
    <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
    <pre>Whois miweb.es   </pre>
    <pre>host miweb.es   </pre>
</div>
<br><br>
<h3>Conseguir Emails</h3>
<p>Las herramientas que vamos a ver son <b>TheHarvester y infoga</b>. Las dos herramientas consultan varios buscadores
pero la primera te deja elegir que buscadores quieres añadir.</p>

<div class="terminal">
    <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
    <pre>python infoga.py -d miweb.es </pre>
</div>

<div class="terminal">
    <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
    <pre>theHarvester -d  miweb.es -b google,linkedin,duckduckgo   </pre>
</div>
<br><br>
<h3>Obtención subdominios</h3>

<p>Hay muchas herramientas para ver los dominios y subdominios, muchas de ellas versiones web como: VirusTotal, DNSdumpser ... </p>
<p> Asi mismo existen muchas otras herramientas en python para la extracción de los subdominios (sin fuerza bruta). Vamos a ver tres a continuación:

<div class="terminal">
    <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
    <pre>python sublist3r.py -d miweb.es </pre>
</div>

<div class="terminal">
    <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
    <pre>python kncokpy.py --no-local --no-http miweb.es </pre>
</div>

<div class="terminal">
    <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
    <pre>fierce -domain miweb.es </pre>
</div>
<br><br>
<h3>Puertos abiertos y vulnerabilidades</h3>

<p>Al tratarse de obtención pasiva de información las mejores obciones nuevamente son: <strong>Virustotal, Shodan y Censys search</strong></p>

<p> Con Maltego puedes añadir las 3 apikeys en esta herramienta y tener todo la información en un grafo</p>
<br><br>
<h3>Certificados SSL/TLS</h3>

<div class="terminal">
    <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
    <pre>sslscan miweb.es </pre>
</div>
`