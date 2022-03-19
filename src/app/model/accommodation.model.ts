

export class Accommodation {
    _id: number;
    description: string;
    rating: number;
    image: string;
    address: string;
    name: string;
    city: string;
    country: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.description = obj && obj.description || "";
        this.rating = obj && obj.rating || 0;
        this.image = obj && obj.image || "";
        this.address = obj && obj.address || "";
        this.name = obj && obj.name || "";
        this.city = obj && obj.city || "";
        this.country = obj && obj.country || "";
    }
}