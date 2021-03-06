/* ===============================================================
    CLASE ES6 (ECMASCRIPT6):: 
    KEYWORD-UL 'THIS'
=================================================================*/


/*
    (*) APELAREA 'METODEI' => REFERA OBIECTUL IN CARE SE EXECUTA METODA.
    (*) APELAREA 'FUNCTIEI' => REFERA 'WINDOW'

    (*) MODUL 'STRICT'  => NU REFERA OBIECTUL 'GLOBAL'/'WINDOW'
            => SI IL SETEZA CA 'NEDEFINIT'
*/


//=================================================================
// (0) ACTIVAREA MODULUI 'STRICT':
//=================================================================
'use strict';


//=================================================================
// (1) 'FUNCTIA  CONSTRUCTOR' 'CERC':
//=================================================================
const Cerc = function() {
    this.desen = function() {
        console.log(this);
    }
}



//=================================================================
// (1.2) CREAN OBIECTUL'CERC':
//=================================================================
const c = new Cerc(1);


//=================================================================
// (1.3) 'APELAREA  METODEI' - 'DESEN()':
//=================================================================
c.desen();


//=================================================================
// (1.4) PRELUAREA REFERINTEI CATRE METODA
//=================================================================
const desen = c.desen;



//=================================================================
// (1.5) 'APELAREA  FUNCTIEI' - 'DESEN()':
//=================================================================
desen();