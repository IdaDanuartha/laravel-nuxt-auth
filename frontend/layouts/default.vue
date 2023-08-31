<script lang="ts" setup></script>

<template>
  <div class="container mx-auto my-10 max-w-xl">
    <div class="flex justify-between bg-gray-800 text-white px-7 py-4 rounded-lg mb-5">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
      <NuxtLink to="/auth-only">Auth Only</NuxtLink>
      <NuxtLink to="/guest-only">Guest Only</NuxtLink>
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
