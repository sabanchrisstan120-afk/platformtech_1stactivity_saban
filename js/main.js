// Minimal interactions: set year and enable smooth scroll
document.addEventListener('DOMContentLoaded',function(){
  const y = new Date().getFullYear();
  const el = document.getElementById('footerYear');
  if(el) el.textContent = `© ${y} Firstname Lastname — Built with Bootstrap`;

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
});
