/* ============================================================================
    MOSTENIRI PROTOTIPICE(A PARINTILOR):
    AMESTECAREA CARACTERISTICILOR OBIECTELOR  (PT. CREAREA  DE  NOI  OBIECTE)
============================================================================== */

/*

    (*)  MET. 'OBJECT .ASSIGN(OBIECT_GOL, OBICT_SURSA)' (ES6):
        => PERMITE COPIEREA 'PROPRIETATILOR' SI 'METODELOR' UNUI OBIEXT
        => INTR-UN  'ALT  OBIECT':

        Object.assign(OBIECT_GOL, OBICT_SURSA1, OBICT_SURSA2, OBICT_SURSA_N);


    (*) OP. REST '...'
            => COLECTEAZA TOATE ARGUMENTELE
            => SI LE INTRODUCE INTR-O MATRICE.


    (*) OP. SPREAD / RASPANDIRE '...'
            => SEPARA O MATRICE
            => IN MAI MULTE ARGUMENTE.
*/


//=================================================================
// (0) FUNC. 'AMESTECARE(TINTA, OP_REST)'
//=================================================================
function amestecare(tinta, ...surse) {
    // OP. SPREAD / RASPANDIRE '...'
    Object.assign(tinta, ...surse);
}




//=================================================================
// (1) OBIECTE DE 'CARACTERISTICI'
//=================================================================

//=================================================================
// (1.1) DEF. 'CARACTERISTICII' CA SI 'OBIEC'  (SINTAXA - 'OBIECT LITERAR')
//=================================================================
const poateManca = {
    // METODA 'MANANCA':
    mananca: function() {
        this.foame--;
        console.log('mananca');
    }
};


//===========================================================================
// (1.2) DEF. 'CARACTERISTICII' CA SI 'OBIEC'  (SINTAXA - 'OBIECT LITERAR')
//==========================================================================
const poateMerge = {
    // METODA 'MERGE':
    merge: function() {
        console.log('merge');
    }
};


//===========================================================================
// (1.3) DEF. 'CARACTERISTICII' CA SI 'OBIEC'  (SINTAXA - 'OBIECT LITERAR')
//==========================================================================
const poateInota = {
    // METODA 'INOATA':
    inoata: function() {
        console.log('inoata');
    }
};



//========================================================================
// (2) COMPUNEREA OBIECTELOR IMPREUNA  PRIN  METODA ES6 'ASSIGN()'  
//========================================================================
const persoana = Object.assign({}, poateManca, poateMerge);

// AFISARE:
console.log(persoana);




//========================================================================
// (3) FUNC. CONSTRUCTOR 'PERSOANA()'  
//========================================================================
function Persoana() {}


//========================================================================
// (3.1.1) COMPUNEREA OBIECTELOR IMPREUNA  
//       PRIN  METODA ES6 'ASSIGN()' & FUNC. 'PERSOANA'  
//========================================================================
// Object.assign(Persoana.prototype, poateManca, poateMerge);


//========================================================================
// (3.1.2) COMPUNEREA OBIECTELOR IMPREUNA  
//       PRIN  FUNCTIA 'AMESTECARE()' & FUNC. 'PERSOANA'  
//========================================================================
amestecare(Persoana.prototype, poateManca, poateMerge);



//========================================================================
// (3.2) CREM 'OBIECT NOU'
//========================================================================
const persoana2 = new Persoana(1);


// AFISARE:
console.log(persoana2);



//========================================================================
// (4) FUNC. CONSTRUCTOR 'PERSOANA()'  
//========================================================================
function PestisorulDeAur() {}



//========================================================================
// (4.1.1) COMPUNEREA OBIECTELOR IMPREUNA  
//       PRIN  METODA ES6 'ASSIGN()' & FUNC. 'PERSOANA'  
//========================================================================
// Object.assign(PestisorulDeAur.prototype, poateManca, poateInota);



//========================================================================
// (4.1.2) COMPUNEREA OBIECTELOR IMPREUNA  
//       PRIN  FUNCTIA 'AMESTECARE()' & FUNC. 'PERSOANA'  
//========================================================================
amestecare(PestisorulDeAur.prototype, poateManca, poateInota);



//========================================================================
// (4.2) CREM 'OBIECT NOU'
//========================================================================
const peste = new PestisorulDeAur(1);


// AFISARE:
console.log(peste);