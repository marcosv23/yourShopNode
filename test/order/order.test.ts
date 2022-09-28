import Coupon from "../../src/coupon/Coupon";
import { CpfService } from "../../src/cpf/Cpf";
import Order from "../../src/order/Order";
import { OrderItem } from "../../src/order/order-item/OrderItem";

describe("ORDER TESTS",()=>{
    const cpfService = new CpfService();
    test("Não deve criar um pedido com cpf inválido",()=> {
        expect(()=>{
        new Order("123.250.58/89",cpfService)}
        ).toThrow(Error);
    })

    test("Deve criar um pedido com 3 itens",()=>{
        const order = new Order("01234567890",cpfService);
        const fakeItens = getFakeItens();            
        order.addItems(fakeItens);
        expect(order.getItems().length === 3).toBeTruthy();
    })

    test("Deve calcular corretamente o valor total de um pedido",()=>{
        const order = new Order("01234567890", cpfService);
        const fakeItens = getFakeItens();
        order.addItems(fakeItens);
        expect(order.getPrice()).toBe(15520);
    })

    test("Deve calcular corretamente um pedido com um cupom de 20%",()=>{
        const order = new Order("01234567890", cpfService)
        const fakeItens =  getFakeItens();
        const fakeCoupon = getFakeCoupon(new Date(),5,20,"BF09COUP");
        order.addItems(fakeItens);
        order.addCoupon(fakeCoupon);
        expect(order.getPrice()).toBe(12416);
    })

    test("Deve calcular corretamente um pedido com um cupom de 15%",()=>{
        const order = new Order("01234567890", cpfService)
        const fakeItens =  getFakeItens();
        const fakeCoupon = getFakeCoupon(new Date(),5,15,"BF09COUP");
        order.addItems(fakeItens);
        order.addCoupon(fakeCoupon);
        expect(order.getPrice()).toBe(13192);
    })

    test("Deve calcular corretamente um pedido com um cupom de 15%",()=>{
        const order = new Order("01234567890", cpfService)
        const fakeItens =  getFakeItens();
        const fakeCoupon = getFakeCoupon(new Date(),5,50,"BF09COUP");
        order.addItems(fakeItens);
        order.addCoupon(fakeCoupon);
        expect(order.getPrice()).toBe(7760);
    })

    test("Deve calcular corretamente um pedido com um cupom de 100%",()=>{
        const order = new Order("01234567890", cpfService)
        const fakeItens =  getFakeItens();
        const fakeCoupon = getFakeCoupon(new Date(),5,100,"BF09COUP");
        order.addItems(fakeItens);
        order.addCoupon(fakeCoupon);
        expect(order.getPrice()).toBe(0);
    })

    test("Deve adicionar corretamente um item ao pedido",()=>{
        const order = new Order("01234567890", cpfService)
        const fakeItens =  getFakeItens();
        const singleItem = new Array();
        singleItem.push(fakeItens[0]);
        order.addItems(singleItem);
        const item1 = order.getItems()[0];
        expect(item1.$description).toBe("Geladeira Brastemp TX256");
        expect(item1.$quantity).toBe(1);
    })

})

function getFakeCoupon(date: Date, daysDuring: number, 
    value: number,name: string, description?: string){
    date.setDate(date.getDate()+ daysDuring);  
    const couponExpiration = date;
    return new Coupon(value, name , couponExpiration,description)      
}

function getFakeItens(): Array<OrderItem>{
        const item1 =  OrderItem.builder()
        .price(2500)
        .quantity(1)
        .description("Geladeira Brastemp TX256")
        .build();
    const item2 =  OrderItem.builder()
        .price(20)
        .quantity(2)
        .description("Album Copa Qatar 2022")
        .build();
    const item3 =  OrderItem.builder()
        .price(13000)
        .quantity(1)
        .description("Iphone 13 SX")
        .build();                                                 
    let items: Array<OrderItem> = new Array();  
    items.push(item1,item2,item3);   
    return items;
}