/* ===============================================================
    EXERCITIU CLASE ES6 (ECMASCRIPT6):: 
    'STIVA' (STACK) - TIP DE DATE 'SPECIAL' 
=================================================================*/

/*
    (#) Este un Tip de Date 'Special'.

    (#) Stiva are urmatoarele Operatiuni esentiale:
        [1] 'PUSH()' -> pt. 'Adaugarea' unui 'Obiect' in 'Cutie'.

        [2] 'POP()' -> pt. 'Sterrgerea' unui 'Obiect' din 'Cutie'.

        [3] 'PEEK()' -> pt. 'Ridicare in Sus' a unui 'Obiect' din 'Cutie' 
            fara a-l 'Sterge' din 'Cutie'.


    (NB!) INTR-O 'STIVA'
            => NU TREBUIE SA AVEM ACCES LA MODIFICAREA OBIECTELOR 
            => UTILIZAN 'INDEXUL' ACESTORA.
*/


//=================================================================
//  (0) DEF. 'PROP. PRIVATA' -> PRIN 'WEEKMAP()':
//=================================================================
const _elemente = new WeakMap();


//=================================================================
// (1) CLASA 'STIVA':
//=================================================================
class Stiva {

    // CONSTRUCTORUL:
    constructor() {

        // MATRICEA (PT. 'STOCAREA OBIECTELOR' IN 'STIVA')
        // PRIN 'PROP. PRIVATA' & MET. 'SET(CHEIE,)':
        _elemente.set(this, []);
    }


    // MET. 'PUSH()' (PT. 'ADAUGAREA OBIECTELOR' IN 'MATRICEA GOALA')
    push(obiect) {
        // ACCESAREA 'MATRICEI'
        // PRIN 'PROP. PRIVATA' & MET. 'GET(CHEIE)' 
        // & MET. 'PUSH(PARAMETRU)':
        _elemente.get(this).push(obiect);
    }

    // MET. 'POP()' (PT. 'STERGEREA OBIECTELOR' DIN 'MATRICE')
    pop(obiect) {

        // 'STOCAREA MATRICEI' INTR-O 'CONSTANTA':
        const elemente = _elemente.get(this);

        // VERIFICAM - DACA 'MATRICEA' ESTE 'GOALA' SAU NU:
        if (elemente.length === 0)
        //  ARUNCAM EROAREA:
            throw new Error('Stiva este Goala!');

        // IN CAZ 'CONTRAR' -> 'STERGEM OBIECTUL' DIN 'VARFUL STIVEI'
        // (PRIN APELAREA METODEI 'POP()'):
        return elemente.pop();
    }


    // MET. 'PEEK' (PT. 'RIDICAREA OBIECTULUI' -> IN 'VARFUL STIVEI')
    peek() {

        // 'STOCAREA MATRICEI' INTR-O 'CONSTANTA':
        const elemente = _elemente.get(this);

        // VERIFICAM - DACA 'MATRICEA' ESTE 'GOALA' SAU NU:
        if (elemente.length === 0)
        //  ARUNCAM EROAREA:
            throw new Error('Stiva este Goala!');

        // IN CAZ 'CONTRAR' -> 'RIDICAM OBIECTUL' IN 'VARFUL STIVEI'
        return elemente[elemente.length - 1];
    }


    // 'GETTER' - MET 'COUNT()':
    get count() {
        // RETURNAM 'LUNGIMEA MATRICEI':
        return _elemente.get(this).length;
    }
}