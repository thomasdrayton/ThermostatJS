
$(document).ready(function() {
  thermostat = new Thermostat();
  $('#temp').text(thermostat.temp);
  $('#powersavingmode').text(thermostat.condition[0][0]);
})

$('#Increase_Temp').on('click', function() {
  thermostat.increase();
  $('#temp').text(thermostat.temp);
});

$('#Decrease_Temp').on('click', function() {
  thermostat.decrease();
  $('#temp').text(thermostat.temp);
});

$('#Reset').click(function() {
    thermostat.reset();
    updateTemperature();
});

$('#Switch_Powermode').click(function() {
    thermostat.powermodeswitch();
    updateTemperature();
});


function updateTemperature() {
    $('#temp').text(thermostat.temp);
  };
