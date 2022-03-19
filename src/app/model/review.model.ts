

export class Review {
    _id: number;
    review: string;
    rating: number;
    accommodation_id: number;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.review = obj && obj.review || "";
        this.rating = obj && obj.rating || 0;
        this.accommodation_id = obj && obj.accommodation_id || 0;
    }

}