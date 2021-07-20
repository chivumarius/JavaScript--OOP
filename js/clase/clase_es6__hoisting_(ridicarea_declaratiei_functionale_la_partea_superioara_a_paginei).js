/* ===============================================================
    CLASE ES6 (ECMASCRIPT6):
    HOISTING  (RIDICAREA  'DECLARARII  FUNCTIONALE'  LA  PARTEA  SUPERIOARA  A  PAGINEI)
=================================================================*/


/*
    FUNCTIILE:

        (#) 'HOISTING'-UL -> ESTE 'PROCESUL' PRIN CARE 'MOTORUL JAVASCRIPT'
            => CAND 'EXECUTA' CODUL,
            => RIDICA/MUTA  TOATE 'DECLARATIILE FUNCTIONALE' SUS, LA PARTEA 'SUPERIOARA' A PAGINEI.  
            
            
        (#) FUNCTIILE 'DECLARATE' PRIN 'SINTAXA': 
       
            (1) 'DECLARATIEI FUNCTIONALE' 
                => 'POT' FI 'APELATE' -> 'INAINTEA  DEFINIRII' SALE  PROPRIUZISE. 
                 
            (2) 'EXPRESIEI FUNCTIONALE'
                => 'NU POT' FI 'APELATE' -> 'INAINTEA  DEFINIRII' SALE,
                => CI DOAR 'DUPA DEFINIRE'. 
*/


/*
    CLASELE:

        (*) 'DECLARAREA CLASELOR' -> SE 'REALIZEAZA' PRIN':
                => SINTAXA 'DECLARATIEI'
                => SINTAXA 'EXPRESIEI'


        (*) 'DECLARATIA CLASEI' & 'EXPRESIA CLASEI':
                => NU SUNT HOISTED (RIDICATE IN PARTEA SUPERIOARA A PAGINEI )

*/


// =================================================================
// (0.1)' DEFINIREA  FUNCTIEI' - PRIN  'DECLARATIE  FUNCTIONALA' 
// =================================================================

// APELAREA FUNCTIE INAINTEA DEFINIRII:
// hoisting();

// DEFINIREA FUNCTIEI 
// function hoisting() {
//     console.log('Apelarea Inaintea Definirii');
// }




// =================================================================
// (0.2) 'DEFINIREA  FUNCTIEI' - PRIN  'EXPRESIE  FUNCTIONALA  ANONIMA'
// =================================================================


// APELARE ERONATA (PRIMIM EROARE):
// apelareaDupaDefinire();

// DEFINIREA FUNCTIEI 
// let apelareaDupaDefinire = function() {
//     console.log('Apelarea Dupa Definire');
// };

// APELARE:
// apelareaDupaDefinire();
// =================================================================




//=================================================================
// (1.2) CREARE OBIECT 'CERC':      <= EROARE
//  CLASELE NU AU HOISTED (RIDICATE IN PARTEA SUPERIOARA A PAGINEI)
//=================================================================
const c = new Cerc();


// =================================================================
// (1) 'DECLARATIA  CLASEI'  <= SINTAXA 'RECOMANDATA' IN 'UTILIZARE'
// =================================================================
class Cerc {}



// =================================================================
// (2) 'EXPRESIA  CLASEI'  <= SINTAXA 'NERECOMANDATA' IN 'UTILIZARE'
// =================================================================
const patrat = class Patrat {}