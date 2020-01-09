import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EditorModule } from "@tinymce/tinymce-angular";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { BasicAuthInterceptor } from "./_helpers/basic-auth.interceptor";
import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { FormsModule } from "@angular/forms";
import { CarouselComponent } from "./carousel/carousel.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { routingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, LoginComponent, CarouselComponent],
  imports: [
    BrowserModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
