import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { PageHeaderModule } from '../shared';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    imports: [CommonModule, CustomerRoutingModule, PageHeaderModule, LayoutModule],
    declarations: [CustomerComponent]
})
export class CustomerModule {}
