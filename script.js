// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

// Try multiple possible logo filenames so it works with your current repo; show as circle via CSS
(function(){
  const candidates = [
    'logo.png',
    'image0 (1).png',
    'image (1).png',
    'image0.png',
    'logo.jpg',
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

// Robust fallbacks for missing images
function setFirstExisting(imgEl, names){
  const test = new Image();
  let i = 0;
  const tryNext = ()=>{
    if(i>=names.length){ return; }
    test.onload = ()=>{ imgEl.src = names[i]; };
    test.onerror = ()=>{ i++; tryNext(); };
    test.src = names[i] + '?v=' + Date.now();
  };
  tryNext();
}

setFirstExisting(
  document.getElementById('img-dlazba'),
  [
    'img_20201026_093828_6-1618203617218-768x1024.jpg',
    'img_20201026_093828.jpg',
    'dlazba.jpg',
    'mycie-elewacji-warszawa.jpg' // nouzový fallback
  ]
);

setFirstExisting(
  document.getElementById('ref-strechy'),
  [
    'Clear-Wash-Roof-Gutter-Cleaning-Sydney-9-s.jpg',
    'roof-cleaning-7.jpg',
    '20.jpg'
  ]
);