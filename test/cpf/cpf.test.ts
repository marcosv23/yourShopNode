import { CpfService } from "../../src/cpf/Cpf"

describe("CPF TESTS",()=>{
    const cpfService = new CpfService();


    test("Deve validar um cpf válido",()=>{
        expect(cpfService.validate("151.673.500-50")).toBeTruthy();
        })
    test("Deve validar um cpf válido que não possui máscara",()=>{
        expect(cpfService.validate("15167350050")).toBeTruthy();
    })
    
    test("Deve validar um cpf válido com primeiro dígito zero",()=>{
        expect(cpfService.validate("198.454.187-08")).toBeTruthy();
    })

    test("Não deve validar um cpf vazio",()=> {
        expect(cpfService.validate("")).toBeFalsy();
    })

    test("Não deve validar um cpf inválido",()=>{
        expect(cpfService.validate("15167350051")).toBeFalsy();
    })

    test("Não deve validar um cpf com menos de 11 caracteres",()=>{
        expect(cpfService.validate("12345")).toBeFalsy();
    })

    test("Não deve validar um cpf com mais de 14 caracteres",()=>{
        expect(cpfService.validate("151.673.5000050")).toBeFalsy();
    })
    test("Não deve validar um cpf válido com máscara inválida",()=>{
         expect(cpfService.validate("151673500/50")).toBeTruthy();
    })
   
   test("Não deve validar um cpf com todos os dígitos iguais o primeiro",()=>{
    expect(cpfService.validate("11111111111")).toBeFalsy();
    })

    test("Não deve validar um cpf com todos os dígitos iguais o primeiro " +
    "quando houver máscara",()=>{
        expect(cpfService.validate("111.111.111-11")).toBeFalsy();
    })
})