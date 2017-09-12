require('babel-polyfill');
var fn = require('./search.js');
require('./css/style.css');
require('./css/styleLess.less');
import Btn from './components/btn.jsx'

let app = document.createElement('Div');
app.setAttribute('id','app');
document.querySelector('body').appendChild(app)

/*var img1 = require('./images/img1.png');
let eleImg1 = document.createElement('Img');
eleImg1.src = img1;
document.querySelector('body').appendChild(eleImg1);*/
fn();