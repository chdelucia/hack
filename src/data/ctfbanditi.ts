

export const blog =
`
<h2>Nivel 0</h2>
    Lee el fichero que se encuentra en la home del usuario.
    <h3>Credenciales</h3>
    <p>Pw: Bandit0</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit0@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>En este nivel 0 aprendemos el uso de los siguientes comandos de linux</p>
    <blockquote>
        <ul>
            <li><code>ls: Lista los archivos y carpetas</code></li>
            <li><code>cat nombreArchivo</code> Enseña por pantalla el contenido de un archivo</li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>cat readme </pre>
        </div>
    </div>



    <br><br>
    <h2>Nivel 1</h2>
    Lee el fichero que se encuentra en la home del usuario.
    <h3>Credenciales</h3>
    <p>Pw: boJ9jbbUNNfktd78OOpsqOltutMc3MY1</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit1@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Es esta practica es importante saber diferencias las caracteristicas concretas de cada fichero.<br>
        Con el comando: <code>ls -l</code> podremos ver los detalles de cada fichero y ver de que tipo se trata.
         La primera letra determina el tipo de fichero.<br>
          A continuación vemos la leyenda</p>
    <blockquote>
        <ul>
            <li> – : regular file.</li>
            <li> d : directory.</li>
            <li> c : character device file.</li>
            <li> b : block device file.</li>
            <li> s : local socket file.</li>
            <li> p : named pipe.</li>
            <li> l : symbolic link.</li>
            <li> D : door (Solaris)</li>

        </ul>
    </blockquote>

    <h3>Solución</h3> 

    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <p>Al tener un caracter especial debemos indicarle la ruta relativa o absoluta para la lectura del fichero.</p>
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>cat ./- </pre>
        </div>
    </div>



    <br><br>
    <h2>Nivel 2</h2>
    Lee el fichero que se encuentra en la home del usuario.
    <h3>Credenciales</h3>
    <p>Pw: CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit2@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Esta practica actualmente esta obselota, ya que las distribuciones modernas pulsando TAB te autocompletan el path. La idea inicial era que supieras como acceder
        a un fichero con espaciados o caracteres especiales entre medio.
    </p>
    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>cat spaces\ in\ this\ filename 
            </pre>
        </div>
    </div>


    <br><br>
    <h2>Nivel 3</h2>
    Lee el fichero <strong>oculto</strong> que se encuentra en el directorio.
    <h3>Credenciales</h3>
    <p>Pw: UmHadQclWmgdLOKQ3YNgjWxGoRMb5luK</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit3@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Lo que se intenta conseguir es utilizar los diferentes parametros del comando <code>ls</code>. Lo aprendido hasta ahora:</p>
    <blockquote>
        <ul>
            <li><code>ls: Lista los archivos y carpetas</code></li>
            <li><code>ls -l: Lista los archivos y los detalles</code></li>
            <li><code>ls -la : Muestra todos los ficheros sin ignorar ocultos.</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <p>En este reto si escribimos "<code>cat inhere/</code>" y pulsamos varias veces el TAB, tambíen podemos todos los archivos del directorio sin listarlos.</p>
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>cat inhere/.hidden</pre>
        </div>
    </div>


    <br><br>
    <h2>Nivel 4</h2>
    Lee el fichero <strong>human-readable</strong> que se encuentra en el directorio.
    <h3>Credenciales</h3>
    <p>Pw: pIwrPrtPN36QITSp3EQaw936yaFoFgAB</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit4@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>En este reto vemos que por muchas opciones que uticemos del comando "<code>ls</code>" no hay manera de ver el tipo de contenido que tienen los ficheros.<br>
        Para ello necesitamos un nuevo comando: <code>file</code>.</p>
    <blockquote>
        <ul>
            <li><code>file archivo: Determina y clasifica el tipo de fichero basado en una serie de test </code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>file inhere/*</pre>
        </div>
    </div>

    

    <br><br>
    <h2>Nivel 5</h2>
    Lee el fichero <strong>human-readable de 1033 bits no ejecutable</strong> que se encuentra en algun directorio.
    <h3>Credenciales</h3>
    <p>Pw: koReBOKuIDDepwhWk7jZC0RTdopnAYKh</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit5@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>De nuevo nos hacen la trampa ahora que hemos aprendido el comando "file" para identificar los tipos de fichero, necesitamos hacer lo mismo pero 
        recursivo para todas las carpertas.
        Para ello necesitamos un nuevo comando: <code>find</code>.<br><br>
        <code>find</code> es un comando muy extenso con muchas utilidades. Para esta práctica necesitamos buscar con <code>man find</code> los referente a ejecutar comandos y buscar ficheros por size.
    </p>
    <blockquote>
        <ul>
            <li><code>find -type: Puedes indicar el tipo de fichero </code></li>
            <li><code>find -executable Matches files which are executable and directories which are searchable </code></li>
            <li><code>find -readable  Matches  files which are readable. </code></li>
            <li><code>find -type: Puedes indicar el tipo de fichero </code></li>
            <li><code>find -syze:</code></li>
            <ul>
                <li>b - for 512-byte blocks (this is the default if no suffix is used)</li>
                <li>c - for bytes</li>
                <li>w - for two-byte words</li>
                <li>k - for Kilobytes (units of 1024 bytes)</li>
                <li>M - for Megabytes (units of 1048576 bytes)</li>
                <li>G - for Gigabytes (units of 1073741824 bytes)</li>
            </ul>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>find inhere/ -type f -size 1033c -readable ! -executable -exec file &#123;&#125; \;</pre>
        </div>
    </div>
    



    <br><br>
    <h2>Nivel 6</h2>
    Lee el fichero <strong>owned by user bandit7 group by bandit 6 33bytes</strong> que se encuentra en algun directorio.
    <h3>Credenciales</h3>
    <p>Pw: DXjZPULLxYr17uwoI01bNLQbtFemEgo7</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit6@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Este nivel es muy parecido al anterior, en este caso nos hacen buscar por usuario y por grupo.
     De nuevo utilizamos <code>man find</code> y buscamos como hacer una busqueda por usuario y por grupo.
    </p>
    <blockquote>
        <ul>
            <li><code>find -user: File is owned by user uname (numeric user ID allowed).</code></li>
            <li><code>find -group: File belongs to group gname (numeric group ID allowed).</code></li>
            <li><code>2>/dev/null: Oculta errores</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>find / -type f -size 33c -user bandit7 -group bandit6 2>/dev/null</pre>
    </div>
    </div>



    <br><br>
    <h2>Nivel 7</h2>
    El token esta <strong>al lado de la palabra millionth</strong> que se encuentra en data.txt.
    <h3>Credenciales</h3>
    <p>Pw: HKBPTKQnIay4Fw76bEy8PVxKEDQRKTzs</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit7@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Para este reto necesitamos conocer un nuevo comando <code>grep</code>. Recordad que utilizando <code>man grep</code> podemos ver toda la documentación.
    </p>
    <blockquote>
        <ul>
            <li><code>grep palabra : Busca linea por linea en un fichero por la palabra dada.</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>grep millionth data.txt</pre>
    </div>
    </div>


    <br><br>
    <h2>Nivel 8</h2>
    Esta vez el reto consiste en <strong>filtrar las lineas duplicadas</strong> que se encuentra en data.txt.
    <h3>Credenciales</h3>
    <p>Pw: cvX2JJa4CFALtqS87jk27qwqGhBM9plV</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit8@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Para encontrar duplicados existe el comando <code>uniq</code>.
    </p>
    <blockquote>
        <ul>
            <li><code>uniq : Compara linea tras linea.</code></li>
            <li><code>sort : Ordena los ficheros.</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <p>        Utilizando solo el comando "uniq" no conseguimos el objetivo ya que solo detecta duplicidad si son lineas de textos que estan juntas. Por
    eso necesitamos primero utilizar "sort" y luego "uniq".</p>
    <div class="terminal">

        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>sort data.txt | uniq -u</pre>
    </div>
    </div>


    <br><br>
    <h2>Nivel 10</h2>
    La flag esta codificada en <strong>base64</strong> en el archivo data.txt.
    <h3>Credenciales</h3>
    <p>Pw: truKLdjsbJ5g7yyJ2X2R0o3a5HQJFuLk</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit10@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>En este caso tenemos que conocer el commando <code>base64</code> y como codificar/descodificar.
    </p>
    <blockquote>
        <ul>
            <li><code>file -i : Te dice el tipo de archivo al que te enfrentas.</code></li>
            <li><code>base64 -d: decodifica un fichero.</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <div class="terminal">

        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>strings base64 -d data.txt </pre>
    </div>
    </div>




    <br><br>
    <h2>Nivel 11</h2>
    El flag esta codificado en <strong>ROT13</strong> en el archivo data.txt.
    <h3>Credenciales</h3>
    <p>Pw: IFukwKGsFW8MOq3IRFqrxE1hxTNEbUPR</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit11@bandit.labs.overthewire.org - p 2220</pre>
    </div>
    <h3>Aprendizajes:</h3>
    <p>Aqui se han pegado una buena fumadita para ser un nivel 0, y nos estan indicando una codificación por desplazamiento de letras de 13 posiciones, 
    es decir:<br>
     la A será N.<br>
     la B será M.<br>
     ...<br>
     Para esto existe un comando <code>tr</code> nada intuitivo de usar para este caso.
    </p>
    <blockquote>
        <ul>
            <li><code>tr : Translate, squeeze, and/or delete characters from standard input, writing to standard output.</code></li>
        </ul>
    </blockquote>

    <h3>Solución</h3>
    <div class="spoiler-btn"> Mostrar solución</div>
    <div class="hidden">
    <p>Tenemos que indicarle que nuestro alfabeto normal de la A-Z lo substituya por una que vaya de la  N-Z y de la A-M.</p>
        <div class="terminal">
            <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
            <pre>cat data.txt | tr "A-Za-z" "N-ZA-Mn-za-m"</pre>
        </div>
    </div>
    

    <br><br>
    <h2>Nivel 12</h2>
    El flag es un <strong>hexdump</strong> comprimido repetidas veces. Este reto si que pertenece a un nivel 0 ya que se va aprender el uso de crear/copiar carpetas y descomprimir ficheros. Aunque se puede hacer un poco pesado por la repeticion de hasta 8 veces.
    <h3>Credenciales</h3>
    <p>Pw: 5Te8Y4drgCRfCx8ugdwuEX8KFC6k2EUu</p>
    <div class="terminal">
        <img class="clipboard" src="https://cdn.iconscout.com/icon/free/png-256/copy-127-444629.png">
        <pre>ssh bandit12@bandit.labs.overthewire.org - p 2220</pre>
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
    
    
    8ZjyCRiBWFYkneahHwxCv3wb2a1ORpYL
`;

