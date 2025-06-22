import { Component } from "@angular/core";
import { movieArray } from "src/const/movie";
import { Imovie } from "src/models/movie.interface";

@Component({
    selector : "app-movies",
    templateUrl : "./movie.component.html",
    styleUrls : ["./movie.component.scss"]
})
export class MovieComponent{
    movieArrs : Array<Imovie> = movieArray;
}