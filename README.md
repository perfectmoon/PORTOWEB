````markdown
# PORTOWEB

Project fullstack website menggunakan **Express (Node.js)** sebagai backend dan **Vite + React + TailwindCSS** sebagai frontend.

---

## Tech Stack
- **Frontend:** React + TypeScript + Vite + TailwindCSS  
- **Backend:** Express.js + TypeScript  
- **Bundler/Dev Server:** Vite  
- **Package Manager:** npm  
- **Runtime:** Node.js (v18 atau lebih baru)

---

## Cara Menjalankan Project (Local)

### 1. Clone Repository
```bash
git clone https://github.com/username/PORTOWEB.git
cd PORTOWEB
````

### 2. Install Dependencies

```bash
npm install
```

---

## Jalankan di Windows

### 1. Pastikan Node.js sudah terinstal

Download dari:
🔗 [https://nodejs.org](https://nodejs.org)

Cek versi:

```bash
node -v
npm -v
```

### 2. Install `cross-env`

> Digunakan agar environment variable bisa berjalan di Windows.

```bash
npm install cross-env --save-dev
```

### 3. Jalankan server

```bash
npm run dev
```

Jika berhasil, kamu akan melihat log seperti:

```
Server running at http://127.0.0.1:5000
```

Buka browser ke:

```
http://localhost:5000
```

---

## Jalankan di Linux

### 1. Pastikan Node.js dan npm sudah terinstal

```bash
sudo apt update
sudo apt install -y nodejs npm
```

Cek versi:

```bash
node -v
npm -v
```

> Jika versi Node.js terlalu lama, gunakan **nvm** (Node Version Manager):

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
source ~/.bashrc
nvm install 20
```

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan server

> Di Linux tidak perlu `cross-env`, jadi perintah ini langsung bisa jalan:

```bash
NODE_ENV=development npm run dev
```

Server akan berjalan di:

```
http://127.0.0.1:5000
```

---

## Scripts

| Command         | Deskripsi                                 |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Menjalankan server dalam mode development |
| `npm run build` | Build project untuk production            |
| `npm run start` | Menjalankan hasil build                   |

---

## Struktur Folder

```
PORTOWEB/
├── client/             # Frontend React + Vite
├── server/             # Backend Express + API routes
├── shared/             # Kode bersama antara client & server
├── components.json     # Konfigurasi komponen
├── package.json        # Script & dependencies utama
├── tsconfig.json       # Konfigurasi TypeScript
└── README.md           # Dokumentasi ini
```

---

## Kontributor

* **Ichwanul Ammar** – Developer & Maintainer

---

## License

This project is licensed under the **MIT License** – feel free to use and modify!
