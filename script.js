var decimal = 0;
var binario = 0;
var octal = 0;
var hex = 0;

function mostrarDiv(div) {
    if (div.style.opacity == 1) {
        div.style.opacity = 0;
    } else {
        div.style.opacity = 1;
    }
}

// Função de lógica para ocultação e mostra das divs
function mostrarDiv(div) {
    if (div.style.display == 'block' && div.style.opacity == 1) {
        div.style.opacity = 0;
        setTimeout(function() {
            div.style.display = 'none';
        }, 500);
    } else {
        setTimeout(function() {
            div.style.display = 'block';
        }, 700)
        setTimeout(function() { 
            div.style.opacity = 1;
        }, 900);
       
    }
}

// Funções que mostram a div ao clicar nos radios
function mostrarDecimal() {
    div_binario.style.opacity = 0;
    div_octal.style.opacity = 0;
    div_hexa.style.opacity = 0;

    setTimeout(function() {
        div_binario.style.display = 'none';
        div_octal.style.display = 'none';
        div_hexa.style.display = 'none';
    }, 600);

    mostrarDiv(div_decimal); 
    
}

function mostrarBinario() {
    div_decimal.style.opacity = 0;
    div_octal.style.opacity = 0;
    div_hexa.style.opacity = 0;

    setTimeout(function() {
        div_decimal.style.display = 'none';
        div_octal.style.display = 'none';
        div_hexa.style.display = 'none';
    }, 600);

   mostrarDiv(div_binario);
}

function mostrarOctal() {
    div_binario.style.opacity = 0;
    div_decimal.style.opacity = 0;
    div_hexa.style.opacity = 0;

    setTimeout(function() {
        div_binario.style.display = 'none';
        div_decimal.style.display = 'none';
        div_hexa.style.display = 'none';
    }, 600);
    
    mostrarDiv(div_octal);
}

function mostrarHexadecimal() {
    div_binario.style.opacity = 0;
    div_octal.style.opacity = 0;
    div_decimal.style.opacity = 0;

    setTimeout(function() {
        div_binario.style.display = 'none';
        div_octal.style.display = 'none';
        div_decimal.style.display = 'none';
    }, 600);

    mostrarDiv(div_hexa);
}

// Seção de funções para conversão decimal
function calcularDecBin() {
    decimal = Number(input_decimal.value);
    let binaria = decimal.toString(2);

    document.getElementById("div_decBin").innerHTML = ` ${binaria}`;
}

function calcularDecHexa() {
    decimal = Number(input_decimal.value);
    let hexadecimal = decimal.toString(16);
    
    document.getElementById("div_decHexa").innerHTML = ` ${hexadecimal}`;
}

function calcularDecOctal() {
    decimal = Number(input_decimal.value);
    let octal = decimal.toString(8);    
    
    document.getElementById("div_decOctal").innerHTML = ` ${octal}`;
}

function converterDecimal() {
    calcularDecBin();
    calcularDecHexa();
    calcularDecOctal();
}

// Seção para conversão de binário
function calcularBinOctal() {
    binario = Number(input_binario.value);
    var binDec = parseInt(binario, 2);
    octal = binDec.toString(8);
    
    document.getElementById("div_binOctal").innerHTML = ` ${octal}`;
}

function calcularBinDec() {
    binario = Number(input_binario.value);
    let decimal = parseInt(binario, 2);

    document.getElementById("div_binDec").innerHTML = ` ${decimal}`;
}

function calcularBinHexa() {
    binario = Number(input_binario.value);
    var binDec = parseInt(binario, 2);
    var hexa = binDec.toString(16); 

    document.getElementById("div_binHexa").innerHTML = ` ${hexa}`;
}

function converterBinario() {
    calcularBinHexa();
    calcularBinDec();
    calcularBinOctal();
}

// Seção para conversão de octal
function calcularOctalBin() {
    octal = Number(input_octal.value);
    var octalBin = parseInt(octal, 8);
    var binario = octalBin.toString(2); 

    mostrarDiv(div_octalBin);

    document.getElementById("div_octalBin").innerHTML = ` ${binario}`;
}
function calcularOctalDec() {
    octal = Number(input_octal.value);
    var decimal = parseInt(octal, 8);

    mostrarDiv(div_octalDec);

    document.getElementById("div_octalDec").innerHTML = ` ${decimal}`;
}
function calcularOctalHex() {
    octal = Number(input_octal.value);
    var octalHex = parseInt(octal, 8);
    var hexa = octalHex.toString(16); 

    mostrarDiv(div_octalHex);

    document.getElementById("div_octalHex").innerHTML = ` ${hexa}`;
}

function converterOctal() {
    calcularOctalHex();
    calcularOctalDec();
    calcularOctalBin();
}


// Seção para conversão hexadecimal
function calcularHexOctal() {
    hex = input_hex.value;
    var hexOctal = parseInt(hex, 16);
    var octal = hexOctal.toString(8); 

    document.getElementById("div_hexOctal").innerHTML = `${octal}`;
}
function calcularHexDec() {
    hex = input_hex.value;
    var decimal = parseInt(hex, 16);

    document.getElementById("div_hexDec").innerHTML = ` ${decimal}`;
}
function calcularHexBin() {
    hex = input_hex.value;
    var hexBin = parseInt(hex, 16);
    var binario = hexBin.toString(2); 

    document.getElementById("div_hexBin").innerHTML = ` ${binario}`;
}

function converterHexa() {
    calcularHexOctal();
    calcularHexDec();
    calcularHexBin();
}