import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import countryList from './templates/country-list';
import flags from './templates/flags-and-names';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const containerRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

