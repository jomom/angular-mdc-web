import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdcFloatingLabelModule } from '@angular-mdc/web/floating-label';
import { MdcLineRippleModule } from '@angular-mdc/web/line-ripple';

import { MdcSelect } from './select';

@NgModule({
  imports: [
    CommonModule,
    MdcFloatingLabelModule,
    MdcLineRippleModule
  ],
  exports: [MdcSelect],
  declarations: [MdcSelect]
})
export class MdcSelectModule { }
