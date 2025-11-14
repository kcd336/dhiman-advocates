
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var target = this.getAttribute('href');
      if(target && target.startsWith('#')){
        e.preventDefault();
        var t = document.querySelector(target);
        if(t) t.scrollIntoView({behavior:'smooth'});
      }
    });
  });
  console.log('Premium site scripts loaded');
});
