# Interactive Geographical Heritage Map of India 🇮🇳

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/Manya-Goel132/Mini-Project-Heritage-Map-of-India)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-HTML5_|_CSS3_|_JavaScript_|_Leaflet.js-orange)](https://github.com/Manya-Goel132/Mini-Project-Heritage-Map-of-India)

> **College Mini-Project | Problem Statement 26197: Innovative ideas showcasing Indian traditions**  
> **GitHub Repository:** [https://github.com/Manya-Goel132/Mini-Project-Heritage-Map-of-India](https://github.com/Manya-Goel132/Mini-Project-Heritage-Map-of-India)  
> **Student:** Manya Goel (University Roll No: `2400300100237`)  
> **Faculty Guide:** Ms. Disha  
> **Institution:** Inderprastha Engineering College (IPEC), Ghaziabad  
> **Affiliation:** Dr. A.P.J. Abdul Kalam Technical University (AKTU)

---

## 📖 Executive Summary & Abstract

Traditional educational media and static textbooks often reduce India's multi-millennial cultural legacy into detached, flat historical facts. They fail to evoke the living, spatial, and multisensory reality of Indian traditions.

The **Interactive Geographical Heritage Map of India** is a responsive, web-based digital cartography platform that bridges centuries of traditional heritage with modern front-end web engineering. By combining high-precision vector GIS polygons with an authentic regional soundscape engine, interactive Geographical Indication (GI) product registries, and traditional folk dance archives, this platform offers students, researchers, and cultural enthusiasts an intuitive, multisensory journey across all **37 States and Union Territories** of India.

---

## ⚡ Exact Technology Stack

In strict accordance with the project abstract and presentation specifications (PPT Slide 5):

| Layer | Technology | Implementation Details |
| :--- | :--- | :--- |
| **Markup & Semantics** | **HTML5** | Semantic, accessible DOM structure (`header`, `main`, `nav`, `footer`, ARIA roles). |
| **Styling & Aesthetics** | **CSS3 (Vanilla)** | Glassmorphism, CSS Custom Properties (Design Tokens), responsive Flexbox viewport architecture, smooth transitions. Zero heavy CSS frameworks. |
| **Logic & Interactivity** | **Vanilla JavaScript (ES6+)** | State management, search indexing, event delegation, audio synthesis, and modal lifecycle. |
| **Cartography & GIS** | **Leaflet.js (v1.9.4)** | Client-side interactive tile rendering, vector polygon GeoJSON layer parsing, dynamic hover/click boundaries. |
| **Spatial Dataset** | **GeoJSON (`data/india_states.geojson`)** | Comprehensive spatial coordinates for all 37 Indian States and Union Territories. |
| **Audio Subsystem** | **HTML5 Audio API** | Real field recordings, custom playback controller, **Forced Short-Play (5-second snippet engine)** with audio cue offsets and smooth volume fade-out. |
| **Basemap Provider** | **Esri World Dark Gray Canvas** | Free, high-contrast dark cartography with zero watermarks and zero external API key requirements. |

---

## 🌟 Core Features & System Capabilities

### 1. Interactive Vector Digital Cartography
- **All 37 States and UTs Mapped:** Clickable vector polygons rendered using Leaflet.js with clean boundaries and smooth hover effects.
- **7 Distinct Cultural Zones:** Region-coded styling representing North, South, East, West, Central, North-East, and Union Territories.
- **Dynamic Floating Legend:** Color-coded regional reference card that adapts seamlessly across all display sizes and zoom levels.

### 2. Multisensory 5-Second Traditional Soundscape Engine (PPT Slide 4)
- **Authentic Field & Studio Recordings:** Incorporates 17 verified traditional recordings sourced from the **Centre for Cultural Resources and Training (CCRT, Ministry of Culture, Govt. of India)**, **ICCR**, and **Wikimedia Commons** (e.g., Punjab Dhol & Algoze, Rajasthan Kamaicha & Khartal, Maharashtra Lavani Dholki, Kashmir Santoor & Rabab, Assam Bihu Pepa, Ladakh Tibetan Dungchen, Carnatic Flute & Veena).
- **Client-Side Forced Short-Play:** 
  - Complete, uncompressed audio tracks are preserved on disk.
  - An intelligent client-side playback controller starts playback at the musically rich section (`audioStartOffset`), tracks a live 5.0-second countdown, applies a smooth exponential volume fade in the final 800ms, and terminates playback precisely at 5.0 seconds.
  - Includes a user toggle between **⚡ 5s Forced Snippet** and **🎵 Full Track** mode.
- **Visual Equalizer Wave:** Real-time animated CSS sound equalizer and interactive progress bar indicating exact snippet duration.

### 3. Comprehensive Cultural Heritage Catalog
- **Geographical Indication (GI) Tags:** Over 120+ registered GI tags documented across Indian states (e.g., Kanjeevaram Silk, Darjeeling Tea, Naga Mircha, Kashmiri Pashmina, Pochampally Ikat, Aranmula Kannadi, Channapatna Toys, Blue Pottery of Jaipur).
- **Folk Dance & Arts:** Rich entries covering classical and regional folk traditions (Kathakali, Chhau, Garba, Rouf, Bihu, Yakshagana, Ghoomar, Cheraw, Kalbelia).
- **Cultural Narratives:** Curated historical backgrounds, state capitals, regional badges, and traditional instruments cataloged for every state.

### 4. Interactive Navigation & Exploration Tools
- **Instant Search with Autocomplete:** Real-time query filtering across state names, GI products, dance forms, and instruments with dropdown suggestions and auto-focus.
- **Layer Category Filters:** Switch views between *All Traditions*, *GI-Tagged Products*, *Folk Dance & Arts*, *Heritage Sites*, and *Folk Soundscapes*.
- **Quick-Jump State Carousel:** Bottom carousel bar displaying instant-navigation chips for all states and UTs.
- **Random State Explorer (🎲 Explore):** One-click discovery mode that pans the map and opens the heritage card for an unexplored Indian state.

### 5. Zoom-Resilient Responsive Architecture
- Rigid flex-column viewport architecture (`height: 100dvh`, zero window scrollbars) preventing layout shifts, overlap, or clipping.
- Rigorously tested and visually verified in Google Chrome across standard (100%), zoomed-out (67%), and zoomed-in (125%, 150%) states.

---

## 📁 Repository Directory Structure

```text
Interactive-Geographical-Heritage-Map/
│
├── index.html                   # Main entry point and semantic DOM layout
├── README.md                    # Comprehensive project documentation
├── Manya_Goel_Mini_Project_PPT.pdf      # Official academic presentation
├── Manya_Goel_Mini_Project_Abstract.pdf # Project synopsis and problem statement
│
├── css/
│   └── styles.css               # Complete design system, glassmorphism, responsive flex
│
├── js/
│   ├── app.js                   # Application controller, Leaflet logic, audio engine
│   └── stateData.js             # 37 states database (GI tags, dances, audios, summaries)
│
├── data/
│   └── india_states.geojson     # Vector boundary GeoJSON for all Indian States & UTs
│
├── audio/                       # Authentic regional folk recordings (CCRT & Commons)
│   ├── punjab_real.wav          # Punjab folk dhol & boliyan
│   ├── rajasthan_real.ogg       # Desert folk kamaicha & sarangi
│   ├── maharashtra_real.ogg     # Lavani dholki & lejim
│   ├── uttar_pradesh_real.wav   # Braj Holi folk rasia
│   ├── tamil_nadu_real.ogg      # Nadaswaram & thavil temple soundscape
│   ├── kerala_real.ogg          # Sopana sangeetham & chenda melam
│   ├── uttarakhand_real.ogg     # Kumaoni & Garhwali dhol-damau
│   ├── bansuri_real.ogg         # Traditional Indian bamboo bansuri
│   ├── gujarat_garba_real.mp3   # Authentic Gujarati garba dhol
│   ├── west_bengal_real.mp3     # Baul folk ektara & dotara
│   ├── tribal_folk_real.mp3     # Central Indian mandri & madal drumming
│   ├── ladakh_tibetan_real.ogg  # Buddhist monastery dungchen horns & cymbals
│   ├── kashmir_santoor_real.mp3 # Kashmiri sufi santoor & rabab
│   ├── odisha_real.mp3          # Odissi mardala & flute
│   ├── assam_real.mp3           # Bihu dhol, pepa horn & taal
│   ├── manipur_real.mp3         # Manipuri pung cholom & pena
│   └── carnatic_concert_real.ogg# South Indian classical ensemble
│
├── vendor/
│   └── leaflet/                 # Local Leaflet v1.9.4 distribution (with CDN fallback)
│       ├── leaflet.js
│       └── leaflet.css
│
└── test_screenshots/            # Automated verification captures (Chrome Headless)
    ├── final_check_100.png      # Verification at 100% standard zoom
    ├── final_check_67.png       # Verification at 67% zoomed-out view
    └── final_check_125.png      # Verification at 125% zoomed-in view
```

---

## 🚀 Getting Started & Local Setup

The project is completely self-contained and requires **zero external build tools or node modules**. It runs directly on any modern browser supporting HTML5 and ES6.

### 1. Clone the Repository
```bash
git clone https://github.com/Manya-Goel132/Mini-Project-Heritage-Map-of-India.git
cd Mini-Project-Heritage-Map-of-India
```

### 2. Launch Local Server

#### Option A: Using Python (Recommended)
Open your terminal in the cloned repository directory and run:

```bash
# Python 3
python3 -m http.server 8080
```

Then open your browser and navigate to:
```text
http://localhost:8080
```

#### Option B: Using Node.js / npx
```bash
npx serve -l 8080 .
```

#### Option C: Using VS Code Live Server
- Install the **Live Server** extension in VS Code.
- Right-click `index.html` and click **"Open with Live Server"**.

---

## 🎨 Cultural Data & Audio Attributions

1. **Audio Recordings:** Sourced under Open Cultural & Creative Commons licenses from:
   - *Centre for Cultural Resources and Training (CCRT)*, Ministry of Culture, Government of India.
   - *Indian Council for Cultural Relations (ICCR)* archives.
   - *Wikimedia Commons Audio Archives* (Traditional Indian Folk Music repositories).
2. **Geographical Indications (GI):** Validated against official records of the *Intellectual Property India (Geographical Indications Registry)* under the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry.
3. **Cartography Basemap:** World Dark Gray Canvas powered by *Esri, DeLorme, NAVTEQ*.
4. **Typography:** *Cinzel* (Serif display for traditional Indian titles) and *Outfit* (Sans-serif for crisp legibility), served via Google Fonts.

---

## 🎓 Academic Attribution

This project is submitted in partial fulfillment of the requirements for the **Mini-Project** curriculum at **Inderprastha Engineering College (IPEC)**, Ghaziabad.

- **Student:** Manya Goel
- **University Roll Number:** `2400300100237`
- **Problem Statement ID:** `26197`
- **Faculty Guide:** Ms. Disha
- **GitHub Repository:** [Manya-Goel132/Mini-Project-Heritage-Map-of-India](https://github.com/Manya-Goel132/Mini-Project-Heritage-Map-of-India)

---

## 📄 License

This project is created for educational and academic research purposes under the **MIT License**. All cultural recordings and GI tag logos remain the intellectual and cultural heritage of their respective communities and sovereign government authorities.
