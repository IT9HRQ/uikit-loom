
//
const { mix } = require('laravel-mix');

//
mix.js('app/js/app.js', 'public/js')
   .less('app/less/app.less', 'public/css');