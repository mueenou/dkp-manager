<template>
    <div>
        <nav class="h-16 flex items-center bg-green-600/20 shadow-md shadow-emerald-900">
            <ul class="mx-auto flex flex-row justify-center md:w-[50%]">
                <nuxt-link to="/">
                    <li class="flex items-center h-16 w-40 text-black hover:bg-green-900 hover:text-gray-200 duration-200 font-bold uppercase justify-center">Home</li>
                </nuxt-link>
                <nuxt-link to="/dkp">
                    <li class="flex items-center h-16 w-40 text-black hover:bg-green-900 hover:text-gray-200 duration-200 font-bold uppercase justify-center">DKP</li>
                </nuxt-link>
                <nuxt-link to="/roster">
                    <li class="flex items-center h-16 w-40 text-black hover:bg-green-900 hover:text-gray-200 duration-200 font-bold uppercase justify-center">Rosters</li>
                </nuxt-link>
                <nuxt-link to="/players">
                    <li class="flex items-center h-16 w-40 text-black hover:bg-green-900 hover:text-gray-200 duration-200 font-bold uppercase justify-center">Players</li>
                </nuxt-link>
            </ul>
        </nav>
        <slot/>
    </div>
</template>

<script setup>
</script>