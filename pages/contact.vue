<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <v-container>
        <div class="text-center py-12">
          <v-icon size="80" color="green-darken-2" class="mb-4">mdi-email-outline</v-icon>
          <h1 class="hero-title">Get In Touch</h1>
          <p class="hero-subtitle">
            We'd love to hear from you. Reach out to connect with the Podut Community
          </p>
        </div>
      </v-container>
    </section>

    <!-- Contact Information -->
    <section class="contact-info-section py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-8 h-100" elevation="3">
              <h2 class="section-title mb-6">Contact Information</h2>

              <v-list>
                <v-list-item class="px-0 mb-4">
                  <template v-slot:prepend>
                    <v-avatar color="green-darken-2" size="48">
                      <v-icon color="white">mdi-map-marker</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="font-weight-bold mb-2">Location</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap">
                    Podut Village, Poyameri Parish<br />
                    Magola Sub-county<br />
                    Tororo District, Uganda
                  </v-list-item-subtitle>
                </v-list-item>

                <!-- <v-divider class="my-4"></v-divider> -->

                <!-- <v-list-item class="px-0 mb-4">
                  <template v-slot:prepend>
                    <v-avatar color="blue-darken-2" size="48">
                      <v-icon color="white">mdi-phone</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="font-weight-bold mb-2">Phone</v-list-item-title>
                  <v-list-item-subtitle>
                    +256 XXX XXX XXX<br />
                    (Available during business hours)
                  </v-list-item-subtitle>
                </v-list-item>

                <v-divider class="my-4"></v-divider>

                <v-list-item class="px-0 mb-4">
                  <template v-slot:prepend>
                    <v-avatar color="orange-darken-2" size="48">
                      <v-icon color="white">mdi-email</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="font-weight-bold mb-2">Email</v-list-item-title>
                  <v-list-item-subtitle>
                    info@podutcommunity.org<br />
                    (We respond within 48 hours)
                  </v-list-item-subtitle>
                </v-list-item> -->

                <v-divider class="my-4"></v-divider>

                <v-list-item class="px-0">
                  <template v-slot:prepend>
                    <v-avatar color="purple-darken-2" size="48">
                      <v-icon color="white">mdi-clock-outline</v-icon>
                    </v-avatar>
                  </template>
                  <v-list-item-title class="font-weight-bold mb-2">Office Hours</v-list-item-title>
                  <v-list-item-subtitle>
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>

              <v-divider class="my-6"></v-divider>

              <h3 class="subsection-title mb-4">Follow Us</h3>
              <div class="social-buttons">
                <v-btn icon size="large" variant="flat" color="blue">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon size="large" variant="flat" color="light-blue">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon size="large" variant="flat" color="pink">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon size="large" variant="flat" color="red">
                  <v-icon>mdi-youtube</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card class="pa-8 h-100" elevation="3">
              <h2 class="section-title mb-6">Send Us a Message</h2>

              <v-form>
                <v-text-field label="Your Name" variant="outlined" prepend-inner-icon="mdi-account"
                  class="mb-4"></v-text-field>

                <v-text-field label="Email Address" variant="outlined" type="email" prepend-inner-icon="mdi-email"
                  class="mb-4"></v-text-field>

                <v-text-field label="Phone Number (Optional)" variant="outlined" prepend-inner-icon="mdi-phone"
                  class="mb-4"></v-text-field>

                <v-select label="Subject" variant="outlined" prepend-inner-icon="mdi-tag" :items="subjects"
                  class="mb-4"></v-select>

                <v-textarea label="Your Message" variant="outlined" prepend-inner-icon="mdi-message-text" rows="5"
                  class="mb-4"></v-textarea>

                <v-btn size="large" color="green-darken-2" block>
                  Send Message
                  <v-icon end>mdi-send</v-icon>
                </v-btn>
              </v-form>

              <v-alert type="info" variant="tonal" class="mt-6">
                Your message will be reviewed by community leaders. We appreciate your
                patience and will respond as soon as possible.
              </v-alert>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Specific Contacts -->
    <section class="specific-contacts py-16 bg-green-lighten-5">
      <v-container>
        <h2 class="section-title text-center mb-4">Specific Inquiries</h2>
        <p class="text-center text-grey-darken-1 mb-12">
          Contact the right department for faster assistance
        </p>

        <v-row>
          <v-col v-for="(contact, index) in specificContacts" :key="index" cols="12" md="4">
            <v-card class="contact-card pa-6 h-100 text-center" elevation="2">
              <v-icon :color="contact.color" size="56" class="mb-4">
                {{ contact.icon }}
              </v-icon>
              <h3 class="subsection-title mb-3">{{ contact.title }}</h3>
              <p class="section-text mb-4">{{ contact.description }}</p>
              <v-btn :color="contact.color" variant="outlined">
                {{ contact.action }}
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Map Section -->
    <section class="map-section py-16">
      <v-container>
        <h2 class="section-title text-center mb-4">Find Us</h2>
        <p class="text-center text-grey-darken-1 mb-8">
          Visit us in Podut, Tororo District, Uganda
        </p>

        <v-card elevation="3" class="map-placeholder">
          <v-card-text class="text-center pa-12">
            <v-icon size="80" color="green-darken-2" class="mb-4">
              mdi-map-marker-radius
            </v-icon>
            <h3 class="subsection-title mb-4">Interactive Map</h3>
            <p class="section-text mb-6">
              Google Maps integration showing the location of Podut within Tororo District
              can be embedded here.
            </p>
            <v-btn size="large" color="green-darken-2" href="https://www.google.com/maps/search/Tororo+District+Uganda"
              target="_blank">
              View on Google Maps
              <v-icon end>mdi-open-in-new</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-container>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta Tags
useHead({
  title: "Contact Us - Podut Community",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Podut Community. Contact information for St. Luke Poduti Church, Poduti Primary School, and community leadership.",
    },
  ],
});

// Form Subjects
const subjects = [
  "General Inquiry",
  "Church Matters",
  "School Information",
  "Community Development",
  "Support & Donations",
  "Partnership Opportunities",
  "Other",
];

// Specific Contacts
const specificContacts = [
  {
    title: "Church Inquiries",
    description: "Questions about St. Luke Poduti Church services, ministries, or events",
    icon: "mdi-church",
    color: "blue-darken-2",
    action: "Contact Church",
  },
  {
    title: "School Inquiries",
    description:
      "Information about Poduti Primary School admissions and programs",
    icon: "mdi-school",
    color: "orange-darken-2",
    action: "Contact School",
  },
  {
    title: "Community Projects",
    description: "Partnership opportunities and community development initiatives",
    icon: "mdi-handshake",
    color: "green-darken-2",
    action: "Contact Leaders",
  },
];
</script>

<style scoped>
/* Hero Section */
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #2e7d32;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #616161;
  max-width: 600px;
  margin: 0 auto;
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

/* Social Buttons */
.social-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Contact Cards */
.contact-card {
  transition: transform 0.3s ease;
  border-radius: 12px;
}

.contact-card:hover {
  transform: translateY(-4px);
}

/* Map Placeholder */
.map-placeholder {
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
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
