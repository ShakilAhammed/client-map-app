import { Component, OnInit } from '@angular/core';
import MarkerClusterer from '@googlemaps/markerclustererplus';
declare var google: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    readonly locations = [
    {
      position: new google.maps.LatLng(23.43, 90.26),//dhaka
      type: "info",
      location:"Dhaka"
    },
    {
      position: new google.maps.LatLng(22.25,  89.35),//khulna
      type: "info",
      location:"Khulna"
    },
    {
      position: new google.maps.LatLng(23.28, 91.10 ),//comilla
      type: "info",
      location:"Comilla"
    },
    {
      position: new google.maps.LatLng(24.05, 91.00 ),//chittagong
      type: "info",
      location:"Chittagong"
    },
    {
      position: new google.maps.LatLng(21.26, 91.59 ),//Cox's Bazar
      type: "info",
      location:"Cox's Bazar"
    },
    {
      position: new google.maps.LatLng(25.33, 88.43 ),//Dinajpur
      type: "info",
      location:"Dinajpur"

    },
    {
      position: new google.maps.LatLng(24.22, 88.39 ),//Rajshahi
      type: "info",
      location:"Rajshahi"

    },
    {
      position: new google.maps.LatLng(24.54, 91.52 ),//Sylhet
      type: "info",
      location:"Sylhet"

    },
    {
      position: new google.maps.LatLng(22.48, 91.10),//Noakhali / Maijdi
      type: "info",
      location:"Noakhali / Maijdi"

    },
    {
      position: new google.maps.LatLng(23.10, 89.10 ),//Jessore
      type: "info",
      location:"Jessore"
    },
    
  ];
  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.initMap();
  }

  initMap(): void {
    
    
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 9,
        center: { lat: 23.43, lng: 90.26 },
      }
    );
  
    const infoWindow = new google.maps.InfoWindow({
      content: "",
      disableAutoPan: true,
    });

    const icons: Record<string, { icon: string }> = {
      info: {
        icon: "https://i.ibb.co/tY1gDD5/icons8-location-48.png",
      },
    };
     
    // Add some markers to the map.
    const markers = this.locations.map((position, i) => {
      const label = this.locations[i].location;
      const marker = new google.maps.Marker({
        position: this.locations[i].position,
        icon: icons[this.locations[i].type].icon,
        map: map,
      });
  
      // markers can only be keyboard focusable when they have click listeners
      // open info window when marker is clicked
      marker.addListener("click", () => {
        infoWindow.setContent(label);
        infoWindow.open(map, marker);
      });
  
      return marker;
    });
    const imagePath = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer( map, markers, {imagePath: imagePath});
  }

}
