# MY TI TO UMYJEM – mini web (Vercel)

## Co je uvnitř
- `index.html`, `style.css`, `script.js` – statický web
- `assets/images/…` – logo a fotky (před/po)
- `api/send-email.js` – serverless funkce pro odeslání e‑mailu přes **Resend**

## Nasazení na Vercel
1. Nahrajte repozitář na GitHub a v **Vercel** ho importujte.
2. V projektu otevřete **Settings → Environment Variables** a přidejte:
   - `RESEND_API_KEY` — API klíč z https://resend.com
   - `CONTACT_EMAIL` — `info@mytitoumyjem.cz`
3. Deploy. Formulář v sekci **Kontakt** odešle e‑mail vám i zákazníkovi.

> Pokud Vercel běží na vlastní doméně, doporučuji mít doménu připojenou v **Settings → Domains**.
