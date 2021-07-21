/* ===============================================================
    CLASE ES6 (ECMASCRIPT6):: 
    METODELE  GETTER  &  SETTER
=================================================================*/


//=================================================================
//  (0.1) PROP. PRIVATA (PRIN DICTIONARUL 'WEAKMAP()')
//=================================================================
const _raza = new WeakMap();



//=================================================================
// (1) CLASA 'CERC':
//=================================================================
class Cerc {
    // MET. 'CONSTRUCTOR':
    constructor(raza) {
        // SETTER
        // PROP. PRIVATA CU  SETTER (PRIN DICTIONARUL 'WEAKMAP()')
        _raza.set(this, raza);
    }

    // MET. 'GETRAZA()' (PT.' CITIREA PROPRIETATII' DIN 'EXTERIOR')
    // getRaza() {
    // GETTER
    // return _raza.get(this)
    // }

    // IMPLEMENTARE 'GETTER' (ES6)
    // PRIN MET. 'RAZA()' (PT.' CITIREA PROPRIETATII' DIN 'EXTERIOR')
    get raza() {
        // GETTER
        return _raza.get(this);
    }


    // DEFINIRE 'SETTER':
    set raza(valoare) {
        // CONDITIONALA:
        if (valoare <= 0)
        //  ARUNCARE  EROARE
            throw new Error('Raza Invalida!');
        _raza.set(this, valoare);
    }
}


//=================================================================
// (2) CREAREA OBIECTULUI 'CERC':
//=================================================================
const c = new Cerc(1);