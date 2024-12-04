<template>
    <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            
            <MobileNavToggle />
            <Navbar />
        </div>
    </header>
</template>

<script>
import Logo from './Logo.vue'
import MobileNavToggle from './MobileNavToggle.vue'
import Navbar from './Navbar.vue'

export default {
    components: {
        Logo,
        MobileNavToggle,
        Navbar
    }
}
</script>