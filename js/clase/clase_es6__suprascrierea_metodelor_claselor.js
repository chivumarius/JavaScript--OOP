/* ===============================================================
    CLASE ES6 (ECMASCRIPT6):: 
    SUPRASCRIEREA  'METODELOR'  CLASELOR
=================================================================*/


//=================================================================
// (1) CLASA 'FORMA':
//=================================================================
class Forma {

    //  METODA:
    miscare() {
        console.log('Miscarea Cercului');
    }
}


//=================================================================
// (2) CLASA 'CERC' CARE 'EXTINDE' CLASA 'FORMA':
//=================================================================
class Cerc extends Forma {


    // SUPRASCRIEREA METODEI 'MISCARE()':
    miscare() {

        // ACCESAREA METODEI 'PARINTE':
        super.miscare();

        // AFISARE:
        console.log('miscare');
    }
}



//=================================================================
// (3) CREAREA OBIECTULUI 'CERC': 
//=================================================================
const c = new Cerc('Albastru Maritim', 1);