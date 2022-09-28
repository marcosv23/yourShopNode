import { OrderItem } from "../OrderItem";

export class OrderItemBuilder{
    private _price!: number;
    private _description!: string;
    private _quantity!: number;

    description(description: string): OrderItemBuilder{
        this._description = description;
        return this
    }

    price(price: number): OrderItemBuilder{
        this._price = price;
        return this
    }

    quantity(quantity: number): OrderItemBuilder{
        this._quantity = quantity;
        return this
    }

    public build(){
        return new OrderItem(this._price, this._quantity,this._description);
    }
}   