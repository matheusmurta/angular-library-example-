import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MytableComponent } from './mytable/mytable.component';
import { BrowserModule } from '@angular/platform-browser'


@NgModule({
  declarations: [MyLibComponent, MytableComponent],
  imports: [
    BrowserModule
  ],
  exports: [MyLibComponent, MytableComponent]
})
export class MyLibModule { }
