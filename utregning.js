function resultat_one() {
    var rho = document.getElementById('rho_input').value;
    var Cp = document.getElementById('cp_input').value;
    var Q = document.getElementById('Q_input').value;
    var volume_flow_m3h = document.getElementById('kubikk_input').value;

    var volume_flow_m3s = volume_flow_m3h/3600


    var myResult = Q / (volume_flow_m3s*rho*Cp);
    result.value = myResult.toFixed(2);
}