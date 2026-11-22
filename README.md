# Kandoo — Cloudflare Worker

این مخزن شامل نسخه فعلی Worker کندو است. صفحه وب و API چت هر دو از همین Worker ارائه می‌شوند.

## تنظیم Secretها در Cloudflare

در تنظیمات Worker و بخش Variables and Secrets، این Secretها را تعریف کنید:

- `ZAI_API_KEY` — کلید API سرویس Z.AI
- `GROQ_API_KEY` — کلید API سرویس Groq (اختیاری، برای مسیر جایگزین)

کلیدها را داخل GitHub یا فایل‌های پروژه قرار ندهید.

## Deploy

این پروژه با Wrangler اجرا می‌شود. در صورت استفاده از اتصال GitHub به Cloudflare Workers، مخزن را متصل کنید و تنظیمات Build را مطابق Wrangler انجام دهید. فایل پیکربندی `wrangler.jsonc` در ریشه مخزن قرار دارد.

## نکته فونت

نسخه فعلی HTML فونت Vazirmatn را از مسیر `/Vazirmatn.woff2` درخواست می‌کند. فایل فونت در این بسته قرار ندارد؛ اگر این مسیر روی Worker فعلی سرو نمی‌شود، مرورگر از فونت جایگزین استفاده می‌کند. برای فعال‌سازی Vazirmatn باید فایل فونت و مسیر سرو آن جداگانه اضافه شود.
Backend deployment configured
