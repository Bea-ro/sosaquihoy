import { Product } from '../models/models';

export const products: Product[] = [
  {
    name: 'agua',
    image: 'assets/agua.jpg',
    isRequired: true,
    isDonated: true,
    locations: ['Valencia'],
  },
  {
    name: 'gel',
    image: 'assets/gel.jpg',
    isRequired: false,
    isDonated: false,
    locations: ['Albacete'],
  },
  {
    name: 'toallitas',
    image: 'assets/toallitas.jpg',
    isRequired: true,
    isDonated: true,
    locations: ['Valencia', 'Albacete'],
  },
  {
    name: 'desodorante',
    image: 'assets/desodorante.jpg',
    isRequired: false,
    isDonated: false,
    locations: ['Albacete'],
  },
  {
    name: 'sinimagen',
    image: '',
    isRequired: false,
    isDonated: false,
    locations: ['Albacete'],
  },
];
