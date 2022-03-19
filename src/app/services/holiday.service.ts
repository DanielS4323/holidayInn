import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accommodation } from '../model/accommodation.model'
import { map } from 'rxjs/operators';
import { Place } from '../model/place';
import { Review } from '../model/review.model';



const accommodationURL = 'http://localhost:3000/api/accommodations'

const placesURL = 'http://localhost:3000/api/places'

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private http: HttpClient) { }


  getAccommodations(params?: any): Observable<Accommodation[]> {
    let queryParams = {}

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set('page', params.page || '')
        .set('pageSize', params.pageSize || '')
        .set('filter', params.filter && JSON.stringify(params.filter) || '')
        
      }
    }
    return this.http.get(accommodationURL, queryParams).pipe(map((data: any) => {
      return data && data.map((elem: any) => new Accommodation(elem)) || []
    }))
  }

    getPlaces(): Observable<Place[]> {
      return this.http.get(placesURL).pipe(map((data: any) => {
        return data && data.map((elem: any) => new Place(elem)) || []
      }))
    }

    getDetails(accID: number): Observable<Accommodation> {
      return this.http.get(`${accommodationURL}/${accID}`).pipe(map((data: any) => {
        return new Accommodation(data);
      }))
    }

    sendAcc(obj: Accommodation): Observable <Accommodation> {
      return this.http.post<Accommodation>(`${accommodationURL}`, obj)
    }

    getReviews(accID: number) : Observable<Review[]> {
      return this.http.get(`${accommodationURL}/${accID}/reviews`).pipe(map((data: any) => {
        return data && data.map((elem: any) => new Review(elem) || [])
      }))
    }

    // sendImage(image: string, imageFile: File){
    //   return this.http.post(`http://localhost:3000/image`, image, imageFile)
    // }

    postAccom(accom: any): Observable<Accommodation> {
      return this.http.post(`${accommodationURL}`,accom).pipe(map((data: any) => new Accommodation(data)))
    }

    upload(file: File){
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("image", file);
        
      // Make http post request over api
      // with formData as req
      return this.http.post(`http://localhost:3000/image`, formData)
  }
}



