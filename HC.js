const mainInp = document.getElementById('mainInp');
const NOC = document.getElementById('NOC');
const NOB = document.getElementById('NOB');

NOC.addEventListener('input', Symboler);
NOB.addEventListener('input', Symboler);

function Symboler() {
    const numbers = mainInp.value.match(/\d+/g); // Get numbers from the value of mainInp

    let C = 'C' + NOC.value;
    let H = '';
    if (NOB.value == '1') {
        H = 'H' + (parseInt(NOC.value) * 2 + 2);
    } else if (NOB.value == '2') {
        H = 'H' + (parseInt(NOC.value) * 2);
    } else if (NOB.value == '3') {
        H = 'H' + (parseInt(NOC.value) * 2 - 2);
    }
    const Symbol = C + '' + H;

    mainInp.value = Symbol;
}
function result(){
    const result = document.getElementById('result');
    let grk = '';
    let nam = '';
    if (NOC.value == '1') {
        grk = 'Meth'
    } else if (NOC.value == '2') {
        grk = 'Eth'
    } else if (NOC.value == '3') {
        grk = 'Prop'
    } else if (NOC.value == '4') {
        grk = 'But'
    }else if (NOC.value == '5') {
        grk = 'Pent'
    }else if (NOC.value == '6') {
        grk = 'Hex'
    }else if (NOC.value == '7') {
        grk = 'Hept'
    }else if (NOC.value == '8') {
        grk = 'Oct'
    }else if (NOC.value == '9') {
        grk = 'Non'
    }else if (NOC.value == '10') {
        grk = 'Dec'
    }else if (NOC.value == '11') {
        grk = 'Andec'
    }else if (NOC.value == '12') {
        grk = 'Dodec'
    }else if (NOC.value == '13') {
        grk = 'Tridec'
    }else if (NOC.value == '14') {
        grk = 'Tetradec'
    }else if (NOC.value == '15') {
        grk = 'Pentadec'
    }else if (NOC.value == '16') {
        grk = 'Hexadec'
    }else if (NOC.value == '17') {
        grk = 'Heptadec'
    }else if (NOC.value == '18') {
        grk = 'Octadec'
    }else if (NOC.value == '19') {
        grk = 'Nonadec'
    }else if (NOC.value == '20') {
        grk = 'Ikos'
    }
    else{
        window.prompt(`You'v Reached the Limit`)
    }
    console.log(grk);
    if(NOB.value == 1){
        nam = 'ane'
    }else if(NOB.value == 2){
        nam = 'ene'
    }else if(NOB.value == 3){
        nam = 'yne'
    }
    else{
        window.prompt(`You'v Reached the Limit`)
    }
    console.log(nam);
    const rslt = grk + nam
    console.log(rslt);
    result.innerHTML = rslt
}
