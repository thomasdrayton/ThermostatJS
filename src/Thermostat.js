
function Thermostat() {
  this.temp = 20;
  this.condition = [[true,25],[false,32]];
  this.usage = "medium"
}

Thermostat.prototype.increase = function() {
  if(this.temp > this.condition[0][1]) {throw "Temperature too high"}
  this.temp++;
}

Thermostat.prototype.decrease = function() {
  if(this.temp < 11) {throw "Temperature too low"}
  this.temp--;
}

Thermostat.prototype.powermodeswitch = function() {
  var x = this.condition[0];
  this.condition[0] = this.condition[1];
  this.condition[1] = x;
}

Thermostat.prototype.check_condition = function() {
  return this.condition[0];
}

Thermostat.prototype.see_usage = function(){
  if (this.temp < 18) {
    return 'low-usage';
  }
  if (this.temp >= 18 && this.temp <= 25) {
    return 'medium-usage';
  }
}

Thermostat.prototype.reset = function() {
  this.temp = 20;
}
