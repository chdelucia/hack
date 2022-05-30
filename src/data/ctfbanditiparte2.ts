

export const blog =
`
<h2>Nivel 13</h2>
The password for the next level is stored in /etc/bandit_pass/bandit14 and can only be read by user bandit14. For this level, you don’t get the next password, but you get a private SSH key that can be used to log into the next level. Note: localhost is a hostname that refers to the machine you are working on.
    <h3>Credenciales</h3>
    <p>8ZjyCRiBWFYkneahHwxCv3wb2a1ORpYL</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit13@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Iniciación al ssh y a las llaves privadas</p>
    <blockquote>
        <ul>
            <li><code>ssh -i: Te conecta añadiendo un fichero de sshkey</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>ssh bandit14@localhost -i sshkey.private</pre>
        </div>
    </div>



    <br><br>
    <h2>Nivel 14</h2>
    Conectarse al puerto 30000 y mandar la key que hemos conseguido.
    <h3>Credenciales</h3>
    <p>Pw: 4wcYUJFw0k0XLShlDzztnTBHiqxU3b3e</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit14@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Escanear puertos abiertos y saber conectarse a ellos</p>
    <blockquote>
        <ul>
            <li> nc : netcat te permite acceder a puertos TCP/UDP.</li>
            <li> telnet: te permite acceder a puertos TCP</li>

        </ul>
    </blockquote>

    <h3>Solución</h3> 

    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <p>Si hacemos un escaneo con nmap vemos que hay un servicio TCP abierto por el puerto 30000, a partir de ahi solo tenemos que mandarle un echo.</p>
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>telnet localhost 30000</pre>
            <pre>nc localhost 30000</pre>
        </div>
    </div>



    <br><br>
    <h2>Nivel 15</h2>
    The password for the next level can be retrieved by submitting the password of the current level to port 30001 on localhost using SSL encryption.
    <h3>Credenciales</h3>
    <p>Pw: BfMYroe26WYalil77FoDi9qh59eK5xNr</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit15@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Uso de openssl para cifrados SSL</p>
    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>openssl s_client -connect localhost:30001</pre>
        </div>
    </div>


    <br><br>
    <h2>Nivel 16</h2>
    The credentials for the next level can be retrieved by submitting the password of the current level to a port on localhost in the range 31000 to 32000. First find out which of these ports have a server listening on them. Then find out which of those speak SSL and which don’t. There is only 1 server that will give the next credentials, the others will simply send back to you whatever you send to it.
    <h3>Credenciales</h3>
    <p>Pw: cluFn7wTiGryunymYOu4RcffSxQluehd</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit16@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Empieza lo bueno ahora tienes que averiguar que puertos hay abiertos por ti mismo:</p>
    <blockquote>
        <ul>
            <li><code>nmap: Escaneo de puertos</code></li>
            <li><code>-p: Añade puerto especifico o rango de puertos</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <p>Lo primero que tenemos que hacer es un escaneo de puertos para ver cuales hay abiertos, despues probar los puertos 1 por 1</p>
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>nmap -sV localhost -p 31000-32000</pre>
        </div>
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>openssl s_client -connect localhost:31790</pre>
        </div>
        <p>Obtendremos un ssh key private para conectarnos al siguiente nivel</p>
    </div>


    <br><br>
    <h2>Nivel 17</h2>
    There are 2 files in the homedirectory: passwords.old and passwords.new. The password for the next level is in passwords.new and is the only line that has been changed between passwords.old and passwords.new
    <h3>Credenciales</h3>
    <p>fichero ssh key privado del ejercicio anterior</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit17@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Aqui tenemos dos retos el primero como conectarnos al propio bandit 17 y el siguiente comparar los archivos.</p>
    <blockquote>
        <ul>
            <li><code>diff: Compara los cambios entre dos archivos </code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>diff passwords.new passwords.old</pre>
        </div>
    </div>

    

    <br><br>
    <h2>Nivel 18</h2>
    The password for the next level is stored in a file readme in the homedirectory. Unfortunately, someone has modified .bashrc to log you out when you log in with SSH.
    <h3>Credenciales</h3>
    <p>Pw: kfBf3eYk5BPBRzwjqutbbfE887SVc5Yd</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit18@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Hay un scritp en bash que nos expulsa cada vez que entramos pero eso no nos quita que podamos ejecutar comandos antes de ser expulsados</p>
    <blockquote>
        <ul>
            <li><code>Ningún comando nuevo es necesario solo cat y ls </code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>ssh bandit18@bandit.labs.overthewire.org -p 2220 ls</pre>
            <pre>ssh bandit18@bandit.labs.overthewire.org -p 2220 cat readme</pre>
        </div>
    </div>
    



    <br><br>
    <h2>Nivel 19</h2>
    To gain access to the next level, you should use the setuid binary in the homedirectory. Execute it without arguments to find out how to use it. The password for this level can be found in the usual place (/etc/bandit_pass), after you have used the setuid binary.
    <h3>Credenciales</h3>
    <p>Pw: IueksS7Ubh8G3DCwVzrTd8rAVOwq3M5x</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit19@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Para resolver este reto tenemos que averiguar que tipo de fichero es el que tiene. Despues ejecutarlo y ver como funciona por ejemplo pasandole un id o un whoami</p>

 

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>./bandit20-do  cat /etc/bandit_pass/bandit20 </pre>
    </div>
    </div>



    <br><br>
    <h2>Nivel 20</h2>
    There is a setuid binary in the homedirectory that does the following: it makes a connection to localhost on the port you specify as a commandline argument. It then reads a line of text from the connection and compares it to the password in the previous level (bandit20). 
    If the password is correct, it will transmit the password for the next level (bandit21).
    <h3>Credenciales</h3>
    <p>Pw: GbKksEFF4yrVs6il55v6gwY5aVje5f0j</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit20@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Utilizar tmux o screen para poder abrir diferentes terminales</p>
    <blockquote>
        <ul>
            <li><code>nc -lv : Para abrir en modo escucha cualquier puerto.</code></li>
            <li><code>tmux: abrir una nueva consola</code></li>
            <li>ctrl + b + % to make a vertical split.</li>
            <li>ctrl + b + " to make a Horizontal split.</li>
            <li>ctrl + b + left arrow to move to the left pane.</li>
            <li>ctrl + b + " to make a Horizontal split.</li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>nc -l localhost -p 32220</pre>
        <pre>./suconnect 32220</pre>
    </div>
    </div>


    <br><br>
    <h2>Nivel 21</h2>
    A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.
    <h3>Credenciales</h3>
    <p>Pw: gE269g2h3mw3pwgrj0Ha9Uoqen1c9DGr</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit21@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Ninguno, este reto es solomante para seguir trazas entre varios archivos </p>


    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <p>Sigue la ruta de los diferentes archivos hasta llegar a la flag.</p>
    <div class="terminal">

        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>cat /etc/cron.d/cronjob_bandit22</pre>
        <pre>cat /usr/bin/cronjob_bandit22.sh</pre>
        <pre>cat /tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv</pre>
    </div>
    </div>


    <br><br>
    <h2>Nivel 22</h2>
    A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.
    <h3>Credenciales</h3>
    <p>Pw: Yk7owGAcWjwMVRwrTesJEwB7WVOiILLI</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit22@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>En este reto igual que el anterior es simplemente seguir rutas y saber algo de programación basica. Ademas de fingir que somos bandit23</p>


    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <div class="terminal">

        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>cat cronjob_bandit23 </pre>
        <pre>cat /usr/bin/cronjob_bandit23.sh </pre>
        <pre>echo echo I am user bandit23 | md5sum | cut -d ' ' -f 1</pre>
        <pre>cat cat /tmp/8ca319486bfbbc3663ea0fbe81326349 </pre>

    </div>
    </div>




    <br><br>
    <h2>Nivel 23</h2>
    A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.
    <h3>Credenciales</h3>
    <p>Pw: jc1udXuA1tiHqjIsL8yaapX5XIAI6i0n</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit23@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Duro crear un script siendo ctf de nivel 0... Lo que tienes que conseguir es crear un archivo .sh donde se haga una copia del pass de bandit24
    a una carpeta temporal tuya</p>
    <blockquote>
        <ul>
            <li><code>cat /etc/bandit_pass/$myname > /tmp/chdelucia/pass
            .</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>mkdir /tmp/chdelucia</pre>
            <pre>mkdir nano myscript.sh</pre>
            <pre>cat /etc/bandit_pass/bandit24 > /tmp/chdelucia/pass</pre>
            <pre>chmod 777 mysript.sh</pre>
            <pre>touch pass</pre>
            <pre>chmod 777 pass</pre>
            <pre>cp myscript.sh /var/spool/bandit24/</pre>
        </div>
    </div>
    

    <br><br>
    <h2>Nivel 24</h2>
    El flag es un <strong>hexdump</strong> comprimido repetidas veces. Este reto si que pertenece a un nivel 0 ya que se va aprender el uso de crear/copiar carpetas y descomprimir ficheros. Aunque se puede hacer un poco pesado por la repeticion de hasta 8 veces.
    <h3>Credenciales</h3>
    <p>Pw: UoMYTrfrBFHyQXmg6gzctqAwOmw1IohZ</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit24@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Lo primero que vemos es que al no tener privilegos no podemos escribir en la home por lo tanto nos tenemos que ir a una carpetan temporal para
    poder alli descomprimir los ficheros.<br>
    Segundo tenemos que conocer el comando "<code>xxd</code> para la creación de hexdumps.
    </p>
    <blockquote>
        <ul>
            <li><code>xxd -r : Revierte del codificado.</code></li>
            <li><code>mkdir  : Crea carpetas.</code></li>
            <li><code>cp  : Copia ficheros.</code></li>
            <li><code>mv  : Cambia el tipo fichero.</code></li>
            <li><code>tar -xf  : descomprime POSIX tar archive.</code></li>
            <li><code>gzip -d  : descomprime dz files.</code></li>
            <li><code>bzip2 -d  : descomprime bz2 files.</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <p>Tiene que cambiar la extension del archivo y descomprimirlo infinitas veces. 
    Pongo el primer ejemplo y se tiene que repetir hasta data8</p>
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>xxd -r data.txt > data</pre>
            <pre>file data</pre>
            <pre>mv data data.gz</pre>
            <pre>gzip -d data.gz</pre>
        </div>
    </div>
    
`;

