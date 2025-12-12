<template>
    <v-footer class="footer bg-brown-lighten-5">
        <v-container>
            <v-row>
                <!-- About Column -->
                <v-col cols="12" md="4">
                    <h3 class="footer-title mb-3">Podut Community</h3>
                    <p class="footer-text">
                        A vibrant community in Poyameri Parish, Magola Sub-county, West Budama
                        Constituency, Tororo District, Uganda.
                    </p>
                </v-col>

                <!-- Quick Links Column -->
                <v-col cols="12" md="4">
                    <h3 class="footer-title mb-3">Quick Links</h3>
                    <div class="footer-links">
                        <nuxt-link v-for="(link, i) in links" :key="i" :to="link.path">
                            {{ link.title }}
                        </nuxt-link>
                    </div>
                </v-col>

                <!-- Contact Column -->
                <v-col cols="12" md="4">
                    <h3 class="footer-title mb-3">Contact Us</h3>
                    <div class="footer-contact">
                        <p class="footer-text">
                            <v-icon size="small" class="mr-2">mdi-map-marker</v-icon>
                            Poyameri Parish, Magola Sub-county<br />
                            Tororo District, Uganda
                        </p>
                        <!-- <p class="footer-text">
                            <v-icon size="small" class="mr-2">mdi-phone</v-icon>
                            +256 XXX XXX XXX
                        </p>
                        <p class="footer-text">
                            <v-icon size="small" class="mr-2">mdi-email</v-icon>
                            info@podutcommunity.org
                        </p> -->
                    </div>

                    <!-- Social Links -->
                    <div class="social-links mt-4">
                        <v-btn icon size="small" variant="text" color="green-darken-2">
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon size="small" variant="text" color="green-darken-2">
                            <v-icon>mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn icon size="small" variant="text" color="green-darken-2">
                            <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn icon size="small" variant="text" color="green-darken-2">
                            <v-icon>mdi-youtube</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>

            <!-- Copyright -->
            <v-divider class="my-4"></v-divider>
            <v-row>
                <v-col cols="12" class="text-center">
                    <p class="footer-copyright">
                        © {{ new Date().getFullYear() }} Podut Community. All rights reserved.
                    </p>
                    <p class="footer-designer">
                        Designed by
                        <a href="https://github.com/devgaster" target="_blank" rel="noopener noreferrer"
                            class="designer-link">
                            <v-icon size="small" class="mr-1">mdi-code-tags</v-icon>
                            Dev Gaster
                        </a>
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
<script setup lang="ts">
const links = [
    { title: "Home", path: "/" },
    { title: "School", path: "/school" },
    { title: "Community", path: "/community" },
    { title: "Events", path: "/events" },
    { title: "Contact", path: "/contact" },
];
</script>
<style scope>
/* Footer Styles */
.footer {
    margin-top: 80px;
    padding: 60px 0 20px;
    background: linear-gradient(135deg, #f5f3f0 0%, #e8e5df 100%);
}

.footer-title {
    color: #2e7d32;
    font-size: 1.25rem;
    font-weight: 600;
}

.footer-text {
    color: #616161;
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 10px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-links a {
    color: #616161;
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-links a:hover {
    color: #2e7d32;
    padding-left: 8px;
}

.footer-contact {
    display: flex;
    flex-direction: column;
}

.social-links {
    display: flex;
    gap: 8px;
}

.footer-copyright {
    color: #757575;
    font-size: 0.9rem;
    margin: 0;
}

.footer-designer {
    color: #757575;
    font-size: 0.85rem;
    margin-top: 8px;
}

.designer-link {
    color: #2e7d32;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
}

.designer-link:hover {
    color: #1b5e20;
    transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 960px) {
    .footer {
        padding: 40px 0 20px;
        margin-top: 60px;
    }

    .footer-title {
        font-size: 1.1rem;
    }

    .logo {
        font-size: 1.2rem;
    }
}
</style>
