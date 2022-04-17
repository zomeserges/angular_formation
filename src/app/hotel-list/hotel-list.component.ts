import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";
import { HotelListService } from "./hotel-list.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit{
public  title : string = "List of hotels"
public hotels : IHotel[] =[]


private _hotelFilter = "mot";
public showBadge: boolean = false;
public filteredHotels: IHotel[] = [];
public receivedRating: string ="";

constructor(private hotelListService: HotelListService){}

ngOnInit(): void {
  this.hotels = this.hotelListService.getHotels();
 this.filteredHotels = this.hotels;
 this.hotelFilter = ""
}

public toggleIsNewBadge(): void{
  this.showBadge = !this.showBadge;
}

public get hotelFilter() : string{
  return this._hotelFilter;
}

public set hotelFilter(filter: string) {
   this._hotelFilter = filter;
   this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels
}

private filterHotels(creteria: string): IHotel[]{
  creteria = creteria.toLocaleLowerCase();
  const res = this.hotels.filter(
    (hotel: IHotel)=> hotel.hotelName.toLocaleLowerCase().indexOf(creteria) !==-1
  )
  return res;
}

public receiveRatingCliked(message: string):void{
  this.receivedRating = message;
}

}
