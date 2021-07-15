/* ===============================================================
   PROTOTIPURI (OBIECTE PARINTE):
   DESCRIPTORI PROPRIETATII
=================================================================*/

//=================================================================
// (1) DEFINIM 'OBIECTUL':
//=================================================================
let persoana = { nume: 'Marius' };

// AFISARE 'OBIECT':
console.log(persoana);



//=================================================================
// (2) ITERAND ASUPRA MEMBRULUI OBIECTULUI 
//     => METODA 'toString()' NU VA MAI FI VIZIBILA:
//=================================================================
// OBIECTUL
let persoana2 = { nume2: 'Marius' };

// ITERAND :
for (let cheie in persoana2)
    console.log(cheie);



//=================================================================
// (3) METODA 'KEYS()' - PT. AFISAREA PROPS.
//=================================================================
// OBIECTUL
let persoana3 = { nume3: 'Andrei' };

// AFISARE METODA:
console.log(Object.keys(persoana3));



//=================================================================
// (4) MET. 'GET OWN PROPERTY DESCRIPTORS()'  
//     (DESCRIPTORUL PROPRIETATII )
//=================================================================
// OBIECTUL
let persoana4 = { nume4: 'Nicholas' };

// METODA:
let bazaObiectului = Object.getPrototypeOf(persoana4);

// METODA 'GET OWN PROPRERTY DESCRIPTORS()':
// (VA RETURNA OBIECTUL 'DESCRIPTORUL PROPRIETATII')
let descriptor = Object.getOwnPropertyDescriptors(bazaObiectului, 'toString');

// AFISARE 'DESCRIPTOR':
console.log(descriptor);



//=================================================================
// (5) MET. 'DEFINE PROPERTY(OBIECT, 'NUME_PROP', {OBIECTUL_DESCRIPTOR_AL_PROP})'  
// UTIL. PT. DEFINIREA 'GETTERS' SAU 'SETTERS' PT. O PROPRIETATE
//=================================================================
// OBIECTUL
let persoana5 = { nume5: 'Aureliu' };

// MET. 'DEFINE PROPERTY()':
Object.defineProperty(persoana5, 'nume5', {
    // SETAM PROPIETATEA CS 'READONLY':
    writable: false,

    // NU SE VA AFISA IN 'OBJECT.KEYS()'
    // enumerable: false
    enumerable: true,

    // DEZACTIVARE  PROP. CONFIGURABIL (PROP. NU POATE FI STEARSA)
    configurable: false
});

// DACA 'SETAM':
persoana5.nume5 = 'Liviu';

// AFISAM:
console.log(persoana5);

// AFISAM - 'OBJECT.KEYS()':
console.log(Object.keys(persoana5));

// STERGEREA  PROPRIETATII: 
delete persoana5.nume5;
console.log(persoana5);