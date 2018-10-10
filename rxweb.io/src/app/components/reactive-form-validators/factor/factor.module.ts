import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { FACTOR_ROUTING } from './factor.routing';
import { FactorComponent } from './factor.component';
import { FactorExtendedModule } from '../../../../assets/examples/factor/factor.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";

@NgModule({
  imports: [
    FACTOR_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, FactorExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule],
  declarations: [FactorComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class FactorModule { }

