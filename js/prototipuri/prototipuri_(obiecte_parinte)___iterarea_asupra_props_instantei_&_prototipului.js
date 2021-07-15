/* ===============================================================
   PROTOTIPURI (OBIECTE PARINTE):
   ITERAREA  ASUPRA  PROPIETATILOR.  INSTANTEI  &  PROTOTIPULUI
=================================================================*/


/*
    NB! 
        NU CONTEAZA CAMD MODIFICI PROTOTIPUL
            => 'INAINTEA' CREARI 'OBIECTULUI'
            => SAU 'DUPA' CREAREA 'OBIECTULUI'

          DEOARECE AVEM 1 SINGUR OBIECT IN MEMORIE -> PE CARE IL REFERIM   


        (0) METODA 'KEYS()' 
            => RETURNEAZA DOAR 'MEMBRII  INSTANTEI' 
            => NU SI 'MEMNRII  PROTOTIP'


        (*) CUVANTUL  'ONLY' IN JAVASCRIPT
                => ESTE UTILIZAT IN LOCUL CUVANTULUI 'INSTANTA' 
                
            'OWN PROPERTIES' vs 'PROTOTYPE  PROPERTIES'   
*/


//=================================================================
// (#) FUNCTIA 'CONSTRUCTOR' CU '2 MEMBRII'
//=================================================================
function Cerc2(raza) {

    // [1] 'MEMBRUL INSTANTEI 1' - 'RAZA':
    this.raza = raza;


    // [1] 'MEMBRUL INSTANTEI 2' - 'MISCARE':
    this.miscare = function() {
        console.log('miscare');
    }
}


// CREARE 'OBIECT' NOU 'CERC' 
//  -> INAINTEA 'MODIFICARII  PROTOTIPULUI':
const c1 = new Cerc2(1);


// [2] 'MEMBRUL PROTOTIP' - 'DESEN':
Cerc2.prototype.desen = function() {
    console.log('desen');
};


// CREARE 'OBIECT' NOU 'CERC' 
//  -> DUPA 'MODIFICAREA  PROTOTIPULUI':
// const c1 = new Cerc(1);


// APELARE MET. 'DESEN()':
c1.desen();





//=================================================================
// (2)  ITERAREA  ASUPRA  PROPIETATILOR.  INSTANTEI  &  PROTOTIPULUI
//=================================================================

// FUNCTIA 'CONSTRUCTOR' CU '2 MEMBRII'
function Cerc2(raza2) {

    // [1] 'MEMBRUL INSTANTEI 1' - 'RAZA':
    this.raza2 = raza2;


    // [1] 'MEMBRUL INSTANTEI 2' - 'MISCARE':
    this.miscare2 = function() {
        console.log('miscare2');
    }
}


// CREARE 'OBIECT' NOU 'CERC' 
//  -> INAINTEA 'MODIFICARII  PROTOTIPULUI':
const c2 = new Cerc2(1);


// [2] 'MEMBRUL PROTOTIP' - 'DESEN':
Cerc2.prototype.desen2 = function() {
    console.log('desen2');
};


// AFISARE - MET. 'KEYS()'
// (PT. RETURNAREA DOAR A 'MEMBRILOR INSTANTEI OBIECTULUI')
console.log(Object.keys(c2));

// ITERAREA PRIN BUCLA 'FOR()':
for (let key in c2)
    console.log(key);