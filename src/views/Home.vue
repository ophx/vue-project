<template>
  <div class="container mx-auto">
    <div class="flex h-screen">
      <div class="m-auto">
        <form @submit.prevent="submitForm">
          <transition name="slide" mode="out-in">
            <div :key="step">
              <div v-if="step === 1" class="space-y-4 text-center w-80">
                <img src="https://cdn3.emoji.gg/emojis/5443-peepobusinesstux.png" class="h-24 w-24 shadow-lg mx-auto">
                <p class="text-white text-xl font-medium">{{ $t("welcomeMessage") }}</p>
                <p class="text-gray-400">{{ $t("welcomeDescrption") }}</p>
                <div class="relative" @click="toggleLanguageDropdown">
                    <button type="button" class="flex w-full transition-all duration-200 px-4 py-2 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-900">
                        <div class="flex items-center justify-between w-full">
                            <div class="flex flex-col text-left">
                                <p class="text-gray-400 text-sm">{{ $t("whatDoYouSpeak") }}</p>
                                <p class="text-white font-medium">{{ selectedLanguage }}</p>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                                    <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </button>
                </div>
                <transition name="popup" mode="out-in">
                    <div v-if="isOpen" class="absolute z-10 w-80 bg-gray-800 rounded-lg shadow-lg">
                        <ul class="py-2">
                            <li v-for="language in languages" :key="language.id" @click="selectLanguage(language)">
                                <a class="cursor-pointer block px-4 py-2 transition-all duration-200 text-gray-400 hover:text-white font-medium">
                                    {{ language.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </transition>
                <button @click.prevent="nextStep" class="flex w-full justify-center transition-all duration-200 active:translate-y-1 px-4 py-2 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">
                    {{ $t("getStarted") }}
                </button>
              </div>

              <div v-if="step === 2" class="space-y-4 text-center w-80">
                <p class="text-white text-xl font-medium">{{ $t("firstThings") }}</p>
                <p class="text-gray-400">{{ $t("whatWeNeed") }}</p>
                <div class="text-left">
                    <label for="username" class="text-gray-400 text-sm font-medium">
                        {{ $t("unameLabel") }}
                    </label>
                    <input type="text" id="username" autocomplete="off" v-model="formData.username" class="flex w-full transition-all duration-200 px-4 py-2 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-900 outline-none border-none placeholder-gray-400 text-white">
                    <div v-if="usernameErr">
                        <p class="text-red-600 text-sm">{{ $t("unameErr") }}</p>
                    </div>
                </div>
                <button @click.prevent="nextStep" class="flex w-full justify-center transition-all duration-200 active:translate-y-1 px-4 py-2 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">
                    {{ $t("next") }}
                </button>
              </div>

              <div v-if="step === 3" class="space-y-4 text-center w-80">
                <p class="text-white text-xl font-medium">{{ $t("welcomeMessage") }} 3</p>
                <button type="submit" class="flex w-full justify-center transition-all duration-200 active:translate-y-1 px-4 py-2 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">
                    {{ $t("finish") }}
                </button>
              </div>
              
              <div class="flex items-center justify-between mt-4">
                <div>
                    <div v-if="step > 1">
                        <button @click.prevent="prevStep" class="flex w-full justify-center transition-all duration-200 active:translate-y-1 px-4 py-2 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-900 text-white font-medium text-sm">
                            {{ $t("previous") }}
                        </button>
                    </div>
                </div>
                <div>
                    <p class="text-gray-400 text-right text-sm">{{ step }} / 3</p>
                </div>
              </div>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    import { ref } from "vue";
    import i18n from "../locales/i18n";

    if (localStorage.getItem("onboarding") == "done") {
        window.history.pushState(null, null, "/dashboard");
    }

    export default {
        data() {
            return {
                step: 1,
                usernameErr: false,
                formData: {
                    username: "",
                },
            };
        },
        setup() {
            const isOpen = ref(false);
            const selectedLanguage = ref("English");
            const languages = [
                { id: "en", name: "English" },
                { id: "ru", name: "Русский" },
                { id: "pl", name: "Polski" },
                { id: "es", name: "Español" },
                { id: "ro", name: "Română" },
                { id: "ge", name: "Deutsch" },
            ];
            const toggleLanguageDropdown = () => {
                isOpen.value = !isOpen.value;
            };
            const selectLanguage = (language) => {
                selectedLanguage.value = language.name;
                i18n.global.locale = language.id;
                localStorage.setItem("i18n", language.id);
                isOpen.value = false;
            };
            return {
                isOpen,
                selectedLanguage,
                languages,
                toggleLanguageDropdown,
                selectLanguage
            };
        },
        methods: {
            nextStep() {
                this.step++;
            },
            prevStep() {
                this.step--;
            },
            submitForm() {
                const username = this.formData.username;
                if (!username) {
                    this.usernameErr = true;
                    this.step--;
                    return;
                }
                console.log("Username:", this.formData.username);
                localStorage.setItem("onboarding", "done");
            },
        },
    };
</script>

<style>
    .slide-enter-active,
    .slide-leave-active {
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
        transform: translateX(-10px);
    }

    .popup-enter-active,
    .popup-leave-active {
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    }
    .popup-enter-from,
    .popup-leave-to {
        opacity: 0;
        transform: translateY(-10px);
    }
</style>