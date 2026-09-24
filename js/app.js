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
  let map = null;
  let geojsonLayer = null;
  let currentState = null;
  let activeFilter = 'all';
  let isSoundEnabled = true;
  let isForcedShortPlay = true; // Default: Forced 5-Second Short-Play (no file trimming needed)
  let currentAudio = null;
  let audioTimer = null;
  let progressInterval = null;
  const AUDIO_DURATION_SEC = 5.0;

  // Zone Colors for Cartography
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
    await loadGeoJSON();
    setTimeout(() => {
      if (map) map.invalidateSize();
      window.scrollTo(0, 0);
    }, 150);
  }

  /**
   * Initialize Leaflet Map
   */
  function initMap() {
    // Centered on India
    map = L.map('map', {
      center: [22.8, 80.5],
      zoom: 4.8,
      minZoom: 4,
      maxZoom: 10,
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
   * Style individual state polygon based on Zone & Heritage layer
   */
  function styleFeature(feature) {
    const stateName = feature.properties.st_nm || feature.properties.NAME_1 || '';
    const stateInfo = stateDataMap.get(stateName.toLowerCase().trim());
    const zone = stateInfo ? stateInfo.zone : 'Union Territory';
    const baseColor = zoneColors[zone] || '#d4af37';

    let fillOpacity = 0.35;
    let weight = 1.2;
    let color = 'rgba(255, 255, 255, 0.4)';

    // Layer-specific adjustments
    if (activeFilter === 'gi') {
      fillOpacity = stateInfo && stateInfo.giTags.length > 0 ? 0.45 : 0.15;
    } else if (activeFilter === 'dance') {
      fillOpacity = stateInfo && stateInfo.folkDance ? 0.45 : 0.15;
    } else if (activeFilter === 'music') {
      fillOpacity = 0.45;
    }

    return {
      fillColor: baseColor,
      weight: weight,
      opacity: 0.8,
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

    // Keyboard Shortcuts (Esc to close, Left/Right for state navigation)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
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

    // Filter Layers (All, GI Tags, Folk Dance, Monuments, Music)
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilter = pill.getAttribute('data-filter');
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
   * Search Input Handler with Autocomplete Suggestions
   */
  function handleSearchInput(e) {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchDropdown.classList.remove('show');
      return;
    }

    const matches = stateData.filter(state => {
      const matchName = state.name.toLowerCase().includes(query);
      const matchCapital = state.capital.toLowerCase().includes(query);
      const matchGi = state.giTags.some(g => g.name.toLowerCase().includes(query));
      const matchDance = state.folkDance.name.toLowerCase().includes(query);
      return matchName || matchCapital || matchGi || matchDance;
    });

    if (matches.length === 0) {
      searchDropdown.innerHTML = '<div style="padding: 12px 16px; font-size: 0.8rem; color: #94a3b8;">No matching heritage states found.</div>';
      searchDropdown.classList.add('show');
      return;
    }

    searchDropdown.innerHTML = '';
    matches.slice(0, 6).forEach(state => {
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
