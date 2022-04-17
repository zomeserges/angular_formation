import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector:"app-star-rating",
  templateUrl: "./star-rating.component.html",
  styleUrls: ['./star-rating.component.css']
})

export class starRatingComponent implements OnChanges{

  public starWidth: number=0;
  @Input()
  public rating: number = 2;

  @Output()
  public startRatingCliked: EventEmitter<string> = new EventEmitter();

  ngOnChanges() {
    this.starWidth = this.rating*125/5;
  }

  public sendRating(): void{
    this.startRatingCliked.emit(`Note is ${this.rating}`)
  }

}
