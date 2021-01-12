describe("Testing calculateMonthlyPayment()",()=>{
  it('should calculate the monthly rate correctly', function () {
    const inputs = {
      amount : 2000,
      years : 3,
      rate : 4.5
    }
    expect(calculateMonthlyPayment(inputs)).toEqual("59.49")
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const inputs = {
      amount : 1000,
      years : 3,
      rate : 4.5
    }
    expect(calculateMonthlyPayment(inputs)).toBe("29.75")
  });
  
  it("should return a result of string value",function(){
    const inputs = {
      amount : 1000,
      years : 2,
      rate : 5.5
    }
    expect(calculateMonthlyPayment(inputs)).toBe("44.10")
  })  
})


describe("Testing getCurrentUIValues ()",()=>{
  it ("Should return a object",()=>{
    expect(typeof (getCurrentUIValues())).toEqual("object")
  })
})


describe("Testing setupIntialValues()",()=>{
    it("should having a default value",()=>{
      setupIntialValues()
      expect(document.getElementById("loan-amount").value).toEqual("1000")
    })
})

describe("Testing update()",()=>{
  it("should having a object value",()=>{
    const inputs = getCurrentUIValues()
    expect(inputs.amount).toEqual(0)
  })
})


describe("Testing updateMonthly()",()=>{
  it("Should it set text for monthly-payment display",()=>{
    document.getElementById("loan-amount").value = 10000;
    document.getElementById("loan-years").value = 3;
    document.getElementById("loan-rate").value = 5.5;

    update()

    expect(document.getElementById("monthly-payment").innerText).toEqual("301.96")
  })
})

beforeEach(()=>{
  document.getElementById("loan-amount").value = "";
  document.getElementById("loan-years").value = "";
  document.getElementById("loan-rate").value = "";
})