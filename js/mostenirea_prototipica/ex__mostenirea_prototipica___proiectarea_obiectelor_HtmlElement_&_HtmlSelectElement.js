/* ======================================================================
   EXERCITIU PROTOTIPURI:
   EX - PROIECTAREA  OBIECTELOR  'HTMLELEMENT'  &  'HTMLSELECTELEMENT'
========================================================================*/


//========================================================================
// (1.1) FUNCTIA  CONSTRUCTOR 'HTMLELEMENT'
//========================================================================
function ElementHtml() {
    // METODA 'CLIC':
    this.clic = function() {
        console.log('a facut clic');
    }
}


//========================================================================
// (1.2) METODA 'FOCALIZARE' -> A OBIECTULUI 'PARINTE' - 'ELEMENTHtml'
//========================================================================
ElementHtml.prototype.focalizare = function() {
    console.log('focalizat');
}


//========================================================================
// (2) FUNCTIA CONSTRUCTOR 'ELEMENT DE SELECTARE HTML'
//========================================================================
function ElementDeSelectareHtml(elemente = []) {
    this.elemente = elemente;

    // METODA 'ADAUGARE ELEMENT':
    this.adaugareElement = function(element) {
        // TRIMITERE ELEMENT IN MATRICEA GOALA
        this.elemente.push(element);
    }

    // METODA 'STERGERE ELEMENT':
    this.stergereElement = function(element) {
        // STERGEREA ELEMENDULUI DE PE O POZITIE DATA
        this.elemente.splice(this.elemente.indexOf(element), 1);
    }
}
ElementDeSelectareHtml.prototype = new ElementHtml();
ElementDeSelectareHtml.prototype.constructor = ElementDeSelectareHtml;