/* ============================================================================
    MODULE JS:
    FORMATUL  DE  MODUL - 'COMMONJS'  (PT. 'NODE.JS')
============================================================================== */

//=================================================================
//  (0.1) DETALIUl DE IMPLEMENTARE
//        PROP. PRIVATA (PRIN DICTIONARUL 'WEAKMAP()')
//=================================================================
const _raza = new WeakMap();


//=================================================================
// (1) INTERFATA PUBLICA (CLASA 'CERC'):
//=================================================================
class Cerc {

    // MET. 'CONSTRUCTOR':
    constructor(raza) {

        // PROP. PRIVATA CU  SETTER (PRIN DICTIONARUL 'WEAKMAP()')
        _raza.set(this, raza);
    }



    // MET. 'DESEN()':
    desen() {

        // AFISARE:
        console.log
    }
}

//=================================================================
// (2) 'EXPORTAREA' 'MODULULUI' RETURNEAZA 'VALOAREA CLASEI':
//=================================================================
module.exports = Cerc;