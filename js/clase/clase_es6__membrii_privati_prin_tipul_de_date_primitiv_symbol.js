/* ===============================================================
    CLASE ES6 (ECMASCRIPT6):: 
    MEMBRII  PRIVATI - PRIN  'TIPUL  DE  DATE  PRIMITIV'   'SYMBOL'
=================================================================*/


/*
    (#) 'ABSTRACTIA' - INSEAMNA
            => ASCUNDEREA 'DETALIILOR' & 'COMPLEXITATII'
            => SI AFISAREA DOAR A 'PARTI ESENTIALE'.
            
            
    (#) IMPLEMENTAREA 'ABSTRACTIA' - SE REALIZEAZA PRIN:
            => UTILIZAREA 'PROPRIETATILOR PRIVATE' 
            => SI 'METODELOR PRIVATE'.

            => DECI, SE ASCUND 'MEMBRII' UNUI 'OBIECT'
            => PENTRU  A  'NU  FI  ACCESIBILI' -> DIN  'EXTERIOR'.


    (#) PROPRIETATEA PRIVATA:
            => ESTE  'IMPLEMENTATA' 
            => PRIN 'TIPUL DE DATE PRIMITIV' - 'SYMBOL'.


    (#) 'SYMBOL()' 
            => ESTE O 'FUNCTIE APELATA'   
            => PT. A 'GENERA' UN 'SYMBOL()'

        
     (#) 'SYMBOL()' 
            => ESTE UN 'IDENTIFICATOR  UNIC', 
            => IAR LA FIECARE 'APELARE' A 'FUNCTIEI' 
            => SE 'OBTINE' UN 'NOU IDENTIFICATOR  UNIC', 


       
     (#) PROPRIETATILE 'SYMBOL' 
            => SUNT 'AFISATE' -> CA 'SYMBOL()'
            => DAR IN 'INTERIOR' -> 'VALORILE' LOR SUNT 'UNICE'.
*/


//=================================================================
//  (0) PROP. PRIVATA (PRIN TIPUL DE DATE 'SYMBOL')
//=================================================================
const _raza = Symbol();
const _desen = Symbol();

//=================================================================
// (1) CLASA 'CERC':
//=================================================================
class Cerc {

    // MET. 'CONSTRUCTOR':
    constructor(raza) {
        // NOTATIA 'PUNCT':
        // this.raza = raza;

        // NOTATIA 'PARANTEZE':
        // this['raza'] = raza;

        // UTILIZAREA 'TIPULUI DE DATE': 'SYMBOL' (IN LOCUL LUI 'STRING'):
        this[_raza] = raza;
    }


    // MET. PRIVATA '[_DESEN]()'  <= SE VA AFISA IN 'PROTOTYPE'
    // (PRIN 'COMPUNEREA NUMELUI PROPRIETATII'):
    [_desen]() {

    }

}

//=================================================================
// (2) CREAREA OBIECTULUI 'CERC':
//=================================================================
const c = new Cerc(1);

//======================================================================
// (3.1) METODA DE ACCESARE A PROPRIETATII - 'GET OWN PROPERTY NAMES':
//=======================================================================
// console.log(Object.getOwnPropertyNames(c));

//=======================================================================
// (3.2) METODA DE ACCESARE A PROPRIETATII - 'GET OWN PROPERTY SYMBOLS':
//=======================================================================
// console.log(Object.getOwnPropertySymbols(c));

//=======================================================================
// (3.3) "DOAR PT. DEMONSTRATIE"
//  METODA DE ACCESARE A PROPRIETATII - 'GET OWN PROPERTY SYMBOLS':
//=======================================================================
const cheie = Object.getOwnPropertySymbols(c)[0];

//=======================================================================
// ACCESAREA CONSTANTEI:
console.log(c[cheie]);