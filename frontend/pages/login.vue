<script setup>
const form = ref({
  email: "test@example.com",
  password: "password"
})

const handleLogin = async () => {
  await useFetch("http://localhost:8000/sanctum/csrf-cookie", {
    credentials: "include",
  })

  const token = useCookie("XSRF-TOKEN")

  await useFetch("http://localhost:8000/login", {
    credentials: "include",
    method: "POST",
    watch: false,
    body: form.value,
    headers: {
      "X-XSRF-TOKEN": token.value
    }
  })
}

</script>

<template>
  <div>
    <h3 class="font-bold text-xl mb-3">Login Form</h3>
    <form @submit.prevent="handleLogin()">
      <input class="border border-gray-500 rounded-lg block mb-3 px-3 py-2" type="text" v-model="form.email">
      <input class="border border-gray-500 rounded-lg block mb-3 px-3 py-2" type="password" v-model="form.password">
      <button type="submit" class="bg-blue-100 text-blue-600 font-semibold px-5 py-2 rounded-lg">Login</button>
    </form>
  </div>
</template>

<style scoped></style>
