<template>
    <section class="hero-section">
        <v-img src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072" cover height="700"
            class="hero-image">
            <div class="hero-overlay">
                <v-container class="fill-height">
                    <v-row align="center" class="fill-height">
                        <!-- Left side: Hero content -->
                        <v-col cols="12" lg="6" class="hero-content">
                            <h1 class="hero-title">Welcome to Podut Community</h1>
                            <p class="hero-subtitle">
                                A vibrant community in Poyameri Parish, Magola — home to St. Luke Poduti
                                Church, Poduti Primary School and Podut Market.
                            </p>
                            <v-btn size="large" color="amber-darken-1" class="mt-6" to="/community">
                                Explore Our Community
                                <v-icon end>mdi-arrow-right</v-icon>
                            </v-btn>
                        </v-col>

                        <!-- Right side: Hexagonal navigation (hidden on mobile) -->
                        <v-col cols="12" lg="6" class="d-none d-lg-flex justify-center align-center">
                            <div class="hexagon-container">
                                <nuxt-link v-for="(link, i) in links" :key="i" :to="link.path"
                                    :class="['hexagon', `hexagon-${i}`]">
                                    <div class="hexagon-inner">
                                        <v-icon size="56" color="white">{{ link.icon }}</v-icon>
                                        <span class="hexagon-label">{{ link.title }}</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </v-col>

                        <!-- Mobile hexagonal navigation -->
                        <v-col cols="12" class="d-lg-none">
                            <div class="hexagon-navigation-mobile">
                                <nuxt-link v-for="(link, i) in links" :key="i" :to="link.path" class="hexagon-mobile">
                                    <div class="hexagon-mobile-inner">
                                        <v-icon size="36" color="white">{{ link.icon }}</v-icon>
                                        <span class="hexagon-mobile-label">{{ link.title }}</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-img>
    </section>
</template>

<script setup lang="ts">
const links = [
    { title: "Church", path: "/church", icon: "mdi-church" },
    { title: "School", path: "/school", icon: "mdi-school" },
    { title: "Community", path: "/community", icon: "mdi-account-group" },
    { title: "Get Involved", path: "/contact", icon: "mdi-hand-heart" },
];
</script>

<style scoped>
/* Hero Section */
.hero-section {
    position: relative;
    min-height: 700px;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg,
            rgba(46, 125, 50, 0.88) 0%,
            rgba(27, 94, 32, 0.78) 100%);
    display: flex;
    align-items: center;
}

/* Hero Content (Left Side) */
.hero-content {
    padding: 2rem;
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
    line-height: 1.6;
    max-width: 600px;
}

/* Hexagon Container (Desktop) */
.hexagon-container {
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Individual Hexagon */
.hexagon {
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
}

.hexagon-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.hexagon-label {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Hexagon Positioning - 2x2 Grid Pattern */
.hexagon-0 {
    top: 50%;
    left: 50%;
    transform: translate(-110%, -110%);
}

.hexagon-1 {
    top: 50%;
    left: 50%;
    transform: translate(10%, -110%);
}

.hexagon-2 {
    top: 50%;
    left: 50%;
    transform: translate(-110%, 10%);
}

.hexagon-3 {
    top: 50%;
    left: 50%;
    transform: translate(10%, 10%);
}

/* Mobile Hexagonal Navigation */
.hexagon-navigation-mobile {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-top: 2rem;
}

.hexagon-mobile {
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
}

.hexagon-mobile-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
}

.hexagon-mobile-label {
    color: white;
    font-size: 0.85rem;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 1280px) {
    .hero-title {
        font-size: 3rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .hexagon {
        width: 170px;
        height: 170px;
    }
}

@media (max-width: 960px) {
    .hero-title {
        font-size: 2.5rem;
        text-align: center;
    }

    .hero-subtitle {
        font-size: 1.1rem;
        text-align: center;
        margin: 0 auto;
    }

    .hero-content {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 600px) {
    .hero-section {
        min-height: 600px;
    }

    .hero-title {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .hero-subtitle {
        font-size: 1rem;
        line-height: 1.5;
    }

    .hero-content {
        padding: 1rem;
    }

    .hexagon-mobile {
        width: 100px;
        height: 100px;
    }

    .hexagon-navigation-mobile {
        gap: 1rem;
        margin-top: 1.5rem;
    }
}
</style>
