/* ============================================================================
    MOSTENIRI PROTOTIPICE(A PARINTILOR):
    POLIMORFISMUL
============================================================================== */

/*
    'SUPRASCRIEREA METODEI' INSEAMNA:
        => REIMPLEMENTAREA UNEI METODE
        => IN OBIECTUL 'COPIL'


    'POLYMORPHISM':
        => 'POLY' = MULTE
        => 'MORPHISM' = FORME  (IMPLEMENTARI)

    EX.:
        'FORMA / IMPLEMENTAREA DIFERITA' -> A METODEI 'DUPLICAT()'
            => SE NUMESTE 'POLIMORFISM'
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
extinde(Cerc, Forma);




//====================================================================================
// (3.3) SUPRASCRIEREA METODEI 'DUPLICAT' PT. CREAREA PROTOTIPULUI/PARINTELUI 'CERC'
//====================================================================================
Cerc.prototype.duplicat = function() {

    console.log('Duplicat al Cercului');
}




//=============================================================================================
// (4.1) CREARE OBIECT 'PATRAT' (PRIN FUNCTIA  CONSTRUCTOR)
//=============================================================================================
function Patrat() {

}



//====================================================================================
// (4.2) APELAREA FUNC. INTERMEDIARE 'EXTINDE(COPIL, PARINTE)' - PT. 'patrat'
//====================================================================================
extinde(Patrat, Forma);




//====================================================================================
// (4.3) SUPRASCRIEREA METODEI 'DUPLICAT' PT. CREAREA PROTOTIPULUI/PARINTELUI 'CERC'
//====================================================================================
Patrat.prototype.duplicat = function() {
    console.log('Duplicat al Patratului');
}




//=================================================================
// (5.1) MATRICEA 'FORME'  CU OBIECTE
//=================================================================
const forme = [
    new Cerc(),
    new Patrat()
];




//=================================================================
// (5.2) ITERAREA MATRICEI 'FORME' 
//=================================================================
for (let forma of forme)
    forma.duplicat();



//=================================================================
// (5.3) ITERAREA MATRICEI 'FORME' FARA  'OOP'
//=================================================================
// for (let forma of forme) {
//     if (forma.tip === 'cerc')
//         duplicareCerc();
//     else if (forma.type === 'patrat')
//         duplicarePatrat();
//     else
//         duplicareForma();
// }