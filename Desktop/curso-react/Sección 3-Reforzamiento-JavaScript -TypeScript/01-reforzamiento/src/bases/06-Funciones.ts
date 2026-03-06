/*
🧠 Resumen rápido
Función común: más tradicional y flexible.
Función flecha: más corta y usada en código moderno.
💡 Tip rápido:
En proyectos con React, casi todo se escribe 
con funciones flecha.
💡 Regla práctica:
Arrow function → corta, callbacks, map, filter, forEach, React.
Función normal → necesitas this, arguments o new.
                          ┌─────────────────────────────┐
                          │       Función Normal        │
                          │       (function)            │
                          └─────────────────────────────┘
                                   │
        ┌───────────────┬──────────┴───────────┬───────────────┐
        │               │                      │
      Tiene            Tiene                 Puede usarse
      'this'          'arguments'             con 'new'
        │               │                      │
        ▼               ▼                      ▼
  Ejemplo:           Ejemplo:               Ejemplo:
function saludar() { function suma() {   function Persona(nombre) {
  console.log(this);   console.log(arguments);   this.nombre = nombre;
}                     }                      }


                          ┌─────────────────────────────┐
                          │       Arrow Function        │
                          │         (=>)                │
                          └─────────────────────────────┘
                                   │
        ┌───────────────┬──────────┴───────────┬───────────────┐
        │               │                      │
 Hereda 'this'      No tiene 'arguments'     No se puede usar
                                           con 'new'
        │               │                      │
        ▼               ▼                      ▼
 Ejemplo:           Ejemplo:               Ejemplo:
const f = () => console.log(this);  const suma = (...args) => args.reduce((a,b)=>a+b);  const Persona = n => { this.nombre = n }; // ❌ Error
*/

function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => {
  return ` Hola ${name}`;
}


const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

function getUser() {
  return {
    uid: 'ABC-123',
    username: 'El_papi23',
  };
}


const getUser2 = () => {
  return {
    uid: 'ABC-123',
    username: 'El_papi23',
  };
}


const user = getUser();
const user2 = getUser2();

console.log(user, user2)

