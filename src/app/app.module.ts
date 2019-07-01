import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { BlogColumnComponent } from './components/blog/blog-column/blog-column.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BlogColumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
