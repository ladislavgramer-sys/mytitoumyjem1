// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

// Try multiple possible logo filenames so it works with your current repo
(function(){
  const candidates = [
    'logo.png',
    'image0 (1).png',
    'image (1).png',
    'image0.png',
    'logo.svg'
  ];
  const img = document.getElementById('logo');
  function tryNext(i){
    if(i>=candidates.length){ return; }
    const test = new Image();
    test.onload = ()=>{ img.src = candidates[i]; };
    test.onerror = ()=>{ tryNext(i+1); };
    test.src = candidates[i] + '?v=' + Date.now();
  }
  tryNext(0);
})();