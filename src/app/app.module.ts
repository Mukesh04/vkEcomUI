import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { BlogColumnComponent } from './components/blog/blog-column/blog-column.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BlogColumnComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
