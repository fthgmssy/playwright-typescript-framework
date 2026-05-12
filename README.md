# playwright-typescript-framework

Playwright + TypeScript ile yazılmış E2E test otomasyon framework'ü. Page Object Model pattern, multi-browser desteği ve GitHub Actions CI entegrasyonu içerir.

## Teknolojiler

- Playwright 1.43
- TypeScript 5
- GitHub Actions

## Kurulum

```bash
git clone https://github.com/fthgmssy/playwright-typescript-framework.git
cd playwright-typescript-framework
npm install
npx playwright install
```

## Çalıştırma

```bash
# Tüm testler
npm test

# Headed modda (tarayıcı görünür)
npm run test:headed

# Belirli bir browser
npx playwright test --project=chromium
npx playwright test --project=firefox
```

## Raporlama

```bash
npm run report
```

## Proje Yapısı

```
src/
├── pages/
│   ├── BasePage.ts      # tüm page object'lerin türediği base sınıf
│   └── LoginPage.ts
├── tests/
│   └── login.spec.ts
└── utils/
    └── ApiHelper.ts     # API request yardımcısı
```
