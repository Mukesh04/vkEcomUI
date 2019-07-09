import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { MatDialogRef } from '@angular/material';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.sass']
})
export class ProductDialogComponent implements OnInit {

  public products           :   Product[] = [];

  constructor(private productsService: ProductService, public dialogRef: MatDialogRef<ProductDialogComponent>, public product: Product) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);

  }

  public close(): void {
    this.dialogRef.close();
  }

}
