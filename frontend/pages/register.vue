<script setup>
import { useAuthStore } from '@/stores/useAuthStore'

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
})

const auth = useAuthStore()

const handleRegister = async () => {
  const { error } = await auth.register(form.value)
  if(!error.value) {
    navigateTo("/")
  }
}

</script>

<template>
  <div>
    <h3 class="font-bold text-xl mb-3">Register Form</h3>
    <form @submit.prevent="handleRegister()">
      <input class="border border-gray-500 rounded-lg block mb-3 px-3 py-2" type="text" placeholder="Input name..." v-model="form.name">
      <input class="border border-gray-500 rounded-lg block mb-3 px-3 py-2" type="email" placeholder="Input email..." v-model="form.email">
      <input class="border border-gray-500 rounded-lg block mb-3 px-3 py-2" type="password" placeholder="Input pass..." v-model="form.password">
      <input class="border border-gray-500 rounded-lg block mb-3 px-3 py-2" type="password" placeholder="Input pass confirmation..." v-model="form.password_confirmation">
      <button type="submit" class="bg-blue-100 text-blue-600 font-semibold px-5 py-2 rounded-lg">Create Account</button>
    </form>
  </div>
</template>

<style scoped></style>
