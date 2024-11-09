import { NumberSymbol } from '@angular/common';

export interface Product {
  name: string;
  image: string;
  isSelected: boolean;
  location: string;
}

export interface LocationData {
  display_name: string;
  address: Object;
  addresstype: string;
  boundingbox: string[];
  class: string;
  importance: number;
  lat: string;
  licence: string;
  lon: string;
  name: string;
  osm_id: number;
  osm_type: string;
  place_id: number;
  place_rank: number;
  type: string;
}
