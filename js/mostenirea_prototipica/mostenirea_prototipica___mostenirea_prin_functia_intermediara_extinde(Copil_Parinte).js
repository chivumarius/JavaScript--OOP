/* ============================================================================
    MOSTENIRI PROTOTIPICE(A PARINTILOR):
    'MOSTENIREA' PRIN 'FUNCTIA  INTERMEDIAR'A - 'EXTINDE(COPIL, PARINTE)' 
============================================================================== */




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
// (3.3) DEFINIREA METODEI 'DESEN' PT. CREAREA PROTOTIPULUI/PARINTELUI 'CERC'
//====================================================================================
Cerc.prototype.desen = function() {
    console.log('Desen');
}





//=============================================================================================
// (4.1) CREARE OBIECT 'PATRAT' (PRIN FUNCTIA  CONSTRUCTOR)
//=============================================================================================
function Patrat(dimensiune) {

    this.dimensiune = dimensiune;
}



//====================================================================================
// (4.2) APELAREA FUNC. INTERMEDIARE 'EXTINDE(COPIL, PARINTE)' - PT. 'PATRAT'
//====================================================================================
extinde(Patrat, Forma)







//=================================================================
// (5) CREAREA 'OBIECTE'
//=================================================================
// (4.1) OBIECTUL 'FORMA':
const f = new Forma(1);

// (4.2) OBIECTUL 'CERC':
const c = new Cerc(1, 'Rosu');