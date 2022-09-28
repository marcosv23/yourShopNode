export default class Coupon{
   private value: number;
   private name: string;
   private description?: string;
   private expiration: Date;

	constructor($value: number, $name: string, $expiration: Date, $description?: string) {
		this.value = $value;
		this.name = $name;
		this.description = $description;
		this.expiration = $expiration;
	}

  
}