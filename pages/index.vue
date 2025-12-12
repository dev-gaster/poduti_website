<template>
  <div class="home-page">
    <!-- Hero Section -->
    <home-hero />

    <!-- About Summary Section -->
    <home-about-component />

    <!-- Quick Navigation Cards -->
    <section class="navigation-cards py-16 bg-green-lighten-5">
      <v-container>
        <h2 class="section-title text-center mb-12">Discover Podut</h2>
        <v-row>
          <v-col v-for="(card, index) in navCards" :key="index" cols="12" sm="6" md="3">
            <v-card class="nav-card h-100" :to="card.link" hover elevation="2">
              <v-card-text class="text-center pa-8">
                <v-icon :color="card.color" size="64" class="mb-4">
                  {{ card.icon }}
                </v-icon>
                <h3 class="card-title mb-3">{{ card.title }}</h3>
                <p class="card-description">{{ card.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Featured Stories Section -->
    <section class="featured-stories py-16">
      <v-container>
        <h2 class="section-title text-center mb-4">Community Stories</h2>
        <p class="text-center text-grey-darken-1 mb-12">
          Celebrating the achievements, history, and vibrant life of Podut
        </p>
        <v-row>
          <v-col v-for="(story, index) in stories" :key="index" cols="12" md="4">
            <v-card class="story-card h-100" elevation="2" hover>
              <v-img :src="story.image" height="250" cover>
                <div class="story-badge">
                  <v-chip :color="story.badgeColor" size="small">
                    {{ story.badge }}
                  </v-chip>
                </div>
              </v-img>
              <v-card-title>{{ story.title }}</v-card-title>
              <v-card-text>
                <p class="story-text">{{ story.description }}</p>
                <div class="story-meta mt-3">
                  <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
                  <span class="text-caption">{{ story.date }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Additional Stories Row -->
        <v-row class="mt-4">
          <v-col v-for="(story, index) in additionalStories" :key="'additional-' + index" cols="12" md="4">
            <v-card class="story-card h-100" elevation="2" hover>
              <v-img :src="story.image" height="250" cover>
                <div class="story-badge">
                  <v-chip :color="story.badgeColor" size="small">
                    {{ story.badge }}
                  </v-chip>
                </div>
              </v-img>
              <v-card-title>{{ story.title }}</v-card-title>
              <v-card-text>
                <p class="story-text">{{ story.description }}</p>
                <div class="story-meta mt-3">
                  <v-icon size="small" class="mr-1">mdi-calendar</v-icon>
                  <span class="text-caption">{{ story.date }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section py-16">
      <v-container>
        <v-card class="cta-card" color="green-darken-2" elevation="8">
          <v-card-text class="pa-12 text-center">
            <h2 class="cta-title mb-4">Join Us in Building Our Community</h2>
            <p class="cta-text mb-6">
              Learn more about our history, culture, and the people who make Podut a
              special place. Discover opportunities to support our church, school, and
              community development initiatives.
            </p>
            <div class="d-flex justify-center flex-wrap ga-4">
              <v-btn size="large" variant="outlined" color="white" to="/community">
                Learn More About Podut
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn size="large" color="amber-darken-1" to="/contact">
                Get In Touch
                <v-icon end>mdi-email</v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
import HomeAboutComponent from "~/components/HomeAboutComponent.vue";

// SEO Meta Tags
useHead({
  title: "Home - Podut Community",
  meta: [
    {
      name: "description",
      content:
        "Welcome to Podut Community in Poyameri Parish, Magola, Tororo District. Discover our vibrant community, St. Luke Poduti Church, Poduti Primary School, and Podut Market.",
    },
    {
      name: "keywords",
      content:
        "Podut, Poyameri Parish, Magola, Tororo District, Uganda, St. Luke Church, Community, Rural Uganda",
    },
  ],
});

// Navigation Cards Data
const navCards = [
  {
    title: "Community",
    description: "Discover our rich history, culture, and the people of Podut.",
    icon: "mdi-account-group",
    color: "green-darken-2",
    link: "/community",
  },
  {
    title: "Church",
    description: "St. Luke Poduti Church of Uganda - our spiritual home.",
    icon: "mdi-church",
    color: "blue-darken-2",
    link: "/church",
  },
  {
    title: "School",
    description: "Poduti Primary School - educating our children.",
    icon: "mdi-school",
    color: "orange-darken-2",
    link: "/school",
  },
  {
    title: "Market",
    description: "Podut Market - the heart of our local economy.",
    icon: "mdi-store",
    color: "amber-darken-2",
    link: "/community",
  },
];

// Featured Stories Data
const stories = [
  {
    title: "Youth Leading Change",
    description:
      "Meet the young innovators from Podut who are using technology and entrepreneurship to transform our community and create new opportunities.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032",
    badge: "Youth",
    badgeColor: "orange",
    date: "November 2025",
  },
  {
    title: "Harvest Festival Celebration",
    description:
      "Our annual harvest festival brought together families from across Podut to celebrate the season's blessings with traditional music, dance, and feasting.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070",
    badge: "Events",
    badgeColor: "green",
    date: "October 2025",
  },
  {
    title: "The Story of Podut",
    description:
      "A journey through time exploring the founding of our community, the arrival of the church, and the establishment of our beloved school.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2070",
    badge: "History",
    badgeColor: "brown",
    date: "Archive",
  },
];

// Additional Stories
const additionalStories = [
  {
    title: "Women's Cooperative Success",
    description:
      "The Podut Women's Cooperative has empowered over 50 women through agricultural training and micro-finance, improving livelihoods across our community.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
    badge: "Development",
    badgeColor: "purple",
    date: "September 2025",
  },
  {
    title: "School Excellence Award",
    description:
      "Poduti Primary School received district recognition for academic excellence and community service, making Podut proud of our children's achievements.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022",
    badge: "Achievement",
    badgeColor: "blue",
    date: "August 2025",
  },
  {
    title: "Traditional Music Revival",
    description:
      "Elders are teaching young people traditional Podut songs and dances, ensuring our cultural heritage is preserved for future generations.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070",
    badge: "Culture",
    badgeColor: "teal",
    date: "Ongoing",
  },
];
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
      rgba(46, 125, 50, 0.85) 0%,
      rgba(27, 94, 32, 0.75) 100%);
  display: flex;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.4rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Sections */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 1rem;
}

.section-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #424242;
}

/* Navigation Cards */
.nav-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border-radius: 12px;
}

.nav-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 1rem;
  color: #616161;
  line-height: 1.6;
}

/* Story Cards */
.story-card {
  transition: transform 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.story-card:hover {
  transform: translateY(-4px);
}

.story-badge {
  position: absolute;
  top: 16px;
  right: 16px;
}

.story-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #616161;
}

.story-meta {
  display: flex;
  align-items: center;
  color: #9e9e9e;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #f5f3f0 0%, #e8e5df 100%);
}

.cta-card {
  border-radius: 16px;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
}

.cta-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

/* Responsive Design */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }

  .cta-text {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}
</style>
