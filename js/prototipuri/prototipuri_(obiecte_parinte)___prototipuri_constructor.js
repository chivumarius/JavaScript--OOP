/* ===============================================================
   PROTOTIPURI (OBIECTE PARINTE):
   PROTOTIPURI  CONSTRUCTOARE
=================================================================*/

/*
    (*) 'CONSTRUCTORI' => AU DE ASEMENEA 'PROPRIETATI  PROTOTIP'
*/


//=================================================================
// (#) FUNCTIA 'constructor'
//=================================================================

// OBTINEREA PARINTELUI:
Object.getPrototypeOf(obiectulMeu);

// FUNCTIa constructor:
function Cerc(raza) {
    this.raza = raza;
}

// PROPRIETATEA 'PROTOTIP' A 'CONSTRUCTORULUI':
Cerc.prototype

// NOU OBIECT:
const cerc = new Cerc(1);