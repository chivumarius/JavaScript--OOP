/* ============================================================================
    CLASE ES6 (ECMASCRIPT6):
    CLASELE  ES6
============================================================================== */

/*
    'CLSAELE' =>  SUNT PRACTIC 'FUNCTII'
*/


//=================================================================
// (0) FUNC. CONST. 'CERC(PROP)'
//=================================================================
// function Cerc(raza) {
//     this.raza = raza;

// METODA 'DESEN()'
//     this.desen = function() {
//         console.log('desenare');
//     }
// }



//=================================================================
// (1.1) RESCRIEREA FUNC. CONST. 'CERC()' => PRIN CLASA ES6
//=================================================================
class Cerc {

    // MET. 'CONSTRUCTOR' (PT. 'INITIALIZAREA OBIECTELOR'):
    constructor(raza) {
        this.raza = raza;

        // METODA 'MISCARE()' (IN INSTANTA  OBIECTULUI)
        this.miscare = function() {
            console.log('miscare');
        }
    }

    // METODA 'DESEN()' (IN PROTOTIPUL  'OBJECT')
    desen() {
        console.log('desenare');
    }
}


//=================================================================
// (1.2) CREARE OBIECT 'CERC':
// const c = new Cerc(1);
const c = Cerc(1);