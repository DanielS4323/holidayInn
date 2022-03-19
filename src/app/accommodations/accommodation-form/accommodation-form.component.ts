import { Component, OnInit } from '@angular/core';

import { Accommodation } from 'src/app/model/accommodation.model';
import { HolidayService } from 'src/app/services/holiday.service';

  

@Component({
  selector: 'app-accommodation-form',
  templateUrl: './accommodation-form.component.html',
  styleUrls: ['./accommodation-form.component.css']
})
export class AccommodationFormComponent implements OnInit {

  url = '../../../assets/images/hotel-default.jpg'

  
  addNew: Accommodation = new Accommodation()
  
  fileToUpload: File = new File([], ''); // Variable to store file

  imageUrl = ''
  constructor(private service: HolidayService) { }

  ngOnInit(): void { }

  onFileSelected(event: Event) {
    //this.selectedFile = event.target['file'][0]
    
    
  }

  onSubmit() {
    this.service.postAccom(this.addNew).subscribe((data: Accommodation) => {
      console.log(data);
      
    })
  }
  onChange(event: any) {
    let fileType = event.target.files[0].type;
    this.fileToUpload = event.target.files[0];
    // console.log(this.fileToUpload);
    

    if (fileType.match(/image\/*/)) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        
        
      };
    } else {
      window.alert('Please select correct image format');
    }
  }


  onUpload() {
   this.service.upload(this.fileToUpload).subscribe((x: any) => {
    this.addNew.image = x.filename
     
     
     
   })
}

postAccom() {
  
  this.service.postAccom(this.addNew).subscribe(x => {
    this.addNew = new Accommodation()
    console.log('Accommodation Sent!');
    
  })
}
}
