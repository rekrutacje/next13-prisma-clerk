### Moje uwagi do zadania:

1. `Ngrok` jest ograniczony za Free do 1 Endpoint, więc nie jest stale utrzymywany do utrzymywania kanału publicznego na potrzeby przyjmowania paylodów z Clerk, ale konfiguracja route dla payload z Clerk jest w `./src/app/ap/webhooks/user/route.ts`

2. Powyższe (w `route.ts`) możnaby bardziej otypować, ponieważ generalnie przyjmujemy `any` z Clerka.

3. Aplikacja wystawiona na Vercel pod adresem <https://next13-prisma-clerk-subskrypcje.vercel.app/>, co oznacza, że przeszła CI/CD na Vercelu.

4. W `schema.prisma` schemat Prisma dla prostej aplikacji subskrypcje.

5. Przy deployingu na Vercel dodatkowo poradziłem sobie z błędem związanym z: <https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/vercel-caching-issue> <br>

W sekcji `scripts` pliku `package.json` zmieniłem wartość `build` z `next build` na `prisma generate && next build`. Dodałem wiersz w sekcji `scripts` o treści: `"postinstall": "prisma generate"` <br>
