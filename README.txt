
Proyecto-Base

Este es un proyecto web del Hospital Clinico Dr Victor Ramirez que utiliza Bootstrap, y SASS para crear un sitio responsivo con un sistema de navegaci�n. El proyecto incluye p�ginas como "Inicio", "Equipo M�dico" y "Contacto".

Tabla de Contenidos

Tecnolog�as Usadas
Estructura del Proyecto
Instalaci�n
Uso
Scripts
Contribuciones
Licencia

Tecnolog�as Usadas

Bootstrap: Para estilos responsivos y componentes predefinidos.
SASS: Para la escritura de estilos en CSS con caracter�sticas adicionales como variables y anidamiento.
JavaScript (ES6): Para la l�gica del cliente.

Estructura del Proyecto

Index2.html: Contiene la informacion generla del hospital, mision, vision y bienvenida
equipo2.thml:Contiene la informacion del listado de servicios y profesionales que conforman el hospital.
contacto2.html: Contiene la informacion de la ubicacion geografica de la institucion y un formulario de contacto para hacer llegar consultas.
/img: Contiene las im�genes utilizadas en el proyecto.
/js: Contiene los archivos JavaScript.
/lib: Contiene los archivos para los estilos de Boostrap.
/styles: Contiene los archivos para los estilos de la pagina definida por el desarrollador.

Instalaci�n

Clona este repositorio:

git clone https://github.com/FabianPena/proyecto-base.git
cd tu-repo


Instruciones para visualizacion:

Se debe dejar todos los archivos en una misma carpeta y luego abrir con su navegador el archivo llamado "Index.html" que es la pagina principal del proyecto.



Actualizaciones README especificar Modulo 3 - Taller 2

- Descripci�n de la integraci�n de prompts y c�mo se validan los datos ingresados por el usuario.

En la pagina llamada "Contacto2.html" se implmenteo la funcionalidad de prompts para obtener los datos del usuario al precionar el boton llamado "Reservar Cita" ubicado en el seccion del menu de navegacion de todas las paginas. LO anterior para la obtencion de los siguientes datos: Nombre, Correo electronico, telefono, fecha (formato YYYY-MM-DD) y hora (formato HH:MM)


- Explicaci�n del scope de variables y el uso de operadores.

Archivo equipo.js:

*La variables const medicos es de tipo "Local" ya se solo esta dentro del metodo llamado "filtrarMedicos"
*Las variables "const experienciaText" y "const experiencia" son de tipo "Block" ya que son solo accesibles dentro del ciclo "forEach"

Archivo contacto.js
*Las variables "const formulario", "const nombre", "const email" y "const telefono" son variables de tipo "Global" ya que puede ser accesible desde todo el documento.

Archivo "reservar_cita.js"
*Las variables llamadas "let nombre", "let email", "let telefono", "let fecha" y "let hora" son variables de tipo "Global" ya que puede ser accesible desde todo el documento.

- Instrucciones sobre c�mo usar el debugger y el manejo de errores con try/catch.

Uso del Debugger

El debugger es una herramienta fundamental para depurar el código. Te permite pausar la ejecución del código en puntos específicos, inspeccionar el valor de las variables y rastrear el flujo de ejecución.

Pasos para usar el debugger desde VSC:

1.- Coloca debugger; en el lugar donde quieras que se detenga la ejecución del código.
2.- Ejecuta el código en el entorno adecuado (por ejemplo, Node.js o un navegador con herramientas de desarrollo).
3.- El debugger pausará la ejecución en el punto indicado, y podrás inspeccionar las variables y el flujo del programa.

Manejo de Errores con Try/Catch
El manejo de errores es crucial para evitar que un error detenga la ejecución del programa. Para ello, se utiliza la estructura try/catch.

try: Se coloca el código que podría generar un error.
catch: Se captura cualquier error y se maneja de forma adecuada.

En el caso del presente codigo esto se utilizo en el archivo llamado "reservar_cita.js" para controlar algun error en los procesos de captura de los datos por los prompt por parte del usuario.


Creditos:
Imagenes sacada de buscador Google.