// Burger menu a smooth scroll
function toggleMenu(){document.getElementById('menu').classList.toggle('open')}

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      document.getElementById('menu').classList.remove('open');
    }
  });
});

// Kalkulace – jednoduchý výpočet + potvrzení
const form = document.getElementById('calcForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const area = parseFloat(document.getElementById('area').value || '0');
    const imp = document.getElementById('imp').checked;
    const selected = [...form.querySelectorAll('input[name="items"]:checked')].map(i=>i.value);
    if(!area || selected.length===0){document.getElementById('result').textContent='Vyplňte prosím plochu a vyberte službu.';return;}
    // Jednotkové ceny – orientačně (můžeš změnit)
    const base = 90; // Kč/m²
    const itemsFactor = 1 + (selected.length-1)*0.1; // malý příplatek za kombinace
    let price = area * base * itemsFactor;
    if(imp) price += area * 50; // impregnace 50 Kč/m²

    document.getElementById('result').textContent = `Orientační cena: ${Math.round(price).toLocaleString('cs-CZ')} Kč. Na e-mail vám pošleme souhrn.`;
    // Po výpočtu odešleme e-mail přes Vercel serverless funkci (/api/send-calc)
    fetch('/api/send-calc', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        items: selected,
        area,
        imp,
        price: Math.round(price)
      })
    }).then(r=>r.ok?r.json():Promise.reject()).then(()=>{
      document.getElementById('result').textContent += ' – Zaslali jsme souhrn na e‑mail.';
    }).catch(()=>{
      document.getElementById('result').textContent += ' – Nepodařilo se odeslat e‑mail.';
    });


    // Zde můžeš doplnit odeslání na e-mail/službu
  });
}

document.getElementById('year').textContent = new Date().getFullYear();
