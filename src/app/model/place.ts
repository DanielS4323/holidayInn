

export class Place {
    city: string;
    country: string;

    constructor(obj?:any) {
        this.city = obj && obj.city || "";
        this.country = obj && obj.country || "";
    }
}