/* ============================================================================
    MODULE JS:
    FORMATUL  DE  MODUL - 'ES6  MODULES'  (PT. 'BROWSER')
============================================================================== */

/*
    (*) 'EXPORTAREA MODULELOR' IN FORMATUL 'ES6 MODULES'
            => SE FACE PRIN -> ADAUGAREA IN FATA CLASEI
            => A KEYWORD-ULUI 'EXPORT'
    
            export class NumeClasa{ };

            
    (*) 'IMPORTAREA MODULELOR' IN FORMATUL 'ES6 MODULES'
            => SE FACE PRIN 
            => KEYWORD-UL 'IMPORT'

            import {Obiect} from 'Link';
*/


//=================================================================
// (1) IMPORTAREA MODULULUI 'CERC'
//     (PT. ACEST PROIECT -> ADAUGAM EXTENSIA '.JS')
//=================================================================
import { Cerc } from './ES6_Modules/cerc.js';


//=================================================================
// (2) CREAREA OBIECTULUI 'CERC':
//=================================================================
const c = new Cerc(10);


//=================================================================
// (3) APELARE MET. 'DESEN()':
//=================================================================
c.desen();