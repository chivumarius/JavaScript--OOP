/* ======================================================================
   EXERCITIU PROTOTIPURI:
   POLIMORFISM
========================================================================*/

/*
  
    CERINTE:

      (1) EXTINDEREA  ELEMENTULUI HTML 
            => & IMPLEMENTAREA METODEI DE 'RANDARE()'

      (2) CREATI UN ELEMENT  HTML DE IMAGINE  
            => & IMPLEMENTAREA METODEI DE 'RANDARE()'
*/

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

    // METODA 'RANDARE':
    this.randare = function() {

            // TEMPLATE  STRING - CARACTERUL 'BACKTICK' ``:
            // PRELUAM FIECARE ELEMENT PRIN METODA 'MAP()':
            return `
                <select>${this.elemente.map(element => `
                    <option>${element}</option>`).join('')}
                </select>`;
    }  
  }
  ElementDeSelectareHtml.prototype = new ElementHtml(); 
  ElementDeSelectareHtml.prototype.constructor = ElementDeSelectareHtml;
  


//========================================================================
// (3) FUNCTIA CONSTRUCTOR 'ELEMENT IMAGINE HTML'
//========================================================================
  function ElementImagineHtml(sursa) { 
    this.sursa = sursa; 
       
    // METODA 'RANDARE':
    this.randare = function() {
      // TEMPLATE  STRING - CARACTERUL 'BACKTICK' `` :
      return `<img src="${this.sursa}" />`
    }
  }
  ElementImagineHtml.prototype = new ElementHtml(); 
  ElementImagineHtml.prototype.constructor = ElementImagineHtml;
  

  //========================================================================
// (4) MATRICE  DE  ELEMENTE
//========================================================================
const elemente = [
  new ElementDeSelectareHtml([1, 2, 3]),
  new ElementImagineHtml('http://')
];


//========================================================================
//   ITERAREA  ASUPRA MATRICEI DE ELEMENTE
//========================================================================
  for (let element of elemente) 
    console.log(element.randare());