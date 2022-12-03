# Tienda Córdoba

Es el proyecto final del curso de React JS dictado en CoderHouse.
Se trata de una tienda online de venta de productos para bebés.

## Dependencias

Trabaje con las siguientes dependencias:

-  React Router Dom para el ruteo de las secciones.
-  Sweet Alert para mostrar avisos al usuario.
-  Firebase (Firestore) como base de datos de productos y creación de ordenes de compra.

### Componentes

El ItemListContainer es el componente principal, en el se consulta a la base de datos alojada en Firestore y permite el filtro por categoría. Como segundo componente en importancia se ubica ItemDetailContainer que realiza una función similar al primero, con la diferencia de que trae solo el producto seleccionado de la base de datos.
En ambos casos, para aminorar la espera del usuario, se muestra un spinner hasta que se renderizan los productos.
El componente Cart, se ubica como tercero en importancia ya que se encarga de realizar la generación de la orden de compra en Firestore y actualiza el stock de los productos luego de la compra. En tanto el componente App posee todo el enrutamiento de la página para el funcionamiento de los links. Por último los componentes ItemList, Item, ItemDetail, ItemCart se utilizan para la visualización de los productos.

### Funcionamiento de la página

En la Home, el usuario contará con todos los productos disponibles incluyendo foto, precio y stock.
Cada card cuenta con un botón para ver los detalles de cada producto. Al hacer clic podrá ampliar la descripción y agregar la cantidad del producto que desee. Luego de hacerlo puede finalizar el pedido e ir al carrito para completar la compra o bien volver al listado completo de productos y continuar comprando.
En el carrito podrá ver todos los elementos agregados, el costo total de cada produto y el total de la compra. Luego de completar sus datos y finalizar la compra, obtendrá un código único como comprobante de la operación y se actualizará el stock de los productos. Asimismo en el widget del carrito podrá ver todo el tiempo la cantidad total de productos adquiridos.

![alt text](./public/images/readme.gif)

### Autor

Mario Aguilar
GitHub: https://github.com/mario-r-aguilar
LinkedIn: https://www.linkedin.com/in/mario-aguilar-cba/
