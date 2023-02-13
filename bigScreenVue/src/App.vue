<script setup>
import useScalePage from "@/hooks/useScalePage";
const option = {
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9,
};
useScalePage(option);
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
