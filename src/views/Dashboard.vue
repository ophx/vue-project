<template>
    <div class="flex p-4">
        <Sidebar />

        <div class="ml-80 block w-full space-y-2">
            <UserHeader />
        </div>
    </div>
</template>

<script setup>
    import Sidebar from "../components/Sidebar.vue";
    import UserHeader from "../components/UserHeader.vue";
</script>