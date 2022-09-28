import { OrderItemBuilder } from "./builder/OrderItemBuilder";

export class OrderItem {
    private static itemBuilder?:OrderItemBuilder;
    private description?: string;
    private price: number;
    private quantity: number;

	constructor($price: number, $quantity: number, $description?: string) {
		this.description = $description;
		this.price = $price;
		this.quantity = $quantity;
	}

    public static builder(): OrderItemBuilder{
        this.itemBuilder = new OrderItemBuilder();
        return this.itemBuilder;
    }


	public get $description(): string | undefined {
		return this.description;
	}

 
	public get $price(): number {
		return this.price;
	}

   
	public get $quantity(): number {
		return this.quantity;
	}

}

