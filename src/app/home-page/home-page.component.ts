import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {IncomingService} from '../shared/incoming.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

  encapsulation: ViewEncapsulation.None

})
export class HomePageComponent implements OnInit {

  incoming;


  places = [
    {
      name: 'Գառնի',
      year: 2020,
      color: "black"
    },
    {
      name: "Գեղարդ",
      year: 2020,
      color: "white"
    },
    {
      name: "Տաթև",
      year: 2020,
      color: "grey"
    },
    {
      name: 'Lexus',
      year: 2020,
      color: "black"
    },
    {
      name: "Mercedes",
      year: 2020,
      color: "white"
    },
    {
      name: "LexusGX",
      year: 2020,
      color: "grey"
    }
  ];

  responsiveOptions;

  constructor( private incomingService: IncomingService ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '352px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.incomingService.getIncoming().subscribe((data) => {
      this.incoming = data;
    });
  }

}
