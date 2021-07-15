/* ===============================================================
   PROTOTIPURI (OBIECTE PARINTE):
   PROTOTIP  vs  MEMBRII  DE  INSTANTA
=================================================================*/


/*
    (NB!) 
    
    IN 'JAVASCRIPT' AVEM '2 TIPURI' DE 'PROPRIETATI' & 'METODE':
        [1] 'MEMBRII DE INSTANTA'
        [2] 'MEMBRII PROTOTIPURI'

*/


//=================================================================
// (#) FUNCTIA 'CONSTRUCTOR' CU '2 MEMBRII'
//=================================================================
function Cerc(raza) {
    // [1] 'MEMBRUL 1 DE INSTANTA':
    this.raza = raza;

    // MEMBRUL 2:  <= MUTAM AFISAREA IN PROTOTIPUL DE BAZA
    // [1] 'MEMBRUL 2 DE INSTANTA':
    // this.desen = function() {
    //     console.log('desen');
    // }

    // [1] 'MEMBRUL 3 DE INSTANTA' (METODA):
    this.miscare = function() {

        // REFERIM 'MEMBRUL PROTOTIP' AICI IN 'MEMBRUL INSTANTEI':
        this.desen();

        console.log('miscare');
    }
}


// [2] 'MEMBRII PROTOTIPURI'
// PROTOTIPAREA  DE  BAZA A METODEI 'DESEN'
Cerc.prototype.desen = function() {
    // REFERIM 'MEMBRUL INSTANTEI' AICI IN 'MEMBRUL PROTOTIP':
    // this.miscare();

    // AFISARE
    console.log('desen');
};


// OBIECTE 'CERC':
const c1 = new Cerc(1);
const c2 = new Cerc(1);

// SUPRASCRIEREA MET. 'toString()' IN PROTOTIPUL OBIECTULUI CERC:
Cerc.prototype.toString = function() {
    return 'Cerc cu raza ' + this.raza;
}