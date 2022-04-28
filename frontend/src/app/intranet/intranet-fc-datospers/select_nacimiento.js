var ubigeoPeru = {
  ubigeos: new Array()
};

document.addEventListener('DOMContentLoaded', function() {
  var request = new XMLHttpRequest;
  request.open('GET', "./../../assets/ubigeo-peru.min.json", true);

  request.onload = onLoad_Request;
  request.send();

  function onLoad_Request() {
      ubigeoPeru.ubigeos = JSON.parse(request.responseText);
      showRegionsList();
  }
});

function showRegionsList() {
  ubigeoPeru.ubigeos.forEach(function(ubigeo) {
    if (ubigeo.provincia === '00' && ubigeo.distrito === '00') {

      let option = document.createElement('option');

      option.id = 'dpto-' + ubigeo.departamento;
      option.name = 'departamento';
      option.value = ubigeo.departamento;

      option.addEventListener('change', onChange_Region, false);

      option.textContent = ubigeo.nombre;

      document.querySelector('#depVivList').appendChild(option);
    }
  });
  let option2 = document.getElementById('depVivList');
  option2.addEventListener('change', onChange_Region, false);
}

function test(){
  console.log('test correcto');
}

function onChange_Region() {

  document.querySelector('#provVivList').innerHTML = '';
  document.querySelector('#distVivList').innerHTML = '';
  showProvincesList(this.value);
  console.log('region cambio');
}

function showProvincesList(departamento) {

  ubigeoPeru.ubigeos.forEach(function(ubigeo) {

    if (ubigeo.departamento === departamento && ubigeo.provincia !== 0 && ubigeo.distrito === '00') {

      var option = document.createElement('option');

      option.id = 'prov-' + ubigeo.provincia;
      option.name = 'provincia';
      option.value = ubigeo.provincia;
      option.addEventListener('click', onChange_Province, false);

      option.textContent = ubigeo.nombre;

      document.querySelector('#provVivList').appendChild(option);
    }
  });

  let option2 = document.getElementById('provVivList');
  option2.addEventListener('change', onChange_Province, false);
}

function onChange_Province() {

  document.querySelector('#distVivList').innerHTML = '';

  var departamento = document.getElementById('depVivList').value;

  showDistrictsList(departamento, this.value);
}

function showDistrictsList(departamento, provincia) {

  ubigeoPeru.ubigeos.forEach(function(ubigeo) {

    if (ubigeo.departamento === departamento && ubigeo.provincia === provincia && ubigeo.distrito !== 0) {

      var option = document.createElement('option');

      option.id = 'dist-' + ubigeo.distrito;
      option.name = 'distrito';
      option.value = ubigeo.distrito;
      option.textContent = ubigeo.nombre;

      document.querySelector('#distVivList').appendChild(option);
    }

  });

}
