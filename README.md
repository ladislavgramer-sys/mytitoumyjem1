# MY TI TO UMYJEM – mini web (Vercel)

## E‑mail odesílání (Resend)
1. Ve Vercel projektu otevři **Settings → Environment Variables** a přidej:
   - `RESEND_API_KEY` = tvůj API klíč z https://resend.com
   - `CONTACT_EMAIL` = adresa, na kterou dorazí kopie (např. info@mytitoumyjem.cz)
2. V **Domains** ponech vlastní doménu (mytitoumyjem.cz).
3. Deploy a hotovo. Formulář odešle souhrn na tvůj e‑mail i na e‑mail zákazníka.


### Důležitá poznámka k odesílateli
- Pokud ještě **nemáš ověřenou doménu v Resend**, nech proměnnou `FROM_EMAIL` prázdnou a použije se `onboarding@resend.dev` (funguje hned).
- Jakmile ověříš doménu `mytitoumyjem.cz` v Resend, můžeš přidat do proměnných:
  - `FROM_EMAIL` = např. `noreply@mytitoumyjem.cz`

### Kde hledat chyby
- Vercel → **Logs → Functions** (vyber nejnovější request na `/api/send-calc`) – uvidíš případné chybové hlášky z Resend.
- Rychlá kontrola: otevři `/api/send-calc` v prohlížeči (GET) – mělo by vrátit JSON `{"ok":true,"health":"send-calc alive"}`.
