import { defineStore } from "pinia";

interface User {
    id: number,
    name: string,
    email: string
}

interface Credentials {
    email: string,
    password: string,
}

interface RegisterInfo {
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null);

    const isLoggedIn = computed(() => !!user.value)

    const logout = async () => {
        await useApiFetch("/logout", {
            method: "POST"
        })
        user.value = null
        navigateTo("/login")
    }

    const fetchUser = async () => {
        const { data, error } = await useApiFetch("/api/user")
        console.log(error)
        user.value = data.value as User
    }

    const login = async (credentials: Credentials) => {
        await useApiFetch("/sanctum/csrf-cookie")
        await useApiFetch("/login", {    
          method: "POST",    
          body: credentials,
        })
        await fetchUser()
        
        return login
    }

    const register = async (info: RegisterInfo) => {      
        await useApiFetch("/sanctum/csrf-cookie")  
        await useApiFetch("/register", {    
          method: "POST",    
          body: info,
        })
        await fetchUser()
        
        return register
    }

    return {
        user,
        login,
        register,
        isLoggedIn,
        fetchUser,
        logout
    }
})