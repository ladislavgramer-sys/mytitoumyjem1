// Inject reference images into carousel and handle basic sliding
(function(){
  const container = document.querySelector('.carousel .track');
  if(!container) return;
  const files = (window.REFERENCE_IMAGES || []).filter(Boolean);
  if (files.length === 0) return;

  files.forEach(src => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Reference před/po';
    figure.appendChild(img);
    container.appendChild(figure);
  });

  let i = 0;
  const prev = document.querySelector('.carousel .prev');
  const next = document.querySelector('.carousel .next');
  const update = () => {
    const slideW = container.firstElementChild?.getBoundingClientRect().width || 0;
    container.style.transform = `translateX(${-i * slideW}px)`;
  };
  next.addEventListener('click', ()=>{ i = (i+1)%files.length; update(); });
  prev.addEventListener('click', ()=>{ i = (i-1+files.length)%files.length; update(); });
  window.addEventListener('resize', update);

  // autoplay
  const root = document.querySelector('.carousel');
  if(root?.dataset.autoplay){
    setInterval(()=>{ i = (i+1)%files.length; update(); }, 4000);
  }
})();

// Contact form -> Vercel serverless function /api/send-email (Resend)
(function(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    status.textContent = 'Odesílám…';
    const data = Object.fromEntries(new FormData(form).entries());
    if(!data.name || !data.email){ status.textContent = 'Vyplňte prosím jméno a e‑mail.'; return; }
    try{
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      if(!res.ok) throw new Error('HTTP '+res.status);
      const json = await res.json();
      status.textContent = json?.ok ? 'Děkujeme, zpráva byla odeslána.' : (json?.error || 'Nepodařilo se odeslat.');
      form.reset();
    }catch(err){
      status.textContent = 'Nepodařilo se odeslat. Zkuste to prosím znovu.';
    }
  });
})();
