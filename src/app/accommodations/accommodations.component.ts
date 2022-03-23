import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Accommodation } from '../model/accommodation.model';
import { Place } from '../model/place';
import { HolidayService } from '../services/holiday.service';

@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.css'],
})
export class AccommodationsComponent implements OnInit {
  accomms: Accommodation[] = [];
  rate: number = 0;
  imageURL: string = 'http://localhost:3000/image';
  places: Place[] = [];
  selected: string = '';
  

  params = {
    page: 1,
    pageSize: 5,
    filter: {
      city: '',
      ratingFrom: 1,
      ratingTo: 5,
    },
  };
  

  constructor(
    private service: HolidayService,
    private route: ActivatedRoute,
    private config: NgbRatingConfig,
    private router: Router
  ) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.getAccomms();
    this.getPlaces();
    
  }

  onChangeSel(val: string) {
    this.params.pageSize = 2;
    this.params.filter.city = val;
    this.getAccomms();
  }

  getAccomms() {
    this.service
      .getAccommodations(this.params)
      .subscribe((accomms: Accommodation[]) => {
        this.accomms = accomms;
        //console.log(accomms);
      });
  }

  getPlaces() {
    this.service.getPlaces().subscribe((places: Place[]) => {
      this.places = places;
    });
  }

  pageSize() {
    this.params.pageSize += 5;

    this.getAccomms();
  }

  
}




