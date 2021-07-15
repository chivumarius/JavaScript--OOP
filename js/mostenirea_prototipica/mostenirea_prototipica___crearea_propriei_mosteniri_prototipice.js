/* ===============================================================
   MOSTENIRI PROTOTIPICE / A PARINTILOR:
   CREAREA  PROPRIEI  MOSTENIRI  PROTOTIPICE
=================================================================*/


/*
    DORIIM SA CREAM NOI FORME:
        => SI SA MOSTENIM PROPRIETATILE FORMEI
        => PT. CREAREA UNOR OBIECTE NOI


    (*) MET. 'CREATE()' 
            => PermiTe 'CREAREA' UNUI 'OBIECT' CU UN 'PROTOTIP/PARINTE DAT'

        EX:
            Object.create(NUME_OBIECT_MOSTENIT.PROTOTYPE);

    ['CERCUL DE BAZA' -> NOSTENESTE 'FORMA DE BAZA' -> CARE NOSTENESTE 'OBIECTUL DE BAZA'] 
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
// (1.3) MET. 'CREATE(NUME_OBIECT.PROTOTYPE)' 
//       (PT. 'CREAREA' UNUI 'OBIECT' CU UN 'PROTOTIP/PARINTE DAT')
// ['CERCUL DE BAZA' -> NOSTENESTE 'FORMA DE BAZA' -> CARE NOSTENESTE 'OBIECTUL DE BAZA'] 
//=========================================================================================
Cerc.prototype = Object.create(Forma.prototype);



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