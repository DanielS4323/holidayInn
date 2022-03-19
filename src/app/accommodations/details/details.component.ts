import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Accommodation } from 'src/app/model/accommodation.model';
import { Review } from 'src/app/model/review.model';
import { HolidayService } from 'src/app/services/holiday.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input()
  accID: number = NaN
  accomm: Accommodation = new Accommodation()
  imageURL: string = 'http://localhost:3000/image';
  reviews: Review[] = []

  constructor(private service: HolidayService,
    private route: ActivatedRoute,
    private config: NgbRatingConfig) {
      config.max = 5;
      config.readonly = true;
    }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.accID = routeParams.id
      this.getDetails()
      this.getReviews()
      
    })
 
    
  }

  getDetails() {
    this.service.getDetails(this.accID).subscribe((accomm: Accommodation) => {
      this.accomm = accomm
      console.log(accomm);
      
  })
  }

  getReviews() {
    this.service.getReviews(this.accID).subscribe((review: Review[]) => {
      this.reviews = review
    })
  }

  getAvg(): number {
    return this.reviews.reduce((a,b,i,arr) => {
      return a + (b.rating/arr.length)
    },0)
  }


}
