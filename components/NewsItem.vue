<script setup lang="ts">
import type {News} from "~/data/types";

type NewsProps = {
  news: News;
}

const props = defineProps<NewsProps>()

</script>

<template>
  <article class="flex flex-wrap md:flex-nowrap gap-4 items-center">
    <div class="text-sm font-light text-slate-500 min-w-32">
      {{ news.month }} {{ news.year }}
    </div>
    <p class="text-slate-900" v-html="news.headline"></p>
  </article>
</template>

<style scoped>

</style>