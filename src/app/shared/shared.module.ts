import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExponentialPipe} from './pipes/exponential/exponential.pipe';
import {HighlightDirective} from './directives/highlight/highlight.directive';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {QuicklinkModule} from 'ngx-quicklink';
import {MaterialModule} from '@material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    MaterialModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    QuicklinkModule,
    MaterialModule
  ]
})
export class SharedModule { }
