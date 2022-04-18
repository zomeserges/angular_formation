import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHotel } from '../hotel';
import { HotelListService } from '../hotel-list.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  public hotel: IHotel = <IHotel>{};
  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelListService
    ) { }

  ngOnInit(): void {

    if(!!this.route.snapshot.paramMap.get('id')){
      let id: number = parseInt(''+this.route.snapshot.paramMap.get('id'),10)
      this.hotelService.getHotels().subscribe((hotels: IHotel[]) =>{
        this.hotel = <IHotel>hotels.find(hotel => hotel.hotelId === id)
        console.log('my hotel: ', this.hotel)
      })

    }


  }

}
