/* ============================================================================
    MOSTENIRI PROTOTIPICE(A PARINTILOR):
    SUPRASCRIEREA  METODEI  'DUPLICAT()'' 
============================================================================== */

/*
    'SUPRASCRIEREA METODEI' SE 'UTILIZEAZA'
        => IN 'SITUATIILE' IN CARE 'IMPLEMENTAREA' OBIECTULUI 'PARINTE'
        => 'NU ESTE IDEALA' PT. OBIECTUL 'COPIL'.
*/


//=================================================================
// (1.1) CREARE OBIECTUL 'FORMA' (PRIN FUNCTIA  CONSTRUCTOR)
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




//=========================================================================================
// (2) MOSTENIREA PRIN 'FUNCTIA  INTERMEDIAR'A - 'EXTINDE(COPIL, PARINTE)' 
//       (PT. MOSTENIREA  MET. 'COPIL'  DIN MET. 'PARINTE')
//   NB! PARAMETRII SUNT 'CAPITALIZATI' => PT. CA SE ASTEAPTA 'FUNCTII CONSTRUCTOR'
//=========================================================================================
function extinde(Copil, Parinte) {

    // 'CREAREA' UNUI 'OBIECT' CU UN 'PROTOTIP/PARINTE DAT'
    Copil.prototype = Object.create(Parinte.prototype);

    // RESETARE  'CONSTRUCTOR' === LA FUNC. CONSTRUCTOR 'CERC'
    Copil.prototype.constructor = Copil;
}




//=============================================================================================
// (3.1) CREARE OBIECT 'CERC' (PRIN FUNCTIA  CONSTRUCTOR)
//       ( APELAREA  'SUPER  CONSTRUCTORULUI' -- PRIN METODA 'CALL(TIS, PROPRIETATE)' )    
//=============================================================================================
function Cerc(raza, culoare) {

    // APELAREA - PRIN  METODA '.CALL()':
    Forma.call(this, culoare);


    this.raza = raza;
}


//====================================================================================
// (3.2) APELAREA FUNC. INTERMEDIARE 'EXTINDE(COPIL, PARINTE)' - PT. 'CERC'
//====================================================================================
extinde(Cerc, Forma)




//====================================================================================
// (4) SUPRASCRIEREA METODEI 'DUPLICAT' PT. CREAREA PROTOTIPULUI/PARINTELUI 'CERC'
//====================================================================================
Cerc.prototype.duplicat = function() {

    // APELAREA MET. 'DUPLICAT()' DIN OBIECTUL 'FORMA':
    Forma.prototype.duplicat.call(this);

    console.log('Duplicat al Cercului');
}



//=================================================================
// (5) CREAREA 'OBIECT'
//=================================================================
const c = new Cerc(1, 'Rosu');