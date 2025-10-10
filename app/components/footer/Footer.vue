<template>
    <footer class="pt-10 pb-6 sm:pt-16 pattern-x">
        <div class="w-full max-w-7xl mx-auto px-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="grid grid-cols-1">
                    <Logo />
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <QuickLinks />
                    <Contact />
                </div>
            </div>
            <div class="mt-12 flex flex-col sm:flex-row justify-between items-center gap-10 text-center lg:text-left">
                <Copyright class="order-2 sm:order-1" />
                <Language class="order-1 sm:order-2" />
            </div>
        </div>
    </footer>
</template>





<script setup>
import Logo from './Logo.vue'
import QuickLinks from './QuickLinks.vue'
import Contact from './Contact.vue'
import Language from './Language.vue'
import Copyright from './Copyright.vue'
</script>
