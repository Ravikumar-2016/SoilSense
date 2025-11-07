<h1 align="center">🌱 SoilSense – AI-Powered Smart Agriculture Platform</h1>

<p align="center">
  <a href="https://soil-sense-phi.vercel.app/">
    <img src="https://img.shields.io/badge/VISIT%20SITE-00C853?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Visit Site" />
  </a>
  <a href="https://github.com/Ravikumar-2016/SoilSense.git">
    <img src="https://img.shields.io/badge/SOURCE%20CODE-000000?style=for-the-badge&logo=github&logoColor=white" alt="Source Code" />
  </a>
</p>

---

## 🧭 Overview

**SoilSense** is a modern **AI-powered web platform** that helps farmers and agricultural researchers make **data-driven decisions** for sustainable farming.  
It provides personalized recommendations for:

- 🌾 **Crop Selection** — Find the most suitable crops for your field based on soil and environmental parameters.  
- 🌿 **Fertilizer Recommendation** — Get the ideal fertilizer mix tailored to your crop type and soil condition.

Both modules are powered by **machine learning models** trained on real agricultural data and **deployed via Render**, ensuring accuracy and fast inference.

---

## 🎯 Key Highlights

✅ Interactive and user-friendly interface built with **Next.js + TypeScript**  
✅ Real-time predictions from **ML models hosted on Render**  
✅ Responsive and mobile-optimized UI  
✅ Clean, modular folder structure  
✅ Hosted seamlessly on **Vercel**

---

## 🧠 How It Works

1. The user enters parameters like:
   - Temperature (°C)
   - Humidity (%)
   - Rainfall (mm)
   - Soil Type
   - pH Level
   - Nitrogen, Phosphorous, and Potassium content
   - Crop Type (for fertilizer suggestion)

2. These inputs are sent to the **ML API** hosted on **Render**.  
3. The model processes data and returns:
   - The **best crop recommendation**, or  
   - The **most suitable fertilizer combination**.

---

## ⚙️ Tech Stack

| Category | Technologies |
|:----------|:-------------|
| **Frontend** | Next.js (React + TypeScript), Tailwind CSS, shadcn/ui |
| **Backend (ML API)** | Python (Flask / FastAPI), Render deployment |
| **Styling & UI** | Tailwind CSS, modern UI components |
| **Deployment** | Vercel (Frontend), Render (Backend Model) |
| **Version Control** | Git & GitHub |

---

## 🗂️ Folder Structure

```

src/
├── app/
│   ├── crop-recommendation/
│   ├── fertilizer-recommendation/
│   ├── hooks/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── network-banner.tsx
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts
├── package.json
├── next.config.ts
└── README.md

````

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ravikumar-2016/SoilSense.git
cd SoilSense
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Locally

```bash
npm run dev
```

### 4️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🌐 Deployment

| Platform   | Purpose          | URL                                                                      |
| :--------- | :--------------- | :----------------------------------------------------------------------- |
| **Vercel** | Frontend Hosting | [https://soil-sense-phi.vercel.app/](https://soil-sense-phi.vercel.app/) |
| **Render** | ML Model API     | Private endpoint (secured)                                               |

---

<p align="center">
  <span style="font-size: 1.2em; color: #1E88E5;">Developed with ❤️ by Ravikumar Gunti</span>
</p>
