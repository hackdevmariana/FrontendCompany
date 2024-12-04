<template>
    <a href="/" class="logo d-flex align-items-center">
        <h1>{{ name }}<span>.</span></h1>
    </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

const name = ref('')

onMounted(async () => {
    const config = useRuntimeConfig()
    const apiServer = config.public.apiServer
    const webSlug = config.public.webSlug

    try {
        const response = await $fetch(`${apiServer}/api/v1/webs/${webSlug}/`)
        name.value = response.name
    } catch (error) {
        console.error('Error fetching name:', error)
    }
})
</script>