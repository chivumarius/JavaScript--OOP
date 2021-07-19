/* ============================================================================*/
MOSTENIRI PROTOTIPICE(A PARINTILOR):
    APELAREA 'SUPER  CONSTRUCTORULUI' (PRIN METODA 'CALL(TIS, PROPRIETATE)') ===
    ===
    === === === === === === === === === === === === === === === === === === === === === === === === = * /

/*
    (NB!)
        OPERATORUL 'NEW' -> CREAZA UN 'OBIECT GOL'
            -> SI APOI SETEAZA 'THIS' 
            -> SA REFERE ACEL 'OBIECT'
*/


//=================================================================
// (1.1) FUNCTIA  CONSTRUCTOR = OBIECTUL 'FORMA'
//=================================================================
function Forma(culoare) {
    // SETAREA PROP. 'CULOARE' ==> CATRE OBIECTUL 'WINDOW':
    this.culoare = culoare;
}




//====================================================================================
// (1.2) DEFINIREA METODEI 'DUPLICAT' PT. CREAREA PROTOTIPULUI/PARINTELUI 'FORMA'
//====================================================================================
Forma.prototype.duplicat = function() {
    console.log('Duplicat');
}






//=============================================================================================
// (2.1) FUNCTIA  CONSTRUCTOR 'CERC'
//       ( APELAREA  'SUPER  CONSTRUCTORULUI' -- PRIN METODA 'CALL(TIS, PROPRIETATE)' )    
//=============================================================================================
function Cerc(raza, culoare) {

    // APELAREA  CONSTRUCTORULUI 'FORMA()':
    // Forma(culoare);

    // APELAREA - PRIN  METODA '.CALL()':
    Forma.call(this, culoare);


    this.raza = raza;
}


//=========================================================================================
// (2.2) MET. 'CREATE(NUME_OBIECT.PROTOTYPE)' 
//       (PT. 'CREAREA' UNUI 'OBIECT' CU UN 'PROTOTIP/PARINTE DAT')
// ['CERCUL DE BAZA' -> NOSTENESTE 'FORMA DE BAZA' -> CARE NOSTENESTE 'OBIECTUL DE BAZA'] 
//=========================================================================================
Cerc.prototype = Object.create(Forma.prototype);


//=========================================================================================
// (2.3) RESETARE  'CONSTRUCTOR' === LA FUNC. CONSTRUCTOR 'CERC'
//=========================================================================================
Cerc.prototype.constructor = Cerc;



//====================================================================================
// (2.4) DEFINIREA METODEI 'DESEN' PT. CREAREA PROTOTIPULUI/PARINTELUI 'CERC'
//====================================================================================
Cerc.prototype.desen = function() {
    console.log('Desen');
}



//=================================================================
// (3) CREAREA 'OBIECTE'
//=================================================================
// OBIECTUL 'FORMA':
const f = new Forma(1);

// OBIECTUL 'CERC':
const c = new Cerc(1, 'Rosu');