import Coupon from "../../src/coupon/Coupon";
import { CpfService } from "../../src/cpf/Cpf";
import Order from "../../src/order/Order";
import { OrderItem } from "../../src/order/order-item/OrderItem";

describe("ORDER TESTS",()=>{
    const cpfService = new CpfService();


;

    test("Não deve criar um pedido com cpf inválido",()=> {
        expect(()=>{
        new Order("123.250.58/89",cpfService)}
        ).toThrow(Error);
    })

    test("Deve criar um pedido com 3 itens",()=>{
        const order = new Order("01234567890",cpfService);
        const item1 =  OrderItem.builder()
                                .price(2500.78)
                                .quantity(1)
                                .description("Geladeira Brastemp TX256")
                                .build();
        const item2 =  OrderItem.builder()
                                .price(25.78)
                                .quantity(2)
                                .description("Album Copa Qatar 2022")
                                .build();
        const item3 =  OrderItem.builder()
                                .price(130000)
                                .quantity(1)
                                .description("Iphone 13 SX")
                                .build();                                                 
        let items: Array<OrderItem> = new Array();  
        items.push(item1,item2,item3);                
        order.withItems(items);
        expect(order.getItems().length === 3).toBeTruthy();
    })

    test("Deve criar um pedido com umcupom ",()=>{
        const order = new Order("01234567890", cpfService)
        const fakeCoupon = getFakeCoupon(new Date(),5,20,"BF09COUP");
        order.addCoupon(fakeCoupon);
        expect(order.$coupons).toBeTruthy();
    })
})

function getFakeCoupon(date: Date, daysDuring: number, 
    value: number,name: string, description?: string){
    date.setDate(date.getDate()+ daysDuring);  
    const couponExpiration = date;
    return new Coupon(value, name , couponExpiration,description)      
}

// new Coupon("20","BF09COUP",
// "Cupom pré Black Friday, válido produtos copa", couponExpiration)   