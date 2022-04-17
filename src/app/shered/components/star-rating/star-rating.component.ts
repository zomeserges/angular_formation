import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector:"app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ['./star-rating.component.css']
})

export class starRatingComponent implements OnChanges{

  public starWidth: number=0;
  public rating: number = 2;
  ngOnChanges() {
    this.starWidth = this.rating*125/5;
  }

}
