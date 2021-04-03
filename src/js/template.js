const Handlebars = require('handlebars');
import dataList from '../menu.json';
import template from '../template/menu-items.hbs';

const markup = template(dataList);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
