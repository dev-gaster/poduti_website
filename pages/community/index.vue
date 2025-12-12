<template>
  <div class="community-page">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <v-img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031" cover height="400">
        <div class="hero-overlay">
          <v-container>
            <h1 class="hero-title">Our Community — Podut</h1>
            <p class="hero-subtitle">
              United by heritage, strengthened by tradition, building our future together
            </p>
          </v-container>
        </div>
      </v-img>
    </section>

    <!-- History Section -->
    <section class="history-section py-16">
      <v-container>
        <h2 class="section-title text-center mb-12">The History of Podut</h2>

        <v-timeline side="end" align="start">
          <v-timeline-item v-for="(event, index) in historyTimeline" :key="index" :dot-color="event.color" size="small">
            <template v-slot:opposite>
              <div class="timeline-date">{{ event.year }}</div>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="timeline-title">{{ event.title }}</v-card-title>
              <v-card-text class="timeline-text">{{ event.description }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>

        <v-card class="mt-12 pa-8" color="green-lighten-5">
          <h3 class="subsection-title mb-4">Our Story</h3>
          <p class="section-text mb-3">
            Podut has been home to generations of families who have cultivated the land,
            raised their children, and maintained strong cultural traditions. The name
            "Podut" itself carries deep meaning in our local dialect, representing unity
            and strength.
          </p>
          <p class="section-text mb-3">
            Our community was formally established when early settlers recognized the
            fertile land and strategic location within Poyameri Parish. Over the decades,
            Podut has grown from a small settlement into a thriving community with
            essential institutions including St. Luke Poduti Church and St. Luke Primary
            School.
          </p>
          <p class="section-text">
            Today, Podut stands as a testament to the resilience and unity of its people,
            balancing respect for tradition with progress and development for future
            generations.
          </p>
        </v-card>
      </v-container>
    </section>

    <!-- Culture & Traditions Section -->
    <section class="culture-section py-16 bg-amber-lighten-5">
      <v-container>
        <h2 class="section-title text-center mb-4">Culture & Traditions</h2>
        <p class="text-center text-grey-darken-1 mb-12">
          Celebrating the rich cultural heritage that defines who we are
        </p>

        <!-- Photo Grid -->
        <v-row class="mb-12">
          <v-col v-for="(item, index) in cultureItems" :key="index" cols="12" md="4">
            <v-card class="culture-card h-100" elevation="3">
              <v-img :src="item.image" height="250" cover></v-img>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-text>
                <p class="culture-text">{{ item.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Cultural Elements -->
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-6" elevation="2">
              <h3 class="subsection-title mb-4">
                <v-icon color="orange-darken-2" class="mr-2">mdi-music-note</v-icon>
                Music & Dance
              </h3>
              <p class="section-text">
                Traditional Podut music is characterized by rhythmic drumming and melodic
                singing that tells stories of our ancestors. Our dances, performed at
                celebrations and ceremonies, connect us to our heritage and bring joy to
                every gathering. The youth are learning these arts from our elders to keep
                them alive.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-6" elevation="2">
              <h3 class="subsection-title mb-4">
                <v-icon color="green-darken-2" class="mr-2">mdi-food</v-icon>
                Traditional Food
              </h3>
              <p class="section-text">
                Our cuisine reflects the bounty of our land. Staples include millet,
                cassava, sweet potatoes, and groundnuts, often served with locally grown
                vegetables. Special occasions feature traditional dishes prepared using
                recipes passed down through generations, bringing families together around
                shared meals.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-6" elevation="2">
              <h3 class="subsection-title mb-4">
                <v-icon color="purple-darken-2" class="mr-2">mdi-calendar-star</v-icon>
                Celebrations & Festivals
              </h3>
              <p class="section-text">
                The harvest festival is our most anticipated annual event, where the
                entire community gathers to give thanks for the year's blessings. We also
                celebrate traditional rites of passage, church holidays, and national days
                with enthusiasm, music, and feasting.
              </p>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-6" elevation="2">
              <h3 class="subsection-title mb-4">
                <v-icon color="blue-darken-2" class="mr-2">mdi-flower</v-icon>
                Crafts & Art
              </h3>
              <p class="section-text">
                Podut artisans create beautiful handcrafted items including woven baskets,
                pottery, and traditional clothing. These crafts serve both practical and
                ceremonial purposes, and learning these skills remains an important part
                of our children's education in cultural heritage.
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- People of Podut Section -->
    <section class="people-section py-16">
      <v-container>
        <h2 class="section-title text-center mb-12">The People of Podut</h2>

        <v-row>
          <!-- Elders -->
          <v-col cols="12" md="4">
            <v-card class="people-card h-100" elevation="3">
              <v-img src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2070" height="300" cover>
                <div class="card-overlay">
                  <v-icon size="64" color="white">mdi-account-supervisor</v-icon>
                </div>
              </v-img>
              <v-card-title class="card-title-primary">Our Elders</v-card-title>
              <v-card-text>
                <p class="section-text">
                  The elders of Podut are the custodians of our history and traditions.
                  Their wisdom guides community decisions, and their stories keep our
                  heritage alive. They play a vital role in conflict resolution and serve
                  as advisors on matters of culture and custom.
                </p>
                <v-list density="compact" class="mt-4">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="green-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Cultural preservation</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="green-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Community leadership</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="green-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Mentorship & guidance</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Youth -->
          <v-col cols="12" md="4">
            <v-card class="people-card h-100" elevation="3">
              <v-img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070" height="300" cover>
                <div class="card-overlay">
                  <v-icon size="64" color="white">mdi-account-star</v-icon>
                </div>
              </v-img>
              <v-card-title class="card-title-primary">Our Youth</v-card-title>
              <v-card-text>
                <p class="section-text">
                  The young people of Podut represent our future and hope. They are
                  embracing education, technology, and entrepreneurship while respecting
                  their roots. Many return after studies to contribute to community
                  development, bringing fresh ideas and energy.
                </p>
                <v-list density="compact" class="mt-4">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="orange-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Education & innovation</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="orange-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Youth fellowships</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="orange-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Sports & arts programs</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Families -->
          <v-col cols="12" md="4">
            <v-card class="people-card h-100" elevation="3">
              <v-img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070" height="300" cover>
                <div class="card-overlay">
                  <v-icon size="64" color="white">mdi-home-heart</v-icon>
                </div>
              </v-img>
              <v-card-title class="card-title-primary">Our Families</v-card-title>
              <v-card-text>
                <p class="section-text">
                  Families are the foundation of Podut. Strong family bonds and extended
                  kinship networks provide support, security, and continuity. Parents work
                  hard to provide education and opportunities for their children while
                  maintaining our values of respect and community.
                </p>
                <v-list density="compact" class="mt-4">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="blue-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Strong family values</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="blue-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Extended kinship support</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-icon color="blue-darken-2">mdi-check-circle</v-icon>
                    </template>
                    <v-list-item-title>Child education priority</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Development & Opportunities Section -->
    <section class="development-section py-16 bg-green-lighten-5">
      <v-container>
        <h2 class="section-title text-center mb-4">Development & Opportunities</h2>
        <p class="text-center text-grey-darken-1 mb-12">
          Building a sustainable and prosperous future for all
        </p>

        <v-row>
          <v-col v-for="(opportunity, index) in opportunities" :key="index" cols="12" md="6">
            <v-card class="opportunity-card pa-6" elevation="2">
              <div class="d-flex align-start mb-4">
                <v-avatar :color="opportunity.color" size="56" class="mr-4">
                  <v-icon color="white" size="32">{{ opportunity.icon }}</v-icon>
                </v-avatar>
                <div>
                  <h3 class="subsection-title mb-2">{{ opportunity.title }}</h3>
                </div>
              </div>
              <p class="section-text mb-4">{{ opportunity.description }}</p>
              <v-chip-group>
                <v-chip v-for="(tag, i) in opportunity.tags" :key="i" size="small" variant="outlined">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Location Map Section -->
    <section id="market" class="location-section py-16">
      <v-container>
        <h2 class="section-title text-center mb-4">Find Us</h2>
        <p class="text-center text-grey-darken-1 mb-8">
          Podut is located in Poyameri Parish, Magola Sub-county, Tororo District
        </p>

        <!-- Location Details Grid -->
        <v-row class="location-details-grid">
          <v-col cols="12" sm="6" md="4">
            <div class="location-card">
              <div class="location-icon-wrapper">
                <v-icon size="32" color="green-darken-2">mdi-map-marker</v-icon>
              </div>
              <h4 class="location-label">Village</h4>
              <p class="location-value">Podut</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="location-card">
              <div class="location-icon-wrapper">
                <v-icon size="32" color="green-darken-2">mdi-home-group</v-icon>
              </div>
              <h4 class="location-label">Parish</h4>
              <p class="location-value">Poyameri Parish</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="location-card">
              <div class="location-icon-wrapper">
                <v-icon size="32" color="green-darken-2">mdi-city</v-icon>
              </div>
              <h4 class="location-label">Sub-county</h4>
              <p class="location-value">Magola Sub-county</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="location-card">
              <div class="location-icon-wrapper">
                <v-icon size="32" color="green-darken-2">mdi-office-building</v-icon>
              </div>
              <h4 class="location-label">Constituency</h4>
              <p class="location-value">West Budama</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="location-card">
              <div class="location-icon-wrapper">
                <v-icon size="32" color="green-darken-2">mdi-map</v-icon>
              </div>
              <h4 class="location-label">District</h4>
              <p class="location-value">Tororo District</p>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="location-card">
              <div class="location-icon-wrapper">
                <v-icon size="32" color="green-darken-2">mdi-earth</v-icon>
              </div>
              <h4 class="location-label">Country</h4>
              <p class="location-value">Uganda</p>
            </div>
          </v-col>
        </v-row>

        <!-- Podut Market Card -->
        <v-row class="market-row">
          <v-col cols="12">
            <div class="market-card">
              <div class="market-header">
                <div class="market-icon">
                  <v-icon size="48" color="amber-darken-2">mdi-store</v-icon>
                </div>
                <div class="market-title-section">
                  <h3 class="market-title">Podut Market</h3>
                  <p class="market-subtitle">The economic heart of our community</p>
                </div>
              </div>
              <p class="market-description">
                Podut Market operates every market day, bringing together farmers,
                traders, and families to exchange goods and strengthen community bonds.
              </p>
              <div class="market-features">
                <div class="market-feature">
                  <div class="feature-icon">
                    <v-icon size="24" color="amber-darken-2">mdi-shopping</v-icon>
                  </div>
                  <span class="feature-text">Fresh produce & agricultural goods</span>
                </div>
                <div class="market-feature">
                  <div class="feature-icon">
                    <v-icon size="24" color="amber-darken-2">mdi-hanger</v-icon>
                  </div>
                  <span class="feature-text">Clothing & household items</span>
                </div>
                <div class="market-feature">
                  <div class="feature-icon">
                    <v-icon size="24" color="amber-darken-2">mdi-tools</v-icon>
                  </div>
                  <span class="feature-text">Tools & farming equipment</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <!-- Map Section -->
        <v-row class="map-row">
          <v-col cols="12">
            <div class="map-card">
              <div class="map-icon">
                <v-icon size="64" color="green-darken-2"> mdi-map-marker-radius </v-icon>
              </div>
              <h3 class="map-title">Interactive Map</h3>
              <p class="map-description">
                Google Maps integration can be added here showing the exact location of
                Podut within Tororo District, Uganda.
              </p>
              <v-btn size="large" color="green-darken-2" class="map-btn"
                href="https://www.google.com/maps/search/Tororo+District+Uganda" target="_blank" variant="flat">
                View on Google Maps
                <v-icon end>mdi-open-in-new</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useHead({
  title: "Community - Podut",
  meta: [
    {
      name: "description",
      content:
        "Discover the history, culture, and people of Podut community in Poyameri Parish, Magola, Tororo District, Uganda.",
    },
  ],
});

// History Timeline Data
const historyTimeline = [
  {
    year: "Early 1900s",
    title: "Foundation of Podut",
    description:
      "Early settlers established Podut as a farming community, drawn by the fertile land and favorable conditions for agriculture.",
    color: "green-darken-2",
  },
  {
    year: "1950s",
    title: "Church Establishment",
    description:
      "St. Luke Poduti Church of Uganda was founded, becoming the spiritual center of the community and bringing people together in faith.",
    color: "blue-darken-2",
  },
  {
    year: "1960s",
    title: "School Opening",
    description:
      "Poduti Primary School opened its doors, providing education to children from Podut and surrounding villages.",
    color: "orange-darken-2",
  },
  {
    year: "1980s",
    title: "Market Development",
    description:
      "Podut Market was formalized, creating a central hub for trade and commerce that serves the entire region.",
    color: "amber-darken-2",
  },
  {
    year: "2000s-Present",
    title: "Modern Growth",
    description:
      "Podut continues to grow with improved infrastructure, youth empowerment programs, and sustainable development initiatives.",
    color: "purple-darken-2",
  },
];

// Culture Items Data
const cultureItems = [
  {
    title: "Traditional Dance",
    description:
      "Our traditional dances are performed during celebrations, ceremonies, and festivals, telling stories of our ancestors through movement and rhythm.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070",
  },
  {
    title: "Community Gatherings",
    description:
      "Regular gatherings strengthen our bonds, whether for celebrations, ceremonies, or simply coming together to support one another.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032",
  },
  {
    title: "Traditional Crafts",
    description:
      "Skilled artisans create beautiful handcrafted items that reflect our cultural heritage and provide economic opportunities.",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070",
  },
];

// Opportunities Data
const opportunities = [
  {
    title: "Agriculture & Farming",
    description:
      "Agriculture remains the backbone of our economy. We are implementing modern farming techniques while preserving sustainable practices. Training programs help farmers increase yields and access better markets.",
    icon: "mdi-sprout",
    color: "green-darken-2",
    tags: ["Crop farming", "Animal husbandry", "Sustainable practices"],
  },
  {
    title: "Youth Empowerment",
    description:
      "Youth programs focus on skills training, entrepreneurship, and leadership development. We support young people in starting businesses and accessing education opportunities.",
    icon: "mdi-school-outline",
    color: "orange-darken-2",
    tags: ["Skills training", "Leadership", "Scholarships"],
  },
  {
    title: "Women's Cooperatives",
    description:
      "Women's groups provide micro-finance, training in income-generating activities, and support networks. These cooperatives empower women economically and socially.",
    icon: "mdi-account-group",
    color: "purple-darken-2",
    tags: ["Micro-finance", "Training", "Entrepreneurship"],
  },
  {
    title: "Community Projects",
    description:
      "Infrastructure development, water projects, and health initiatives improve quality of life. Community members work together on projects that benefit everyone.",
    icon: "mdi-hammer-screwdriver",
    color: "blue-darken-2",
    tags: ["Infrastructure", "Water", "Health"],
  },
];
</script>

<style scoped>
/* Hero Banner */
.hero-banner {
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(46, 125, 50, 0.8) 0%,
      rgba(27, 94, 32, 0.7) 100%);
  display: flex;
  align-items: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.3rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin-top: 1rem;
}

/* Sections */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2e7d32;
}

.subsection-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2e7d32;
}

.section-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #424242;
}

/* Timeline */
.timeline-date {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2e7d32;
}

.timeline-title {
  color: #2e7d32;
  font-weight: 600;
}

.timeline-text {
  font-size: 1rem;
  line-height: 1.7;
}

/* Culture Cards */
.culture-card {
  transition: transform 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.culture-card:hover {
  transform: translateY(-4px);
}

.culture-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #616161;
}

/* People Cards */
.people-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.people-card:hover {
  transform: translateY(-4px);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(46, 125, 50, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title-primary {
  color: #2e7d32;
  font-size: 1.4rem;
  font-weight: 600;
}

/* Opportunity Cards */
.opportunity-card {
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.opportunity-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12) !important;
}

/* Location Section */
.location-section {
  background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
}

.location-details-grid {
  margin-bottom: 3rem;
}

.location-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(46, 125, 50, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.location-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 32px rgba(46, 125, 50, 0.16);
}

.location-icon-wrapper {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: transform 0.3s ease;
}

.location-card:hover .location-icon-wrapper {
  transform: scale(1.1);
}

.location-label {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #757575;
  margin-bottom: 0.5rem;
}

.location-value {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2e7d32;
  margin: 0;
}

/* Market Card */
.market-row {
  margin-bottom: 3rem;
}

.market-card {
  background: linear-gradient(135deg, #ffffff 0%, #f1f8e9 100%);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 4px 24px rgba(46, 125, 50, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.market-card:hover {
  box-shadow: 0 8px 40px rgba(46, 125, 50, 0.18);
  transform: translateY(-4px);
}

.market-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.market-icon {
  width: 88px;
  height: 88px;
  border-radius: 22px;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.market-title-section {
  flex: 1;
}

.market-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 0.25rem;
}

.market-subtitle {
  font-size: 1rem;
  color: #757575;
  margin: 0;
}

.market-description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #424242;
  margin-bottom: 2rem;
}

.market-features {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.market-feature {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
}

.market-feature:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateX(4px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-text {
  font-size: 0.95rem;
  font-weight: 500;
  color: #424242;
}

/* Map Card */
.map-row {
  margin-top: 3rem;
}

.map-card {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 24px rgba(46, 125, 50, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.map-card:hover {
  box-shadow: 0 8px 40px rgba(46, 125, 50, 0.18);
}

.map-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.map-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 1rem;
}

.map-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #666;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.map-btn {
  font-weight: 600;
}

/* Map Placeholder */
.map-placeholder {
  height: 100%;
  min-height: 400px;
  border-radius: 12px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
}

/* Responsive */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .market-card {
    padding: 2rem;
  }

  .market-header {
    flex-direction: column;
    text-align: center;
  }

  .market-title {
    font-size: 1.75rem;
  }

  .market-features {
    grid-template-columns: 1fr;
  }

  .map-card {
    padding: 2rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .location-card {
    padding: 1.5rem;
  }

  .location-icon-wrapper {
    width: 64px;
    height: 64px;
  }

  .market-card {
    padding: 1.5rem;
  }

  .market-icon {
    width: 72px;
    height: 72px;
  }

  .market-title {
    font-size: 1.5rem;
  }

  .market-description {
    font-size: 1rem;
  }

  .map-icon {
    width: 96px;
    height: 96px;
  }

  .map-title {
    font-size: 1.5rem;
  }

  .map-card {
    padding: 1.5rem;
  }
}
</style>
