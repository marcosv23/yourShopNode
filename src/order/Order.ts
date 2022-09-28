import Coupon from "../coupon/Coupon";
import { CpfService } from "../cpf/Cpf";
import { OrderItem } from "./order-item/OrderItem";

export default class Order {
    private items: Array<OrderItem>;
    private coupons: Array<Coupon>;

    constructor(cpf: string, cpfService: CpfService) {
        const isInvalidCpf = !cpfService.validate(cpf);
        if (isInvalidCpf) throw new Error("Invalid CPF");
        this.items = [];
        this.coupons = [];
    }

    public addItems(items: Array<OrderItem>){
        this.items = items;
    }

    public addCoupon(coupon:Coupon):void{
        this.coupons.push(coupon);
    }

    public getPrice(){
        const totalPrice = this.calcTotalPrice();
        const discounts =  this.calcDiscount(totalPrice);
        return totalPrice - discounts;
    }

    public calcDiscount(totalPrice: number){
        const discounts = this.getAllDiscounts(totalPrice);
        return discounts;
    }
    
    public getItems():Array<OrderItem>{
        return this.items;
    }    

    private calcTotalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item=> totalPrice += item.$price);
        return totalPrice;
    }

    public getAllDiscounts(totalPrice: number){
        const couponDiscounts = this.getCouponsDiscount(totalPrice);
        return couponDiscounts;
    }

    private getCouponsDiscount(totalPrice: number): number{
        if(this.coupons.length === 0) return 0;
        let couponsPercentage = 0;
        this.coupons.forEach(coupon => couponsPercentage += coupon.percentage);     
        return totalPrice * couponsPercentage / 100 ; 
     }

}