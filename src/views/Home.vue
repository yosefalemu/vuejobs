<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>
<template>
  <Hero title="Welcome to Vue Jobs" subtitle="Find your dream job now!" />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
