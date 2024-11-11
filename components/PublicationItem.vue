<script setup lang="ts">
import HERO from "~/data/hero";
import type {Publication} from "~/data/types";

type PublicationProps = {
  pub: Publication;
}

const props = defineProps<PublicationProps>()

</script>

<template>
  <article class="flex flex-wrap sm:flex-nowrap gap-8">
    <figure class="sm:basis-2/5">
      <img
          :src="pub.image"
          class="aspect-[3/2] rounded-2xl ring-1 ring-slate-200 object-cover"
      >
    </figure>

    <div class="sm:basis-3/5">
      <p class="text-sm font-light text-slate-500">
        {{ pub.publisher }} {{ pub.year }}
      </p>

      <header class="mt-3 text-base font-medium text-slate-900 tracking-tight">
        <h2>{{ pub.title }}</h2>
      </header>

      <p class="mt-1 text-sm text-slate-700">
      <span
          class="me-2 inline-block"
          :class="{'font-light': author !== HERO.my_name}"
          v-for="(author, i) in pub.authors"
      >
        {{ author }}<template v-if="i < pub.authors.length - 1">,</template>
      </span>
      </p>

      <p class="mt-4 text-sm text-slate-500"> {{ pub.summary }} </p>

      <footer class="mt-6">
        <a
            class="text-sm capitalize transition-colors text-slate-600 border-gray-200 inline-block rounded-full px-4 py-1 me-4 mb-4 bg-slate-100 hover:bg-slate-200"
            v-for="resource in pub.resources"
            :href="resource.link"
            target="_blank"
        >
          {{ resource.name }}
        </a>
      </footer>
    </div>
  </article>
</template>

<style scoped>

</style>