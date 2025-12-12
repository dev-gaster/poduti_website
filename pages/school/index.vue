<template>
  <div>
    <!-- Hero Section -->
    <v-parallax class="hero-section" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022"
      height="500">
      <div class="hero-overlay">
        <v-container>
          <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" md="8" class="text-center">
              <v-icon size="80" color="white" class="mb-4">mdi-school</v-icon>
              <h1 class="hero-title">Poduti Primary School</h1>
              <p class="hero-subtitle">
                Nurturing young minds, building bright futures since the 1960s
              </p>
              <div class="motto-badge">
                <v-icon size="20" color="white" class="mr-2">mdi-school-outline</v-icon>
                <span>Hard Work for Better Future</span>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-parallax>

    <!-- About the School -->
    <section class="about-section">
      <v-container>
        <v-row align="center" class="section-spacing">
          <v-col cols="12" md="6">
            <div class="content-wrapper">
              <span class="eyebrow">Our Foundation</span>
              <h2 class="section-title mb-6">About Our School</h2>

              <p class="section-text mb-5">
                Poduti Primary School has been the cornerstone of education in our
                community since the 1960s. As a church-founded school, we combine academic
                excellence with strong moral and spiritual values.
              </p>
              <p class="section-text mb-5">
                Our school serves children from Podut and surrounding villages, providing
                quality primary education from Primary 1 through Primary 7. Guided by our
                motto, "Hard Work for Better Future," we inspire every student to strive
                for excellence.
              </p>

              <div class="personal-note">
                <v-icon color="orange-darken-2" size="28">mdi-heart</v-icon>
                <h3 class="personal-title">A Personal Connection</h3>
                <p class="personal-text">
                  This website creator proudly attended Poduti Primary School and credits
                  this institution with laying the foundation for their educational
                  journey.
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="image-container">
              <v-img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073" height="500" cover
                class="about-image"></v-img>
            </div>
          </v-col>
        </v-row>

        <!-- Mission and Vision -->
        <v-row class="vision-mission-row">
          <v-col cols="12" md="6">
            <div class="vision-card">
              <v-icon color="blue-darken-2" size="40">mdi-telescope</v-icon>
              <h3 class="card-title">Our Vision</h3>
              <p class="card-text">
                To be a center of educational excellence that produces well-rounded,
                God-fearing, and academically competent pupils who will become responsible
                citizens and leaders of tomorrow.
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="mission-card">
              <v-icon color="green-darken-2" size="40">mdi-target</v-icon>
              <h3 class="card-title">Our Mission</h3>
              <p class="card-text">
                To provide quality, accessible education that nurtures intellectual,
                spiritual, and social development while instilling strong moral values.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Academics Section -->
    <section class="academics-section">
      <v-container>
        <div class="section-header">
          <span class="eyebrow">Learning Excellence</span>
          <h2 class="section-title">Academics</h2>
          <p class="section-subtitle">
            Poduti Primary School follows the Uganda National Primary Curriculum, covering
            all essential subjects required for Primary Leaving Examinations (PLE) and
            beyond.
          </p>
        </div>

        <v-row class="subjects-grid">
          <v-col v-for="(subject, index) in subjects" :key="index" cols="12" sm="6" md="4">
            <div class="subject-card">
              <div class="subject-icon-wrapper" :style="{ backgroundColor: subject.color }">
                <v-icon color="white" size="32">{{ subject.icon }}</v-icon>
              </div>
              <h4 class="subject-title">{{ subject.name }}</h4>
              <p class="subject-text">{{ subject.description }}</p>
            </div>
          </v-col>
        </v-row>

        <v-row class="performance-row">
          <v-col cols="12">
            <div class="performance-card">
              <div class="performance-content">
                <div class="performance-text">
                  <v-icon color="orange-darken-2" size="40">mdi-trophy</v-icon>
                  <h3 class="performance-title">Academic Excellence</h3>
                  <p class="performance-desc">
                    Our school consistently produces strong results in Primary Leaving
                    Examinations, with many pupils qualifying for top secondary schools.
                  </p>
                </div>
                <div class="stats-grid">
                  <div class="stat-item">
                    <div class="stat-number">85%</div>
                    <div class="stat-label">Pass Rate</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">300+</div>
                    <div class="stat-label">Pupils</div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">12</div>
                    <div class="stat-label">Teachers</div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Staff & Administration -->
    <section class="staff-section">
      <v-container>
        <div class="section-header">
          <span class="eyebrow">Our Team</span>
          <h2 class="section-title">Staff & Administration</h2>
          <p class="section-subtitle">Dedicated educators committed to student success</p>
        </div>

        <!-- Headteacher Profile -->
        <div class="headteacher-card">
          <div class="headteacher-icon">
            <v-avatar size="120" color="orange-darken-2">
              <v-icon size="64" color="white">mdi-account-tie</v-icon>
            </v-avatar>
          </div>
          <div class="headteacher-content">
            <h3 class="headteacher-title">Headteacher's Message</h3>
            <p class="headteacher-text">
              "Welcome to Poduti Primary School. As headteacher, I am privileged
              to lead a team of dedicated teachers who work tirelessly to ensure every
              child receives quality education in a safe and nurturing environment."
            </p>
            <p class="headteacher-text">
              "We believe in holistic development—academic, spiritual, and social.
              Together with parents and the community, we are shaping the leaders of
              tomorrow."
            </p>
            <p class="headteacher-signature">
              — Headteacher, Poduti Primary School
            </p>
          </div>
        </div>
        <v-row>
          <v-col v-for="(teacher, index) in teachers" :key="index" cols="12" sm="6" md="3">
            <v-card class="teacher-card h-100 text-center pa-4" elevation="2">
              <v-avatar size="100" :color="teacher.color">
                <v-icon size="50" color="white">{{ teacher.icon }}</v-icon>
              </v-avatar>
              <v-card-title class="teacher-name">{{ teacher.name }}</v-card-title>
              <v-card-subtitle>{{ teacher.role }}</v-card-subtitle>
              <v-chip size="small" :color="teacher.color" class="mt-2">
                {{ teacher.specialty }}
              </v-chip>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Activities & Clubs -->
    <section class="activities-section">
      <v-container>
        <div class="section-header">
          <span class="eyebrow">Beyond The Classroom</span>
          <h2 class="section-title">Activities & Clubs</h2>
          <p class="section-subtitle">Building character, skills, and teamwork</p>
        </div>

        <v-row>
          <v-col v-for="(activity, index) in activities" :key="index" cols="12" md="6">
            <v-card class="activity-card pa-6" elevation="3">
              <div class="d-flex align-start">
                <v-avatar :color="activity.color" size="64" class="mr-4">
                  <v-icon color="white" size="36">{{ activity.icon }}</v-icon>
                </v-avatar>
                <div class="flex-grow-1">
                  <h3 class="subsection-title mb-3">{{ activity.name }}</h3>
                  <p class="section-text mb-3">{{ activity.description }}</p>
                  <v-chip-group>
                    <v-chip v-for="(benefit, i) in activity.benefits" :key="i" size="small" variant="outlined"
                      :color="activity.color">
                      {{ benefit }}
                    </v-chip>
                  </v-chip-group>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Achievements & Alumni -->
    <section class="achievements-section py-16">
      <v-container>
        <h2 class="section-title text-center mb-4">Achievements & Alumni</h2>
        <p class="text-center text-grey-darken-1 mb-12">
          Celebrating success stories and the bright futures of our students
        </p>

        <v-row>
          <v-col v-for="(achievement, index) in achievements" :key="index" cols="12" md="4">
            <v-card class="achievement-card h-100" elevation="3">
              <v-img :src="achievement.image" height="200" cover>
                <div class="achievement-badge">
                  <v-chip :color="achievement.badgeColor" size="small">
                    {{ achievement.badge }}
                  </v-chip>
                </div>
              </v-img>
              <v-card-title>{{ achievement.title }}</v-card-title>
              <v-card-text>
                <p class="achievement-text">{{ achievement.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-8">
          <v-col cols="12">
            <v-card class="pa-8" elevation="4" color="orange-darken-2">
              <div class="text-center">
                <v-icon size="64" color="white" class="mb-4">mdi-star-circle</v-icon>
                <h3 class="subsection-title mb-4 text-white">Alumni Success Stories</h3>
                <p class="section-text text-white mb-4">
                  Our former students have gone on to achieve remarkable success in
                  various fields including medicine, engineering, education, business, and
                  public service. Many return to support the school and inspire current
                  pupils to dream big and work hard.
                </p>
                <v-btn size="large" variant="outlined" color="white">
                  Share Your Story
                  <v-icon end>mdi-pencil</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Support the School -->
    <section class="support-section py-16 bg-grey-lighten-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-card class="pa-8" elevation="6">
              <div class="text-center mb-8">
                <v-icon size="64" color="orange-darken-2" class="mb-4">mdi-hand-heart</v-icon>
                <h2 class="section-title mb-4">Support Poduti Primary School</h2>
                <p class="section-text">
                  Help us continue providing quality education to the children of Podut.
                  Your support makes a real difference in their lives and futures.
                </p>
              </div>

              <v-row>
                <v-col v-for="(support, index) in supportOptions" :key="index" cols="12" md="4">
                  <v-card class="support-option pa-6 h-100 text-center" elevation="0" color="orange-lighten-5">
                    <v-icon :color="support.color" size="48" class="mb-3">
                      {{ support.icon }}
                    </v-icon>
                    <h4 class="subsection-title mb-3">{{ support.title }}</h4>
                    <p class="section-text">{{ support.description }}</p>
                  </v-card>
                </v-col>
              </v-row>

              <v-divider class="my-8"></v-divider>

              <div class="text-center">
                <p class="section-text mb-4">
                  For information on how to contribute, please contact the school
                  administration or speak with community leaders.
                </p>
                <v-btn size="large" color="orange-darken-2" to="/contact">
                  Get In Touch
                  <v-icon end>mdi-email</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Gallery -->
    <section class="gallery-section py-16">
      <v-container>
        <h2 class="section-title text-center mb-4">School Gallery</h2>
        <p class="text-center text-grey-darken-1 mb-12">
          A glimpse into daily life at Poduti Primary School
        </p>

        <v-row>
          <v-col v-for="(photo, index) in galleryPhotos" :key="index" cols="12" sm="6" md="4">
            <v-card class="gallery-card" elevation="2">
              <v-img :src="photo.image" height="280" cover>
                <div class="gallery-overlay">
                  <div class="gallery-caption">
                    <h4>{{ photo.title }}</h4>
                  </div>
                </div>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useHead({
  title: "Poduti Primary School - Podut Community",
  meta: [
    {
      name: "description",
      content:
        "Poduti Primary School provides quality education in Podut community. Learn about our curriculum, staff, activities, and achievements.",
    },
  ],
});

// Subjects Data
const subjects = [
  {
    name: "English",
    description: "Language skills, reading, writing, and communication",
    icon: "mdi-book-alphabet",
    color: "blue-darken-2",
  },
  {
    name: "Mathematics",
    description: "Numeracy, problem-solving, and logical thinking",
    icon: "mdi-calculator",
    color: "green-darken-2",
  },
  {
    name: "Science",
    description: "Biology, chemistry, physics, and practical experiments",
    icon: "mdi-flask",
    color: "purple-darken-2",
  },
  {
    name: "Social Studies",
    description: "History, geography, civics, and current affairs",
    icon: "mdi-earth",
    color: "orange-darken-2",
  },
  {
    name: "Religious Education",
    description: "Christian values, Bible studies, and moral development",
    icon: "mdi-book-cross",
    color: "indigo-darken-2",
  },
  {
    name: "Local Language",
    description: "Luganda language and cultural studies",
    icon: "mdi-comment-text",
    color: "teal-darken-2",
  },
];

// Teachers Data
const teachers = [
  {
    name: "Primary 7 Teacher",
    role: "Upper Primary",
    specialty: "Mathematics & Science",
    icon: "mdi-calculator",
    color: "blue-darken-2",
  },
  {
    name: "Primary 5-6 Teacher",
    role: "Upper Primary",
    specialty: "English & Social Studies",
    icon: "mdi-book-open-page-variant",
    color: "green-darken-2",
  },
  {
    name: "Primary 3-4 Teacher",
    role: "Middle Primary",
    specialty: "General Studies",
    icon: "mdi-account-school",
    color: "orange-darken-2",
  },
  {
    name: "Primary 1-2 Teacher",
    role: "Lower Primary",
    specialty: "Early Childhood",
    icon: "mdi-human-child",
    color: "purple-darken-2",
  },
];

// Activities Data
const activities = [
  {
    name: "Music, Dance & Drama (MDD)",
    description:
      "Our vibrant MDD program nurtures talent in traditional and contemporary performance arts. Students learn cultural dances, songs, and dramatic presentations that celebrate our heritage.",
    icon: "mdi-music-note",
    color: "purple-darken-2",
    benefits: ["Cultural preservation", "Confidence building", "Teamwork"],
  },
  {
    name: "Sports & Physical Education",
    description:
      "Students participate in football, netball, athletics, and traditional games. Our sports program promotes physical fitness, discipline, and healthy competition.",
    icon: "mdi-soccer",
    color: "green-darken-2",
    benefits: ["Physical fitness", "Team spirit", "Leadership"],
  },
  {
    name: "Debate Club",
    description:
      "The debate club develops critical thinking, public speaking, and argumentation skills. Students engage in organized debates on various topics, building confidence and analytical abilities.",
    icon: "mdi-forum",
    color: "blue-darken-2",
    benefits: ["Communication", "Critical thinking", "Research skills"],
  },
  {
    name: "Environmental Club",
    description:
      "Students learn about environmental conservation through tree planting, waste management, and school beautification projects. This club instills responsibility for our natural world.",
    icon: "mdi-tree",
    color: "green-accent-4",
    benefits: ["Environmental awareness", "Responsibility", "Practical skills"],
  },
  {
    name: "Reading Club",
    description:
      "Fostering a love for reading and improving literacy. Students share stories, discuss books, and participate in reading competitions to enhance comprehension and imagination.",
    icon: "mdi-book-open-variant",
    color: "indigo-darken-2",
    benefits: ["Literacy", "Imagination", "Knowledge"],
  },
  {
    name: "School Projects",
    description:
      "Hands-on learning through gardening, poultry keeping, and other practical projects. These activities teach entrepreneurship, agriculture, and life skills.",
    icon: "mdi-sprout",
    color: "amber-darken-2",
    benefits: ["Practical skills", "Entrepreneurship", "Teamwork"],
  },
];

// Achievements Data
const achievements = [
  {
    title: "District Excellence Award",
    description:
      "Poduti Primary School received recognition from Tororo District for outstanding academic performance and community service in 2025.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070",
    badge: "Achievement",
    badgeColor: "green",
  },
  {
    title: "PLE Success Stories",
    description:
      "Our Primary 7 class achieved an 85% pass rate in the 2024 Primary Leaving Examinations, with many students gaining admission to top secondary schools.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070",
    badge: "Academic",
    badgeColor: "blue",
  },
  {
    title: "Alumni Making a Difference",
    description:
      "Former students are now teachers, health workers, engineers, and entrepreneurs, contributing to Uganda's development and giving back to their community.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2032",
    badge: "Alumni",
    badgeColor: "orange",
  },
];

// Support Options Data
const supportOptions = [
  {
    title: "Sponsor a Student",
    description:
      "Cover school fees, uniforms, and learning materials for a child in need",
    icon: "mdi-account-heart",
    color: "blue-darken-2",
  },
  {
    title: "Donate Learning Materials",
    description: "Provide books, stationery, desks, and teaching aids",
    icon: "mdi-book-plus",
    color: "green-darken-2",
  },
  {
    title: "Support Infrastructure",
    description: "Help build classrooms, latrines, or provide clean water",
    icon: "mdi-office-building",
    color: "orange-darken-2",
  },
];

// Gallery Photos Data
const galleryPhotos = [
  {
    title: "Pupils in Class",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022",
  },
  {
    title: "School Assembly",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073",
  },
  {
    title: "Sports Day",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070",
  },
  {
    title: "Science Lesson",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070",
  },
  {
    title: "MDD Performance",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070",
  },
  {
    title: "Reading Time",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073",
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
      rgba(230, 74, 25, 0.85) 0%,
      rgba(191, 54, 12, 0.75) 100%);
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
  font-size: 1.4rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.motto-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  margin-top: 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.motto-badge span {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
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
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #e64a19;
  margin-bottom: 0.5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

/* About Section */
.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.personal-note {
  background: linear-gradient(135deg, #fff5f2 0%, #ffffff 100%);
  border-left: 4px solid #e64a19;
  padding: 2rem;
  border-radius: 8px;
  margin: 3rem 0;
}

.vision-card,
.mission-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.vision-card:hover,
.mission-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Academics Section */
.subject-grid {
  margin-top: 3rem;
}

.subject-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.subject-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.subject-icon-wrapper {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, #fff5f2 0%, #ffe8df 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.subject-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.subject-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #666;
}

/* Performance Section */
.performance-row {
  margin-top: 4rem;
}

.performance-card {
  background: linear-gradient(135deg, #e64a19 0%, #bf360c 100%);
  border-radius: 24px;
  padding: 3rem;
  color: white;
}

.performance-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
}

.performance-text {
  flex: 1;
  min-width: 300px;
}

.performance-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 1rem 0;
}

.performance-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  opacity: 0.95;
}

.stats-grid {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  min-width: 100px;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.875rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Staff Section */
.staff-section {
  background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
}

.headteacher-card {
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 3rem;
  align-items: center;
  margin: 3rem auto 4rem;
  max-width: 1000px;
}

.headteacher-icon {
  flex-shrink: 0;
}

.headteacher-content {
  flex: 1;
}

.headteacher-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.headteacher-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1rem;
}

.headteacher-signature {
  font-weight: 600;
  color: #e64a19;
  margin-top: 1.5rem;
}

/* Activities Section */
.activities-section {
  background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
}

/* Teacher Cards */
.teacher-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.teacher-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.teacher-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-top: 1rem;
}

/* Activity Cards */
.activity-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

/* Achievements Section */
.achievements-section {
  background: white;
}

.achievement-card {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.achievement-badge {
  position: absolute;
  top: 16px;
  right: 16px;
}

.achievement-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #666;
}

/* Support Section */
.support-section {
  background: rgba(230, 74, 25, 0.02);
  backdrop-filter: blur(10px);
}

.needs-grid {
  margin-top: 3rem;
}

.need-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  height: 100%;
}

.need-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.need-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff5f2 0%, #ffe8df 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.need-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
}

.need-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #666;
}

/* Gallery */
.gallery-card {
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-card:hover {
  transform: scale(1.03);
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%);
  display: flex;
  align-items: flex-end;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.gallery-caption {
  padding: 20px;
  color: white;
  width: 100%;
}

.gallery-caption h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

/* Responsive */
@media (max-width: 960px) {
  section {
    padding: 60px 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-header {
    margin-bottom: 3rem;
  }

  .performance-content {
    flex-direction: column;
  }

  .performance-card {
    padding: 2rem;
  }

  .stats-grid {
    justify-content: center;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .headteacher-card {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .performance-title {
    font-size: 1.75rem;
  }
}

@media (max-width: 600px) {
  section {
    padding: 40px 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .section-header {
    margin-bottom: 2rem;
  }

  .performance-card {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .headteacher-card {
    padding: 1.5rem;
  }

  .performance-title {
    font-size: 1.5rem;
  }

  .performance-desc {
    font-size: 1rem;
  }
}
</style>
