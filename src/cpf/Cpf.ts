export class CpfService {
    
private NON_VERIFIER_DIGITS_QUANTITY = 9;
private CPF_DIGITS = 11;

private extractDigits(cpf:string){
    return cpf.slice(this.NON_VERIFIER_DIGITS_QUANTITY);
}
private isInvalidLength(cpf:string):boolean {
    return cpf.length !== this.CPF_DIGITS;
}

private hasAllSameDigits(cpf:string){
  return cpf.split("").every(c => c === cpf[0]);
}

private cleanCpf(cpf:string){
    return cpf.replace(/\D/g,"");
}

private calculateDigit(cpf:string, factor:number){
    let total = 0;
    for (const digit of cpf){
        if(factor > 1) total += parseInt(digit) * factor --;
    }
    const rest = total % this.CPF_DIGITS;
    return (rest < 2) ? 0 : this.CPF_DIGITS -rest;
}

public validate (cpf:string) {
	if (!cpf) return false;
    cpf = this.cleanCpf(cpf);
    if (this.hasAllSameDigits(cpf) || this.isInvalidLength(cpf)) return false
            const verifierDigit1 = this.calculateDigit(cpf,10);
            const verifierDigit2 = this.calculateDigit(cpf,11);
            const checkDigit = this.extractDigits(cpf);
            const calculatedDigit = `${verifierDigit1}${verifierDigit2}`;  
            return checkDigit == calculatedDigit;
}
  
}