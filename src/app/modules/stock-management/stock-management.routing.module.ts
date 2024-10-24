import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StockListComponent } from "./stock-list/stock-list.component";
import { AuthGuard } from "src/app/auth.guard";

const routes: Routes = [
    { path: '', component: StockListComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StockManagementRoutingModule { }