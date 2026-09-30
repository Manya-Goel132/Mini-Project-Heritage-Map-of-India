/**
 * Interactive Geographical Heritage Map of India
 * Main Application Logic
 * 
 * Tech Stack (Exact match to PPT Slide 5 & Abstract):
 * - HTML5 / CSS3: Modern responsive UI with rich Indian heritage aesthetics
 * - Vanilla JavaScript: Lightweight, high-performance client-side interactivity
 * - Leaflet.js: Interactive mapping engine rendering GeoJSON boundaries
 * - HTML5 Audio API: Dynamic 5-second traditional folk soundscape playback
 * 
 * Student: Manya Goel (2400300100237)
 * Guide: Ms. Disha
 * Inderprastha Engineering College, Ghaziabad
 */

(function () {
  'use strict';

  // State Management
  // State Management
  let map = null;
  let geojsonLayer = null;
  let riverLayer = null;
  let riverGlowLayer = null;
  let showRivers = true;
  let colorMode = 'distinct'; // 'distinct' (every state has unique color) vs 'zones' (7 regional zones)
  let currentState = null;
  let currentRiver = null;
  let activeFilter = 'all';
  let isSoundEnabled = true;
  let isForcedShortPlay = true; // Default: Forced 5-Second Short-Play (no file trimming needed)
  let currentAudio = null;
  let audioTimer = null;
  let progressInterval = null;
  const AUDIO_DURATION_SEC = 5.0;

  // River Data Storage
  const riversDataList = [];
  const riverDataMap = new Map();

  // 1. Unique Distinct State Colors (Curated rich cultural heritage palette)
  const stateColors = {
    'rajasthan': '#e11d48',            // Royal Rajputana Crimson
    'gujarat': '#f97316',              // Marigold Sunset Orange
    'punjab': '#d97706',               // Golden Mustard Wheat
    'haryana': '#16a34a',              // Agricultural Emerald
    'himachal pradesh': '#059669',     // Himalayan Pine Green
    'uttarakhand': '#0891b2',          // Glacial Alaknanda Turquoise
    'jammu and kashmir': '#dc2626',    // Saffron Chinar Red
    'ladakh': '#2563eb',               // High-Altitude Lapis Lazuli
    'delhi': '#eab308',                // Imperial Capital Gold
    'chandigarh': '#0d9488',           // Modernist City Teal
    'uttar pradesh': '#c2410c',        // Heritage Terracotta Saffron
    'bihar': '#b45309',                // Ancient Magadha Bronze
    'madhya pradesh': '#7c3aed',       // Central Heartwood Amethyst
    'chhattisgarh': '#047857',         // Bastar Tribal Forest Green
    'maharashtra': '#6366f1',          // Shivaji Royal Maratha Indigo
    'goa': '#0284c7',                  // Tropical Konkan Ocean Blue
    'karnataka': '#d97706',            // Carnatic Sandalwood Amber
    'kerala': '#15803d',               // God's Own Emerald Viridian
    'tamil nadu': '#be123c',           // Dravidian Temple Ruby
    'andhra pradesh': '#0f766e',       // Kuchipudi Peacock Teal
    'telangana': '#9333ea',            // Kakatiya Royal Violet
    'odisha': '#b91c1c',               // Jagannath Temple Ochre
    'west bengal': '#4338ca',          // Shantiniketan Indigo
    'jharkhand': '#15803d',            // Chota Nagpur Deep Sal Green
    'sikkim': '#db2777',               // Kanchenjunga Orchid Pink
    'assam': '#0d9488',                // Kaziranga Valley Teal Green
    'arunachal pradesh': '#0284c7',    // Dawn-Lit Mountain Sky Blue
    'meghalaya': '#06b6d4',            // Abode of Clouds Mist Cyan
    'nagaland': '#e11d48',             // Hornbill Tribal Vermillion
    'manipur': '#ec4899',              // Loktak Floating Lotus Pink
    'mizoram': '#4f46e5',              // Blue Mountain Indigo
    'tripura': '#d97706',              // Ujjayanta Palace Amber
    'andaman and nicobar islands': '#06b6d4', // Coral Bay Cyan
    'lakshadweep': '#14b8a6',          // Atoll Lagoon Aquamarine
    'puducherry': '#f472b6',           // French Colony Pastel Rose
    'dadra and nagar haveli': '#0284c7', // Daman Coastal Cerulean
    'daman and diu': '#0e7490'          // Arabian Sea Shore Blue
  };

  // 2. Zone Colors for Cartography (Optional Mode)
  const zoneColors = {
    'North India': '#f59e0b',
    'South India': '#3b82f6',
    'East India': '#10b981',
    'West India': '#ec4899',
    'Central India': '#8b5cf6',
    'North-East India': '#14b8a6',
    'Union Territory': '#94a3b8'
  };

  // Pre-index stateData by normalized name
  const stateDataMap = new Map();
  if (typeof stateData !== 'undefined' && Array.isArray(stateData)) {
    stateData.forEach(item => {
      stateDataMap.set(item.name.toLowerCase().trim(), item);
    });
  }

  // DOM Elements
  const modalOverlay = document.getElementById('heritageModal');
  const aboutModal = document.getElementById('aboutModal');
  const riverModal = document.getElementById('riverModal');
  const riverCloseBtn = document.getElementById('riverCloseBtn');
  const toggleRiversBtn = document.getElementById('toggleRiversBtn');
  const toggleColorModeBtn = document.getElementById('toggleColorModeBtn');
  const legendTitle = document.getElementById('legendTitle');
  const legendContent = document.getElementById('legendContent');
  const legendModeSwitch = document.getElementById('legendModeSwitch');
  const riverFocusBtn = document.getElementById('riverFocusBtn');
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  const audioPlayBtn = document.getElementById('audioPlayBtn');
  const audioProgressBar = document.getElementById('audioProgressBar');
  const audioCountdown = document.getElementById('audioCountdown');
  const audioEqualizer = document.getElementById('audioEqualizer');
  const audioStatusText = document.getElementById('audioStatusText');
  const audioSourceBadge = document.getElementById('audioSourceBadge');
  const audioModeToggleBtn = document.getElementById('audioModeToggleBtn');
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const resetMapBtn = document.getElementById('resetMapBtn');
  const randomStateBtn = document.getElementById('randomStateBtn');
  const aboutBtn = document.getElementById('aboutBtn');
  const prevBtn = document.getElementById('prevStateBtn');
  const nextBtn = document.getElementById('nextStateBtn');
  const quickCarousel = document.getElementById('quickCarousel');

  /**
   * Initialize Application
   */
  async function init() {
    window.scrollTo(0, 0);
    initMap();
    initControls();
    initQuickCarousel();
    updateLegend();
    await loadGeoJSON();
    await loadRiversGeoJSON();
    setTimeout(() => {
      if (map) map.invalidateSize();
      window.scrollTo(0, 0);
    }, 150);
  }

  /**
   * Initialize Leaflet Map
   */
  function initMap() {
    // Centered on India with smooth continuous fractional zoom
    map = L.map('map', {
      center: [22.8, 80.5],
      zoom: 4.8,
      minZoom: 3.5,
      maxZoom: 10,
      zoomSnap: 0.2,
      zoomDelta: 0.5,
      zoomControl: false,
      keyboard: false // Prevents Leaflet container focus from scrolling the viewport
    });

    // Custom Zoom Control top-right
    L.control.zoom({ position: 'topright' }).addTo(map);

    // Free high-contrast Dark Canvas basemap (Zero API Key required, no watermarks)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
      maxZoom: 16
    }).addTo(map);
  }

  /**
   * Load GeoJSON Boundary Data (Slide 6 Architecture: data/india_states.geojson)
   */
  async function loadGeoJSON() {
    try {
      const response = await fetch('data/india_states.geojson');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const geojsonData = await response.json();

      geojsonLayer = L.geoJSON(geojsonData, {
        style: styleFeature,
        onEachFeature: onEachFeature
      }).addTo(map);

      // Fit map cleanly to bounds
      map.fitBounds(geojsonLayer.getBounds(), { padding: [20, 20] });
    } catch (err) {
      console.error('Failed to load data/india_states.geojson:', err);
    }
  }

  /**
   * Load GeoJSON Rivers Data (data/india_rivers.geojson)
   */
  async function loadRiversGeoJSON() {
    try {
      const response = await fetch('data/india_rivers.geojson');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const riversGeoJSON = await response.json();

      // Index rivers
      riversGeoJSON.features.forEach(f => {
        const props = f.properties;
        riversDataList.push(props);
        riverDataMap.set(props.id, { feature: f, props: props });
      });

      // 1. Subtle glowing ambient line under rivers
      riverGlowLayer = L.geoJSON(riversGeoJSON, {
        style: function (f) {
          return {
            color: f.properties.color || '#38bdf8',
            weight: (f.properties.weight || 3) + 3.5,
            opacity: 0.28,
            className: 'river-glow-line'
          };
        }
      }).addTo(map);

      // 2. Interactive crisp river centerlines
      riverLayer = L.geoJSON(riversGeoJSON, {
        style: function (f) {
          return {
            color: f.properties.color || '#38bdf8',
            weight: f.properties.weight || 3,
            opacity: 0.95,
            className: 'river-core-line'
          };
        },
        onEachFeature: onEachRiverFeature
      }).addTo(map);

      // Bring rivers above polygons
      if (riverGlowLayer) riverGlowLayer.bringToFront();
      if (riverLayer) riverLayer.bringToFront();
    } catch (err) {
      console.error('Failed to load data/india_rivers.geojson:', err);
    }
  }

  /**
   * Style individual state polygon based on Color Mode & Heritage Layer
   */
  function styleFeature(feature) {
    const stateName = feature.properties.st_nm || feature.properties.NAME_1 || '';
    const stateKey = stateName.toLowerCase().trim();
    const stateInfo = stateDataMap.get(stateKey);
    const zone = stateInfo ? stateInfo.zone : 'Union Territory';

    // Pick color according to active colorMode: 'distinct' vs 'zones'
    let baseColor = '#d4af37';
    if (colorMode === 'distinct') {
      baseColor = stateColors[stateKey] || zoneColors[zone] || '#d4af37';
    } else {
      baseColor = zoneColors[zone] || '#d4af37';
    }

    let fillOpacity = 0.38;
    let weight = 1.3;
    let color = 'rgba(255, 255, 255, 0.45)';

    // Layer-specific adjustments
    if (activeFilter === 'rivers') {
      // Dim states down so glowing rivers take the visual spotlight
      fillOpacity = 0.16;
      weight = 0.9;
      color = 'rgba(255, 255, 255, 0.25)';
    } else if (activeFilter === 'gi') {
      fillOpacity = stateInfo && stateInfo.giTags.length > 0 ? 0.50 : 0.12;
    } else if (activeFilter === 'dance') {
      fillOpacity = stateInfo && stateInfo.folkDance ? 0.50 : 0.12;
    } else if (activeFilter === 'music') {
      fillOpacity = 0.50;
    }

    return {
      fillColor: baseColor,
      weight: weight,
      opacity: 0.85,
      color: color,
      fillOpacity: fillOpacity,
      dashArray: ''
    };
  }

  /**
   * Attach interactive listeners to each polygon
   */
  function onEachFeature(feature, layer) {
    const stateName = feature.properties.st_nm || feature.properties.NAME_1 || 'Unknown';
    const stateInfo = stateDataMap.get(stateName.toLowerCase().trim());

    // Custom Tooltip
    if (stateInfo) {
      const tooltipContent = `
        <div class="custom-state-tooltip">
          <div class="tooltip-title">✨ ${stateInfo.name}</div>
          <div class="tooltip-tag">${stateInfo.zone} • Capital: ${stateInfo.capital}</div>
          <div style="margin-top: 4px; font-size: 0.72rem; color: #ffd866;">
            🏷️ ${stateInfo.giTags[0] ? stateInfo.giTags[0].name : 'Heritage Craft'}
          </div>
        </div>
      `;
      layer.bindTooltip(tooltipContent, {
        sticky: true,
        direction: 'auto',
        className: 'custom-leaflet-tooltip'
      });
    }

    // Hover Highlight
    layer.on({
      mouseover: function (e) {
        const target = e.target;
        target.setStyle({
          weight: 2.5,
          color: '#ffd866',
          fillOpacity: 0.65
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          target.bringToFront();
        }
      },
      mouseout: function (e) {
        geojsonLayer.resetStyle(e.target);
      },
      click: function (e) {
        if (stateInfo) {
          selectState(stateInfo, layer);
        }
      }
    });
  }

  /**
   * Select a state: Center map, open modal card & play 5s soundscape
   */
  function selectState(state, layer) {
    currentState = state;

    // Zoom and center map to bounds if layer provided
    if (layer) {
      map.fitBounds(layer.getBounds(), {
        padding: [60, 60],
        maxZoom: 7,
        animate: true,
        duration: 0.8
      });
    } else {
      // Find matching layer in geojsonLayer
      geojsonLayer.eachLayer(l => {
        const name = l.feature.properties.st_nm || l.feature.properties.NAME_1;
        if (name && name.toLowerCase().trim() === state.name.toLowerCase().trim()) {
          map.fitBounds(l.getBounds(), {
            padding: [60, 60],
            maxZoom: 7,
            animate: true,
            duration: 0.8
          });
        }
      });
    }

    // Update bottom carousel active chip
    updateActiveCarouselChip(state.id);

    // Populate and open Heritage Card
    renderHeritageCard(state);
    openModal();

    // Trigger instant 5-second audio snippet
    if (isSoundEnabled) {
      playFiveSecondSoundscape(state);
    }
  }

  /**
   * Populate Modal Card with State Heritage Data
   */
  function renderHeritageCard(state) {
    document.getElementById('cardHeroImg').src = state.image;
    document.getElementById('cardHeroImg').alt = state.name;
    document.getElementById('cardRegionBadge').innerHTML = `📍 ${state.zone}`;
    document.getElementById('cardStateName').textContent = state.name;
    document.getElementById('cardCapital').textContent = `Capital: ${state.capital}`;
    document.getElementById('cardTagline').textContent = `"${state.tagline}"`;

    // Audio metadata & Source Badge
    document.getElementById('cardInstruments').textContent = `Traditional Instruments: ${state.instruments}`;
    if (state.isAuthenticLive && audioSourceBadge) {
      audioSourceBadge.style.display = 'inline-block';
      audioSourceBadge.innerHTML = '✨ Authentic Recording';
    } else if (audioSourceBadge) {
      audioSourceBadge.style.display = 'none';
    }
    
    if (audioStatusText) {
      audioStatusText.textContent = isForcedShortPlay ? '🎵 5-Second Traditional Soundscape' : '🎵 Full Audio Soundscape';
    }

    // Summary Narrative
    document.getElementById('cardSummary').textContent = state.culturalSummary;

    // GI-Tagged Products (e.g. Kanjeevaram silk in Tamil Nadu, Darjeeling Tea, etc.)
    const giContainer = document.getElementById('cardGiGrid');
    giContainer.innerHTML = '';
    state.giTags.forEach(gi => {
      const card = document.createElement('div');
      card.className = 'heritage-badge-card';
      card.innerHTML = `
        <div class="badge-header">
          <span class="badge-name">${gi.name}</span>
          <span class="gi-tag-pill">GI Tag • ${gi.category}</span>
        </div>
        <p class="badge-desc">${gi.desc}</p>
      `;
      giContainer.appendChild(card);
    });

    // Folk Dance & Performing Arts (e.g. Chhau Dance, Kathakali, Garba, Bhangra)
    const danceContainer = document.getElementById('cardDanceBox');
    danceContainer.innerHTML = `
      <div class="spotlight-title">💃 ${state.folkDance.name}</div>
      <p class="spotlight-desc">${state.folkDance.desc}</p>
    `;

    // Traditional Crafts
    const craftsContainer = document.getElementById('cardCraftsCloud');
    craftsContainer.innerHTML = '';
    state.crafts.forEach(c => {
      const chip = document.createElement('span');
      chip.className = 'tag-chip';
      chip.innerHTML = `🎨 ${c}`;
      craftsContainer.appendChild(chip);
    });

    // Heritage Sites & Architecture
    const sitesContainer = document.getElementById('cardSitesCloud');
    sitesContainer.innerHTML = '';
    state.heritageSites.forEach(s => {
      const chip = document.createElement('span');
      chip.className = 'tag-chip monument';
      chip.innerHTML = `🏛️ ${s}`;
      sitesContainer.appendChild(chip);
    });

    // Sacred Rivers Passing Through this State
    const riversSection = document.getElementById('cardRiversSection');
    const riversCloud = document.getElementById('cardRiversCloud');
    if (riversSection && riversCloud) {
      riversCloud.innerHTML = '';
      const stateNameLower = state.name.toLowerCase().trim();
      const passingRivers = riversDataList.filter(r => 
        Array.isArray(r.states) && r.states.some(s => s.toLowerCase().trim() === stateNameLower)
      );

      // Deduplicate rivers by ID
      const uniqueRivers = [];
      const seenIds = new Set();
      passingRivers.forEach(r => {
        const key = r.id || r.name;
        if (!seenIds.has(key)) {
          seenIds.add(key);
          uniqueRivers.push(r);
        }
      });

      if (uniqueRivers.length > 0) {
        riversSection.style.display = 'block';
        uniqueRivers.forEach(r => {
          const pill = document.createElement('button');
          pill.className = 'river-pill';
          pill.innerHTML = `🌊 ${r.name} (${r.length})`;
          pill.title = `Explore ${r.name} River Basin`;
          pill.addEventListener('click', () => {
            closeModal();
            openRiverModal(r);
          });
          riversCloud.appendChild(pill);
        });
      } else {
        riversSection.style.display = 'none';
      }
    }
  }

  /**
   * Multisensory Audio Engine (Abstract & PPT Slide 4 "The Wow Factor")
   * Native HTML5 Audio API dynamic playback with FORCED SHORT-PLAY (No file trimming required)
   */
  function playFiveSecondSoundscape(state) {
    stopCurrentAudio();

    if (!state || !state.audio) return;

    // Create new HTML5 Audio instance with full untrimmed recording
    currentAudio = new Audio(state.audio);
    currentAudio.volume = 0.85;

    // Immediate fast-seek to authentic musical start offset
    const startOffset = state.audioStartOffset || 0.0;
    currentAudio.currentTime = startOffset;

    // Reset progress UI
    audioProgressBar.style.width = '0%';
    audioEqualizer.classList.add('playing');
    audioPlayBtn.innerHTML = '⏸';
    audioPlayBtn.setAttribute('title', 'Pause Audio');

    if (isForcedShortPlay) {
      audioCountdown.textContent = '5.0s';
      audioStatusText.innerHTML = `🎵 Forced 5s Short-Play • ${state.name}`;
      if (audioModeToggleBtn) {
        audioModeToggleBtn.innerHTML = '⚡ 5s Forced';
        audioModeToggleBtn.style.color = '#ffd866';
      }
    } else {
      audioCountdown.textContent = 'Full';
      audioStatusText.innerHTML = `🎵 Playing Full Track • ${state.name}`;
      if (audioModeToggleBtn) {
        audioModeToggleBtn.innerHTML = '🎵 Full Track';
        audioModeToggleBtn.style.color = '#7dd3fc';
      }
    }

    const startTime = Date.now();
    const durationMs = AUDIO_DURATION_SEC * 1000;

    // High-resolution UI loop & forced cut-off enforcement
    progressInterval = setInterval(() => {
      if (!currentAudio) return;

      if (isForcedShortPlay) {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(100, (elapsed / durationMs) * 100);
        const remaining = Math.max(0, ((durationMs - elapsed) / 1000)).toFixed(1);

        audioProgressBar.style.width = `${progress}%`;
        audioCountdown.textContent = `${remaining}s`;

        // Smooth acoustic fade-out in final 800ms
        if (elapsed >= durationMs - 800) {
          const fadeFraction = Math.max(0, (durationMs - elapsed) / 800);
          currentAudio.volume = 0.85 * fadeFraction;
        }

        // ENFORCE FORCED SHORT-PLAY TERMINATION AT EXACTLY 5.0 SECONDS
        if (elapsed >= durationMs) {
          stopCurrentAudio();
        }
      } else {
        // Full Track Mode progress tracking
        if (currentAudio.duration && !isNaN(currentAudio.duration)) {
          const played = currentAudio.currentTime;
          const total = currentAudio.duration;
          audioProgressBar.style.width = `${(played / total) * 100}%`;
          const mins = Math.floor(played / 60);
          const secs = Math.floor(played % 60);
          audioCountdown.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
          if (played >= total) {
            stopCurrentAudio();
          }
        }
      }
    }, 50);

    // Play native audio with promise catch for browser autoplay restrictions
    const playPromise = currentAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Autoplay prevented by browser security policy. User interaction required.');
        audioPlayBtn.innerHTML = '▶';
        audioPlayBtn.setAttribute('title', 'Click to Play Audio');
        audioEqualizer.classList.remove('playing');
        audioStatusText.textContent = isForcedShortPlay
          ? '▶ Click to play 5s traditional soundscape'
          : '▶ Click to play full audio track';
        clearInterval(progressInterval);
        audioProgressBar.style.width = '0%';
        audioCountdown.textContent = isForcedShortPlay ? '5.0s' : '0:00';
      });
    }

    // Safety timeout to guarantee stop at precisely 5.0 seconds in forced short-play mode
    if (isForcedShortPlay) {
      audioTimer = setTimeout(() => {
        stopCurrentAudio();
      }, durationMs);
    }
  }

  /**
   * Stop audio playback and reset UI controls
   */
  function stopCurrentAudio() {
    if (audioTimer) {
      clearTimeout(audioTimer);
      audioTimer = null;
    }
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }

    audioEqualizer.classList.remove('playing');
    audioPlayBtn.innerHTML = '▶';
    audioPlayBtn.setAttribute('title', 'Play Soundscape');
    audioProgressBar.style.width = '0%';
    audioCountdown.textContent = isForcedShortPlay ? '5.0s' : 'Full';
    audioStatusText.innerHTML = isForcedShortPlay 
      ? '🎵 5-Second Traditional Soundscape' 
      : '🎵 Full Audio Soundscape';
  }

  /**
   * Toggle Audio Play / Pause manually on the Card
   */
  function toggleAudioPlayback() {
    if (currentAudio && !currentAudio.paused) {
      stopCurrentAudio();
    } else if (currentState) {
      playFiveSecondSoundscape(currentState);
    }
  }

  /**
   * Modal Open / Close Handlers
   */
  function openModal() {
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
    stopCurrentAudio();
  }

  /**
   * Open River Details Modal Card
   */
  function openRiverModal(props, layer) {
    currentRiver = props;
    if (!props) return;

    const nameEl = document.getElementById('riverCardName');
    const hindiEl = document.getElementById('riverHindiName');
    const subtitleEl = document.getElementById('riverSubtitle');
    const systemEl = document.getElementById('riverSystemBadge');
    const lengthEl = document.getElementById('riverMetricLength');
    const originEl = document.getElementById('riverMetricOrigin');
    const basinEl = document.getElementById('riverMetricBasin');
    const significanceEl = document.getElementById('riverSignificance');
    const heritageEl = document.getElementById('riverHeritageSites');
    const statesCloud = document.getElementById('riverStatesCloud');

    const cleanName = props.name.includes('River') ? props.name : `${props.name} River`;
    const hindi = props.hindi_name || props.hindiName || '';
    const subtitle = props.subtitle || `${props.system || 'Major River System'} of India`;
    const significance = props.cultural_significance || props.significance || 'Sacred lifeline of Indian civilization and ecosystem.';
    let heritage = props.heritage_sites || props.heritageSites || 'Sacred ghats, historic temples, and ancient pilgrimage routes.';
    if (Array.isArray(heritage)) {
      heritage = heritage.join(' • ');
    }

    if (nameEl) nameEl.textContent = cleanName;
    if (hindiEl) hindiEl.textContent = hindi;
    if (subtitleEl) subtitleEl.textContent = subtitle;
    if (systemEl) systemEl.innerHTML = `🌊 ${props.system || 'Indian River System'}`;
    if (lengthEl) lengthEl.textContent = props.length || '—';
    if (originEl) originEl.textContent = props.origin || '—';
    if (basinEl) basinEl.textContent = props.basin || '—';
    if (significanceEl) significanceEl.textContent = significance;
    if (heritageEl) heritageEl.textContent = heritage;

    if (statesCloud) {
      statesCloud.innerHTML = '';
      if (Array.isArray(props.states)) {
        props.states.forEach(stName => {
          const chip = document.createElement('button');
          chip.className = 'state-river-chip';
          chip.innerHTML = `📍 ${stName}`;
          chip.title = `Jump to ${stName} heritage details`;
          chip.addEventListener('click', () => {
            closeRiverModal();
            const foundState = stateData.find(s => s.name.toLowerCase().trim() === stName.toLowerCase().trim());
            if (foundState) {
              selectState(foundState, null);
            }
          });
          statesCloud.appendChild(chip);
        });
      }
    }

    if (riverModal) {
      riverModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    focusRiverOnMap(props, layer);
  }

  function closeRiverModal() {
    if (riverModal) {
      riverModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function focusRiverOnMap(props, layer) {
    if (layer && typeof layer.getBounds === 'function') {
      map.fitBounds(layer.getBounds(), { padding: [60, 60], maxZoom: 8, animate: true, duration: 0.8 });
      return;
    }
    if (riverLayer) {
      riverLayer.eachLayer(l => {
        if (l.feature && l.feature.properties && l.feature.properties.id === props.id) {
          map.fitBounds(l.getBounds(), { padding: [60, 60], maxZoom: 8, animate: true, duration: 0.8 });
        }
      });
    }
  }

  /**
   * Interaction Handlers for River Centerlines
   */
  function onEachRiverFeature(feature, layer) {
    const props = feature.properties;
    const hindi = props.hindi_name || props.hindiName || '';
    const tooltipContent = `
      <div class="custom-river-tooltip">
        <div class="river-tip-title">🌊 ${props.name} ${props.name.includes('River') ? '' : 'River'} ${hindi ? '(' + hindi + ')' : ''}</div>
        <div class="river-tip-meta">${props.system} • Length: ${props.length}</div>
        <div class="river-tip-origin">Source: ${props.origin}</div>
        <div class="river-tip-action">Click to inspect basin, states & heritage ✦</div>
      </div>
    `;
    layer.bindTooltip(tooltipContent, {
      sticky: true,
      direction: 'auto',
      className: 'custom-leaflet-tooltip'
    });

    layer.on({
      mouseover: function (e) {
        const l = e.target;
        l.setStyle({
          weight: (props.weight || 3) + 2.5,
          color: '#ffffff',
          opacity: 1
        });
        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
          l.bringToFront();
        }
      },
      mouseout: function (e) {
        if (riverLayer) {
          riverLayer.resetStyle(e.target);
        }
      },
      click: function () {
        openRiverModal(props, layer);
      }
    });
  }

  /**
   * Toggle River Vectors Visibility
   */
  function toggleRivers() {
    showRivers = !showRivers;
    if (toggleRiversBtn) {
      toggleRiversBtn.classList.toggle('active', showRivers);
    }
    if (showRivers) {
      if (riverGlowLayer && !map.hasLayer(riverGlowLayer)) map.addLayer(riverGlowLayer);
      if (riverLayer && !map.hasLayer(riverLayer)) map.addLayer(riverLayer);
      if (riverGlowLayer) riverGlowLayer.bringToFront();
      if (riverLayer) riverLayer.bringToFront();
    } else {
      if (riverGlowLayer && map.hasLayer(riverGlowLayer)) map.removeLayer(riverGlowLayer);
      if (riverLayer && map.hasLayer(riverLayer)) map.removeLayer(riverLayer);
    }
  }

  /**
   * Toggle Color Mode: Distinct Vibrant State Hues vs 7 Regional Zones
   */
  function toggleColorMode() {
    colorMode = colorMode === 'distinct' ? 'zones' : 'distinct';
    if (toggleColorModeBtn) {
      if (colorMode === 'distinct') {
        toggleColorModeBtn.innerHTML = '🎨';
        toggleColorModeBtn.title = 'Color Mode: Distinct Hues (Click to switch to Regional Zones)';
        toggleColorModeBtn.classList.add('active');
      } else {
        toggleColorModeBtn.innerHTML = '🗺️';
        toggleColorModeBtn.title = 'Color Mode: Regional Zones (Click to switch to Distinct Hues)';
        toggleColorModeBtn.classList.remove('active');
      }
    }
    if (geojsonLayer) {
      geojsonLayer.eachLayer(l => geojsonLayer.resetStyle(l));
    }
    updateLegend();
  }

  /**
   * Update Floating Map Legend
   */
  function updateLegend() {
    if (!legendContent) return;
    if (legendTitle) {
      legendTitle.textContent = colorMode === 'distinct' ? 'Distinct Heritage Hues' : 'Regional Zones of India';
    }
    if (legendModeSwitch) {
      legendModeSwitch.textContent = colorMode === 'distinct' ? 'Switch to Regional Zones' : 'Switch to Distinct Colors';
    }

    if (colorMode === 'zones') {
      let html = '<div class="legend-items-grid">';
      for (const [zone, color] of Object.entries(zoneColors)) {
        html += `
          <div class="legend-item">
            <span class="legend-color-dot" style="background: ${color};"></span>
            <span class="legend-label">${zone}</span>
          </div>
        `;
      }
      html += '</div>';
      html += `
        <div class="legend-river-section">
          <div class="legend-subheading">Major River Basins</div>
          <div class="legend-items-grid">
            <div class="legend-item"><span class="legend-color-dot" style="background: #38bdf8;"></span><span class="legend-label">Himalayan (Ganga, Indus, Brahmaputra)</span></div>
            <div class="legend-item"><span class="legend-color-dot" style="background: #0284c7;"></span><span class="legend-label">Peninsular (Godavari, Krishna, Kaveri)</span></div>
            <div class="legend-item"><span class="legend-color-dot" style="background: #0d9488;"></span><span class="legend-label">West-Flowing (Narmada, Tapti)</span></div>
          </div>
        </div>
      `;
      legendContent.innerHTML = html;
    } else {
      let html = '<div class="legend-items-grid">';
      const sampleStates = [
        ['Rajasthan', '#e11d48'],
        ['Gujarat', '#f97316'],
        ['Punjab', '#d97706'],
        ['Uttar Pradesh', '#c2410c'],
        ['Maharashtra', '#6366f1'],
        ['Karnataka', '#d97706'],
        ['Kerala', '#15803d'],
        ['Tamil Nadu', '#be123c'],
        ['West Bengal', '#4338ca'],
        ['Assam', '#0d9488'],
        ['Kashmir & Ladakh', '#2563eb'],
        ['Madhya Pradesh', '#7c3aed']
      ];
      sampleStates.forEach(([st, col]) => {
        html += `
          <div class="legend-item">
            <span class="legend-color-dot" style="background: ${col};"></span>
            <span class="legend-label">${st}</span>
          </div>
        `;
      });
      html += '</div>';
      html += `
        <div class="legend-river-section">
          <div class="legend-subheading">🌊 River Systems (${riversDataList.length || 35}+ Lifelines)</div>
          <div class="legend-items-grid">
            <div class="legend-item"><span class="legend-color-dot" style="background: #38bdf8;"></span><span class="legend-label">Perennial Glacial Rivers</span></div>
            <div class="legend-item"><span class="legend-color-dot" style="background: #0284c7;"></span><span class="legend-label">Peninsular Sacred Basins</span></div>
          </div>
        </div>
      `;
      legendContent.innerHTML = html;
    }
  }

  /**
   * Navigate Previous / Next State
   */
  function navigateState(direction) {
    if (!currentState) return;
    const currentIndex = stateData.findIndex(s => s.id === currentState.id);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = stateData.length - 1;
    if (nextIndex >= stateData.length) nextIndex = 0;

    selectState(stateData[nextIndex], null);
  }

  /**
   * Setup UI Event Listeners & Controls
   */
  function initControls() {
    // Modal Close
    document.getElementById('cardCloseBtn').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    // River Modal Controls
    if (riverCloseBtn) {
      riverCloseBtn.addEventListener('click', closeRiverModal);
    }
    if (riverModal) {
      riverModal.addEventListener('click', (e) => {
        if (e.target === riverModal) closeRiverModal();
      });
    }
    if (riverFocusBtn) {
      riverFocusBtn.addEventListener('click', () => {
        if (currentRiver) {
          focusRiverOnMap(currentRiver);
        }
      });
    }

    // River Toggle Overlay Button
    if (toggleRiversBtn) {
      toggleRiversBtn.addEventListener('click', toggleRivers);
    }

    // Color Mode Toggle Button & Legend Switch Link
    if (toggleColorModeBtn) {
      toggleColorModeBtn.addEventListener('click', toggleColorMode);
    }
    if (legendModeSwitch) {
      legendModeSwitch.addEventListener('click', toggleColorMode);
    }

    // Keyboard Shortcuts (Esc to close, Left/Right for state navigation)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        closeRiverModal();
        aboutModal.classList.remove('open');
      } else if (modalOverlay.classList.contains('open')) {
        if (e.key === 'ArrowRight') navigateState(1);
        if (e.key === 'ArrowLeft') navigateState(-1);
      }
    });

    // Audio Play/Pause Button
    audioPlayBtn.addEventListener('click', toggleAudioPlayback);

    // Audio Mode Toggle (Forced 5s Short-Play vs Full Track)
    if (audioModeToggleBtn) {
      audioModeToggleBtn.addEventListener('click', () => {
        isForcedShortPlay = !isForcedShortPlay;
        if (isForcedShortPlay) {
          audioModeToggleBtn.innerHTML = '⚡ 5s Forced';
          audioModeToggleBtn.style.color = '#ffd866';
        } else {
          audioModeToggleBtn.innerHTML = '🎵 Full Track';
          audioModeToggleBtn.style.color = '#7dd3fc';
        }
        if (currentState) {
          playFiveSecondSoundscape(currentState);
        }
      });
    }

    // Global Sound Mute/Unmute
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      if (!isSoundEnabled) {
        soundToggleBtn.classList.add('muted');
        soundToggleBtn.innerHTML = '🔇 Sound Off';
        stopCurrentAudio();
      } else {
        soundToggleBtn.classList.remove('muted');
        soundToggleBtn.innerHTML = '🔊 Sound On';
      }
    });

    // Reset Map View
    resetMapBtn.addEventListener('click', () => {
      if (geojsonLayer) {
        map.fitBounds(geojsonLayer.getBounds(), { padding: [20, 20] });
      } else {
        map.setView([22.8, 80.5], 4.8);
      }
    });

    // Random State Discovery
    randomStateBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * stateData.length);
      selectState(stateData[randomIndex], null);
    });

    // Navigation Buttons in Modal
    prevBtn.addEventListener('click', () => navigateState(-1));
    nextBtn.addEventListener('click', () => navigateState(1));

    // About Project Modal
    aboutBtn.addEventListener('click', () => aboutModal.classList.add('open'));
    document.getElementById('aboutCloseBtn').addEventListener('click', () => aboutModal.classList.remove('open'));
    aboutModal.addEventListener('click', (e) => {
      if (e.target === aboutModal) aboutModal.classList.remove('open');
    });

    // Filter Layers (All, GI Tags, Folk Dance, Monuments, Music, Rivers)
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilter = pill.getAttribute('data-filter');

        // If Rivers pill is selected, ensure rivers are turned ON and brought to front
        if (activeFilter === 'rivers') {
          if (!showRivers) toggleRivers();
          if (riverGlowLayer) riverGlowLayer.bringToFront();
          if (riverLayer) riverLayer.bringToFront();
        }

        if (geojsonLayer) {
          geojsonLayer.eachLayer(l => geojsonLayer.resetStyle(l));
        }
      });
    });

    // Search Box Autocomplete
    searchInput.addEventListener('input', handleSearchInput);
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.remove('show');
      }
    });
  }

  /**
   * Search Input Handler with Joint State & River Suggestions
   */
  function handleSearchInput(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchDropdown.classList.remove('show');
      return;
    }

    const stateMatches = stateData.filter(state => {
      const matchName = state.name.toLowerCase().includes(query);
      const matchCapital = state.capital.toLowerCase().includes(query);
      const matchGi = state.giTags.some(g => g.name.toLowerCase().includes(query));
      const matchDance = state.folkDance.name.toLowerCase().includes(query);
      return matchName || matchCapital || matchGi || matchDance;
    });

    const riverMatches = riversDataList.filter(river => {
      const matchName = river.name.toLowerCase().includes(query);
      const matchHindi = river.hindiName && river.hindiName.toLowerCase().includes(query);
      const matchSystem = river.system && river.system.toLowerCase().includes(query);
      const matchState = Array.isArray(river.states) && river.states.some(s => s.toLowerCase().includes(query));
      return matchName || matchHindi || matchSystem || matchState;
    });

    if (stateMatches.length === 0 && riverMatches.length === 0) {
      searchDropdown.innerHTML = '<div style="padding: 12px 16px; font-size: 0.8rem; color: #94a3b8;">No matching heritage states or rivers found.</div>';
      searchDropdown.classList.add('show');
      return;
    }

    searchDropdown.innerHTML = '';

    // Render River Matches with distinctive blue badge
    riverMatches.slice(0, 3).forEach(river => {
      const item = document.createElement('div');
      item.className = 'search-item';
      item.innerHTML = `
        <div class="search-item-info">
          <span class="search-item-name">🌊 ${river.name} River ${river.hindiName ? '(' + river.hindiName + ')' : ''}</span>
          <span class="search-item-meta">${river.system} • Length: ${river.length}</span>
        </div>
        <span class="search-item-badge" style="background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4);">River System</span>
      `;
      item.addEventListener('click', () => {
        searchInput.value = river.name;
        searchDropdown.classList.remove('show');
        openRiverModal(river);
      });
      searchDropdown.appendChild(item);
    });

    // Render State Matches
    stateMatches.slice(0, 5).forEach(state => {
      const item = document.createElement('div');
      item.className = 'search-item';
      item.innerHTML = `
        <div class="search-item-info">
          <span class="search-item-name">${state.name}</span>
          <span class="search-item-meta">${state.zone} • Capital: ${state.capital}</span>
        </div>
        <span class="search-item-badge">${state.giTags[0] ? state.giTags[0].name : 'Heritage'}</span>
      `;
      item.addEventListener('click', () => {
        searchInput.value = state.name;
        searchDropdown.classList.remove('show');
        selectState(state, null);
      });
      searchDropdown.appendChild(item);
    });

    searchDropdown.classList.add('show');
  }

  /**
   * Initialize Bottom Quick State Carousel
   */
  function initQuickCarousel() {
    quickCarousel.innerHTML = '';
    stateData.forEach(state => {
      const chip = document.createElement('button');
      chip.className = 'state-chip';
      chip.id = `chip-${state.id}`;
      chip.textContent = state.name;
      chip.addEventListener('click', () => {
        selectState(state, null);
      });
      quickCarousel.appendChild(chip);
    });
  }

  function updateActiveCarouselChip(stateId) {
    document.querySelectorAll('.state-chip').forEach(c => c.classList.remove('active'));
    const activeChip = document.getElementById(`chip-${stateId}`);
    if (activeChip && quickCarousel) {
      activeChip.classList.add('active');
      const offset = activeChip.offsetLeft - (quickCarousel.clientWidth / 2) + (activeChip.clientWidth / 2);
      quickCarousel.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }

  // Window scroll lock prevention
  window.addEventListener('scroll', () => {
    if (window.scrollY !== 0 || window.scrollX !== 0) {
      window.scrollTo(0, 0);
    }
  });

  // Handle zoom and window resizing cleanly
  window.addEventListener('resize', () => {
    if (map) {
      map.invalidateSize();
    }
  });

  // Start app when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
