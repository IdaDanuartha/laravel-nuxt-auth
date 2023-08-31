<script setup>
import { useAuthStore } from '@/stores/useAuthStore'

const auth = useAuthStore()

const handleLogout = async () => {
  await auth.logout()
}
</script>

<template>
  <div class="container mx-auto my-10 max-w-xl">
    {{ auth.user }}
    <div class="flex justify-between bg-gray-800 text-white px-7 py-4 rounded-lg mb-5">
      <NuxtLink class="px-3 py-2" to="/">Home</NuxtLink>
      <NuxtLink class="px-3 py-2" to="/login">Login</NuxtLink>
      <NuxtLink class="px-3 py-2" to="/register">Register</NuxtLink>
      <NuxtLink class="px-3 py-2" to="/auth-only">Auth Only</NuxtLink>
      <NuxtLink class="px-3 py-2" to="/guest-only">Guest Only</NuxtLink>
      <button v-if="auth.isLoggedIn" @click="handleLogout()" class="bg-green-600 text-white px-3 py-2 rounded-xl">Logout</button>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
