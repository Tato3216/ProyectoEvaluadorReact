
# App Seguimiento de Habitos

Una aplicación para el seguimiento de hábitos con opciones para agregar, editar y visualizar el progreso semanal de diferentes hábitos.

## Como ejecutar la app

### Requisitos previos

Antes de ejecutar la aplicación, asegúrate de tener lo siguiente instalado:

- **Node.js**: La aplicación está construida usando React, por lo que necesitas tener instalado Node.js. Si no lo tienes, puedes descargarlo desde [aquí](https://nodejs.org/).
- **NPM**: El gestor de paquetes Node (NPM) se instala automáticamente junto con Node.js.

### Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git
   ```

2. Navega al directorio de la aplicación:

   ```bash
   cd tu_repositorio
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

4. Ejecuta la aplicación:

   ```bash
   npm start
   ```

   La aplicación debería abrirse automáticamente en tu navegador en [http://localhost:3000](http://localhost:3000).

---

## Manual de Usuario

### Descripción

Esta aplicación permite al usuario agregar hábitos a seguir, establecer metas semanales y ver el progreso de esos hábitos mediante un gráfico de barras.

### Funcionalidades

1. **Agregar un nuevo hábito**:  
   - Haz clic en el botón de "Nuevo Hábito" para agregar un nuevo hábito.
   - Completa el formulario con el nombre del hábito, la meta semanal (número de días) y la categoría (Salud, Trabajo, Hogar).
   - Los días de la semana se representan mediante casillas de verificación. Marca los días en los que has cumplido con el hábito.
   - Guarda el hábito para verlo en la lista de hábitos.

2. **Ver o editar un hábito existente**:  
   - Haz clic en el hábito que deseas ver o editar.
   - Puedes actualizar la meta, el nombre, la categoría y los días de la semana.
   - Los días que ya hayas marcado se mostrarán automáticamente como marcados, y podrás desmarcarlos si no los has cumplido.

3. **Ver el progreso del hábito**:  
   - El progreso de un hábito se muestra mediante un gráfico de barras que refleja los días en los que cumpliste el hábito (representado por 1) y los días que no cumpliste (representado por 0).

4. **Eliminar un hábito**:  
   - Si decides eliminar un hábito, simplemente haz clic en el botón de eliminar dentro de la vista de edición del hábito.

---

## Detalles Técnicos

- **Estado y almacenamiento**:  
  Los hábitos y su progreso se almacenan en el `localStorage` del navegador, lo que asegura que la información persista incluso después de cerrar la aplicación.

- **Librerías usadas**:
  - **React**: Para la construcción de la interfaz de usuario.
  - **Chakra UI**: Para los componentes de la interfaz.
  - **Chart.js**: Para mostrar el gráfico de progreso del hábito.

- **Estructura del proyecto**:
  - **src/context**: Contiene el contexto de React (`HabitContext`) para manejar el estado global de los hábitos.
  - **src/components**: Contiene los componentes principales de la aplicación, como el formulario de hábitos (`HabitForm`), el gráfico de progreso (`ProgressChart`), y la vista de los hábitos.

---

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva funcionalidad (`git checkout -b feature-nueva`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva funcionalidad'`).
4. Haz push a tu rama (`git push origin feature-nueva`).
5. Crea un pull request en el repositorio original.

---

## Licencia

Este proyecto está bajo la licencia a nombre de Santos Hernandez. Consulta el archivo `LICENSE` para más detalles.
