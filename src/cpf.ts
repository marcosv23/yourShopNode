export class Cpf{

public static validate (cpf:string) {
	if (!cpf) return false;
    cpf = Cpf.cleanCpf(cpf);
    if (cpf.length !== 11) return false;
    const hasAllSameDigits = cpf.split("").every(c => c === cpf[0]);        
    if (hasAllSameDigits)  return false
            let  digit1, digit2;  
            let  verifierDigit1, verifierDigit2, divisionRest;  
            let  currentPosition;  
            let  nDigResult;  
            digit1 = digit2 = verifierDigit1 = verifierDigit2 = divisionRest = 0;   
            for (let index = 1; index < cpf.length -1; index++) {  
                currentPosition = parseInt(cpf.substring(index -1, index));  							
                digit1 = digit1 + ( 11 - index ) * currentPosition;  
                digit2 = digit2 + ( 12 - index ) * currentPosition;
            };   
            divisionRest = (digit1 % 11);  
            verifierDigit1 = (divisionRest < 2) ? verifierDigit1 = 0 : 11 - divisionRest;  
            digit2 += 2 * verifierDigit1;  
            divisionRest = (digit2 % 11);  
            if (divisionRest < 2)  
                verifierDigit2 = 0;  
            else
                verifierDigit2 = 11 - divisionRest;  
                let nDigVerific = cpf.substring(cpf.length-2, cpf.length);  
            nDigResult = "" + verifierDigit1 + "" + verifierDigit2;  
            return nDigVerific == nDigResult;  
    
}

    private static cleanCpf(cpf:string){
        return cpf
            .replace('.','')
            .replace('/','')
            .replace('.','')
            .replace('-','')
            .replace(" ","");
    }
}