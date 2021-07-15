/* ===============================================================
   EXERCITIU PROTOTIPURI:
   CRONOMETRU
=================================================================*/

// FUNCTIA CONSTRUCTOR:
function Cronometru() {

    // MEMBRUL INSTANTEI 1: 
    let pornireaTimpului, sfarsitulTmpului, cronometrare, durata = 0;


    // MEMBRUL INSTANTEI 2: 
    this.pornire = function() {
        if (cronometrare)
        //  ARUNCAREA ERORI    // 
            throw new Error('Cronometrul a pornit deja.');

        cronometrare = true;

        pornireaTimpului = new Date();
    };


    // MEMBRUL INSTANTEI 3: 
    this.oprire = function() {
        if (!cronometrare)

        //  ARUNCAREA ERORI    // 
            throw new Error('Cronometrul nu este pornit.');

        cronometrare = false;

        sfarsitulTmpului = new Date();

        const secunde = (sfarsitulTmpului.getTime() - pornireaTimpului.getTime()) / 1000;
        durata += secunde;
    };


    // MEMBRUL INSTANTEI 4: 
    this.resetare = function() {
        pornireaTimpului = null;
        sfarsitulTmpului = null;
        cronometrare = false;
        durata = 0;
    };


    // MEMBRUL INSTANTEI 5: 
    Object.defineProperty(this, 'durata', {
        get: function() { return durata; }
    });
}