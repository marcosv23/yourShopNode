import { Cpf } from "../../src/cpf"

describe("CPF TESTS",()=>{
    test("Should return true for valid cpf",()=>{
    expect(Cpf.validate("151.673.500-50")).toBe(true);
    })
    test("Should return true for valid cpf without mask",()=>{
        expect(Cpf.validate("15167350050")).toBe(true);
    })
    test("Should return true for valid cpf with invalid mask",()=>{
         expect(Cpf.validate("151673500/50")).toBe(true);
    })
    test("Should return false for invalid cpf",()=>{
        expect(Cpf.validate("15167350051")).toBe(false);
   })
   
   test("Should return false for repeated digits",()=>{
    expect(Cpf.validate("11111111111")).toBe(false);
    })

    test("Should return false for repeated digits with mask",()=>{
        expect(Cpf.validate("111.111.111-11")).toBe(false);
    })
})