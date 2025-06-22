import { Component } from "@angular/core";
import { mobileProducts } from "src/const/mobile";
import { Imobile } from "src/models/mobile.interface";

@Component({
    selector : "app-mobileProduct",
    templateUrl : "./mobile.component.html",
    styleUrls : ["./mobile.component.scss"]
})
export class MobileComponent{
    mobileArray : Array<Imobile> = mobileProducts;
}