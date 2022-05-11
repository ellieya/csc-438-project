import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusPageRoutingModule } from './bus-routing.module';

import { BusPage } from './bus.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BusPage]
})
export class BusPageModule {}
