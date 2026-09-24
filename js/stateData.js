/**
 * Interactive Geographical Heritage Map of India
 * Cultural Dataset per State & Union Territory
 * PPT Slide 6 Architecture: const stateData = [...]
 * Project by Manya Goel (2400300100237), Guided by Ms. Disha
 * Inderprastha Engineering College, Ghaziabad
 */

const stateData = [
  {
    "id": "andaman-and-nicobar-islands",
    "name": "Andaman and Nicobar Islands",
    "capital": "Port Blair",
    "zone": "Union Territory",
    "audio": "audio/bansuri_real.ogg",
    "instruments": "Tribal Bamboo Flutes, Shell Chimes & Dugout Wooden Drums",
    "soundscapeDesc": "Evocative coastal island soundscape with oceanic breeze resonance and ancestral tribal drum cadence.",
    "image": "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Emerald Jewels of the Bay of Bengal",
    "giTags": [
      {
        "name": "Nicobari Hodi Craft",
        "category": "Handicraft",
        "desc": "Traditional outrigger canoe carved by the indigenous Nicobarese tribe from local timber."
      },
      {
        "name": "Andaman Padauk Woodcraft",
        "category": "Handicraft",
        "desc": "Intricately carved redwood artifacts reflecting rich island craftsmanship."
      }
    ],
    "folkDance": {
      "name": "Nicobari Dance",
      "desc": "Circular community dance performed during the Ossuary Feast celebrating ecological kinship."
    },
    "crafts": [
      "Cane & Bamboo Crafts",
      "Shell & Coral Ornamentation",
      "Wood Carvings"
    ],
    "heritageSites": [
      "Cellular Jail National Memorial (Kala Pani)",
      "Ross Island Heritage Colony",
      "Barren Island Volcano"
    ],
    "culturalSummary": "An archipelago renowned for its prehistoric indigenous tribes, marine heritage, and pivotal role in India's freedom movement.",
    "audioStartOffset": 0,
    "isAuthenticLive": true
  },
  {
    "id": "andhra-pradesh",
    "name": "Andhra Pradesh",
    "capital": "Amaravati",
    "zone": "South India",
    "audio": "audio/carnatic_concert_real.ogg",
    "instruments": "Carnatic Saraswati Veena, Nadaswaram & Mridangam",
    "soundscapeDesc": "Majestic Carnatic classical cadences with divine temple bell resonances and crisp mridangam rhythms.",
    "image": "https://images.unsplash.com/photo-1600100397608-f010f443b791?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Rice Bowl & Epicenter of Kuchipudi and Kalamkari",
    "giTags": [
      {
        "name": "Srikalahasthi Kalamkari",
        "category": "Handicraft",
        "desc": "Freehand pen-drawn organic fabric painting depicting sacred mythological epics."
      },
      {
        "name": "Tirupati Laddu",
        "category": "Foodstuff",
        "desc": "World-famous sacred sweet prasadam offered at the historic Tirumala Venkateswara Temple."
      },
      {
        "name": "Kondapalli Toys",
        "category": "Handicraft",
        "desc": "Lightweight soft wood (Tella Poniki) toys handcrafted into mythological and rural figures."
      },
      {
        "name": "Venkatagiri Sarees",
        "category": "Textile",
        "desc": "Fine woven zari jamdani silk and cotton weaves dating back to royal courts."
      }
    ],
    "folkDance": {
      "name": "Kuchipudi Classical Dance",
      "desc": "One of India's premier classical dances combining swift footwork, Tarangam brass plate balance, and dramatic mime."
    },
    "crafts": [
      "Machilipatnam Block Prints",
      "Lepakshi Stone Carvings",
      "Etikoppaka Lacquered Toys"
    ],
    "heritageSites": [
      "Lepakshi Veerabhadra Temple & Hanging Pillar",
      "Tirumala Venkateswara Temple",
      "Borra Caves"
    ],
    "culturalSummary": "Celebrated for its grand classical literature, sacred temple shrines, intricate pen-and-block Kalamkari traditions, and Carnatic music masters.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "arunachal-pradesh",
    "name": "Arunachal Pradesh",
    "capital": "Itanagar",
    "zone": "North-East India",
    "audio": "audio/ladakh_tibetan_real.ogg",
    "instruments": "Monpa Dranyen (Lute), Bamboo Flutes & Chimes",
    "soundscapeDesc": "Serene Buddhist monastic horn swells combined with Himalayan bamboo melodies.",
    "image": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Land of Dawn-Lit Mountains",
    "giTags": [
      {
        "name": "Arunachal Wakro Orange",
        "category": "Agricultural",
        "desc": "High-sweetness indigenous organic citrus cultivated in the foothills of Lohit."
      },
      {
        "name": "Apatani Textile Weave",
        "category": "Textile",
        "desc": "Geometric handloom woven on loin looms using organic cotton and natural dyes by Apatani women."
      },
      {
        "name": "Monpa Handmade Paper",
        "category": "Handicraft",
        "desc": "Centuries-old Buddhist calligraphic paper produced from the bark of Shugu Sheng tree."
      }
    ],
    "folkDance": {
      "name": "Monpa Cham & Mask Dance",
      "desc": "Sacred Buddhist monastic masked dance performed during Torgya festival to ward off negativity."
    },
    "crafts": [
      "Wancho Wood Carving",
      "Thangka Painting",
      "Mishmi Loin Loom Weaving"
    ],
    "heritageSites": [
      "Tawang Buddhist Monastery (400-yr old)",
      "Ita Fort",
      "Ziro Cultural Landscape"
    ],
    "culturalSummary": "Home to 26 major indigenous tribes, ancient Mahayana Buddhist sanctuaries, and pristine biodiverse Himalayan valleys.",
    "audioStartOffset": 2,
    "isAuthenticLive": true
  },
  {
    "id": "assam",
    "name": "Assam",
    "capital": "Dispur",
    "zone": "North-East India",
    "audio": "audio/assam_real.mp3",
    "instruments": "Bihu Pepa (Buffalo Horn Flute), Bihu Dhol & Bhor Taal",
    "soundscapeDesc": "Electrifying Bihu festival folk rhythm with ringing bell-metal cymbals and piercing buffalo horn melodies.",
    "image": "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Realm of Red Rivers, Blue Hills & Golden Muga Silk",
    "giTags": [
      {
        "name": "Assam Muga Silk",
        "category": "Textile",
        "desc": "Naturally golden silk produced by endemic wild silkworms, renowned for longevity that outlives its wearer."
      },
      {
        "name": "Assam Orthodox Tea",
        "category": "Agricultural",
        "desc": "World-renowned brisk, malty, full-bodied black tea cultivated in the Brahmaputra Valley."
      },
      {
        "name": "Assam Karbi Anglong Ginger",
        "category": "Agricultural",
        "desc": "Aromatic organic ginger prized across international culinary and spice markets."
      },
      {
        "name": "Assam Gamosa",
        "category": "Textile",
        "desc": "Traditional white handwoven rectangular cloth with embroidered red borders, symbolizing reverence."
      }
    ],
    "folkDance": {
      "name": "Bihu Dance",
      "desc": "Vibrant spring harvest folk dance characterized by rapid hand movements and graceful waist sways celebrating Rongali Bihu."
    },
    "crafts": [
      "Sarthebari Bell Metal Works",
      "Majuli Mask Making",
      "Cane & Bamboo Crafts"
    ],
    "heritageSites": [
      "Kamakhya Temple",
      "Kaziranga National Park (UNESCO)",
      "Majuli Island (World's Largest River Island)"
    ],
    "culturalSummary": "A sacred river valley blessed with mystical Vaishnavite Satra monasteries, living handloom legacies, and rolling tea gardens.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "bihar",
    "name": "Bihar",
    "capital": "Patna",
    "zone": "East India",
    "audio": "audio/bansuri_real.ogg",
    "instruments": "Maithili Bansuri, Harmonium & Folk Dholak",
    "soundscapeDesc": "Heartfelt folk strains celebrating Chhath Puja prayers and devotional Maithili poetry.",
    "image": "https://images.unsplash.com/photo-1590483256080-60b81e8eb9bf?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Cradle of Ancient Knowledge, Buddhism & Jainism",
    "giTags": [
      {
        "name": "Madhubani (Mithila) Paintings",
        "category": "Handicraft",
        "desc": "Vibrant natural pigment paintings characterized by eye-catching geometrical patterns and mythological motifs."
      },
      {
        "name": "Bhagalpuri Silk",
        "category": "Textile",
        "desc": "Legendary Tussar silk woven on centuries-old pit-looms in the Silk City of Bhagalpur."
      },
      {
        "name": "Shahi Litchi of Muzaffarpur",
        "category": "Agricultural",
        "desc": "Juicy, fragrant rose-scented litchis with deep crimson skin and unmatched sweetness."
      },
      {
        "name": "Sikki Grass Work of Bihar",
        "category": "Handicraft",
        "desc": "Golden-tinted wild grass woven into durable sculptural containers and cultural toys."
      }
    ],
    "folkDance": {
      "name": "Jat-Jatin & Bidesia",
      "desc": "Expressive folk theatrical dance dramatizing agrarian family journeys, monsoons, and rural humor."
    },
    "crafts": [
      "Sujani Embroidery",
      "Tikuli Glass Craft",
      "Stone Carvings of Gaya"
    ],
    "heritageSites": [
      "Mahabodhi Temple Complex at Bodh Gaya (UNESCO)",
      "Ruins of Nalanda Mahavihara (UNESCO)",
      "Vikramshila University"
    ],
    "culturalSummary": "The historical cradle of the Maurya and Gupta Empires, home to Buddha's enlightenment, Mahavira's nirvana, and Asia's greatest ancient universities.",
    "audioStartOffset": 0,
    "isAuthenticLive": true
  },
  {
    "id": "chandigarh",
    "name": "Chandigarh",
    "capital": "Chandigarh",
    "zone": "Union Territory",
    "audio": "audio/punjab_real.wav",
    "instruments": "Folk Tumbi, Dhol & Acoustic Harmony",
    "soundscapeDesc": "Upbeat North Indian modern-meets-folk fusion celebrating harvest vigor and modernist open-hand spirit.",
    "image": "https://images.unsplash.com/photo-1597040663342-45b6af3d91a5?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The City Beautiful & Architectural Triumph",
    "giTags": [
      {
        "name": "Phulkari Heritage Craft",
        "category": "Textile",
        "desc": "Shared heritage floral threadwork embroideries practiced by generational artisan guilds."
      }
    ],
    "folkDance": {
      "name": "Bhangra & Giddha",
      "desc": "High-energy rhythmic folk celebrations shared across the Punjab-Haryana cultural confluence."
    },
    "crafts": [
      "Nek Chand Mosaic Stone Art",
      "Modernist Woodcraft",
      "Handmade Pottery"
    ],
    "heritageSites": [
      "Nek Chand Rock Garden",
      "Capitol Complex (UNESCO)",
      "Sukhna Lake"
    ],
    "culturalSummary": "India's first planned city designed by Le Corbusier, blending world-class modernist urbanism with vibrant Punjabi and Haryanvi cultural traditions.",
    "audioStartOffset": 0.5,
    "isAuthenticLive": true
  },
  {
    "id": "chhattisgarh",
    "name": "Chhattisgarh",
    "capital": "Raipur",
    "zone": "Central India",
    "audio": "audio/tribal_folk_real.mp3",
    "instruments": "Ghotul Mandar Drums, Mohri & Bell Flutes",
    "soundscapeDesc": "Resonant forest tribal beats with earthy terracotta flute flourishes and iron bell chimes.",
    "image": "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Heart of Tribal Art & Ancient Sal Forests",
    "giTags": [
      {
        "name": "Bastar Iron Craft (Loha Shilp)",
        "category": "Handicraft",
        "desc": "Forged wrought-iron figurines made by the Maria and Muria tribes using ancestral black-smithy."
      },
      {
        "name": "Bastar Dhokra (Bell Metal)",
        "category": "Handicraft",
        "desc": "Lost-wax metal casting technique dating back 4,000 years to the Indus Valley Civilisation."
      },
      {
        "name": "Bastar Wooden Craft",
        "category": "Handicraft",
        "desc": "Intricately chiseled teak and sal wood icons representing forest spirits and village deities."
      },
      {
        "name": "Champa Kosa Silk",
        "category": "Textile",
        "desc": "Lustrous, organic tussar silk handspun from wild silkworm cocoons."
      }
    ],
    "folkDance": {
      "name": "Panthi & Raut Nacha",
      "desc": "Acrobatic devotional dances performed by the Satnami community and Yadav shepherds."
    },
    "crafts": [
      "Terracotta Bell Sculptures",
      "Bamboo Craft of Surguja",
      "Godna Tattoo Wall Art"
    ],
    "heritageSites": [
      "Sirpur Monument Group",
      "Chitrakote Falls (Niagara of India)",
      "Bhoramdeo Temple"
    ],
    "culturalSummary": "A biodiversity haven deeply rooted in tribal harmony, prehistoric rock paintings, and metallurgical craftsmanship.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "dadra-and-nagar-haveli",
    "name": "Dadra and Nagar Haveli",
    "capital": "Silvassa",
    "zone": "Union Territory",
    "audio": "audio/tribal_folk_real.mp3",
    "instruments": "Tarpa Horn Wind Instrument & Dholak",
    "soundscapeDesc": "Hypnotic Tarpa wind melodies played in circles during the moonlit harvest season.",
    "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Verdant Tribal Haven of the Western Ghats",
    "giTags": [
      {
        "name": "Warli Folk Painting",
        "category": "Handicraft",
        "desc": "Indigenous tribal white rice-paste circle-triangle murals depicting nature and community life."
      }
    ],
    "folkDance": {
      "name": "Tarpa Dance",
      "desc": "Community circle dance where men and women intertwine hands and sway around the Tarpa player."
    },
    "crafts": [
      "Bamboo Baskets & Mats",
      "Lacquered Wooden Carvings",
      "Clay Pottery"
    ],
    "heritageSites": [
      "Dudhni Lake",
      "Tribal Cultural Museum Silvassa",
      "Bindrabin Temple"
    ],
    "culturalSummary": "A serene territory preserving ancient Varli and Dhodia tribal customs alongside lingering Portuguese colonial heritage.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "daman-and-diu",
    "name": "Daman and Diu",
    "capital": "Daman",
    "zone": "Union Territory",
    "audio": "audio/gujarat_garba_real.mp3",
    "instruments": "Portuguese Mando Guitars, Tambourines & Sea Shell Flutes",
    "soundscapeDesc": "Breezy coastal maritime melodies blending Indo-Portuguese folk chords with Saurashtrian rhythms.",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Sun-Drenched Coastal Forts & Indo-Portuguese Splendor",
    "giTags": [
      {
        "name": "Mat Weaving & Shell Craft",
        "category": "Handicraft",
        "desc": "Artisan seaside shell craftsmanship and handwoven palm fiber crafts."
      }
    ],
    "folkDance": {
      "name": "Verdigao & Mando",
      "desc": "Festive Indo-Portuguese ballroom folk dances performed in traditional Portuguese attire."
    },
    "crafts": [
      "Tortoise Shell Ornaments",
      "Boat Building",
      "Lace Embroidery"
    ],
    "heritageSites": [
      "Moti Daman Fort & St. Jerome Cathedral",
      "Diu Fortress & Lighthouse",
      "Naida Caves"
    ],
    "culturalSummary": "An enchanting maritime enclave fortified by 16th-century stone ramparts overlooking the Arabian Sea.",
    "audioStartOffset": 0.5,
    "isAuthenticLive": true
  },
  {
    "id": "delhi",
    "name": "Delhi",
    "capital": "New Delhi",
    "zone": "North India",
    "audio": "audio/uttar_pradesh_real.wav",
    "instruments": "Sufi Harmonium, Qawwali Dholak & Classical Sitar",
    "soundscapeDesc": "Spiritual Sufi Qawwali claps and soaring classical sitar arpeggios of the historic walled city.",
    "image": "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Eternal Capital of Empires and Heritage Confluences",
    "giTags": [
      {
        "name": "Delhi Zardozi Embroidery",
        "category": "Handicraft",
        "desc": "Opulent metallic gold and silver thread needlework patronized by Mughal imperial dynasties."
      }
    ],
    "folkDance": {
      "name": "Kathak Classical Solo & Sufi Whirling",
      "desc": "Sophisticated footwork and storytelling traditions nurtured in the grand courts of Shahjahanabad."
    },
    "crafts": [
      "Meenakari Enamel Jewelry",
      "Paper Mache Art",
      "Calligraphic Parchment"
    ],
    "heritageSites": [
      "Qutb Minar & Alai Darwaza (UNESCO)",
      "Humayun's Tomb (UNESCO)",
      "Red Fort Complex (UNESCO)"
    ],
    "culturalSummary": "Seven historic cities layered in one: from Mahabharata's Indraprastha to Mughal splendor and modern national pride.",
    "audioStartOffset": 1.5,
    "isAuthenticLive": true
  },
  {
    "id": "goa",
    "name": "Goa",
    "capital": "Panaji",
    "zone": "West India",
    "audio": "audio/bansuri_real.ogg",
    "instruments": "Ghumot Clay Drum, Kansalle Cymbals & Violin",
    "soundscapeDesc": "Joyous Konkani rhythm anchored by the resonant acoustic thump of the earthen Ghumot drum.",
    "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Pearl of the Orient & Confluence of East and West",
    "giTags": [
      {
        "name": "Goan Cashew Feni",
        "category": "Manufactured",
        "desc": "Distilled alcoholic heritage spirit made exclusively from fermented cashew apples in traditional copper pots."
      },
      {
        "name": "Goan Khaje",
        "category": "Foodstuff",
        "desc": "Crisp fried chickpea-flour sticks coated with jaggery, sesame seeds, and ginger, famous at temple feasts."
      },
      {
        "name": "Harmal Chilli",
        "category": "Agricultural",
        "desc": "Spicy, bright-red endemic pepper cultivated in Harmal village along Goa's coastal bluffs."
      },
      {
        "name": "Mankurad Mango",
        "category": "Agricultural",
        "desc": "Succulent, thin-skinned table mango esteemed as the king of Goan fruits."
      }
    ],
    "folkDance": {
      "name": "Fugdi & Dekhnni",
      "desc": "Lively Konkani women's folk dance celebrating Ganesh Chaturthi with clapping and rhythmic breath sounds."
    },
    "crafts": [
      "Ghumot Heritage Instrument",
      "Terracotta Pottery",
      "Brass Lamp Casting"
    ],
    "heritageSites": [
      "Basilica of Bom Jesus (UNESCO)",
      "Se Cathedral",
      "Fort Aguada & Lighthouse"
    ],
    "culturalSummary": "A coastal paradise steeped in Portuguese architecture, sunlit beaches, Konkani folklore, and spice plantations.",
    "audioStartOffset": 0.5,
    "isAuthenticLive": true
  },
  {
    "id": "gujarat",
    "name": "Gujarat",
    "capital": "Gandhinagar",
    "zone": "West India",
    "audio": "audio/gujarat_garba_real.mp3",
    "instruments": "Dholak, Dandiya Sticks, Flute & Shehnai",
    "soundscapeDesc": "Festive, fast-paced Garba and Dandiya Raas percussion with celebratory bells and joyous flute riffs.",
    "image": "https://images.unsplash.com/photo-1599831104326-ed10e74f1d43?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Land of Legends, White Deserts & Artisanal Mastery",
    "giTags": [
      {
        "name": "Patan Patola",
        "category": "Textile",
        "desc": "Ultra-intricate double-ikat silk weave where both warp and weft are tie-dyed with surgical precision."
      },
      {
        "name": "Kutch Embroidery",
        "category": "Handicraft",
        "desc": "Mirror-work embroidery featuring vibrant geometric stitches passed down across nomad pastoral clans."
      },
      {
        "name": "Gir Kesar Mango",
        "category": "Agricultural",
        "desc": "Exquisite saffron-hued sweet mango grown in the foothills of Gir forest."
      },
      {
        "name": "Surat Zari Craft",
        "category": "Handicraft",
        "desc": "Centuries-old metallic thread drawing and electroplating utilized in imperial bridal ensembles."
      }
    ],
    "folkDance": {
      "name": "Garba & Dandiya Raas",
      "desc": "World-famous circular harvest and Navratri dance honoring Goddess Durga, recognized by UNESCO."
    },
    "crafts": [
      "Rogan Art of Nirona",
      "Ajrakh Block Printing",
      "Sankheda Lacquered Furniture"
    ],
    "heritageSites": [
      "Rani ki Vav Stepwell at Patan (UNESCO)",
      "Historic City of Ahmadabad (UNESCO)",
      "Sun Temple Modhera"
    ],
    "culturalSummary": "The homeland of Mahatma Gandhi, legendary Harappan ports of Lothal, vibrant Rann of Kutch deserts, and global entrepreneurial spirit.",
    "audioStartOffset": 0.5,
    "isAuthenticLive": true
  },
  {
    "id": "haryana",
    "name": "Haryana",
    "capital": "Chandigarh",
    "zone": "North India",
    "audio": "audio/punjab_real.wav",
    "instruments": "Been (Pungi), Deru Drum, Sarangi & Chimta",
    "soundscapeDesc": "Earthy, vigorous rustic folk beats echoing heroic pastoral lore and the sacred battlegrounds of Kurukshetra.",
    "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Epic Land of the Bhagavad Gita & Green Revolution",
    "giTags": [
      {
        "name": "Haryana Phulkari",
        "category": "Handicraft",
        "desc": "Geometric silk floss darning embroideries executed on coarse khaddar cotton from the reverse side."
      }
    ],
    "folkDance": {
      "name": "Dhamal & Khoria",
      "desc": "Vigorous men's harvest dance dating back to Mahabharata times accompanied by beating daff drums."
    },
    "crafts": [
      "Rewari Metalwork & Brassware",
      "Panipat Handloom Dhurries",
      "Clay Toy Sculpting"
    ],
    "heritageSites": [
      "Kurukshetra Brahma Sarovar",
      "Pinjore Yadavindra Gardens",
      "Rakhigarhi Indus Valley Site"
    ],
    "culturalSummary": "Where Lord Krishna delivered the timeless message of the Bhagavad Gita, famous today as India's sporting and agrarian powerhouse.",
    "audioStartOffset": 0.5,
    "isAuthenticLive": true
  },
  {
    "id": "himachal-pradesh",
    "name": "Himachal Pradesh",
    "capital": "Shimla",
    "zone": "North India",
    "audio": "audio/uttarakhand_real.ogg",
    "instruments": "Karnal Brass Trumpet, Dholak, Damama & Pahadi Flute",
    "soundscapeDesc": "Crisp alpine mountain melodies with reverberating brass temple horns and joyous village fair beats.",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Devbhoomi — The Abode of Gods & Snow-Capped Summits",
    "giTags": [
      {
        "name": "Kullu Shawl",
        "category": "Handicraft",
        "desc": "Handloom shawls adorned with vivid geometric border patterns woven from fine merino and pashmina wool."
      },
      {
        "name": "Kangra Paintings",
        "category": "Handicraft",
        "desc": "Delicate Pahadi miniature paintings capturing the divine romance of Radha and Krishna."
      },
      {
        "name": "Chamba Rumal",
        "category": "Handicraft",
        "desc": "Double-faced satin stitch embroidery described as needle-painting, identical on both sides."
      },
      {
        "name": "Kinnauri Shawl",
        "category": "Handicraft",
        "desc": "Warm wool weave featuring complex Buddhist mythological religious motifs."
      }
    ],
    "folkDance": {
      "name": "Nati Dance",
      "desc": "Guinness Record-holding synchronized community circle dance performed in colorful traditional Chola robes."
    },
    "crafts": [
      "Pahadi Wood Carvings",
      "Chamba Chappals",
      "Tibetan Thangkas of Dharamshala"
    ],
    "heritageSites": [
      "Kalka-Shimla Mountain Railway (UNESCO)",
      "Great Himalayan National Park (UNESCO)",
      "Tabo Monastery (1000 yrs old)"
    ],
    "culturalSummary": "A pristine mountain sanctuary of pine valleys, ancient wood-and-stone temples, and living Tibetan Buddhist culture.",
    "audioStartOffset": 0.5,
    "isAuthenticLive": true
  },
  {
    "id": "jammu-and-kashmir",
    "name": "Jammu and Kashmir",
    "capital": "Srinagar / Jammu",
    "zone": "North India",
    "audio": "audio/kashmir_santoor_real.mp3",
    "instruments": "Kashmiri 100-Stringed Santoor, Rabab & Tumbaknari",
    "soundscapeDesc": "Heavenly Sufiana Kalam melodies with sparkling 100-string santoor hammer glissandos and soulful rabab notes.",
    "image": "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Paradise on Earth & Valley of Mystic Saints",
    "giTags": [
      {
        "name": "Kashmir Pashmina",
        "category": "Textile",
        "desc": "Ultra-fine gossamer luxury wool spun from the underbelly fleece of high-altitude Changthangi goats."
      },
      {
        "name": "Kashmir Saffron (Kesar)",
        "category": "Agricultural",
        "desc": "World's highest-grade dark-red saffron stigmas harvested from the purple crocus fields of Pampore."
      },
      {
        "name": "Kani Shawl",
        "category": "Textile",
        "desc": "Exquisite weave constructed line-by-line using tiny wooden spools (Tujis) based on coded Talim scripts."
      },
      {
        "name": "Kashmir Walnut Wood Carving",
        "category": "Handicraft",
        "desc": "Deep-relief floral and dragon carvings sculpted from slow-seasoned walnut timber."
      }
    ],
    "folkDance": {
      "name": "Rouf & Kud Dance",
      "desc": "Graceful lyrical women's dance performed in rows during Eid and spring blossoming of almond gardens."
    },
    "crafts": [
      "Paper Mache Craft",
      "Sozni Needlework",
      "Basohli Miniature Painting"
    ],
    "heritageSites": [
      "Mughal Gardens (Shalimar & Nishat)",
      "Shankaracharya Temple",
      "Dal Lake & Houseboats"
    ],
    "culturalSummary": "Celebrated by Mughal emperors as heaven on earth, world-famed for its saffron, Sufi poetry, and timeless artisanal crafts.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "jharkhand",
    "name": "Jharkhand",
    "capital": "Ranchi",
    "zone": "East India",
    "audio": "audio/tribal_folk_real.mp3",
    "instruments": "Seraikella Nagada Drum, Dhamsa & Murli Flute",
    "soundscapeDesc": "Thunderous martial drumbeats of the Chhau war dance echoing across the Chota Nagpur plateau.",
    "image": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Land of Forests, Waterfalls & Tribal Valor",
    "giTags": [
      {
        "name": "Sohrai & Khovar Painting",
        "category": "Handicraft",
        "desc": "Mural art practiced by indigenous women using clay and broken combs during harvest and weddings."
      }
    ],
    "folkDance": {
      "name": "Chhau Dance (Seraikella)",
      "desc": "Acrobatic martial mask dance dramatizing epics with sword-and-shield movements, recognized by UNESCO."
    },
    "crafts": [
      "Dokra Metal Casting",
      "Bamboo & Sal Leaf Craft",
      "Paitkar Scroll Painting"
    ],
    "heritageSites": [
      "Baidyanath Jyotirlinga Temple at Deoghar",
      "Parasnath Jain Tirthankara Shrines",
      "Betla National Park"
    ],
    "culturalSummary": "Rich in tribal bravery inspired by Birsa Munda, mineral treasures, prehistoric rock art, and holy pilgrimage peaks.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "karnataka",
    "name": "Karnataka",
    "capital": "Bengaluru",
    "zone": "South India",
    "audio": "audio/tamil_nadu_real.ogg",
    "instruments": "Carnatic Saraswati Veena, Maddale Drums & Flute",
    "soundscapeDesc": "Regal Carnatic classical compositions blended with the dramatic percussion rolls of Yakshagana theatre.",
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "tagline": "One State, Many Worlds — Cradle of Vijayanagara Splendor",
    "giTags": [
      {
        "name": "Mysore Silk",
        "category": "Textile",
        "desc": "Heavy pure silk crepe sarees woven with 100% genuine gold and silver zari for the Mysore royal family."
      },
      {
        "name": "Bidriware",
        "category": "Handicraft",
        "desc": "Zinc-copper alloy blackened with special historic Bidar fort mud and inlaid with pure silver wires."
      },
      {
        "name": "Channapatna Toys & Dolls",
        "category": "Handicraft",
        "desc": "Eco-friendly ivory-wood toys lacquered with non-toxic vegetable colors, praised by global leaders."
      },
      {
        "name": "Mysore Sandalwood Oil",
        "category": "Manufactured",
        "desc": "The fragrant golden elixir distilled from sacred Santalum album trees."
      }
    ],
    "folkDance": {
      "name": "Yakshagana",
      "desc": "High-octane classical folk theatre with towering headgear, vibrant makeup, and roaring dialogues."
    },
    "crafts": [
      "Kinhal Toys",
      "Ilkal Sarees",
      "Rosewood Inlay Furniture"
    ],
    "heritageSites": [
      "Hampi Ruins & Stone Chariot (UNESCO)",
      "Pattadakal Temple Complex (UNESCO)",
      "Mysore Amba Vilas Palace"
    ],
    "culturalSummary": "A magnificent heritage state uniting Hoysala architecture, Carnatic music pioneers, and today's Silicon Valley of India.",
    "audioStartOffset": 3,
    "isAuthenticLive": true
  },
  {
    "id": "kerala",
    "name": "Kerala",
    "capital": "Thiruvananthapuram",
    "zone": "South India",
    "audio": "audio/kerala_real.ogg",
    "instruments": "Chenda Melam Drums, Elathalam Cymbals & Edakka",
    "soundscapeDesc": "Thrilling temple percussion crescendo of the legendary Panchavadyam and Chenda Melam.",
    "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
    "tagline": "God's Own Country — Spice Coast & Ayurvedic Heartland",
    "giTags": [
      {
        "name": "Aranmula Kannadi",
        "category": "Handicraft",
        "desc": "Front-surface cast-metal reflection mirror made with a secretive copper-tin alloy formula by a single guild."
      },
      {
        "name": "Alleppey Green Cardamom",
        "category": "Agricultural",
        "desc": "Superior aromatic whole spices prized worldwide for their intense essential oils and green tint."
      },
      {
        "name": "Kasargod Sarees",
        "category": "Textile",
        "desc": "Fine traditional handloom sarees crafted with vegetable dyes and distinctive temple pallus."
      },
      {
        "name": "Navara Rice",
        "category": "Agricultural",
        "desc": "Ancient medicinal grain extensively employed in Ayurvedic rejuvenation treatments like Navarakizhi."
      }
    ],
    "folkDance": {
      "name": "Kathakali & Theyyam",
      "desc": "Mesmerizing classical dance-drama featuring elaborate facial makeup (Chutti) and Theyyam shamanic deity invocations."
    },
    "crafts": [
      "Nettur Petti Wooden Jewel Box",
      "Coir Fiber Craft",
      "Bell Metal Uruli Vessels"
    ],
    "heritageSites": [
      "Padmanabhaswamy Temple",
      "Kochi Jewish Synagogue & Mattancherry Palace",
      "Kerala Backwaters"
    ],
    "culturalSummary": "Renowned for tranquil backwaters, classical Ayurveda, lush coconut groves, and spectacular temple festivals like Thrissur Pooram.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "ladakh",
    "name": "Ladakh",
    "capital": "Leh",
    "zone": "Union Territory",
    "audio": "audio/ladakh_tibetan_real.ogg",
    "instruments": "Dungchen (Tungchen) Tibetan Horns, Damaru & Singing Bowls",
    "soundscapeDesc": "Profound Buddhist monastic horn vibrations echoing through high Himalayan mountain passes.",
    "image": "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Land of High Passes & Moonscape Monasteries",
    "giTags": [
      {
        "name": "Ladakh Pashmina (Lena)",
        "category": "Textile",
        "desc": "Raw cashmere fleece collected by nomadic Changpa tribes on the Changthang plateau at 14,000 feet."
      },
      {
        "name": "Ladakh Raktsey Karpo Apricot",
        "category": "Agricultural",
        "desc": "Super-sweet endemic white-kernel apricot grown without chemicals in high-altitude cold deserts."
      },
      {
        "name": "Ladakh Wood Carving",
        "category": "Handicraft",
        "desc": "Intricate ornamental Buddhist monastery furniture, dragon motifs, and Choktse low tables."
      }
    ],
    "folkDance": {
      "name": "Cham Mask Dance",
      "desc": "Vivid masked tantric dances executed by Buddhist lamas at Hemis and Thiksey monasteries."
    },
    "crafts": [
      "Tibetan Thangka Painting",
      "Copper & Brass Teapots",
      "Sheep Wool Goncha Weaving"
    ],
    "heritageSites": [
      "Hemis Monastery",
      "Thiksey Monastery",
      "Pangong Tso & Khardung La Pass"
    ],
    "culturalSummary": "An awe-inspiring cold desert where Tibetan Buddhist philosophy, stupas, and nomadic pastoralism flourish in thin air.",
    "audioStartOffset": 2,
    "isAuthenticLive": true
  },
  {
    "id": "lakshadweep",
    "name": "Lakshadweep",
    "capital": "Kavaratti",
    "zone": "Union Territory",
    "audio": "audio/bansuri_real.ogg",
    "instruments": "Daff Percussion, Kolkali Sticks & Harmonium",
    "soundscapeDesc": "Rhythmic stick-dance clapping and lyrical maritime songs over turquoise lagoons.",
    "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80",
    "tagline": "One Hundred Thousand Islands in Turquoise Waters",
    "giTags": [
      {
        "name": "Lakshadweep Coconut Crafts",
        "category": "Handicraft",
        "desc": "Organic coconut shell carvings, coir ropes, and naturally fermented palm jaggery."
      }
    ],
    "folkDance": {
      "name": "Lava & Kolkali Dance",
      "desc": "Dynamic folk stick dance performed in rhythmic circles with synchronized acrobatic maneuvers."
    },
    "crafts": [
      "Coral Stone Architecture",
      "Coir Twisting & Net Weaving",
      "Wooden Oar Carving"
    ],
    "heritageSites": [
      "Ujra Mosque Kavaratti",
      "Minicoy Lighthouse",
      "Agatti Coral Atoll"
    ],
    "culturalSummary": "India's tranquil coral atoll territory, famous for pristine lagoons, sustainable tuna fishing, and maritime heritage.",
    "audioStartOffset": 0,
    "isAuthenticLive": true
  },
  {
    "id": "madhya-pradesh",
    "name": "Madhya Pradesh",
    "capital": "Bhopal",
    "zone": "Central India",
    "audio": "audio/bansuri_real.ogg",
    "instruments": "Gond Flute, Timki Percussion & Harmonium",
    "soundscapeDesc": "Heartwarming folk melodies of the Malwa plateau, celebrating wildlife and ancient sandstone stupas.",
    "image": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Undiscovered Heart of Incredible India",
    "giTags": [
      {
        "name": "Chanderi Fabric",
        "category": "Textile",
        "desc": "Feather-light sheer sarees woven with shimmering zari and silk-cotton threads since the Vedic era."
      },
      {
        "name": "Bagh Prints of Madhya Pradesh",
        "category": "Handicraft",
        "desc": "Natural geometric block prints dyed with red alum and black iron-ferment along Bagh riverbanks."
      },
      {
        "name": "Maheshwar Sarees & Fabrics",
        "category": "Textile",
        "desc": "Reversible border sarees revitalized by queen Devi Ahilyabai Holkar on the Narmada ghats."
      },
      {
        "name": "Bell Metal Ware of Datia & Tikamgarh",
        "category": "Handicraft",
        "desc": "Cast brass sculptures depicting royal procession chariots and folk deities."
      }
    ],
    "folkDance": {
      "name": "Matki & Karma Dance",
      "desc": "Joyous Malwa women's dance balancing earthen pots, and sacred Baiga tribe Karma harvest dances."
    },
    "crafts": [
      "Gond Dot & Line Painting",
      "Pithora Wall Murals",
      "Bherugarh Batik Print"
    ],
    "heritageSites": [
      "Khajuraho Group of Monuments (UNESCO)",
      "Buddhist Monuments at Sanchi (UNESCO)",
      "Rock Shelters of Bhimbetka (UNESCO)"
    ],
    "culturalSummary": "Home to prehistoric cave art, the grand stupas of Ashoka, the sensual stone carvings of Khajuraho, and premier tiger reserves.",
    "audioStartOffset": 0,
    "isAuthenticLive": true
  },
  {
    "id": "maharashtra",
    "name": "Maharashtra",
    "capital": "Mumbai",
    "zone": "West India",
    "audio": "audio/maharashtra_real.ogg",
    "instruments": "Dhol-Tasha, Tutari Horn & Halgi Percussion",
    "soundscapeDesc": "Roaring festival energy of Ganeshotsav Dhol-Tasha troupes with piercing Tutari brass fanfare.",
    "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Fortress of Maratha Glory, Cinema & Vibrancy",
    "giTags": [
      {
        "name": "Paithani Sarees and Fabrics",
        "category": "Textile",
        "desc": "Royal silk sarees featuring peacock pallus (Mor bangadi) and oblique square borders woven on handlooms."
      },
      {
        "name": "Warli Painting",
        "category": "Handicraft",
        "desc": "Ancient monochromatic tribal mural art using white rice-paste depicting the circle of life and mother goddess."
      },
      {
        "name": "Kolhapuri Chappals",
        "category": "Handicraft",
        "desc": "Vegetable-tanned leather footwear braided with raw-silk cords, celebrated for century-long durability."
      },
      {
        "name": "Nagpur Orange",
        "category": "Agricultural",
        "desc": "Sweet, juicy mandarin oranges that have made Nagpur the Orange Capital of India."
      }
    ],
    "folkDance": {
      "name": "Lavani & Koli Dance",
      "desc": "Sensuous, high-tempo rhythm of Lavani with nine-yard Nauvari sarees and energetic Koli fisherfolk movements."
    },
    "crafts": [
      "Sawantwadi Lacquer Toys",
      "Karvath Kati Tussar Sarees",
      "Bidri Craft of Aurangabad"
    ],
    "heritageSites": [
      "Ajanta & Ellora Caves (UNESCO)",
      "Chhatrapati Shivaji Maharaj Terminus (UNESCO)",
      "Hill Forts of Maharashtra"
    ],
    "culturalSummary": "A titan of Indian history forged by Chhatrapati Shivaji Maharaj, spiritual saints like Tukaram, and modern financial-cultural capital Mumbai.",
    "audioStartOffset": 0,
    "isAuthenticLive": true
  },
  {
    "id": "manipur",
    "name": "Manipur",
    "capital": "Imphal",
    "zone": "North-East India",
    "audio": "audio/manipur_real.mp3",
    "instruments": "Pung Classical Drum, Pena Spike Fiddle & Cymbals",
    "soundscapeDesc": "Ethereal Vaishnavite devotional melody with acrobatic Pung Cholom barrel drum beats.",
    "image": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Jeweled Land of Raas Leela & Floating National Parks",
    "giTags": [
      {
        "name": "Chak-Hao (Black Rice)",
        "category": "Agricultural",
        "desc": "Nutritious aromatic black glutinous rice that turns rich purple when cooked into festive Kheer."
      },
      {
        "name": "Shaphee Lanphee",
        "category": "Textile",
        "desc": "Traditional embroidered black shawl presented by royalty as a mark of military honor and valor."
      },
      {
        "name": "Kachai Lemon",
        "category": "Agricultural",
        "desc": "Endemic citrus with exceptionally high ascorbic acid content grown in Ukhrul district."
      },
      {
        "name": "Wangkhei Phee",
        "category": "Textile",
        "desc": "Transparent gossamer cotton fabric woven on loin looms for Manipuri queens."
      }
    ],
    "folkDance": {
      "name": "Manipuri Raas Leela",
      "desc": "One of India's eight classical dances, characterized by gentle, flowing movements and shimmering cylindrical Kumil skirts."
    },
    "crafts": [
      "Longpi Black Stone Pottery",
      "Kauna Reed Baskets",
      "Thang-Ta Martial Arts"
    ],
    "heritageSites": [
      "Kangla Palace",
      "Loktak Lake & Keibul Lamjao (World's Only Floating Park)",
      "Govindaji Temple"
    ],
    "culturalSummary": "Birthplace of modern polo (Sagol Kangjei), renowned for classical Raas Leela dance, black stone pottery, and unique floating phumdis.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "meghalaya",
    "name": "Meghalaya",
    "capital": "Shillong",
    "zone": "North-East India",
    "audio": "audio/assam_real.mp3",
    "instruments": "Dama Drums, Ka Tangmuri Flute & Sharati",
    "soundscapeDesc": "Misty cloud-kissed melodies blending Khasi bamboo flutes with the 100-drum roar of the Wangala festival.",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Abode of Clouds & Living Root Bridges",
    "giTags": [
      {
        "name": "Memang Narang (Garo Mandarin)",
        "category": "Agricultural",
        "desc": "Endemic wild citrus believed to be the progenitor of citrus fruits across Asia."
      },
      {
        "name": "Khasi Mandarin",
        "category": "Agricultural",
        "desc": "Sweet, aromatic orange cultivated on southern slopes overlooking Bangladesh."
      },
      {
        "name": "Ryndia (Eri Silk) Handloom",
        "category": "Textile",
        "desc": "Non-violent ahimsa silk handspun and colored entirely using organic roots, leaves, and bark."
      }
    ],
    "folkDance": {
      "name": "Nongkrem Dance & Wangala",
      "desc": "Thanksgiving dance of Khasi royalty and 100-drum harvest dance of the Garos."
    },
    "crafts": [
      "Living Root Bridges (Bio-engineering)",
      "Cane & Bamboo Mats (Tlieng)",
      "Black Clay Pottery of Larnai"
    ],
    "heritageSites": [
      "Cherrapunji & Mawsynram (Wettest Places on Earth)",
      "Nohkalikai Falls",
      "Mawlynnong Cleanest Village"
    ],
    "culturalSummary": "A matrilineal society blessed with emerald waterfalls, sacred groves protected by village taboos, and breathtaking living bio-architecture.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "mizoram",
    "name": "Mizoram",
    "capital": "Aizawl",
    "zone": "North-East India",
    "audio": "audio/manipur_real.mp3",
    "instruments": "Khuang Drum, Bamboo Gongs & Rawchhem Wind Instrument",
    "soundscapeDesc": "Mesmerizing synchronized rhythm of bamboo staves clapping together in the iconic Cheraw dance.",
    "image": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Land of Rolling Hills & Bamboo Harmony",
    "giTags": [
      {
        "name": "Tawlhlohpuan",
        "category": "Textile",
        "desc": "Traditional handwoven warrior's fabric woven only by skilled artisans as a sign of courage."
      },
      {
        "name": "Mizo Puanchei",
        "category": "Textile",
        "desc": "The most celebrated ceremonial bridal wrap featuring intricate colorful geometric borders."
      },
      {
        "name": "Mizo Chilli (Bird's Eye)",
        "category": "Agricultural",
        "desc": "Tiny fiery hot organic pepper grown sustainably in jhum farming fields."
      }
    ],
    "folkDance": {
      "name": "Cheraw (Bamboo Dance)",
      "desc": "Skillful dancers step in and out between pairs of horizontal bamboo staves clapped together in tempo."
    },
    "crafts": [
      "Mizo Hat (Khumbeu)",
      "Bamboo Craft & Baskets",
      "Loin-loom Weaving"
    ],
    "heritageSites": [
      "Reiek Tlang Peak",
      "Vantawng Falls",
      "Phawngpui Blue Mountain Peak"
    ],
    "culturalSummary": "A peaceful highland state guided by Tlawmngaihna (selfless duty to the community), choral music traditions, and pristine green landscapes.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "nagaland",
    "name": "Nagaland",
    "capital": "Kohima",
    "zone": "North-East India",
    "audio": "audio/manipur_real.mp3",
    "instruments": "Log Drums, Jemji Horns & Tati Single-String Instrument",
    "soundscapeDesc": "Heroic warrior chants and resonant log drum thunder echoing from ancient hilltop village morungs.",
    "image": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Land of Festivals & Legendary Warrior Chants",
    "giTags": [
      {
        "name": "Naga Mircha (Bhut Jolokia)",
        "category": "Agricultural",
        "desc": "One of the world's hottest natural chillies, measuring over 1,000,000 Scoville Heat Units."
      },
      {
        "name": "Naga Tree Tomato",
        "category": "Agricultural",
        "desc": "Succulent egg-shaped fruit rich in antioxidants, utilized in savory chutneys and curries."
      },
      {
        "name": "Chakhesang Shawl",
        "category": "Textile",
        "desc": "Distinctive handwoven traditional shawl denoting warrior clan status and social achievement."
      }
    ],
    "folkDance": {
      "name": "Hornbill Warrior Dance",
      "desc": "High-stepping martial dance with spears and painted shields celebrated during the Hornbill Festival."
    },
    "crafts": [
      "Naga Wood Carvings & Morung Pillars",
      "Beaded Jewelry & Horn Ornaments",
      "Black Terracotta Pots"
    ],
    "heritageSites": [
      "Kisama Heritage Village",
      "Kohima WWII War Cemetery",
      "Dzukou Valley of Flowers"
    ],
    "culturalSummary": "The homeland of 16 distinct Naga tribes, celebrated for vibrant warrior textiles, indigenous woodcraft, and the pan-tribal Hornbill Festival.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "odisha",
    "name": "Odisha",
    "capital": "Bhubaneswar",
    "zone": "East India",
    "audio": "audio/odisha_real.mp3",
    "instruments": "Mardala Classical Drum, Flute, Cymbals & Mahuri",
    "soundscapeDesc": "Divine temple rhythm of Lord Jagannath's Puri Rath Yatra and sculpturesque Odissi dance gamakas.",
    "image": "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Soul of India — Sun Temples, Odissi & Silver Filigree",
    "giTags": [
      {
        "name": "Odisha Rasagola",
        "category": "Foodstuff",
        "desc": "Soft, cream-colored melt-in-mouth cottage cheese sweet offered at Jagannath Temple for centuries."
      },
      {
        "name": "Kotpad Handloom Fabric",
        "category": "Textile",
        "desc": "Tribal organic cotton dyed with the deep reddish-brown bark of the local Aal (madder) tree."
      },
      {
        "name": "Pattachitra of Raghurajpur",
        "category": "Handicraft",
        "desc": "Intricate cloth-based scroll paintings prepared with tamarind-glue canvas and mineral colors."
      },
      {
        "name": "Sambalpuri Bandha Saree",
        "category": "Textile",
        "desc": "Tie-dye ikat technique creating poetic motifs like conch shells, wheels, and floral spirals."
      }
    ],
    "folkDance": {
      "name": "Odissi Classical Dance & Gotipua",
      "desc": "Sculptural temple dance embodying Tribhangi (three-bend posture) and lyrical Jagannath Ashtapadis."
    },
    "crafts": [
      "Cuttack Tarakasi (Silver Filigree)",
      "Pipili Applique Craft",
      "Stone Carvings of Konark"
    ],
    "heritageSites": [
      "Konark Sun Temple (UNESCO)",
      "Jagannath Temple Puri",
      "Chilika Lake (Largest Coastal Lagoon)"
    ],
    "culturalSummary": "The historic Kalinga empire where Emperor Ashoka renounced war for peace, blessed with ancient temple spires and beach shrines.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "puducherry",
    "name": "Puducherry",
    "capital": "Puducherry",
    "zone": "Union Territory",
    "audio": "audio/tamil_nadu_real.ogg",
    "instruments": "Carnatic Nadaswaram, French Accordion & Ocean Flute",
    "soundscapeDesc": "Serene harmony of French colonial boulevard accordions and Tamil temple seaside bells.",
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The French Riviera of the East & City of Dawn",
    "giTags": [
      {
        "name": "Villianur Terracotta",
        "category": "Handicraft",
        "desc": "Hand-sculpted fine terracotta statues made from specialized green clay found near the Sankaraparani river."
      },
      {
        "name": "Tirukanur Papier Mache Craft",
        "category": "Handicraft",
        "desc": "Graceful hand-painted decorative icons and dolls crafted with eco-friendly recycled pulp."
      }
    ],
    "folkDance": {
      "name": "Garadi Dance",
      "desc": "Mythological celebratory dance commemorating the victory of Lord Rama with 10 iron rings attached to dancers' legs."
    },
    "crafts": [
      "Auroville Hand-Poured Candles",
      "Handmade Paper of Sri Aurobindo Ashram",
      "Leather Craft"
    ],
    "heritageSites": [
      "Auroville Matrimandir",
      "Promenade Beach & French Quarter (White Town)",
      "Sri Aurobindo Ashram"
    ],
    "culturalSummary": "A charming seaside enclave where French colonial architecture, Tamil spiritual culture, and Sri Aurobindo's integral yoga unite.",
    "audioStartOffset": 2,
    "isAuthenticLive": true
  },
  {
    "id": "punjab",
    "name": "Punjab",
    "capital": "Chandigarh",
    "zone": "North India",
    "audio": "audio/punjab_real.wav",
    "instruments": "Punjabi Dhol, Tumbi, Algoza & Chimta",
    "soundscapeDesc": "Electrifying high-energy Bhangra dhol thumps and upbeat high-pitch single-string Tumbi riffs.",
    "image": "https://images.unsplash.com/photo-1588096344356-9b570cb1e6b7?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Land of Five Rivers, Golden Gurudwaras & Valor",
    "giTags": [
      {
        "name": "Phulkari Embroidery",
        "category": "Handicraft",
        "desc": "Folk floral embroidery executed with untreated silk floss (Pat) across rough cotton khaddar."
      }
    ],
    "folkDance": {
      "name": "Bhangra & Giddha",
      "desc": "World-famous harvest dance celebrating Baisakhi with explosive jumps, dhol rhythms, and joyful Boliyan lyrics."
    },
    "crafts": [
      "Jutti Footwear of Muktsar",
      "Thathera Brass & Copper Utensils of Jandiala Guru (UNESCO)",
      "Inlay Woodcraft"
    ],
    "heritageSites": [
      "Sri Harmandir Sahib (The Golden Temple Amritsar)",
      "Jallianwala Bagh Memorial",
      "Wagah Border"
    ],
    "culturalSummary": "The homeland of the Sikh Gurus, famous for universal hospitality (Langar), agricultural bounty, and infectious celebrations.",
    "audioStartOffset": 0.5,
    "isAuthenticLive": true
  },
  {
    "id": "rajasthan",
    "name": "Rajasthan",
    "capital": "Jaipur",
    "zone": "North India",
    "audio": "audio/rajasthan_real.ogg",
    "instruments": "Sarangi, Kamaicha, Morchang, Khartal & Dholak",
    "soundscapeDesc": "Haunting desert melody in Raag Maand with resonant Sarangi bowing and shimmering Khartal clatter.",
    "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Regal Land of Maharajas, Fortresses & Thar Dunes",
    "giTags": [
      {
        "name": "Blue Pottery of Jaipur",
        "category": "Handicraft",
        "desc": "Turquoise ceramic pottery made without clay using ground quartz stone, Fuller's earth, and natural gum."
      },
      {
        "name": "Kathputlis of Rajasthan",
        "category": "Handicraft",
        "desc": "Intricately dressed string-puppets carved from mango wood by the wandering Bhat community."
      },
      {
        "name": "Bikaneri Bhujia",
        "category": "Foodstuff",
        "desc": "Iconic crispy savoury snack fried from moth-bean flour in the arid sands of Bikaner."
      },
      {
        "name": "Sanganeri Hand Block Printing",
        "category": "Handicraft",
        "desc": "Fine floral block printing on pure white fabrics with natural indigo and madder dyes."
      }
    ],
    "folkDance": {
      "name": "Ghoomar & Kalbelia",
      "desc": "Regal twirling of royal women in pleated skirts, and serpentine acrobatic Kalbelia snake-charmer dance (UNESCO)."
    },
    "crafts": [
      "Meenakari Gold Enamel",
      "Thewa Gold-on-Glass of Pratapgarh",
      "Bandhani Tie & Dye"
    ],
    "heritageSites": [
      "Hill Forts of Rajasthan (UNESCO)",
      "Jaipur Pink City (UNESCO)",
      "Jantar Mantar Astronomical Observatory (UNESCO)"
    ],
    "culturalSummary": "An empire of sandstone castles, chivalric Rajput legends, desert camel caravans, and peerless artistic royalty.",
    "audioStartOffset": 0,
    "isAuthenticLive": true
  },
  {
    "id": "sikkim",
    "name": "Sikkim",
    "capital": "Gangtok",
    "zone": "North-East India",
    "audio": "audio/ladakh_tibetan_real.ogg",
    "instruments": "Gyaling Tibetan Horns, Damphu Drum & Cymbals",
    "soundscapeDesc": "Mystical Himalayan mountain prayer sounds beneath the towering snowy face of Mount Kanchenjunga.",
    "image": "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Valley of Rice & Guardian of Mount Kanchenjunga",
    "giTags": [
      {
        "name": "Sikkim Large Cardamom",
        "category": "Agricultural",
        "desc": "Dark purple-brown smoky cardamom pods dried over traditional wood-fire Bhatti kilns."
      },
      {
        "name": "Dalle Khursani",
        "category": "Agricultural",
        "desc": "Bright red cherry-pepper known as one of the world's hottest and most fragrant natural chillies."
      }
    ],
    "folkDance": {
      "name": "Singhi Chaam (Snow Lion Dance)",
      "desc": "Venerated cultural dance paying homage to the mythical Snow Lion, guardian of Kanchenjunga peak."
    },
    "crafts": [
      "Choktse Hand-Carved Tables",
      "Tibetan Wool Carpets",
      "Lepcha Weaving"
    ],
    "heritageSites": [
      "Rumtek Monastery",
      "Khangchendzonga National Park (UNESCO Mixed Site)",
      "Gurudongmar Sacred Lake"
    ],
    "culturalSummary": "India's first 100% organic state, a Himalayan ecological paradise dotted with Buddhist gompas and orchid gardens.",
    "audioStartOffset": 2,
    "isAuthenticLive": true
  },
  {
    "id": "tamil-nadu",
    "name": "Tamil Nadu",
    "capital": "Chennai",
    "zone": "South India",
    "audio": "audio/tamil_nadu_real.ogg",
    "instruments": "Nadaswaram, Thavil Drums & Carnatic Flute",
    "soundscapeDesc": "Grand temple crescendo of the auspicious Nadaswaram reed and thunderous double-headed Thavil drum.",
    "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Land of Living Chola Temples & Ancient Sangam Literature",
    "giTags": [
      {
        "name": "Kanjeevaram Silk",
        "category": "Textile",
        "desc": "Heavy pure mulberry silk sarees woven with three-ply silk yarn and authentic gold zari featuring temple borders (Korvai)."
      },
      {
        "name": "Thanjavur Paintings",
        "category": "Handicraft",
        "desc": "Devotional art created on wooden planks layered with gold foil, glass stones, and rich pigments."
      },
      {
        "name": "Thanjavur Art Plate",
        "category": "Handicraft",
        "desc": "Circular brass-copper plates embossed with silver reliefs of deities and floral patterns."
      },
      {
        "name": "Madurai Malli (Jasmine)",
        "category": "Agricultural",
        "desc": "Intensely fragrant thick-petaled jasmine buds exported for luxury perfumeries and temple garlands."
      },
      {
        "name": "Chettinad Kottan Baskets",
        "category": "Handicraft",
        "desc": "Intricately plaited palm-leaf baskets created for aristocratic Chettiar dowry presentations."
      }
    ],
    "folkDance": {
      "name": "Bharatanatyam & Karakattam",
      "desc": "World-renowned classical dance born in Tamil temple sanctums expressing Bhava, Raga, and Tala; and Karakam brass pot balance dance."
    },
    "crafts": [
      "Swamimalai Bronze Icons (Lost-Wax)",
      "Pattamadai Mats",
      "Nachiyarkoil Brass Lamps"
    ],
    "heritageSites": [
      "Great Living Chola Temples (Brihadisvara) (UNESCO)",
      "Group of Monuments at Mahabalipuram (UNESCO)",
      "Meenakshi Amman Temple Madurai"
    ],
    "culturalSummary": "Home of classical Tamil language dating back thousands of years, monumental Dravidian temple towers (Gopurams), and Carnatic music season.",
    "audioStartOffset": 2,
    "isAuthenticLive": true
  },
  {
    "id": "telangana",
    "name": "Telangana",
    "capital": "Hyderabad",
    "zone": "South India",
    "audio": "audio/carnatic_concert_real.ogg",
    "instruments": "Oggu Dolu Drums, Shehnai & Dappu Percussion",
    "soundscapeDesc": "Dynamic celebratory folk beats of Bathukamma floral festival with royal Qutb Shahi echoes.",
    "image": "https://images.unsplash.com/photo-1600100397608-f010f443b791?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The City of Pearls, Kakatiya Marvels & Deccan Heritage",
    "giTags": [
      {
        "name": "Pochampally Ikat (Pagdu Bandhu)",
        "category": "Textile",
        "desc": "Geometric tie-dyed patterns dyed into warp and weft yarns before weaving in Bhoodan Pochampally."
      },
      {
        "name": "Nirmal Toys and Craft",
        "category": "Handicraft",
        "desc": "Lacquered wooden toys and furniture painted with natural gold herbal paints by Naqqash artisans."
      },
      {
        "name": "Gadwal Sarees",
        "category": "Textile",
        "desc": "Handcrafted sarees featuring cotton bodies attached to silk borders and pallu via interlocking Kupadam weave."
      },
      {
        "name": "Hyderabadi Haleem",
        "category": "Foodstuff",
        "desc": "Slow-cooked stew of meat, pounded wheat, and spices simmered for twelve hours in clay bhattis during Ramadan."
      }
    ],
    "folkDance": {
      "name": "Perini Shivatandavam",
      "desc": "Ancient warrior dance revived from the 13th-century Kakatiya temple sculptures of Ramappa."
    },
    "crafts": [
      "Cheriyal Scroll Painting",
      "Pembarthi Metal Craft",
      "Silver Filigree of Karimnagar"
    ],
    "heritageSites": [
      "Kakatiya Rudreshwara (Ramappa) Temple (UNESCO)",
      "Charminar Hyderabad",
      "Golconda Fortress"
    ],
    "culturalSummary": "A confluence of Telugu literature, Kakatiya stone sculpting, and Deccani Nawabi culinary culture centered around historic Hyderabad.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "tripura",
    "name": "Tripura",
    "capital": "Agartala",
    "zone": "North-East India",
    "audio": "audio/assam_real.mp3",
    "instruments": "Kham Drum, Sarinda Fiddle & Sumui Flute",
    "soundscapeDesc": "Gentle pastoral bamboo melodies echoing across lush green hillocks and palace lakes.",
    "image": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Land of Royal Water Palaces, Bamboo Craft & Rock Reliefs",
    "giTags": [
      {
        "name": "Tripura Queen Pineapple",
        "category": "Agricultural",
        "desc": "Golden-yellow tropical pineapple with intense sweetness and crisp aromatic flesh."
      },
      {
        "name": "Tripura Risa Textile",
        "category": "Textile",
        "desc": "Customary handwoven chest wrap used by 19 indigenous tribes as a symbol of female honor."
      }
    ],
    "folkDance": {
      "name": "Hojagiri Dance",
      "desc": "Breath-taking balance dance by Reang women standing on earthen pitchers while balancing bottles and lamps."
    },
    "crafts": [
      "Bamboo & Cane Screens",
      "Wood Carvings",
      "Clay Idols"
    ],
    "heritageSites": [
      "Ujjayanta Palace",
      "Neermahal Water Palace (Lake Rudrasagar)",
      "Unakoti Rock-Cut Bas-Reliefs (Angkor Wat of the East)"
    ],
    "culturalSummary": "A peaceful state celebrated for its Manikya royal dynasty, lakeside water palaces, and giant stone-carved Shiva reliefs at Unakoti.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "uttar-pradesh",
    "name": "Uttar Pradesh",
    "capital": "Lucknow",
    "zone": "North India",
    "audio": "audio/uttar_pradesh_real.wav",
    "instruments": "Banaras Shehnai, Sitar, Tabla & Harmonium",
    "soundscapeDesc": "Soulful morning raga (Bhairavi) echoing off the sacred Varanasi ghats on sitar and shehnai.",
    "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
    "tagline": "The Epicenter of Vedic Wisdom, Mughal Wonders & Awadhi Etiquette",
    "giTags": [
      {
        "name": "Banaras Brocades and Sarees",
        "category": "Textile",
        "desc": "Fine silk woven with genuine silver and gold zari threads, floral motifs (butidar), and Mughal jali patterns."
      },
      {
        "name": "Lucknow Chikan Craft",
        "category": "Handicraft",
        "desc": "Shadow-work delicate white cotton embroidery featuring 32 traditional stitches like Tepchi, Bakhiya, and Murri."
      },
      {
        "name": "Bhadohi Handmade Carpets",
        "category": "Handicraft",
        "desc": "Hand-knotted woolen and silk carpets dating back to Persian masters invited by Emperor Akbar."
      },
      {
        "name": "Moradabad Metal Craft",
        "category": "Handicraft",
        "desc": "Brass and copper engraved artifacts earning Moradabad the global moniker Brass City."
      },
      {
        "name": "Kannauj Attar (Perfume)",
        "category": "Manufactured",
        "desc": "Ancient hydro-distilled floral essential oils captured into sandalwood oil using clay deg-bhapka stills."
      }
    ],
    "folkDance": {
      "name": "Kathak Classical Dance & Raslila",
      "desc": "The Lucknow and Banaras gharanas of Kathak storytelling, and Braj Raslila enacting the pastimes of Lord Krishna."
    },
    "crafts": [
      "Saharanpur Wood Carvings",
      "Khurja Ceramic Pottery",
      "Firozabad Glassware"
    ],
    "heritageSites": [
      "Taj Mahal (UNESCO World Heritage & 7 Wonder)",
      "Agra Fort (UNESCO)",
      "Fatehpur Sikri (UNESCO)",
      "Varanasi Ancient Ghats"
    ],
    "culturalSummary": "The heartland of Indian civilization where Rama and Krishna walked, home to the sacred Ganga, the timeless city of Kashi, and the Taj Mahal.",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  },
  {
    "id": "uttarakhand",
    "name": "Uttarakhand",
    "capital": "Dehradun",
    "zone": "North India",
    "audio": "audio/uttarakhand_real.ogg",
    "instruments": "Ransingha Curved Brass Horn, Dhol-Damau & Hurka",
    "soundscapeDesc": "Majestic mountain call of the Ransingha trumpet echoing across Kedarnath and Badrinath peaks.",
    "image": "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Devbhoomi — The Abode of Gods, Glaciers & Char Dham",
    "giTags": [
      {
        "name": "Uttarakhand Tejpat (Bay Leaf)",
        "category": "Agricultural",
        "desc": "Highly aromatic indigenous cinnamon-leaf spice harvested from wild mountain trees."
      },
      {
        "name": "Aipan Art of Kumaon",
        "category": "Handicraft",
        "desc": "Ritual geometric folk art painted on red-ochre (Geru) floors with white rice flour paste (Biswar)."
      },
      {
        "name": "Munsiyari White Kidney Beans (Rajma)",
        "category": "Agricultural",
        "desc": "Creamy, sweet mountain beans cultivated naturally in the glacier-fed Johar Valley."
      },
      {
        "name": "Ringal Bamboo Craft",
        "category": "Handicraft",
        "desc": "Flexible dwarf-bamboo woven into sturdy baskets, mats, and religious artifacts by mountain artisans."
      }
    ],
    "folkDance": {
      "name": "Chholiya & Jhora Dance",
      "desc": "Ancient Rajput martial sword dance accompanied by booming dhol-damau, and community circle Jhora songs."
    },
    "crafts": [
      "Kumaoni Wood Carving",
      "Pashmina Wool Weaving",
      "Tamta Brass Craft of Almora"
    ],
    "heritageSites": [
      "Nanda Devi & Valley of Flowers National Parks (UNESCO)",
      "Kedarnath & Badrinath Char Dham",
      "Rishikesh Yoga Capital"
    ],
    "culturalSummary": "Source of the sacred Ganga and Yamuna rivers, crowned by Himalayan peaks, spiritual hermits, and centuries of mountain folklore.",
    "audioStartOffset": 0.5,
    "isAuthenticLive": true
  },
  {
    "id": "west-bengal",
    "name": "West Bengal",
    "capital": "Kolkata",
    "zone": "East India",
    "audio": "audio/west_bengal_real.mp3",
    "instruments": "Ektara, Dotara, Bengali Bansuri & Dhaak",
    "soundscapeDesc": "Heart-stirring Baul mystic ektara strums and joyous autumn Durga Puja Dhaak percussion roll.",
    "image": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1000&q=80",
    "tagline": "Where Culture Meets Renaissance — Tagore, Durga Puja & Tea",
    "giTags": [
      {
        "name": "Darjeeling Tea",
        "category": "Agricultural",
        "desc": "The Champagne of Teas grown on mist-laden Himalayan slopes, recognized as India's very first GI Tag in 2004."
      },
      {
        "name": "Nakshi Kantha",
        "category": "Handicraft",
        "desc": "Intricately quilted folk embroidery transforming layered recycled sarees into tapestries of daily life."
      },
      {
        "name": "Santiniketan Leather Goods",
        "category": "Handicraft",
        "desc": "Embossed vegetable-tanned leather handcrafted with batik floral motifs nurtured at Visva-Bharati."
      },
      {
        "name": "Banglar Rasogolla",
        "category": "Foodstuff",
        "desc": "Spongy, syrupy cottage-cheese spheres popularized by Nobin Chandra Das in 1868."
      },
      {
        "name": "Baluchari Saree",
        "category": "Textile",
        "desc": "Pure silk sarees featuring narrative scenes from the Ramayana and Mahabharata woven across the pallu."
      }
    ],
    "folkDance": {
      "name": "Purulia Chhau & Baul Songs",
      "desc": "Energetic martial acrobatic Chhau dance with flamboyant clay masks, and wandering Baul mystical philosophy (UNESCO)."
    },
    "crafts": [
      "Bankura Terracotta Horses",
      "Sholapith Pith Craft",
      "Dokra Metal Figurines"
    ],
    "heritageSites": [
      "Sundarbans Mangrove Delta (UNESCO)",
      "Santiniketan — Rabindranath Tagore's Abode of Peace (UNESCO)",
      "Victoria Memorial Kolkata"
    ],
    "culturalSummary": "The intellectual capital of the Bengal Renaissance, Nobel laureate Rabindranath Tagore, the world's largest mangrove forest, and Durga Puja (UNESCO Intangible Cultural Heritage).",
    "audioStartOffset": 1,
    "isAuthenticLive": true
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = stateData;
}
