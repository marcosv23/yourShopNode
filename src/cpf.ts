export class Cpf{

public static validate (str:string) {
	if (!str) return false;
    if (str.length < 11 || str.length > 14) return false;
        str=str
            .replace('.','')
            .replace('/','')
            .replace('.','')
            .replace('-','')
            .replace(" ","");  
    if (!str.split("").every(c => c === str[0])) {
        try{  
            let  digit1, digit2;  
            let  dg1, dg2, divisionRest;  
            let  currentPosition;  
            let  nDigResult;  
            digit1 = digit2 = 0;  
            dg1 = dg2 = divisionRest = 0;  
                
            for (let nCount = 1; nCount < str.length -1; nCount++) {  
                currentPosition = parseInt(str.substring(nCount -1, nCount));  							
                digit1 = digit1 + ( 11 - nCount ) * currentPosition;  
                digit2 = digit2 + ( 12 - nCount ) * currentPosition;
            };   
            divisionRest = (digit1 % 11);  
            dg1 = (divisionRest < 2) ? dg1 = 0 : 11 - divisionRest;  
            digit2 += 2 * dg1;  
            divisionRest = (digit2 % 11);  
            if (divisionRest < 2)  
                dg2 = 0;  
            else  
                dg2 = 11 - divisionRest;  
    
                let nDigVerific = str.substring(str.length-2, str.length);  
            nDigResult = "" + dg1 + "" + dg2;  
            return nDigVerific == nDigResult;
        }catch (e){  
            console.error("Erro !"+e);  

            return false;  
        }  
    } else return false
}
}