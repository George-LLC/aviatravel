import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  toggleAccordian(event) {
    console.log(event);;
  }


  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  // }
  // openModal2(template: TemplateRef<any>) {
  //   this.modalRef2 = this.modalService.show(template, { class: 'second' });
  // }
  // closeFirstModal() {
  //   if (!this.modalRef) {
  //     return;
  //   }
  //
  //   this.modalRef.hide();
  //   this.modalRef = null;
  // }

  // itemsPerSlide = 5;
  // singleSlideOffset = true;
  //
  // slides = [
  //   {image: "assets/images/incoming/Գառնի/Գառնի.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի2.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի3.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի2.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի3.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի2.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի3.jpg"},
  //   {image: "assets/images/incoming/Գառնի/Գառնի.jpg"}
  // ];


}
