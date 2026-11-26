# IRERI VENTURE – Sales, Income and Expenses

A one-page app that works offline. All your records stay on your own phone/computer (in the browser), not on GitHub.

## Put it online (one time, about 5 minutes)

1. Sign in at github.com and click **New repository**. Name it `ireri-venture`. Choose **Public** (free Pages needs public) and click **Create repository**.
2. Click **uploading an existing file**, drag in everything from this folder (`index.html`, `sw.js`, `manifest.webmanifest`, `README.md` and the `icons` folder), then **Commit changes**.
3. Go to **Settings → Pages**. Under *Branch* choose `main` and `/ (root)`, then **Save**.
4. After a minute your app is at `https://YOUR-USERNAME.github.io/ireri-venture/`.
5. Open that link on your phone **while online once**, then use *Add to Home Screen* (Chrome menu ⋮, or Safari Share). It now opens like an app and works with no internet.

## Move your existing data (do this before you stop using the old file)

Data is stored per web address, so the new link starts empty.
1. In the **old** app: Reports → **Download backup**.
2. In the **new** app: Reports → choose that backup file under *Backup and restore* → **Replace**.

## Update the app (easy)

1. Open your repository on GitHub, click `index.html`, then the pencil ✏️ (Edit) – or **Add file → Upload files** and drop in a new `index.html`.
2. Click **Commit changes**.
3. Phones pick up the new version by themselves the next time the app is opened with internet (give GitHub about a minute). Your records are not touched.

Tip: you can also give me the new request and I will send a new `index.html` to upload.

## Notes

- Do not put real private records in the repository. Only the app code goes there; your sales and money records never leave your device unless you share a backup file.
- Download a backup regularly. If you clear browser data, records on that device are lost.
- Excel and PDF tools are saved on the device after the first online visit; without them the app saves CSV and uses Print → Save as PDF.
