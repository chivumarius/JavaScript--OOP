/* ============================================================================
    MODULE JS:
    FORMATUL  DE  MODUL - 'COMMONJS'  (PT. 'NODE.JS')
============================================================================== */

/*
    (#1) CODUL  JS --> SE 'PLASEAZA' IN 'FISIERE SEPARATE' 
        --> DENUMITE 'MODULE' 

    (#2) AVANTAJELE 'MODULELOR':
        => MENTENABILITATEA;
        => UZABILITATEA,
        => ABSTRACTIZAREA


    (#3) IN 'ES5' --> 'NU EXISTA'  CONCEPTUL DE 'MODULE'

    (#4) ''FORMATURI  DE  'MODULE':

        [1] 'AMD' (Asynchronous Module Definition) -> PT. 'BROWSER'
        [2] 'CommonJS' (Common JavaScript) -> PT. 'Node.js'
        [3] 'UMD' Universal Module Definition) -> PT. 'BROWSER'/'Nose.js'
        [4] 'ES6 Modules' (EcmasScript Modules) -> PT. 'BROWSER'

    (#) COEZIUNEA / COHESION: 
        => ESTE PROCESUL DE 'GRUPARE IMPREUNA' A 'OBIECTELOR ASEMANATOARE'.

    (#) IN MOD IMPLICIT 
            => 'TOT CE SE PLASEAZA' INTR-UN 'MODUL'
            => SE CONSIDERA IZOLAT (NU POATE FI ACCESAT DIN EXTERIOR)
            => DACA NU IL 'EXPORTAM' EXPLICIT.

    (*) 'EXPORTAREA MODULELOR' IN 'NODE.JS' SAU 'CommonJS':
            EX. - 'EXPORTAREA' UNEI 'PROPRIETATI' CU 'VALOAREA CLASEI'             
                    module.exports.Cerc = Cerc;

            EX. - 'EXPORTAREA' 'MODULULUI' RETURNEAZA 'VALOAREA CLASEI':
            module.exports = Cerc;


    (*) CLASA 'EXPORTATA'
            => SE NUMESTE 'INTERFATA PUBLICA'. 
                        

    (*) PROP. PRIVATA (PRIN DICTIONARUL 'WEAKMAP()') 
            => SE NUMESTE 'DETALIU DE IMPLEMENTARE'. 
            
            
    (*) 'IMPORTAREA MODULELOR'
            => SE REALIZEAZA PRIN FUNCTIA 
            => FORMATULUI CommonJS - 'REQUIRE()'.
    
*/



//=================================================================
// (1) IMPORTAREA MODULULUI 'CERC':
//=================================================================
const Cerc = require('./CommonJS/cerc');


//=================================================================
// (2) CREAREA OBIECTULUI 'CERC':
//=================================================================
const c = new Cerc(1);


//=================================================================
// (3) APELARE MET. 'DESEN()':
//=================================================================
c.desen();