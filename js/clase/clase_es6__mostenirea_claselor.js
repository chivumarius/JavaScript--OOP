/* ===============================================================
    CLASE ES6 (ECMASCRIPT6):: 
    MOSTENIREA  CLASELOR
=================================================================*/

/*
    (*) EXTINDEREA 'CLASELOR'
            => SE REALIZAZA PRIN KEYWORD-UL 'EXTENDS'

    (*) METODA 'CONSTRUCTOR()' DIN CLASA 'COPIL'
            => TREBUIE SA REFERE METODA 'PARINTE'
            => PRIN KEYWORD-UL 'SUPER(PROP_PARINTE)'.
*/


//=================================================================
// (1) CLASA 'FORMA':
//=================================================================
class Forma {

    //  METODA 'CONSTRUCTOR':
    constructor(culoare) {
        this.culoare = culoare;
    }


    //  METODA:
    miscare() {
        console.log('miscare');
    }
}


//=================================================================
// (2) CLASA 'CERC' CARE 'EXTINDE' CLASA 'FORMA':
//=================================================================
class Cerc extends Forma {

    //  METODA 'CONSTRUCTOR':
    constructor(culoare, raza) {
        //  METODA 'CONSTRUCTOR  COPIL' REFERA 'CONSTRUCTORUL PARINTE' 
        super(culoare);
        this.raza = raza;
    }


    //  METODA:
    desen() {
        console.log('desen');
    }
}



//=================================================================
// (3) CREAREA OBIECTULUI 'CERC': 
//=================================================================
const c = new Cerc('Albastru Maritim', 1);