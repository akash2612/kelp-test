import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormControl} from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true
  }

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
  candidateShortList:any[] = [
    {
      'name':'Aniket Joshi',
      'designation':'Director',
      'company':'Piramal Enterprises',
      'city':'Mumbai',
      'leads':7,
      'captured':3,
      'comments':'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teamelatea aliquet vulputate. Egestas. Lacinia ultrices QuisqueQuisqueQuisqueQuklloojjdjuee'
    },
    {
      'name':'Kunjan Kumar',
      'designation':'Director',
      'company':'HDFC',
      'city':'New Delhi',
      'leads':7,
      'captured':3,
      'comments':'No Comments'
    },
    {
      'name':'Kunal Kamra',
      'designation':'Director',
      'company':'Piramal Enterprises',
      'city':'Mumbai',
      'leads':7,
      'captured':3,
      'comments':'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame'
    }
  ]
  joiningStatus = new FormControl();
  bvStatus = new FormControl();

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.candidateShortList, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.joiningStatus.setValue(this.joiningStatusList[0].value);
    this.bvStatus.setValue(this.joiningStatusList[0].value);
  }

}
