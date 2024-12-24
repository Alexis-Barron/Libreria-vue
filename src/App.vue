<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-blue-500 py-4">
      <div class="container mx-auto px-4 flex justify-center items-center">
        <nav class="space-x-6">
          <RouterLink to="/" class="text-white font-semibold hover:text-blue-200 transition duration-300">Home</RouterLink>
          <RouterLink to="/NuevoLibro" class="text-white font-semibold hover:text-blue-200 transition duration-300">Nuevo libro</RouterLink>
        </nav>
      </div>
    </header>

    <main class="py-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
</style>
