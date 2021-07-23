/* ============================================================================
    MODULE JS:
    ONVERTORul  JS - 'BABEL'  (TRANSPILATOR)
============================================================================== */

/*
    
(#1) INSTALAM  NODE - PT. PACHETUL 'NPM'

(#2) INITIALIZAM PROIECTUL:
_____________________________________________________

	npm init --yes
_____________________________________________________
	=> VA CREA FISIERUL 'PACKAGE.JSON'
	=> CARE ESTE UN 'IDENTIFICATOR' AL 'APLICATIEI'.


(#3) INSTALAM 'BABEL' (NU PT. PRODUCTIE)- CARE CONTINE 3 PACHETE:

	[1] PACHETUL 1 - 'BABEL-CLI@' - VERSIUNEA '6.26.0'
	[2] PACHETUL 2 - 'BABEL-CORE@' - VERSIUNEA '6.26.0'
	[3] PACHETUL 3 - 'BABEL-PRESET-ENV@' - VERSIUNEA '1.6.1':
_____________________________________________________
npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev
_____________________________________________________
	=> SE INSTALEAZA PACHETUL 'NODE MODULES'
	=> SI FISIERUL 'PACKAGE-LOCK.JS'


SAU:
_____________________________________________________
npm install --save-dev @babel/cli
npm i @babel/core
npm i @babel/preset-env
_____________________________________________________



(#4) CREAM UN FISIER 'INDEX.JS' IN PROIECT


(#5) DESCHIDEM  FISIERUL 'PACKAGE.JSON'
	=> IN SECTIUNEA 'SCRIPT' STERGEM CONTINUTUL:
_____________________________________________________
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
_____________________________________________________


	=> SI ADAUGAM SCRIPTUL:
_____________________________________________________
 "scripts": {
        "babel": "babel --presets env module__convertorul_js__babel_(transpilator).js -o build/module__convertorul_js__babel_(transpilator).js"
    },
_____________________________________________________


	=> CREAM FOLDERUL 'BUILD' 
	=> IN CARE SE VA SALVA VERSIUNEA CONVERTITA A FISIERULUI.



(6) CONVERTIM FISIERUL -> RULAND COMANDA -> IN TERMINAL:

_____________________________________________________

	npm run babel
_____________________________________________________

	=> OBTINEM FISIERUL CONVERTIT
	=> VARIABILA VA AVEA KEYWORD-UL 'VAR'
	=> IN LOC DE 'LET' SAU 'CONST'

*/


//==============================================================================
const x = 1;