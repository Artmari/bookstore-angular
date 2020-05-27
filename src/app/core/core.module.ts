import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  imports: [CommonModule, RouterModule, MatToolbarModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
