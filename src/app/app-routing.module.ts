import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CarouselComponent } from "./carousel/carousel.component";
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "carousel", component: CarouselComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
