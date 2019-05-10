import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './home/header/header.component';
import {MainComponent} from './home/main/main.component';
import {FooterComponent} from './home/footer/footer.component';
import {RouterModule} from '@angular/router';

// Import from other ToolsModule
import {ToolsModule} from '../tools/tools.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, MainComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule, RouterModule, ToolsModule
  ],
// Export this module
  exports: [HomeComponent]
})
export class HomeModule {
}
