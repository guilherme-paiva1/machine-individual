var decimal = 0;
var binario = 0;
var octal = 0;
var hex = 0;

// Função de lógica para ocultação e mostra das divs
function mostrarDiv(div) {
    if (div.style.display == 'block' || div.style.opacity == 1) {
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

function mostrarDivResultado(div) {
    if (div.style.opacity == 1) {
        div.style.opacity = 0;
        setTimeout(function() { 
            div.style.opacity = 1;
        }, 700);
    } else {
        div.style.opacity = 1;
    }
}

// Funções que mostram a div ao clicar nos radios
function mostrarDecimal() {
    div_binario.style.opacity = 0;
    div_octal.style.opacity = 0;
    div_hexa.style.opacity = 0;
    div_ascii.style.opacity = 0;

    setTimeout(function() {
        div_binario.style.display = 'none';
        div_octal.style.display = 'none';
        div_hexa.style.display = 'none';
        div_ascii.style.display = 'none';
        }, 600);

    if (div_decimal.style.opacity == 0) {
        mostrarDiv(div_decimal); 
    } 
}

function mostrarBinario() {
    div_decimal.style.opacity = 0;
    div_octal.style.opacity = 0;
    div_hexa.style.opacity = 0;
    div_ascii.style.opacity = 0;

    setTimeout(function() {
        div_decimal.style.display = 'none';
        div_octal.style.display = 'none';
        div_hexa.style.display = 'none';
        div_ascii.style.display = 'none';
    }, 600);

    if (div_binario.style.opacity == 0) {
        mostrarDiv(div_binario);
    } 
   
}

function mostrarOctal() {
    div_binario.style.opacity = 0;
    div_decimal.style.opacity = 0;
    div_hexa.style.opacity = 0;
    div_ascii.style.opacity = 0;

    setTimeout(function() {
        div_binario.style.display = 'none';
        div_decimal.style.display = 'none';
        div_hexa.style.display = 'none';
        div_ascii.style.display = 'none';
    }, 600);
    
    if (div_octal.style.opacity == 0) {
        mostrarDiv(div_octal);
    } 
}

function mostrarHexadecimal() {
    div_binario.style.opacity = 0;
    div_octal.style.opacity = 0;
    div_decimal.style.opacity = 0;
    div_ascii.style.opacity = 0;

    setTimeout(function() {
        div_binario.style.display = 'none';
        div_octal.style.display = 'none';
        div_decimal.style.display = 'none';
        div_ascii.style.display = 'none';
    }, 600);

    if (div_hexa.style.opacity == 0) {
        mostrarDiv(div_hexa);
    }
}

function mostrarASCII() {
    div_binario.style.opacity = 0;
    div_octal.style.opacity = 0;
    div_decimal.style.opacity = 0;
    div_hexa.style.opacity = 0;

    setTimeout(function() {
        div_binario.style.display = 'none';
        div_octal.style.display = 'none';
        div_decimal.style.display = 'none';
        div_hexa.style.display = 'none';
    }, 600);

    if (div_hexa.style.opacity == 0) {
        mostrarDiv(div_ascii);
    }
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
    mostrarDivResultado(div_decBin);
    mostrarDivResultado(div_decHexa);
    mostrarDivResultado(div_decOctal);

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
    mostrarDivResultado(div_binDec);
    mostrarDivResultado(div_binOctal);
    mostrarDivResultado(div_binHexa);

    calcularBinHexa();
    calcularBinDec();
    calcularBinOctal();

}

// Seção para conversão de octal
function calcularOctalBin() {
    octal = Number(input_octal.value);
    var octalBin = parseInt(octal, 8);
    var binario = octalBin.toString(2); 

    document.getElementById("div_octalBin").innerHTML = ` ${binario}`;
}
function calcularOctalDec() {
    octal = Number(input_octal.value);
    var decimal = parseInt(octal, 8);

    document.getElementById("div_octalDec").innerHTML = ` ${decimal}`;
}
function calcularOctalHex() {
    octal = Number(input_octal.value);
    var octalHex = parseInt(octal, 8);
    var hexa = octalHex.toString(16); 

    document.getElementById("div_octalHex").innerHTML = ` ${hexa}`;
}

function converterOctal() {
    mostrarDivResultado(div_octalHex);
    mostrarDivResultado(div_octalDec);
    mostrarDivResultado(div_octalBin);

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
    mostrarDivResultado(div_hexBin);
    mostrarDivResultado(div_hexDec);
    mostrarDivResultado(div_hexOctal);

    calcularHexOctal();
    calcularHexDec();
    calcularHexBin();
}

// Funções para ASCII
function calcularAsciiDec() {
    var caractere = input_ascii.value;
    var soma = 0;
    var bin = '';
    var binDec = 0;
    var letra = caractere.split('');
    
    letra.forEach(element => {
        element = element.charCodeAt();
        bin = '0' + element.toString(2);
        binDec = parseInt(bin, 2);
        soma += binDec;
    });

    document.getElementById("div_asciiDec").innerHTML = soma;
}

function calcularAsciiBin() {
    var caractere = input_ascii.value;
    var mensagem = '';
    var bin = '';
    var letra = caractere.split('');
    

    letra.forEach(element => {
        element = element.charCodeAt();
        bin = '0' + element.toString(2);

        mensagem += `${bin} `;
    });

    document.getElementById("div_asciiBin").innerHTML = mensagem;
}

function calcularAsciiOctal() {
    var caractere = input_ascii.value;
    var mensagem = '';
    var bin = '';
    var octal = '';
    var binDec = 0;
    var letra = caractere.split('');

    letra.forEach(element => {
        element = element.charCodeAt();
        bin = '0' + element.toString(2);
        binDec = parseInt(bin, 2);
        octal = binDec.toString(8);

        mensagem += `${octal} `;
    });

    document.getElementById("div_asciiOctal").innerHTML = mensagem;
}

function calcularAsciiHexa() {
    var caractere = input_ascii.value;
    var mensagem = '';
    var bin = '';
    var hexa = '';
    var binDec = 0;
    var letra = caractere.split('');
    

    letra.forEach(element => {
        element = element.charCodeAt();
        bin = '0' + element.toString(2);
        binDec = parseInt(bin, 2);
        hexa = binDec.toString(16);

        mensagem += `${hexa} `;
    });

    document.getElementById("div_asciiHexa").innerHTML = mensagem;
}

function converterCaracter() {
    mostrarDivResultado(div_asciiDec);
    mostrarDivResultado(div_asciiBin);
    mostrarDivResultado(div_asciiOctal);
    mostrarDivResultado(div_asciiHexa);

    calcularAsciiBin();
    calcularAsciiDec();
    calcularAsciiHexa();
    calcularAsciiOctal();
}