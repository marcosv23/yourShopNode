import Coupon from "../coupon/Coupon";
import { CpfService } from "../cpf/Cpf";
import { OrderItem } from "./order-item/OrderItem";

export default class Order {
    private items: Array<OrderItem>;
    private coupons: Array<Coupon>;

    constructor(
        private readonly cpf: string,
        private readonly cpfService: CpfService){
            this.cpfService = cpfService;
            if(!cpfService.validate(cpf)) throw new Error("Invalid CPF");
            this.cpf = cpf;
            this.items = [];
            this.coupons =[];
        }

    public calcTotalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item=> totalPrice += item.$price);
        return totalPrice;
    }    
    public getItems():Array<OrderItem>{
        return this.items;
    }    
    public withItems(items: Array<OrderItem>){
        this.items = items;
    }

    public addCoupon(coupon:Coupon):void{
        this.coupons.push(coupon);
    }

	public get $items(): Array<OrderItem> {
		return this.items;
	}

 
	public get $coupons(): Array<Coupon> {
		return this.coupons;
	}

 
	public set $items(value: Array<OrderItem>) {
		this.items = value;
	}

 
	public set $coupons(value: Array<Coupon>) {
		this.coupons = value;
	}

}