import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IncomingService} from '../shared/incoming.service';
import {SelectItem} from 'primeng/api';
import {log} from 'util';






  @Component({
  selector: 'app-incomingtours-page',
  templateUrl: './incomingtours-page.component.html',
  styleUrls: ['./incomingtours-page.component.css'],

  encapsulation: ViewEncapsulation.None


})
export class IncomingtoursPageComponent implements OnInit {



  constructor(private incomingService: IncomingService) { }




    sortOptions: SelectItem[];
    incoming;
    elems;
    indexTarget;
    ind;


    ngOnInit() {
      this.incomingService.getIncoming().subscribe((data) => {
        this.incoming = data;
      });

      this.sortOptions = [
        {label: 'Best', value: 'best'},
        {label: 'Price (low to high)', value: '!price'},
        {label: 'Price (high to low)', value: 'price'},
        {label: 'Distance from Yerevan', value: 'distance'}
      ];

    }

    try(dv){
      let x = document.querySelectorAll(".searchePlace");
      console.log(x);
      for (let i = 0; i < x.length; i++) {
        const y = x[i].children[0].children[0].innerHTML;
        console.log(y);
        dv.value.push({id: 5, placeName: y});
        console.log(dv);
      }

    }

   onSortChange(event) {
      let value = event.value;
      if (value === "!price") {
        this.incoming.sort(function (a, b) {
          return a.tourPrice - b.tourPrice
        });
      }
      if (value === "price") {
        this.incoming.sort(function (a, b) {
          return b.tourPrice - a.tourPrice
        });
      }
      if (value === "best") {
        this.incoming.sort(function (a, b) {
          return a.id - b.id
        });
      }
     if (value === "distance") {
       this.incoming.sort(function (a, b) {
         return a.placeFromYerevan - b.placeFromYerevan
       });
     }
    }


    DataTarget (index) {
      this.indexTarget = document.querySelectorAll('.ind');
      for (let i = 0; i < this.indexTarget.length; i++) {
        this.indexTarget[i].setAttribute('data-target', "#carouselExampleFade"+index);
      }
    }

    DataTargetTo (index) {
      this.ind = document.querySelectorAll('.ind');
      // console.log(this.ind);
      for (let i = 0; i < this.ind.length; i++) {
        this.ind[i].setAttribute('data-slide-to', index);
      }
    }


    act (i, placeId) {
      // console.log(i, placeId);
      this.elems = document.querySelectorAll('.elems0');
      for (let i = 0; i < this.elems.length; i++) {
        this.elems[i].classList.add('active');
      }
      this.ind = document.querySelectorAll('.carousel-indicators');
      if (this.ind[placeId - 1] != undefined) {
        var totalItems = this.ind[placeId - 1].children.length;
        for (let k = 0; k < totalItems; k++) {
          if (k > 4) {
            this.ind[placeId - 1].children[k].hidden = true;
          }
        }
      }
    };


    len (idex, imgIdx) {

      this.ind = document.querySelectorAll('.carousel-indicators');
      var totalItems = this.ind[idex - 1].children.length;
      var itemsPerSlide = 5;
      var imgIndex = imgIdx + 1;
      for (let k = 0; k < totalItems; k++) {
        this.ind[idex - 1].children[k].hidden = true;
      }
      for (var i = 0; i < totalItems; i++) {
      if (totalItems < 5) {
          for (let k = 0; k < totalItems; k++) {
            this.ind[idex - 1].children[k].hidden = false;
          }
        }
        if (imgIdx == 0 && totalItems > 5) {
          for(let j = 0; j < 5; j++) {
            this.ind[idex - 1].children[imgIdx + j].hidden = false;
          }
        }
        if(imgIdx == 1 && totalItems > 5) {
          for(let j = 0; j < 5; j++) {
            this.ind[idex - 1].children[(imgIdx- 1) + j].hidden = false;
          }
        }
        if (imgIdx >= 2 && imgIdx+2 < totalItems && totalItems > 5) {
          for(let j = 0; j < 5; j++) {
            this.ind[idex - 1].children[(imgIdx- 2) + j].hidden = false;
          }
        }
        if(imgIdx == totalItems - 2 && totalItems > 5) {
          for(let j = 0; j < 5; j++) {
            this.ind[idex - 1].children[(imgIdx- 3) + j].hidden = false;
          }
        }
        if(imgIdx == totalItems - 1 && totalItems > 5) {
          for(let j = 0; j < 5; j++) {
            this.ind[idex - 1].children[(imgIdx- 4) + j].hidden = false;
          }
        }
      }
    }


    findIndexNext (placeId) {
        var ind = document.querySelectorAll('.carousel-indicators');
        for (let i = 0; i < this.ind[placeId-1].children.length; i++) {
         if(this.ind[placeId-1].children[i].classList.contains("active") === true){
           if (i+1 >= this.ind[placeId-1].children.length) {
           }
           this.len(placeId, i+1)
         }
        }
    }

    findIndexPrev (placeId) {
      var ind = document.querySelectorAll('.carousel-indicators');
      for (let i = 0; i < this.ind[placeId-1].children.length; i++) {
        if(this.ind[placeId-1].children[i].classList.contains("active") === true){
          if (i-1 <= 0) {
          }
          this.len(placeId, i-1)
        }
      }
    }



}
