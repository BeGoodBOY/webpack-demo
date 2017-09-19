import _ from 'lodash'
// import print from './print.js'
import { cube } from './math.js'

//src 下可访问到process.env.NODE_ENV
// if (process.env.NODE_ENV !== 'production') {
// 	console.log('Look like we are in development model');
// }

function component() {
    var element = document.createElement('div');
    // var element = document.createElement('pre');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click Me';
    var br = document.createElement('br');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.innerHTML = ['Hello webpack', '5 cubed is equal to ' + cube(5)].join('\n\n');
    element.appendChild(br);
    element.appendChild(btn);
    btn.onclick = function(){
        console.log('Click me');
    };
    // btn.onclick = print;

    return element;
}

document.body.appendChild(component());
// let element = component();
// document.body.appendChild(element);

// if(module.hot) {
// 	module.hot.accept('./print.js',function(){
// 		console.log('Accept the updated printMe module');
// 		document.body.removeChild(element);
// 		element = component();
// 		document.body.appendChild(element);
// 	});
// }