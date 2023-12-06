<template>
  <div class="container mx-auto">
    <div class="flex h-screen">
      <div class="m-auto">
        <form @submit.prevent="submitForm">
          <transition name="slide" mode="out-in">
            <div :key="step">
              <div v-if="step === 1" class="space-y-4 text-center w-80">
                <img src="https://cdn3.emoji.gg/emojis/4327-businesspepe.png" class="h-24 w-24 rounded-full shadow-lg mx-auto">
                <p class="text-white text-xl font-medium">Welcome to OphxLinks</p>
                <p class="text-gray-400">Lorem, ipsum dolor sit amet consectetur</p>
                <button class="flex w-full transition-all duration-200 px-4 py-2 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-900">
                  <div class="flex items-center justify-between w-full">
                    <div class="flex flex-col text-left">
                      <p class="text-gray-400 text-sm">What language do you speak?</p>
                      <p class="text-white font-medium">Select a language</p>
                    </div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
                <button @click.prevent="nextStep" class="flex w-full justify-center transition-all duration-200 active:translate-y-1 px-4 py-2 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">
                  Get Started
                </button>
              </div>
              <div v-if="step === 2" class="space-y-4 text-center w-80">
                <p class="text-white text-xl font-medium">Welcome to OphxLinks 2</p>
                <button @click.prevent="nextStep" class="flex w-full justify-center transition-all duration-200 active:translate-y-1 px-4 py-2 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">
                  Next
                </button>
              </div>
              <div v-if="step === 3" class="space-y-4 text-center w-80">
                <p class="text-white text-xl font-medium">Welcome to OphxLinks 3</p>
                <button type="submit" class="flex w-full justify-center transition-all duration-200 active:translate-y-1 px-4 py-2 rounded-lg shadow-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm">
                  Finish
                </button>
              </div>
              <p class="text-gray-400 text-right text-sm mt-4">{{ step }} / 3</p>
            </div>
          </transition>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                step: 1,
                formData: {},
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
                this.formData = {};
                this.step = 1;
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
</style>