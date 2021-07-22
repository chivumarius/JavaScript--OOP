/* ============================================================================
    MODULE JS:
    FORMATUL  DE  MODUL - 'ES6  MODULES'  (PT. 'BROWSER')
============================================================================== */

//=================================================================
//  (0.1) DETALIUl DE IMPLEMENTARE
//        PROP. PRIVATA (PRIN DICTIONARUL 'WEAKMAP()')
//=================================================================
const _raza = new WeakMap();


//=================================================================
// (1) EXPORTAREA 'INTERFATA PUBLICA' (CLASA 'CERC'):
//=================================================================
export class Cerc {

    // MET. 'CONSTRUCTOR':
    constructor(raza) {

        // PROP. PRIVATA CU  SETTER (PRIN DICTIONARUL 'WEAKMAP()')
        _raza.set(this, raza);
    }



    // MET. 'DESEN()':
    desen() {

        // AFISARE:
        console.log('Cerc cu Raza ' + _raza.get(this));
    }
}