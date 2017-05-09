
function Thermostat() {
  this.temp = 20;
  this.powersaver = [true,false];
  this.maxtemp = [25,32]
}

Thermostat.prototype.increase = function() {
  this.temp++;
}

Thermostat.prototype.decrease = function() {
  if(this.temp < 11) {throw "Temperature too low"}
  this.temp--;
}


Thermostat.prototype.powermodeswitch = function() {
  var x = this.powersaver[0];
  this.powersaver[0] = this.powersaver[1];
  this.powersaver[1] = x;
  var y = this.maxtemp[0]
  this.maxtemp[0] = this.maxtemp[1];
  this.maxtemp[1] = y;
  // this.powersaver[0], this.powersaver[1] = this.powersaver[1], this.powersaver[0]
}

Thermostat.prototype.check_status = function() {
  if(this.powersaver[0]) {console.log("On/true")}
  else{console.log("Off/false")}
}
