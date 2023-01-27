<template>
    <div class="mt-10">
        <table class="w-full shadow-md border-collapse">
            <thead class="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Number</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">DKP</th>
                    <th class="p-3 text-sm font-semibold tracking-wide text-left">Classes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(player, index) in players" class="even:bg-gray-50">
                    <td class="p-3 text-sm text-gray-700">{{ index+1 }}</td>
                    <td class="p-3 text-sm text-gray-700">{{ player.name }}</td>
                    <td class="p-3 text-sm text-gray-700">{{ player.dkp }}</td>
                    <td class="p-3 flex items-center">
                        <span v-for="item in player.class" class="flex flex-row items-center mr-3">
                            <div :class="`${defineClassColor(item.bgColor)} rounded-full h-3 w-3 inline-block`"></div>
                            <div class="-mt-1 ml-1">{{ item.class }}</div>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const {data} = await useFetch('/api/players/')

var players = ref([])

if(data.value.length > 0) {
    players = data.value.map(element => {
      return {
        ...element,
        class: element.class.map(c => ({ class: c, bgColor: c }))
      };
    })
}

function defineClassColor(wowclass) {
    switch (wowclass) {
        case 'death-knight':
            return "death-knight"
        case 'mage':
            return "mage"
        case 'druid':
            return "druid"
        case 'priest':
            return "priest"
        case 'hunter':
            return "hunter"
        case 'paladin':
            return "paladin"
        case 'warrior':
            return "warrior"
        case 'warlock':
            return "warlock"
        case 'rogue':
            return "rogue"
        default:
            break;
    }
}

console.log(players)

</script>

<style scoped>
</style>