# 📊 Admin Dashboard App

<div align="center">

<img src="https://via.placeholder.com/900x180/0d1117/58a6ff?text=Admin+Dashboard+App" alt="Admin Dashboard App Banner" />

<p><strong>React + TypeScript + MUI | Full-Stack Admin Panel</strong></p>

<p>
<a href="https://admndashboard.netlify.app" target="_blank">🌐 Live Demo</a> &nbsp;•&nbsp;
<a href="https://github.com/ferhadeyvazov/Admin_Dashboard_App" target="_blank">📁 GitHub Repo</a>
</p>

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=000" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=fff" />
<img src="https://img.shields.io/badge/Material%20UI-007FFF?style=flat-square&logo=mui&logoColor=fff" />
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=fff" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=fff" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=fff" />
<img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />

</div>

---

## 📋 Layihə Haqqında

**Admin Dashboard App** — React, TypeScript və Material UI ilə hazırlanmış, modern bir **admin idarəetmə paneli** tətbiqidir. Layihə frontend tərəfdə güclü komponent quruluşu, backend tərəfdə isə Node.js, Express.js, JWT-based autentikasiya və MongoDB ilə tam bir server altyapısını ehtiva edir.

Bu dashboard biznes analiz, istifadəçi idarəetmə, verilər cədvəlleri, qrafik vizualizasiya və takvim kimi funksiyonları bir platforma yigılmış kompleks bir admin paneldir.

---

## ✨ Əsas Xüsusiyyətlər

| Xüsusiyyət | Təsvir |
|---|---|
| 📈 **Analitik Qrafiklər** | Nivo.rocks ilə interaktiv bar, line və pie chartları |
| 📅 **Takvim** | FullCalendar ilə event idarəetmə və görüş planlaması |
| 📊 **Data Grid Cədvəllər** | MUI Data Grid ilə filterleme, sıralama və paginasiya |
| 👥 **İstifadəçi İdarəetmə** | CRUD əmeiyyatları ilə istifadəçi siyahı və redaktə |
| 🔐 **Autentikasiya** | JWT + bcrypt.js ilə güvəli login/logout sistemi |
| 📝 **Formlar** | React Hook Form + Zod validation ilə form idarəetmə |
| 🎨 **Responsive UI** | MUI + React Pro Sidebar ilə tam responsive dizayn |
| 🌑 **Tünd Tema** | Material UI theming ilə tünd/açıq tema dəyişimi |
| 🗂️ **State Management** | Redux Toolkit ilə global state idarəetmə |
| 🛣️ **Client-Side Routing** | React Router Dom v7 ilə çoxsəhifəli navigasiya |

---

## 🏗️ Texnoloji Stack

### Frontend

| Texnoloji | Vəsait | Maqsad |
|---|---|---|
| **React.js** | [react.dev](https://react.dev/) | UI komponent kitabxanası |
| **TypeScript** | [typescriptlang.org](https://www.typescriptlang.org/) | Statik tip nəzarəti |
| **Material UI (MUI)** | [mui.com](https://mui.com/) | UI komponent sistemi |
| **MUI Icons** | [mui.com/material-icons](https://mui.com/material-ui/material-icons/) | İkon kitabxanası |
| **MUI Data Grid** | [mui.com/x/react-data-grid](https://mui.com/x/react-data-grid/) | Cədvəl komponentə |
| **Redux Toolkit** | [redux-toolkit.js.org](https://redux-toolkit.js.org/) | Global state management |
| **React Router Dom v7** | [reactrouter.com](https://reactrouter.com/) | Client-side routing |
| **React Pro Sidebar** | [npmjs.com](https://www.npmjs.com/package/react-pro-sidebar) | Sidebar navigasiya |
| **React Hook Form** | [react-hook-form.com](https://react-hook-form.com/) | Form idarəetmə |
| **Zod** | [zod.dev](https://zod.dev/) | Form validation |
| **FullCalendar** | [fullcalendar.io](https://fullcalendar.io/) | Takvim komponent |
| **Nivo Rocks** | [nivo.rocks](https://nivo.rocks/) | Grafik vizualizasiya |
| **Module SCSS** | [sass-lang.com](https://sass-lang.com/) | Stil preprocessor |
| **Vite** | [vitejs.dev](https://vite.dev/) | Build və dev server |

### Backend

| Texnoloji | Maqsad |
|---|---|
| **Node.js** | Server runtime mühiti |
| **Express.js** | HTTP server və API routing |
| **MongoDB** | NoSQL verilə bazası |
| **JWT (JSON Web Token)** | Token-əsaslı autentikasiya |
| **bcrypt.js** | Şifrə hashing və müqayisə |

**Dil Nisbəti (GitHub):** TypeScript — 99.6% | Other — 0.4%

---

## 📁 Proyekt Struktur

```
Admin_Dashboard_App/
│
├── public/                      # Statik varlıqlar (favicon, index.html template)
│
├── src/                         # Əsas frontend saya
│   ├── components/              # Reusable UI komponentler
│   │   ├── sidebar/             # Pro Sidebar navigasiya
│   │   ├── topbar/              # Üst navigasiya barı
│   │   ├── charts/              # Nivo grafik komponentler
│   │   ├── datagrid/            # MUI Data Grid cədvəller
│   │   └── calendar/            # FullCalendar komponent
│   │
│   ├── pages/                   # Sahifə-level komponentler
│   │   ├── dashboard/           # Ana dashboard (KPI cards + charts)
│   │   ├── contacts/            # İstifadəçi / Kontakt siyahı
│   │   ├── calendar/            # Takvim sahifəsi
│   │   ├── forms/               # Form sahifəsi
│   │   └── ...                  # Digər sahifəler
│   │
│   ├── store/                   # Redux Toolkit slice və store
│   ├── api/                     # Backend API çağrı (axios/fetch)
│   ├── types/                   # TypeScript tip tərif fayllara
│   ├── theme/                   # MUI tema konfiqurasiyanı
│   ├── App.tsx                  # Əsas App komponent + Router
│   └── main.tsx                 # React DOM render nöqtəsi
│
├── .gitignore
├── eslint.config.js             # ESLint konfiqurasiyanı
├── vite.config.ts               # Vite build konfiqurasiyanı
├── tsconfig.json                # TypeScript əsas konfiq
├── tsconfig.app.json            # TypeScript app-level konfiq
├── tsconfig.node.json           # TypeScript node-level konfiq
├── package.json                 # Npm asılılıqlar və skriptler
├── package-lock.json            # Locked dependency versiyonlar
├── yarn.lock                    # Yarn locked dependency versiyonlar
└── README.md                    # Bu fayl
```

---

## 🚀 Layihəni Qurmaq və Çalışdırmaq

### Tələblar

Başlamaq üçün aşağıdakı toolları yükleyib qurduğunuz olmalıdır:

- **Node.js** (v18 və ya yuxarı)
- **npm** və ya **yarn**
- **MongoDB** (lokal ya da Atlas cloud)

---

### 1. Repozitoru Klonlayın

```bash
git clone https://github.com/ferhadeyvazov/Admin_Dashboard_App.git
cd Admin_Dashboard_App
```

---

### 2. Asılılıqları Yükleyin

```bash
npm install
```

Yaxud Yarn ilə:

```bash
yarn install
```

---

### 3. Mühit Dəyişenlerini (Environment Variables) Konfiqur Edin

Layihe kökünde `.env` faylı yaradınız və aşağıdakı dəyərleri daxil edin:

```env
# MongoDB Bağlayıcı
MONGO_URI=mongodb://localhost:27017/admin_dashboard

# JWT Gizli Ləpə
JWT_SECRET=your_secret_key_here

# Backend Server Port
PORT=5000

# Frontend API Base URL
REACT_APP_API_URL=http://localhost:5000/api
```

> ⚠️ `.env` faylı `.gitignore`-da var olduğundan repo ilə sinxronlaşmaz. Buna görə bu faylı əl ilə yaratmaq lazım gəlir.

---

### 4. Backend Serverini Çalışdırmaq

Backend qovluğa daxil olub serveri başlayın:

```bash
cd backend
npm install
npm start
```

Server uğurla çalışdığında terminal belə bir mesaj verecek:

```
Server running on port 5000
MongoDB connected successfully
```

---

### 5. Frontend Dev Serverini Çalışdırmaq

```bash
npm run dev
```

Bruzerde bu ünvan aça bilərsiniz:

```
http://localhost:5173
```

---

### 6. Production Build Almaq

```bash
npm run build
```

Bu komanda `dist/` qovluğunda optimizasiya edilmiş production fayllara yaradacaq.

---

## 🌐 Deploy Etmək

### Netlify (Frontend)

1. [netlify.com](https://netlify.com) saytında hesab yaradın.
2. GitHub repozitorunu bağlayın.
3. **Build command** olaraq `npm run build` seçin.
4. **Publish directory** olaraq `dist` qovluğu seçin.
5. Environment variables bölümünde `.env` dəyişenlerini əlavə edin.
6. **Deploy** düymə sinirlayın.

> Canlı demo artıq **[admndashboard.netlify.app](https://admndashboard.netlify.app)** ünvanında yayımlanmış vəiyyətdə evar.

### Backend Deploy (Railway / Render / Vercel)

Backend-i ayrıca bir serverə deploy etmək olar — **Railway**, **Render** və ya **Vercel Serverless Functions** kimi platformalar uyğun seçimlər hesab edilir. MongoDB isə **MongoDB Atlas** buluduna migrate etmək tövsiyə edilir.

---

## 🔐 Autentikasiya Axışı

```
Kullanıcı Login → Express API → bcrypt.js (şifrə check) → JWT Token yaradılır
    ↓
Token client-a qaytarılır → Redux Store-da saxlanır → Protected routes üçün istifadə edilir
```

**Əsas API Endpointler:**

| Metod | Endpoint | Təsvir |
|---|---|---|
| POST | `/api/auth/register` | Yeni istifadəçi qeydiyyat |
| POST | `/api/auth/login` | İstifadəçi giriş + JWT token |
| GET | `/api/auth/me` | Cari istifadəçi məlumatı (token ilə) |

---

## 📊 Dashboard Sahifəler

| Sahifə | Təsvir |
|---|---|
| **Dashboard** | KPI kartları, analitik qrafiklər və son fəaliyyətlər |
| **Contacts** | İstifadəçi siyahı — CRUD əmeiyyatları ilə |
| **Calendar** | Event idarəetmə və planlama |
| **Forms** | Validation ilə form yaradılma və redaktə |
| **Settings** | Tema dəyişimi və profil ayarları |

---

## 👨‍💻 Müəllif

Bu layihə **[Fərhad Eyvazov](https://ferhaddev.netlify.app/)** tərəfindən hazırlanmışdır.

---

## 📄 Lisenziya

Bu layihə **MIT** lisenziyası ilə paylaşılmışdır. Ətraflı bilgili üçün [LICENSE](https://choosealicense.com/licenses/mit/) səyfəsini oxuyun.

---

<div align="center">

© 2024 Admin Dashboard App — Bütün hüquqları qorunur.

</div>
