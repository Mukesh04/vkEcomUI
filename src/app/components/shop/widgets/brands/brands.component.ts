import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.sass']
})
export class BrandsComponent implements OnInit {

  brands: string[] = ['all', 'Lenovo', 'Dell', 'Hp', 'Lg', 'Samsung'];

  @Output() brandChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


  brendSelect(event) {
  this.brandChanged.emit(
    event.value
  );
  }

}
