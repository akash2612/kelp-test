import { Component, OnInit } from '@angular/core';
// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import SwiperCore, { Navigation} from 'swiper';
import {FormControl} from '@angular/forms';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor() { }
  joiningStatusList: any[] = [
    {
      value:'../assets/images/hire.png'
    },
    {
      value:'../assets/images/nohire.png'
    },
    {
      value:'../assets/images/undecided.png'
    }
  ];
  joiningStatus = new FormControl();
  bvStatus = new FormControl();
  ngOnInit(): void {
    this.joiningStatus.setValue(this.joiningStatusList[0].value);
    this.bvStatus.setValue(this.joiningStatusList[0].value);
  }

}
