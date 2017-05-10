var th1 = new Thermostat();

describe("Thermostat temperature at the beginning", function(){

/*before each function should get rid of 20 - 21 - 20*/

  it("starts with a temperature of 20", function(){
    expect(th1.temp).toBe(20)
  });
});

describe("Changing the temperature by 1", function(){
  it("ups the temperature from 20 to 21", function(){
    th1.increase();
    expect(th1.temp).toBe(21)
  });

  it("reduces the from 21 back to 20", function(){
    th1.decrease();
    expect(th1.temp).toBe(20)
  });
});

describe("minimum temperature", function(){
  it("raises error when temperature below 10", function(){
    th1.temp = 10
    expect(th1.decrease).toThrowError("Temperature too low")
  });
});

describe("powersaver", function(){
  it("has powersaver mode on by default", function(){
    expect(th1.powersaver[0]).toBe(true)
  });

  it("can be switched off", function(){
    th1.powermodeswitch();
    expect(th1.powersaver[0]).toBe(false)
  });

  it("starts with max temp of 25", function(){
    expect(th1.condition[0][1]).toBe(25)
  });
});

describe("checkstatus", function(){
  it("checks wether powersaver is on or not", function(){
    th1.powermodeswitch();
    expect(th1.checkstatus()).toContain('On/true')
  });
});
