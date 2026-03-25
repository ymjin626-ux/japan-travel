// Basic interactivity: mobile nav toggle, booking form handler, footer year
document.addEventListener('DOMContentLoaded',function(){
  var navToggle=document.getElementById('nav-toggle');
  var nav=document.getElementById('nav');
  navToggle && navToggle.addEventListener('click',function(){
    if(nav.style.display==='block'){nav.style.display=''}else{nav.style.display='block'}
  });

  var form=document.getElementById('booking-form');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var data=new FormData(form);
      var name=data.get('name');
      var email=data.get('email');
      var dest=data.get('destination');
      alert('Thanks, '+name+"! We'll send a quote for "+dest+" to "+email+" soon.");
      form.reset();
    });
  }

  var year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();
});
