var els=document.querySelectorAll('.it');
function show(){els.forEach(function(e){if(e.getBoundingClientRect().top<innerHeight-40)e.classList.add('on')})}
addEventListener('scroll',show);addEventListener('load',show);show();
