<template>
  <div>
    <!-- Hero Section -->
    <v-parallax src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073" class="hero-section"
      height="500">
      <div class="hero-overlay">
        <v-container>
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" md="8" class="text-center">
              <v-icon size="80" color="white" class="mb-4">mdi-church</v-icon>
              <h1 class="hero-title">St. Luke Poduti Church of Uganda</h1>
              <p class="hero-subtitle">
                A community of faith, worship, and fellowship in the heart of Podut
              </p>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-parallax>

    <!-- About the Church -->
    <section class="about-section">
      <v-container>
        <v-row class="section-spacing">
          <v-col cols="12" sm="6">
            <div class="image-container">
              <v-img src="/reading-bible.jpeg" height="500" cover class="about-image"></v-img>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="mission-box">
              <h3 class="mission-title">Our Mission</h3>
              <div class="mission-items">
                <div class="mission-item">
                  <v-icon color="blue-darken-2" size="20">mdi-cross</v-icon>
                  <span>Proclaim the Gospel of Jesus Christ</span>
                </div>
                <div class="mission-item">
                  <v-icon color="blue-darken-2" size="20">mdi-account-group</v-icon>
                  <span>Build a community of believers</span>
                </div>
                <div class="mission-item">
                  <v-icon color="blue-darken-2" size="20">mdi-hand-heart</v-icon>
                  <span>Serve with compassion</span>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-col cols="12" sm="6">
          <div class="content-wrapper">
            <span class="eyebrow">Our Foundation</span>
            <h2 class="section-title mb-6">About Our Church</h2>

            <p class="section-text mb-5">
              St. Luke Poduti Church of Uganda has been the spiritual heart of our
              community since its founding in the 1950s. As part of the Church of Uganda,
              we are rooted in Anglican tradition and committed to spreading the Gospel of
              Jesus Christ.
            </p>
            <p class="section-text mb-5">
              Our church plays a vital role in the life of Podut, providing not only
              spiritual guidance but also serving as a center for community gatherings,
              celebrations, and support.
            </p>
          </div>
        </v-col>
      </v-container>
    </section>

    <!-- Ministries Overview -->
    <section class="ministries-section">
      <v-container>
        <div class="section-header">
          <span class="eyebrow">Serving Together</span>
          <h2 class="section-title">Our Ministries</h2>
          <p class="section-subtitle">
            Serving God and community through diverse ministries for all ages
          </p>
        </div>

        <v-row class="ministries-grid">
          <v-col v-for="(ministry, index) in ministries" :key="index" cols="12" md="6" lg="4">
            <div class="ministry-card">
              <div class="ministry-icon-wrapper" :style="{ backgroundColor: ministry.color }">
                <v-icon size="40" color="white">{{ ministry.icon }}</v-icon>
              </div>
              <h3 class="ministry-title">{{ ministry.title }}</h3>
              <p class="ministry-text">{{ ministry.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Weekly Service Program -->
    <section class="services-section">
      <v-container>
        <div class="section-header">
          <span class="eyebrow">Join Us</span>
          <h2 class="section-title">Service Schedule</h2>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <div class="schedule-card">
              <div class="schedule-header">
                <v-icon color="blue-darken-2" size="32">mdi-calendar-clock</v-icon>
                <h3 class="schedule-title">Sunday Services</h3>
              </div>

              <div class="services-list">
                <div v-for="(service, index) in sundayServices" :key="index" class="service-item">
                  <div class="service-time-badge">{{ service.time }}</div>
                  <div class="service-details">
                    <h4 class="service-name">{{ service.name }}</h4>
                    <p class="service-description">{{ service.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="schedule-card">
              <div class="schedule-header">
                <v-icon color="green-darken-2" size="32">mdi-calendar-week</v-icon>
                <h3 class="schedule-title">Weekly Activities</h3>
              </div>

              <div class="activities-list">
                <div v-for="(activity, index) in weeklyActivities" :key="index" class="activity-item">
                  <div class="activity-icon" :style="{ backgroundColor: activity.color }">
                    <v-icon color="white" size="20">{{ activity.icon }}</v-icon>
                  </div>
                  <div class="activity-details">
                    <h4 class="activity-day">{{ activity.day }}</h4>
                    <p class="activity-info">
                      {{ activity.event }} • {{ activity.time }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="welcome-note">
                <v-icon color="blue-darken-2" size="20">mdi-information</v-icon>
                <p>All are welcome to join our services and activities</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Gallery Section -->
    <section class="gallery-section">
      <v-container>
        <div class="section-header">
          <span class="eyebrow">Memories</span>
          <h2 class="section-title">Church Gallery</h2>
          <p class="section-subtitle">
            Celebrating moments of worship, fellowship, and community service
          </p>
        </div>

        <v-row class="gallery-grid">
          <v-col v-for="(photo, index) in galleryPhotos" :key="index" cols="12" sm="6" md="4">
            <div class="gallery-card">
              <v-img :src="photo.image" height="300" cover class="gallery-image">
                <div class="gallery-overlay">
                  <div class="gallery-caption">
                    <h4>{{ photo.title }}</h4>
                    <p>{{ photo.date }}</p>
                  </div>
                </div>
              </v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Support the Church -->
    <section class="support-section">
      <v-container>
        <div class="support-container">
          <div class="support-header">
            <v-icon size="56" color="white">mdi-hand-heart</v-icon>
            <h2 class="support-title">Support St. Luke Poduti Church</h2>
            <p class="support-subtitle">
              Your generous contributions help us maintain our church, support our
              ministries, and serve our community.
            </p>
          </div>

          <v-row class="support-grid">
            <v-col cols="12" md="6">
              <div class="support-item">
                <div class="support-icon">
                  <v-icon color="blue-darken-2" size="32">mdi-cash</v-icon>
                </div>
                <h3 class="support-item-title">Tithes & Offerings</h3>
                <p class="support-item-text">
                  Bring your tithes and offerings during Sunday services
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="support-item">
                <div class="support-icon">
                  <v-icon color="green-darken-2" size="32">mdi-sprout</v-icon>
                </div>
                <h3 class="support-item-title">Harvest Offerings</h3>
                <p class="support-item-text">Support our annual harvest celebration</p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="support-item">
                <div class="support-icon">
                  <v-icon color="orange-darken-2" size="32">mdi-hammer-wrench</v-icon>
                </div>
                <h3 class="support-item-title">Building Projects</h3>
                <p class="support-item-text">Help us improve church infrastructure</p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="support-item">
                <div class="support-icon">
                  <v-icon color="purple-darken-2" size="32">mdi-account-heart</v-icon>
                </div>
                <h3 class="support-item-title">Sponsor a Ministry</h3>
                <p class="support-item-text">Support specific ministries and programs</p>
              </div>
            </v-col>
          </v-row>

          <div class="support-footer">
            For more information, please speak with church leadership after service
          </div>
        </div>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useHead({
  title: "St. Luke Poduti Church - Podut Community",
  meta: [
    {
      name: "description",
      content:
        "Welcome to St. Luke Poduti Church of Uganda. Learn about our ministries, service times, and how we serve the Podut community in faith.",
    },
  ],
});

// Ministries Data
const ministries = [
  {
    title: "Mothers' Union",
    description:
      "A fellowship of women dedicated to prayer, spiritual growth, and community service. The Mothers' Union supports families and uplifts women through faith.",
    icon: "mdi-account-multiple-outline",
    color: "#9C27B0",
    activities: [
      "Monthly prayer meetings",
      "Family support programs",
      "Community outreach",
      "Counseling and mentorship",
    ],
  },
  {
    title: "Fathers' Union",
    description:
      "Men united in faith and fellowship, providing spiritual leadership and practical support to families and the church community.",
    icon: "mdi-account-tie",
    color: "#1976D2",
    activities: [
      "Leadership meetings",
      "Family guidance",
      "Church maintenance",
      "Youth mentorship",
    ],
  },
  {
    title: "Youth Fellowship",
    description:
      "Empowering young people to grow in faith, develop their talents, and become future leaders of the church and community.",
    icon: "mdi-account-star",
    color: "#FF6F00",
    activities: [
      "Bible study sessions",
      "Sports and recreation",
      "Talent development",
      "Community service projects",
    ],
  },
  {
    title: "Church Choir",
    description:
      "Leading worship through song and praise, our choir uplifts spirits and glorifies God through beautiful music every Sunday.",
    icon: "mdi-music-note",
    color: "#388E3C",
    activities: [
      "Sunday worship leading",
      "Special event performances",
      "Weekly rehearsals",
      "Traditional and contemporary hymns",
    ],
  },
  {
    title: "Sunday School",
    description:
      "Teaching children the foundations of Christian faith through Bible stories, songs, and interactive lessons in a loving environment.",
    icon: "mdi-school",
    color: "#E91E63",
    activities: [
      "Bible teaching for children",
      "Memory verse competitions",
      "Craft activities",
      "Annual children's day celebrations",
    ],
  },
  {
    title: "Prayer Ministry",
    description:
      "Interceding for our community, nation, and world through dedicated prayer meetings and spiritual warfare.",
    icon: "mdi-hands-pray",
    color: "#00796B",
    activities: [
      "Early morning prayers",
      "Prayer chains",
      "Fasting and prayer days",
      "Intercessory prayer groups",
    ],
  },
];

// Sunday Services Data
const sundayServices = [
  {
    time: "7:00 AM",
    name: "Early Morning Service",
    description: "Traditional service in Luganda with Holy Communion",
    color: "blue-darken-2",
  },
  {
    time: "9:30 AM",
    name: "Main Service",
    description: "Family worship with Sunday School for children",
    color: "green-darken-2",
  },
  {
    time: "2:00 PM",
    name: "Youth Service",
    description: "Contemporary worship led by youth fellowship",
    color: "orange-darken-2",
  },
];

// Weekly Activities Data
const weeklyActivities = [
  {
    day: "Wednesday",
    event: "Midweek Bible Study",
    time: "6:00 PM - 8:00 PM",
    icon: "mdi-book-open-variant",
    color: "green-darken-2",
  },
  {
    day: "Thursday",
    event: "Mothers' Union Meeting",
    time: "3:00 PM - 5:00 PM",
    icon: "mdi-account-group",
    color: "purple-darken-2",
  },
  {
    day: "Friday",
    event: "Youth Fellowship",
    time: "5:00 PM - 7:00 PM",
    icon: "mdi-account-star",
    color: "orange-darken-2",
  },
  {
    day: "Saturday",
    event: "Choir Practice",
    time: "4:00 PM - 6:00 PM",
    icon: "mdi-music",
    color: "blue-darken-2",
  },
];

// Gallery Photos Data
const galleryPhotos = [
  {
    title: "Sunday Worship",
    date: "Every Sunday",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073",
  },
  {
    title: "Youth Fellowship",
    date: "November 2025",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032",
  },
  {
    title: "Baptism Ceremony",
    date: "October 2025",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070",
  },
  {
    title: "Harvest Festival",
    date: "September 2025",
    image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=2071",
  },
  {
    title: "Choir Performance",
    date: "August 2025",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070",
  },
  {
    title: "Community Outreach",
    date: "July 2025",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
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
      rgba(25, 118, 210, 0.88) 0%,
      rgba(13, 71, 161, 0.78) 100%);
  display: flex;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  margin: 0 auto;
}

/* Common Section Styles */
section {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #1976d2;
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #616161;
  max-width: 600px;
  margin: 0 auto;
}

.section-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #424242;
}

/* About Section */
.about-section {
  background: white;
}

/* .section-spacing {
  gap: 3rem;
} */

.image-container {
  position: relative;
}

.about-image {
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.content-wrapper {
  max-width: 600px;
}

.mission-box {
  margin-top: 2.5rem;
  padding: 2rem;
  background: rgba(25, 118, 210, 0.05);
  border-radius: 16px;
  border-left: 4px solid #1976d2;
}

.mission-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 1.5rem;
}

.mission-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mission-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: #424242;
}

/* Ministries Section */
.ministries-section {
  background: white;
}

.ministries-grid {
  margin-top: 1rem;
}

.ministry-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.ministry-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.ministry-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.ministry-title {
  color: #1976d2;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.ministry-text {
  font-size: 1rem;
  line-height: 1.7;
  color: #616161;
}

/* Services Section */
.services-section {
  background: white;
}

.schedule-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  height: 100%;
}

.schedule-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #f5f5f5;
}

.schedule-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1976d2;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.service-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.service-time-badge {
  background: rgba(25, 118, 210, 0.1);
  color: #1976d2;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.9375rem;
  white-space: nowrap;
  min-width: 90px;
  text-align: center;
}

.service-details {
  flex: 1;
}

.service-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 0.5rem;
}

.service-description {
  font-size: 0.9375rem;
  color: #616161;
  line-height: 1.6;
  margin: 0;
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #fafafa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.activity-item:hover {
  background: #f5f5f5;
  transform: translateX(5px);
}

.activity-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.activity-details {
  flex: 1;
}

.activity-day {
  font-size: 1rem;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 0.25rem;
}

.activity-info {
  font-size: 0.875rem;
  color: #616161;
  margin: 0;
}

.welcome-note {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem;
  background: rgba(25, 118, 210, 0.05);
  border-radius: 12px;
  border-left: 4px solid #1976d2;
}

.welcome-note p {
  font-size: 0.9375rem;
  color: #424242;
  margin: 0;
}

/* Gallery Section */
.gallery-section {
  background: #f5f5f5;
}

.gallery-grid {
  margin-top: 1rem;
}

.gallery-card {
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.gallery-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.gallery-image {
  border-radius: 16px;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.75) 100%);
  display: flex;
  align-items: flex-end;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.gallery-caption {
  padding: 1.5rem;
  color: white;
  width: 100%;
}

.gallery-caption h4 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.gallery-caption p {
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.95;
}

/* Support Section */
.support-section {
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
}

.support-container {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 4rem 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.support-header {
  text-align: center;
  margin-bottom: 3rem;
}

.support-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 1.5rem 0 1rem;
}

.support-subtitle {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.support-grid {
  margin-bottom: 2rem;
}

.support-item {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  height: 100%;
  transition: all 0.3s ease;
}

.support-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.support-icon {
  width: 64px;
  height: 64px;
  background: rgba(25, 118, 210, 0.1);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.support-item-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 0.75rem;
}

.support-item-text {
  font-size: 1rem;
  color: #616161;
  line-height: 1.6;
  margin: 0;
}

.support-footer {
  text-align: center;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 1280px) {
  section {
    padding: 80px 0;
  }
}

@media (max-width: 960px) {
  section {
    padding: 60px 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .section-spacing {
    gap: 2rem;
  }

  .content-wrapper {
    max-width: 100%;
  }

  .support-title {
    font-size: 2rem;
  }

  .support-container {
    padding: 3rem 2rem;
  }

  .schedule-card {
    padding: 2rem;
  }
}

@media (max-width: 600px) {
  section {
    padding: 50px 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.875rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .ministry-card {
    padding: 2rem 1.5rem;
  }

  .schedule-card {
    padding: 1.5rem;
  }

  .support-container {
    padding: 2rem 1.5rem;
  }

  .support-title {
    font-size: 1.75rem;
  }

  .service-item {
    flex-direction: column;
    gap: 1rem;
  }

  .service-time-badge {
    width: 100%;
  }
}
</style>
