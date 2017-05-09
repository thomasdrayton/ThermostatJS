describe("Thermostat", function(){
  var th1 = new Thermostat();

  it("starts with a temperature of 20", function(){
    expect(th1.temp).toBe(20)
  });

  it("ups the temperature from 20 to 21", function(){
    th1.increase();
    expect(th1.temp).toBe(21)
  });

  it("reduces the from 21 back to 20", function(){
    th1.decrease();
    expect(th1.temp).toBe(20)
  });

  it("raises error when temperature below 10", function(){
    var dec = th1.decrease();
    th1.decrease();
    th1.decrease();
    expect(dec).toThrowError("Temperature too low")
  });

  it("changes the maximum temp to 25", function(){
    th1.decrease();
    expect(th1.temp).toBe(20)
  });


});
