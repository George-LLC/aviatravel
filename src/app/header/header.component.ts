import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  flag1 = false;
  flag2 = true;
  flag3 = true;

  constructor(private translateService: TranslateService) { }


  ngOnInit() {
  }

  public changeLanguage(language: string) {
    console.log(language);
    this.translateService.use(language);
  }

  flag(fl) {
    if (fl == 'flag1') {
      this.flag1 = false;
      this.flag2 = true;
      this.flag3 = true;
    }
    if (fl == 'flag2') {
      this.flag1 = true;
      this.flag2 = false;
      this.flag3 = true;
    }
    if (fl == 'flag3') {
      this.flag1 = true;
      this.flag2 = true;
      this.flag3 = false;
    }
  }



}
