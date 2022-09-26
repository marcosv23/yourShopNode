import { Cpf } from "../../src/cpf"

describe("CPF TESTS",()=>{

    test("Should not validate when has not a cpf",()=>{
        expect(Cpf.validate("")).toBeFalsy();
    })

    test("Should not validate when has a cpf less than 11 chars",()=>{
        expect(Cpf.validate("12345")).toBeFalsy();
    })

    test("Should not validate when has a cpf more than 14 chars",()=>{
        expect(Cpf.validate("151.673.500---50")).toBeFalsy();
    })
    test("Should return true for valid cpf",()=>{
    expect(Cpf.validate("151.673.500-50")).toBeTruthy();
    })
    test("Should return true for valid cpf without mask",()=>{
        expect(Cpf.validate("15167350050")).toBeTruthy();
    })
    test("Should return true for valid cpf with invalid mask",()=>{
         expect(Cpf.validate("151673500/50")).toBeTruthy();
    })
    test("Should return false for invalid cpf",()=>{
        expect(Cpf.validate("15167350051")).toBeFalsy();
    })

    test("Should return true for valid cpf with zero on first digit",()=>{
        expect(Cpf.validate("198.454.187-08")).toBeTruthy();
    })
   
   test("Should return false for repeated digits",()=>{
    expect(Cpf.validate("11111111111")).toBeFalsy();
    })

    test("Should return false for repeated digits with mask",()=>{
        expect(Cpf.validate("111.111.111-11")).toBeFalsy();
    })
})