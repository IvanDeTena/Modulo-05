# Módulo-05  :lemon:

**Bootcamp JS 2 - Bootcamp JS 2 - Laboratorio Módulo 5 - Condicionales**

Una función condicional en JavaScript es una función que toma decisiones basadas en una o varias condiciones. Usa la estructura if-else para ejecutar diferentes bloques de código dependiendo del valor de una condición (que típicamente evalúa a true o false).

## Sintaxis básica de una función condicional

><pre>function verificarNumero(numero) {
><pre>if (numero > 0) {
><pre>console.log("El número es positivo");
><pre>} else if (numero < 0) {
><pre>console.log("El número es negativo");
><pre>} else {
><pre>console.log("El número es cero");
><pre>}
><pre>}

><pre>// Llamada a la función
><pre>verificarNumero(5);  // Salida: El número es positivo
><pre>verificarNumero(-3); // Salida: El número es negativo
><pre>verificarNumero(0);  // Salida: El número es cero

## Operadores de comparación en JavaScript


### :one: Igualdad (==)

Compara si dos valores son iguales, sin considerar el tipo de dato.

><pre> 5 == "5"; // true


### :two: Desigualdad (!=)

Compara si dos valores son diferentes, sin considerar el tipo de dato.

><pre> 5 != "5"; // false


### :three: Estrictamente igual (===)

Compara si dos valores son iguales y del mismo tipo.

><pre> 5 === "5"; // false


### :four: Estrictamente desigual (!==)

Compara si dos valores son diferentes o de diferente tipo.

><pre> 5 !== "5"; // true


### :five: Mayor que (>)

Compara si el valor de la izquierda es mayor que el valor de la derecha.

><pre> 10 > 5; // true


### :six: Mayor o igual que (>=)

Compara si el valor de la izquierda es mayor o igual que el valor de la derecha.

><pre> 10 >= 10; // true


### :seven: Menor que (<)

Compara si el valor de la izquierda es menor que el valor de la derecha.

><pre> 5 < 10; // true


### :eight: Menor o igual que (<=)

Compara si el valor de la izquierda es menor o igual que el valor de la derecha.

><pre> 5 <= 5; // true

### Resumen:

#### * (==) y (!=) 
no consideran el tipo de dato (hacen conversión de tipo).
#### * (=== ) y (!== ) 
comparan tanto valor como tipo de dato.
#### * (>),( <),( >=), (<=) 
comparan valores numéricos u ordinales.

## Switch

Un switch en JavaScript es una estructura condicional que evalúa una expresión y ejecuta bloques de código según el valor de esa expresión. Es útil cuando tienes múltiples condiciones que comparar, se considera una mala practica usar muchos  if-else.

>let color = "rojo";
>
>switch (color) {
>case "rojo":
>console.log("El color es rojo");
>break;
>case "azul":
>console.log("El color es azul");
>break;
>case "verde":
>console.log("El color es verde");
>break;
>default:
>console.log("Color no reconocido");
>}

#### Explicación:

##### :one: La expresión color se evalúa.

##### :two: Cada case verifica si el valor coincide con el valor de color.

##### :three: Si encuentra una coincidencia, ejecuta el código dentro de ese case.

##### :four: El break evita que siga evaluando otros casos después de encontrar una coincidencia.

##### :five: El default se ejecuta si ninguno de los casos coincide.

* Es más limpio que varios if-else cuando se trata de comparar muchos valores.

## Ternarios

El operador ternario en JavaScript es una forma abreviada de escribir una condición if-else. Evalúa una expresión y devuelve un valor u otro según si la condición es true o false.

### Sintaxis:

><pre>condición ? valorSiTrue : valorSiFalse;

### Ejemplo:

><pre>let edad = 18;
>let mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
>console.log(mensaje); // "Eres mayor de edad"

#### Explicación:

##### :one: La condición edad >= 18 se evalúa.

##### :two: Si es true, devuelve "Eres mayor de edad".

##### :three: Si es false, devuelve "Eres menor de edad".

* Es una forma rápida de usar condiciones simples en una sola línea.

