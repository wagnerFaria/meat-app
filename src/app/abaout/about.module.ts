import { NgModule } from "@angular/core";
import { AbaoutComponent } from "app/abaout/abaout.component";
import { Routes, RouterModule } from "@angular/router";

const ROUTES: Routes = [
    { path: '', component: AbaoutComponent }
]

@NgModule({
    declarations: [AbaoutComponent],
    imports: [RouterModule.forChild(ROUTES)]
})
export class AboutModule {

}