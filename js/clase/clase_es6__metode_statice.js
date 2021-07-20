/* ===============================================================
    CLASE ES6 (ECMASCRIPT6):
    METODE  'STATICE'
=================================================================*/


/*

        (#) IN 'OOP'-UL ''CLASIC' AVEM  2 TIPURI DE  METODE:

            (1)) METODE 'INSTANTE'
                    => SUNT DISPONIBILE PE  INSTANTA  OBIECTULUI.


            (2)) METODE 'STATICE'
                    => SUNT DISPONIBILE PE O CLASA, NU PE OBIECTUL SAU.
                    => SUNT CREATE PRIN KEYWORD-UL 'STATIC' => PLASAT IN FATA METODEI.
*/



//=================================================================
// (1.1) CLASA 'CERC'
//=================================================================
class Cerc {

    // MET. 'CONSTRUCTOR' (PT. 'INITIALIZAREA OBIECTELOR'):
    constructor(raza) {
        this.raza = raza;
    }


    // 'METODA INSTANTEI' - 'DESEN()'
    desen() {}


    // 'METODA STATICA' - 'PARSE()' (ANALIZA)
    static parse(string) {
        const raza = JSON.parse(string).raza;
        return new Cerc(raza);
    }
}



//=================================================================
// (1.2) ACCESAREA METODEI STATICE 'PARSE()':
const cerc = Cerc.parse('{"raza": 1}');


//=================================================================
// (1.4) AFISARE OBIECT 'CERC':
console.log(cerc);