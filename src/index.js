import helloWorld from './hello-world';
import imgsrc from '../assets/resource.png';
import imgsvg from '../assets/inline.svg';
import exampleText from '../assets/source.txt';
import asset from '../assets/asset.jpg';

helloWorld();

const img = document.createElement('img');
img.style.cssText = "width:300px; height: 200px";
img.src = imgsrc;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.style.cssText = "width:100px; height: 120px";
img2.src = imgsvg;
document.body.appendChild(img2);

const text = document.createTextNode(exampleText);
document.body.appendChild(text);

const img3 = document.createElement('img');
img3.style.cssText = "width:300px; height: 200px";
img3.src = asset;
document.body.appendChild(img3);