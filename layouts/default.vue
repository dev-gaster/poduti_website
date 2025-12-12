<template>
  <v-app>
    <!-- Header Navigation -->
    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" temporary>
      <template #prepend>
        <v-toolbar flat color="white">
          <div class="ml-3">Podut Community</div>
          <v-spacer></v-spacer>
          <v-btn icon @click="drawer = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
      </template>
      <v-list>
        <v-list-item v-for="(link, i) in links" :key="i" :to="link.path" link>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar flat color="white" style="
        border-bottom: px solid #e0e0e0 !important;
        backdrop-filter: blur(10px) !important;
      ">
      <v-container fluid class="d-flex align-center">
        <!-- Mobile Menu -->

        <nuxt-link to="/" class="logo-link">
          <div class="logo">
            <v-img src="/icon.png" alt="Podut Community Logo" contain width="40" />
            <div class="d-flex flex-column">
              <div class="ml-2" style="font-size: clamp(1rem, 2.5vw, 1.5rem); line-height: 1">
                P O D U T I
              </div>
              <span class="ml-2"></span>
            </div>
          </div>
        </nuxt-link>

        <v-spacer></v-spacer>

        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex nav-links">
          <nuxt-link v-for="(link, i) in links" :key="i" :to="link.path">
            {{ link.title }}
          </nuxt-link>
        </div>
        <v-spacer />
        <!-- Get involved button -->
        <v-btn color="primary" class="d-none d-md-flex" variant="flat" rounded dark to="/contact">Get Involved</v-btn>
        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <slot />
      <v-bottom-navigation grow color="primary" class="d-md-none">
        <v-btn v-for="(link, i) in bottonNavLinks" :key="i" :to="link.link" exact variant="text">
          <v-icon>{{ link.icon }}</v-icon>

          <span>{{ link.title }}</span>
        </v-btn>
      </v-bottom-navigation>
    </v-main>

    <!-- Footer -->
    <SiteFooter />
  </v-app>
</template>

<script setup lang="ts">
const drawer = ref(false);
const links = [
  { title: "Church", path: "/church" },
  { title: "School", path: "/school" },
  { title: "Community", path: "/community" },
  { title: "Event", path: "/event" },
];
const bottonNavLinks = [
  { title: "Home", icon: "mdi-home", link: "/" },
  { title: "Church", icon: "mdi-church", link: "/church" },
  { title: "School", icon: "mdi-school", link: "/school" },
  { title: "Community", icon: "mdi-account-group", link: "/community" },
];
</script>

<style scoped>
/* Header Styles */
.logo-link {
  text-decoration: none;
  color: inherit;
}

.v-app-bar {
  border-bottom: 1px solid #e0e0e0 !important;
  backdrop-filter: blur(10px) !important;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2e7d32;
}

.nav-links a {
  margin: 0 20px;
  text-decoration: none;
  color: #424242;
  font-weight: 400;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-links a:hover {
  color: #2e7d32;
}

.nav-links a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #2e7d32;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.router-link-exact-active {
  /* font-weight: 600; */
  color: #1976d2;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #1976d2;
}
</style>
