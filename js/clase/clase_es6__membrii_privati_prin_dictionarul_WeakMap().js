/* ===============================================================
    CLASE ES6 (ECMASCRIPT6):: 
    MEMBRII  PRIVATI - PRIN  'DICTIONARUL'  'WEAKMAPS()'
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
            => ESTE  'IMPLEMENTATA' PRIN:
                (1) 'TIPUL DE DATE PRIMITIV' - 'SYMBOL'  &
                (2) 'DICTIONARUL' - 'WEAKMAP()'.


    (1) 'SYMBOL()' 
            => ESTE O 'FUNCTIE APELATA'   
            => PT. A 'GENERA' UN 'SYMBOL()'

        
        (#) 'SYMBOL()' 
                => ESTE UN 'IDENTIFICATOR  UNIC', 
                => IAR LA FIECARE 'APELARE' A 'FUNCTIEI' 
                => SE 'OBTINE' UN 'NOU IDENTIFICATOR  UNIC', 


     (2) 'WEAKMAP()' 
            => ESTE UN 'DICTIONAR'   
            => IN CARE  'CHEILE' SUNT 'OBIECTE'

     (*) 'DICTIONARUL' ESTE DENUMIT 'WEAKMAP()' 
            => INTRUCAT 'CHEILE' SALE  SUNT 'SLABE'.   
            
            (*) DACA NU EXISTA REFERINTE CATRE 'CHEI' SALE  SUNT 'SLABE'
                    => ELE DEVIN 'COLECTOARE A GUNOIULUI'.  
*/


//=================================================================
//  (0.1) PROP. PRIVATA (PRIN DICTIONARUL 'WEAKMAP()')
//=================================================================
const _raza = new WeakMap();


//=================================================================
//  (0.2) METODA PRIVATA (PRIN DICTIONARUL 'WEAKMAP()')
//=================================================================
const _miscare = new WeakMap();


//=================================================================
//  (0.3) TOATE PROPRIETATILE  PRIVATA (PRIN DICTIONARUL 'WEAKMAP()')
//=================================================================
// const propietatiPrivate = new WeakMap();



//=================================================================
// (1) CLASA 'CERC':
//=================================================================
class Cerc {

    // MET. 'CONSTRUCTOR':
    constructor(raza) {

        // TOATE PROP. PRIVATE CU  SETTERI (PRIN DICTIONARUL 'WEAKMAP()')
        // propietatiPrivate.set(this, {
        //     raza = raza,
        //     miscare: () => {
        //     }
        // });


        // ACCESAREA TUTUROR PROPS. PRIVATE CU GETTER:
        // propietatiPrivate.get(this).raza;)


        // PROP. PRIVATA CU  SETTER (PRIN DICTIONARUL 'WEAKMAP()')
        _raza.set(this, raza);


        // METODA PRIVATA CU  SETTER & FUNCTIA SAGEATA (PRIN DICTIONARUL 'WEAKMAP()')
        _miscare.set(this, () => {
            console.log('miscare', this);
        });
    }



    // MET. 'DESEN()':
    desen() {

        // ACCESAREA PROP. PRIVATE '_RAZA' CU GETTER:
        // console.log(_raza.get(this));

        // ACCESAREA METODA PRIVATA '_MISCARE' CU GETTER:
        _miscare.get(this)();

        // AFISARE:
        console.log('desen');
    }
}


//=================================================================
// (2) CREAREA OBIECTULUI 'CERC':
//=================================================================
const c = new Cerc(1);