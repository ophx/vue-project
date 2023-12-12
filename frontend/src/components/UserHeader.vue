<template>
    <div class="flex items-center justify-between w-full">
        <div></div>
        <div>
            <div class="relative" @click="toggleUserDropdown">
                <button type="button" class="w-52 transition-all duration-200 px-4 py-2 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-900">
                    <div class="flex items-center justify-between w-full">
                        <div class="flex flex-col text-left w-24">
                            <p class="text-gray-400 text-sm truncate">Lorem:</p>
                            <p class="text-white font-medium truncate">@ophx</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6 ml-4">
                                <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <transition name="popup" mode="out-in">
        <div v-if="isOpen" class="absolute right-4 z-10 w-52 bg-gray-800 rounded-lg shadow-lg">
            <ul class="py-2">
                <li>
                    <router-link to="/dashboard" class="cursor-pointer block px-4 py-2 transition-all duration-200 text-gray-400 hover:text-white font-medium">
                        Lorem
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard" class="cursor-pointer block px-4 py-2 transition-all duration-200 text-gray-400 hover:text-white font-medium">
                        Lorem
                    </router-link>
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
    import { ref } from "vue";

    export default {
        setup() {
            const isOpen = ref(false);
            const toggleUserDropdown = () => {
                isOpen.value = !isOpen.value;
            };
            return {
                isOpen,
                toggleUserDropdown,
            };
        }
    }
</script>