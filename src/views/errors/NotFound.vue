<template>
  <div class="container mx-auto">
    <div class="flex h-screen">
      <div class="m-auto">
        <div class="space-y-4 text-center w-80">
            <img src="https://cdn3.emoji.gg/emojis/6426-error.png" class="h-24 w-24 shadow-lg mx-auto">
            <p class="text-white text-xl font-medium">{{ $t("notFoundMessage") }}</p>
            <p class="text-gray-400">{{ $t("notFoundDescription") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>