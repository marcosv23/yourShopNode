export default class Coupon{
   public readonly percentage: number;
   public readonly name: string;
   public readonly description?: string;
   public readonly expiration: Date;

	constructor($value: number, $name: string, $expiration: Date, $description?: string) {
		this.percentage = $value;
		this.name = $name;
		this.description = $description;
		this.expiration = $expiration;
	}
}