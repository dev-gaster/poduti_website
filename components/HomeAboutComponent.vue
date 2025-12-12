<template>
    <section class="about-section">
        <v-container>
            <v-row align="center">
                <!-- Image Side -->
                <v-col cols="12" sm="5" class="image-col">
                    <div class="media-row">
                        <!-- Image Container -->
                        <div class="image-container">
                            <!-- Decorative Background Shape -->
                            <div class="bg-shape"></div>

                            <!-- Main Image -->
                            <div class="image-wrapper">
                                <v-img src="https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?q=80&w=2071"
                                    height="500" cover class="about-image">
                                </v-img>
                            </div>

                            <!-- Floating Stats Cards -->
                            <div class="stat-card stat-card-1">
                                <v-icon size="32" color="green-darken-2">mdi-account-group</v-icon>
                                <div class="stat-number">500+</div>
                                <div class="stat-label">Families</div>
                            </div>

                            <div class="stat-card stat-card-2">
                                <v-icon size="32" color="amber-darken-2">mdi-school</v-icon>
                                <div class="stat-number">300+</div>
                                <div class="stat-label">Students</div>
                            </div>
                        </div>

                        <!-- Additional Supportive Content -->
                    </div>
                </v-col>
                <v-col cols="12" sm="7">
                    <div class="support-content">
                        <!-- Feature Cards -->
                        <div class="feature-item">
                            <div class="feature-icon">
                                <v-icon size="24" color="green-darken-2">mdi-church</v-icon>
                            </div>
                            <div class="feature-text">
                                <div class="feature-title">St. Luke Church</div>
                                <div class="feature-desc">Our spiritual foundation</div>
                            </div>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">
                                <v-icon size="24" color="amber-darken-2">mdi-greenhouse</v-icon>
                            </div>
                            <div class="feature-text">
                                <div class="feature-title">Agriculture</div>
                                <div class="feature-desc">Rich farming heritage</div>
                            </div>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">
                                <v-icon size="24" color="blue-darken-2">mdi-store</v-icon>
                            </div>
                            <div class="feature-text">
                                <div class="feature-title">Podut Market</div>
                                <div class="feature-desc">Community trade hub</div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>

            <!-- Content Side -->
            <div class="content-col">
                <div class="content-wrapper">
                    <span class="eyebrow">Our Story</span>
                    <h2 class="about-title">About Podut</h2>
                    <div class="divider"></div>

                    <p class="about-text">
                        Podut is a thriving rural community nestled in Poyameri Parish, Magola
                        Sub-county, within the West Budama Constituency of Tororo District, Eastern
                        Uganda. Our community is rich in cultural heritage, agricultural tradition,
                        and strong family values.
                    </p>

                    <p class="about-text">
                        We are home to hardworking farmers, dedicated teachers, spiritual leaders, and
                        energetic youth who are shaping the future. Our community is anchored by St.
                        Luke Poduti Church of Uganda, Poduti Primary School, and the bustling Podut
                        Market.
                    </p>

                    <p class="about-text highlight">
                        Together, we celebrate our traditions, support one another, and work toward
                        sustainable development and prosperity for all generations.
                    </p>

                    <v-btn size="large" color="green-darken-2" class="mt-6" variant="flat" to="/community">
                        Learn More About Us
                        <v-icon end>mdi-arrow-right</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-container>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-section {
    padding: 100px 0;
    background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
    position: relative;
}

/* Image Side */
.image-col {
    position: relative;
}

.media-row {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
}

.image-container {
    position: relative;
    padding: 2rem;
    flex: 0 0 auto;
    width: 100%;
}

/* Decorative Background Shape */
.bg-shape {
    position: absolute;
    top: 0;
    right: 0;
    width: 80%;
    height: 80%;
    background: linear-gradient(135deg,
            rgba(46, 125, 50, 0.08) 0%,
            rgba(102, 187, 106, 0.05) 100%);
    border-radius: 24px;
    z-index: 0;
}

.image-wrapper {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;
    z-index: 1;
}

.image-wrapper:hover {
    transform: translateY(-5px);
}

.about-image {
    border-radius: 16px;
}

/* Floating Stats Cards */
.stat-card {
    position: absolute;
    background: white;
    padding: 1.5rem 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
    text-align: center;
    z-index: 2;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.95);
}

.stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.18);
}

.stat-card-1 {
    bottom: 10%;
    left: -2rem;
    min-width: 140px;
}

.stat-card-2 {
    top: 15%;
    right: -2rem;
    min-width: 140px;
}

.stat-number {
    font-size: 2rem;
    font-weight: 700;
    color: #1b5e20;
    margin-top: 0.5rem;
    line-height: 1;
}

.stat-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #666;
    margin-top: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Support Content */
.support-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem 1rem;
    flex: 1;
    justify-content: center;
    min-width: 0;
    max-width: 100%;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    width: 100%;
}

.feature-item:hover {
    transform: translateX(5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.feature-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(46, 125, 50, 0.08);
    border-radius: 12px;
    flex-shrink: 0;
}

.feature-text {
    flex: 1;
}

.feature-title {
    font-size: 1rem;
    font-weight: 600;
    color: #1b5e20;
    margin-bottom: 0.25rem;
}

.feature-desc {
    font-size: 0.875rem;
    color: #666;
}

/* Content Side */
.content-col {
    display: flex;
    align-items: center;
}

.content-wrapper {
    max-width: 600px;
}

.eyebrow {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #2e7d32;
    margin-bottom: 1rem;
}

.about-title {
    font-size: 3rem;
    font-weight: 700;
    color: #1b5e20;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.divider {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #2e7d32 0%, #66bb6a 100%);
    border-radius: 2px;
    margin-bottom: 2rem;
}

.about-text {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #424242;
    margin-bottom: 1.5rem;
}

.about-text.highlight {
    font-weight: 500;
    color: #2e7d32;
    background: rgba(46, 125, 50, 0.05);
    padding: 1.25rem;
    border-left: 4px solid #2e7d32;
    border-radius: 8px;
    margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 1280px) {
    .about-title {
        font-size: 2.5rem;
    }

    .about-text {
        font-size: 1.0625rem;
    }
}

@media (max-width: 960px) {
    .about-section {
        padding: 80px 0;
    }

    .about-row {
        gap: 2rem;
    }

    .image-col {
        order: 2;
    }

    .content-col {
        order: 1;
    }

    .content-wrapper {
        text-align: center;
        max-width: 100%;
    }

    .about-title {
        font-size: 2.25rem;
    }

    .divider {
        margin-left: auto;
        margin-right: auto;
    }

    .about-text.highlight {
        border-left: none;
        border-top: 4px solid #2e7d32;
    }

    .image-container {
        padding: 1rem;
    }

    .stat-card-1 {
        left: 0;
        bottom: 5%;
    }

    .stat-card-2 {
        right: 0;
        top: 10%;
    }

    .media-row {
        flex-direction: column;
    }

    .image-container {
        max-width: 100%;
    }

    .support-content {
        padding: 2rem 0;
    }
}

@media (max-width: 600px) {
    .about-section {
        padding: 60px 0;
    }

    .about-title {
        font-size: 1.875rem;
    }

    .about-text {
        font-size: 1rem;
        line-height: 1.7;
    }

    .image-container {
        padding: 0.5rem;
    }

    .image-wrapper {
        margin-bottom: 1rem;
    }

    .about-text.highlight {
        padding: 1rem;
        font-size: 0.9375rem;
    }

    .stat-card {
        padding: 1rem 1.25rem;
        min-width: 110px;
    }

    .stat-card-1 {
        left: -0.5rem;
    }

    .stat-card-2 {
        right: -0.5rem;
    }

    .stat-number {
        font-size: 1.5rem;
    }

    .stat-label {
        font-size: 0.75rem;
    }

    .support-content {
        padding: 1.5rem 0;
        gap: 1rem;
    }

    .feature-item {
        padding: 1rem;
    }

    .feature-icon {
        width: 40px;
        height: 40px;
    }

    .feature-title {
        font-size: 0.9375rem;
    }

    .feature-desc {
        font-size: 0.8125rem;
    }
}
</style>
