<template>
    <div>
        <h1>Players</h1>
        <table class="w-full ">
            <thead class="bg-gray-100 border-b-2 border-gray-200">
                <tr>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Number</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">DKP</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Classes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(player, index) in players" class="even:bg-gray-50">
                    <td>{{ index }}</td>
                    <td>{{ player.name }}</td>
                    <td>{{ player.dkp }}</td>
                    <td>
                        <span v-for="item in player.class">{{ item }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>

const {data: players} = useFetch('/api/players/')


</script>