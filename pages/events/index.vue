<template>
    <div class="events-page">
        <!-- Hero Section -->
        <section class="events-hero">
            <v-container>
                <div class="hero-content">
                    <h1 class="hero-title">Community Events</h1>
                    <p class="hero-subtitle">Stay connected with what's happening in Podut</p>
                </div>
            </v-container>
        </section>

        <!-- This Week Section - Dynamic -->
        <section class="this-week-section">
            <v-container>
                <div class="week-banner">
                    <div class="week-icon-wrapper">
                        <v-icon size="48" :color="isToday('sunday') ? 'green-darken-2' : 'amber-darken-2'">
                            {{ isToday("sunday") ? "mdi-church" : "mdi-calendar-clock" }}
                        </v-icon>
                    </div>
                    <div class="week-content">
                        <h2 class="week-title">{{ thisWeekTitle }}</h2>
                        <p class="week-message">{{ thisWeekMessage }}</p>
                    </div>
                    <div class="week-countdown" v-if="!isToday('sunday')">
                        <div class="countdown-number">{{ daysUntilSunday }}</div>
                        <div class="countdown-label">
                            {{ daysUntilSunday === 1 ? "day" : "days" }}
                        </div>
                    </div>
                </div>
            </v-container>
        </section>

        <!-- Upcoming Fundraiser -->
        <section class="fundraiser-section">
            <v-container>
                <div class="section-header">
                    <span class="eyebrow">Featured Event</span>
                    <h2 class="section-title">Upcoming Fundraiser</h2>
                </div>

                <div class="fundraiser-card">
                    <v-row align="center">
                        <v-col cols="12" md="6">
                            <div class="fundraiser-image-wrapper">
                                <v-img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073"
                                    height="400" cover class="fundraiser-image">
                                </v-img>
                                <div class="fundraiser-badge">
                                    <v-icon size="20" color="white">mdi-heart</v-icon>
                                    <span>Support Our Community</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="fundraiser-content">
                                <h3 class="fundraiser-title">Church Building Completion</h3>
                                <p class="fundraiser-description">
                                    Join us in raising funds for the completion of our church building.
                                    Your generous support will help us finish construction and create a
                                    beautiful worship space for our growing congregation.
                                </p>

                                <div class="fundraiser-details">
                                    <div class="detail-item">
                                        <v-icon size="20" color="green-darken-2">mdi-calendar</v-icon>
                                        <span>December 27, 2025</span>
                                    </div>
                                    <div class="detail-item">
                                        <v-icon size="20" color="green-darken-2">mdi-map-marker</v-icon>
                                        <span>St. Luke Church Grounds, Podut</span>
                                    </div>
                                    <div class="detail-item">
                                        <v-icon size="20" color="green-darken-2">mdi-clock-outline</v-icon>
                                        <span>10:00 AM - 4:00 PM</span>
                                    </div>
                                </div>

                                <div class="fundraiser-progress">
                                    <div class="progress-header">
                                        <span class="progress-label">Raised so far</span>
                                        <span class="progress-amount">UGX 20,000,000 / 40,000,000</span>
                                    </div>
                                    <v-progress-linear :model-value="50" color="green-darken-2" height="12" rounded
                                        class="mt-2"></v-progress-linear>
                                </div>

                                <v-btn size="large" color="green-darken-2" class="mt-6" variant="flat">
                                    Learn More & Donate
                                    <v-icon end>mdi-arrow-right</v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-container>
        </section>

        <!-- Regular Events Grid -->
        <section class="regular-events-section">
            <v-container>
                <div class="section-header">
                    <span class="eyebrow">Regular Schedule</span>
                    <h2 class="section-title">Weekly Events</h2>
                </div>

                <v-row>
                    <v-col v-for="event in regularEvents" :key="event.id" cols="12" md="6" lg="4">
                        <div class="event-card">
                            <div class="event-icon-wrapper">
                                <v-icon size="32" :color="event.color">{{ event.icon }}</v-icon>
                            </div>
                            <h3 class="event-title">{{ event.title }}</h3>
                            <p class="event-time">{{ event.time }}</p>
                            <p class="event-description">{{ event.description }}</p>
                            <div class="event-day">{{ event.day }}</div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Get current day of the week
const today = new Date();
const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

// Calculate days until Sunday
const daysUntilSunday = computed(() => {
    return currentDay === 0 ? 0 : 7 - currentDay;
});

// Check if today is a specific day
const isToday = (day: string) => {
    if (day === "sunday") return currentDay === 0;
    return false;
};

// Dynamic title and message
const thisWeekTitle = computed(() => {
    if (currentDay === 0) {
        return "Today's Sunday Service";
    } else if (currentDay === 6) {
        return "Tomorrow's Sunday Service";
    } else {
        return "This Week's Service";
    }
});

const thisWeekMessage = computed(() => {
    if (currentDay === 0) {
        return "Welcome! Join us for worship today at St. Luke Poduti Church. Service begins at 9:00 AM.";
    } else if (currentDay === 6) {
        return "Get ready for tomorrow's service! We look forward to worshiping together.";
    } else {
        return `Join us for Sunday worship at St. Luke Poduti Church. Service at 9:00 AM.`;
    }
});

// Regular events data
const regularEvents = [
    {
        id: 1,
        title: "Sunday Service",
        day: "Every Sunday",
        time: "9:00 AM - 12:00 PM",
        description: "Weekly worship service with hymns, prayers, and sermon.",
        icon: "mdi-church",
        color: "green-darken-2",
    },
    {
        id: 2,
        title: "Bible Study",
        day: "Every Wednesday",
        time: "5:00 PM - 6:30 PM",
        description: "In-depth study of scripture and faith discussions.",
        icon: "mdi-book-open-page-variant",
        color: "blue-darken-2",
    },
    {
        id: 3,
        title: "Youth Fellowship",
        day: "Every Saturday",
        time: "3:00 PM - 5:00 PM",
        description: "Activities and fellowship for young members of our community.",
        icon: "mdi-account-group",
        color: "amber-darken-2",
    },
    {
        id: 4,
        title: "Market Day",
        day: "Every Friday",
        time: "8:00 AM - 6:00 PM",
        description: "Weekly market for fresh produce and local goods.",
        icon: "mdi-store",
        color: "orange-darken-2",
    },
    {
        id: 5,
        title: "Community Prayers",
        day: "Daily",
        time: "6:00 AM & 6:00 PM",
        description: "Morning and evening prayers open to all community members.",
        icon: "mdi-hands-pray",
        color: "purple-darken-2",
    },
    {
        id: 6,
        title: "Women's Fellowship",
        day: "Every Thursday",
        time: "2:00 PM - 4:00 PM",
        description: "Gathering for women to share, support, and grow together.",
        icon: "mdi-flower",
        color: "pink-darken-2",
    },
];
</script>

<style scoped>
.events-page {
    background: #fafafa;
}

/* Hero Section */
.events-hero {
    background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
    padding: 80px 0 60px;
}

.hero-content {
    text-align: center;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
}

/* This Week Section */
.this-week-section {
    padding: 0;
    margin-top: -30px;
    position: relative;
    z-index: 2;
}

.week-banner {
    background: white;
    border-radius: 20px;
    padding: 2rem 2.5rem;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 2rem;
    position: relative;
    overflow: hidden;
}

.week-banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(180deg, #2e7d32 0%, #66bb6a 100%);
}

.week-icon-wrapper {
    width: 80px;
    height: 80px;
    background: rgba(46, 125, 50, 0.1);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.week-content {
    flex: 1;
}

.week-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1b5e20;
    margin-bottom: 0.5rem;
}

.week-message {
    font-size: 1.125rem;
    color: #616161;
    line-height: 1.6;
    margin: 0;
}

.week-countdown {
    text-align: center;
    padding: 1rem 2rem;
    background: rgba(255, 193, 7, 0.1);
    border-radius: 12px;
    flex-shrink: 0;
}

.countdown-number {
    font-size: 3rem;
    font-weight: 700;
    color: #f57c00;
    line-height: 1;
}

.countdown-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #f57c00;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.25rem;
}

/* Fundraiser Section */
.fundraiser-section {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.eyebrow {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #2e7d32;
    margin-bottom: 0.5rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1b5e20;
    margin-bottom: 0.5rem;
}

.fundraiser-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.fundraiser-image-wrapper {
    position: relative;
    height: 100%;
    min-height: 400px;
}

.fundraiser-image {
    height: 100%;
    border-radius: 0;
}

.fundraiser-badge {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    background: rgba(46, 125, 50, 0.95);
    color: white;
    padding: 0.75rem 1.25rem;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    backdrop-filter: blur(10px);
}

.fundraiser-content {
    padding: 3rem;
}

.fundraiser-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1b5e20;
    margin-bottom: 1rem;
}

.fundraiser-description {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #616161;
    margin-bottom: 2rem;
}

.fundraiser-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
}

.detail-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: #424242;
    font-size: 1rem;
}

.fundraiser-progress {
    background: rgba(46, 125, 50, 0.05);
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1rem;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
}

.progress-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #616161;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.progress-amount {
    font-size: 1.125rem;
    font-weight: 700;
    color: #2e7d32;
}

/* Regular Events Section */
.regular-events-section {
    padding: 80px 0 100px;
}

.event-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.event-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.event-icon-wrapper {
    width: 64px;
    height: 64px;
    background: rgba(46, 125, 50, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.event-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1b5e20;
    margin-bottom: 0.5rem;
}

.event-time {
    font-size: 1rem;
    font-weight: 600;
    color: #f57c00;
    margin-bottom: 1rem;
}

.event-description {
    font-size: 1rem;
    line-height: 1.7;
    color: #616161;
    margin-bottom: 1.5rem;
    flex: 1;
}

.event-day {
    display: inline-block;
    background: rgba(46, 125, 50, 0.1);
    color: #2e7d32;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

/* Responsive Design */
@media (max-width: 960px) {
    .hero-title {
        font-size: 2.5rem;
    }

    .week-banner {
        flex-direction: column;
        text-align: center;
        padding: 2rem 1.5rem;
    }

    .week-banner::before {
        width: 100%;
        height: 6px;
        top: 0;
        left: 0;
    }

    .week-title {
        font-size: 1.5rem;
    }

    .week-message {
        font-size: 1rem;
    }

    .fundraiser-content {
        padding: 2rem;
    }

    .fundraiser-title {
        font-size: 1.75rem;
    }

    .section-title {
        font-size: 2rem;
    }
}

@media (max-width: 600px) {
    .events-hero {
        padding: 60px 0 40px;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .week-banner {
        padding: 1.5rem;
    }

    .week-icon-wrapper {
        width: 60px;
        height: 60px;
    }

    .countdown-number {
        font-size: 2.5rem;
    }

    .fundraiser-section {
        padding: 60px 0;
    }

    .fundraiser-content {
        padding: 1.5rem;
    }

    .fundraiser-image-wrapper {
        min-height: 300px;
    }

    .event-card {
        padding: 1.5rem;
    }
}
</style>
