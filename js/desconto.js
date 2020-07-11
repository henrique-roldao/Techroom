function aplicarDesconto1() {
    var str = document.getElementById("txtcupom").value;
    var cupom = str.toUpperCase();
    var valor = parseFloat('4.399,99')
    var sobra = valor*0.3
    var desct = valor*0.7

    if (cupom === 'ULBRA30') {
        let clean = document.getElementById('btnAplicar');
        clean.setAttribute('style', 'display: none');
        document.getElementById('btnCompra1').innerHTML = `<a href="https://api.whatsapp.com/send?phone=5551995202698&text=Me%20interessei%20pelo%20*Helm%20of%20Terror*%20usando%20o%20cupom%20de%20desconto%20ULBRA30" target="_blank"><button class="button button-light"><i class="fas fa-cart-arrow-down"></i> Comprar</button></>`;
        document.getElementById('txtInvalido').innerHTML = "";
        document.getElementById('txtValido').innerHTML = "Cupom válido!"
        document.getElementById('table1').innerHTML = `          
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>Valor normal</th>
              <th>Descontos</th>
              <th>Valor final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${valor.toFixed(3)}</td>
               <td>${sobra.toFixed(3)}</td>
              <td>${desct.toFixed(3)}</td>
            </tr>
          </tbody>
        </table>`
    } else {
        let txtInvalido = document.getElementById('txtInvalido');
        txtInvalido.innerHTML = "Cupom inválido!";
    }
}

function aplicarDesconto2() {
    var str = document.getElementById("txtcupom2").value;
    var cupom = str.toUpperCase();
    var valor = parseFloat('7.199,99')
    var sobra = valor*0.3
    var desct = valor*0.7

    if (cupom === 'ULBRA30') {
        let clean = document.getElementById('btnAplicar');
        clean.setAttribute('style', 'display: none');
        document.getElementById('btnCompra2').innerHTML = `<a href="https://api.whatsapp.com/send?phone=5551995202698&text=Me%20interessei%20pelo%20*Horn%20of%20Odin*%20usando%20o%20cupom%20de%20desconto%20ULBRA30" target="_blank"><button class="button button-light"><i class="fas fa-cart-arrow-down"></i> Comprar</button></>`;
        document.getElementById('txtInvalido2').innerHTML = "";
        document.getElementById('txtValido2').innerHTML = "Cupom válido!"
        document.getElementById('table2').innerHTML = `          
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>Valor normal</th>
              <th>Descontos</th>
              <th>Valor final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${valor.toFixed(3)}</td>
               <td>${sobra.toFixed(3)}</td>
              <td>${desct.toFixed(3)}</td>
            </tr>
          </tbody>
        </table>`
    } else {
        let txtInvalido = document.getElementById('txtInvalido');
        txtInvalido.innerHTML = "Cupom inválido!";
    }
}

function aplicarDesconto3() {
    var str = document.getElementById("txtcupom3").value;
    var cupom = str.toUpperCase();
    var valor = parseFloat('28.389,99')
    var sobra = valor*0.3
    var desct = valor*0.7

    if (cupom === 'ULBRA30') {
        let clean = document.getElementById('btnAplicar');
        clean.setAttribute('style', 'display: none');
        document.getElementById('btnCompra3').innerHTML = `<a href="https://api.whatsapp.com/send?phone=5551995202698&text=Me%20interessei%20pelo%20*Valknut%20Power*%20usando%20o%20cupom%20de%20desconto%20ULBRA30" target="_blank"><button class="button button-light"><i class="fas fa-cart-arrow-down"></i> Comprar</button></>`;
        document.getElementById('txtInvalido3').innerHTML = "";
        document.getElementById('txtValido3').innerHTML = "Cupom válido!"
        document.getElementById('table3').innerHTML = `          
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th>Valor normal</th>
              <th>Descontos</th>
              <th>Valor final</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${valor.toFixed(3)}</td>
               <td>${sobra.toFixed(3)}</td>
              <td>${desct.toFixed(3)}</td>
            </tr>
          </tbody>
        </table>`
    } else {
        let txtInvalido = document.getElementById('txtInvalido');
        txtInvalido.innerHTML = "Cupom inválido!";
    }
}