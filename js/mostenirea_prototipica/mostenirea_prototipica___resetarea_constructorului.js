/* ===============================================================
   MOSTENIRI PROTOTIPICE (A PARINTILOR):
   RESETAREA CONSTRUCTORULUI
=================================================================*/


/*
   (NB!)
        TOATE 'OBIECTELE'  IN JS 
            => AU O PROP. 'CONSTRUCTOR',
            => CE 'RETURNEAZA' -> 'FUNCTIE UTILIZATA'
                => PT. CONSTRUIREA/CREAREA 'OBIECTULUI'.


    (*) CAND SE 'RESETEAZA' -. 'PROTOTIPUL' UNUI 'ONIECT'
            => SE VA 'RESETA' SI 'CONSTRUCTORUL.'  
*/



//=================================================================
// (1.1) FUNCTIA  CONSTRUCTOR = OBIECTUL 'FORMA'
//=================================================================
function Forma() {

}



//====================================================================================
// (1.2) DEFINIREA METODEI 'DUPLICAT' PT. CREAREA PROTOTIPULUI/PARINTELUI 'FORMA'
//====================================================================================
Forma.prototype.duplicat = function() {
    console.log('Duplicat');
}




//=========================================================================================
// (1.3) PROTOTIPUL 'CERC'-ULUI ARE  PROPRIETATEA 'CONSTRUCTOR'
//=========================================================================================
// Cerc.prototype.constructor= Cerc;
// new Cerc.prototype.constructor(1)


//=========================================================================================
// (1.4) MET. 'CREATE(NUME_OBIECT.PROTOTYPE)' 
//       (PT. 'CREAREA' UNUI 'OBIECT' CU UN 'PROTOTIP/PARINTE DAT')
// ['CERCUL DE BAZA' -> NOSTENESTE 'FORMA DE BAZA' -> CARE NOSTENESTE 'OBIECTUL DE BAZA'] 
//=========================================================================================
Cerc.prototype = Object.create(Forma.prototype);


//=========================================================================================
// (1.5) RESETARE  'CONSTRUCTOR' === LA FUNC. CONSTRUCTOR 'CERC'
//=========================================================================================
Cerc.prototype.constructor = Cerc;



//=================================================================
// (2.1) FUNCTIA  CONSTRUCTOR = OBIECTUL 'CERC'
//=================================================================
function Cerc(raza) {
    this.raza = raza;
}



//====================================================================================
// (2.2) DEFINIREA METODEI 'DESEN' PT. CREAREA PROTOTIPULUI/PARINTELUI 'CERC'
//====================================================================================
Cerc.prototype.desen = function() {
    console.log('Desen');
}



//=================================================================
// (3) DEFINIREA 'OBIECTE'
//=================================================================
const f = new Forma(1);
const c = new Cerc(1);