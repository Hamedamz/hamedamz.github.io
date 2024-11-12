<script setup>
import PUBLICATIONS from "~/data/publications.ts";
import NEWS from "~/data/news.ts";
import HERO from "~/data/hero.ts";

useHead({
  title: "Hamed Alimohammadzadeh",
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
  ],
  htmlAttrs: {
    class: 'scroll-smooth'
  }
});

const main = ref(null)
const nav = ref(null)

const navItems = ['about', 'news', 'research']
const activeNavId = ref(navItems[0])
const activeNavIndex = computed(() => navItems.indexOf(activeNavId.value))

const navItemsWidth = ref([0])
const navIndicatorOffset = computed(() => 8 + navItemsWidth.value.slice(0, activeNavIndex.value).reduce((sum, current) => sum + current, 0))
const navIndicatorWidth = computed(() => navItemsWidth.value[activeNavIndex.value])

onMounted(() => {
  navItemsWidth.value = Array.from(nav.value.children).map(x => x.offsetWidth)
})

const observer = ref(null)
const observerOptions = reactive({
  root: main.value,
  threshold: 1,
})

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        activeNavId.value = id
      }
    })
  }, observerOptions)

  document.querySelectorAll('div.anchor[id]').forEach((section) => {
    observer.value?.observe(section)
  })
})

onUnmounted(() => {
  observer.value?.disconnect()
})


</script>

<template>
  <div class="w-full h-[60vh] blur-3xl opacity-80 absolute px-32 -top-[40vh]">
    <div class="w-full h-full rounded-full blur-[100px] bg-gradient-to-r from-pink-500 from-10% via-sky-500 via-30% to-indigo-500 to-90%"/>
    <div class="overflow-y-auto w-1 z-0 scrollbar-hidden size-0">.</div>
  </div>

  <main ref="main" class="max-w-5xl mx-auto px-4 overflow-visible">


    <div class="flex flex-col justify-end items-center sticky top-0 h-20 z-40">
      <nav ref="nav"
          class="inline-block rounded-full p-2 drop-shadow-xl ring-1 ring-opacity-10 ring-slate-500 backdrop-blur bg-white bg-opacity-50 text-lg">
        <a v-for="nav in navItems"
           :key="nav"
           :href="`#${nav}`"
           class="inline-block capitalize px-4 py-1 rounded-full bg-opacity-25 text-slate-800 font-medium">
          {{ nav }}
        </a>

        <span
            :style="{left: `${navIndicatorOffset}px`, width: `${navIndicatorWidth}px`}"
            class="top-2 absolute h-9 rounded-full bg-slate-400 bg-opacity-25 transition-all duration-200 ease-in-out"
        />
      </nav>
    </div>

    <section class="relative md:min-h-screen pt-32 md:pt-0 flex flex-col justify-center gap-y-16 -mt-20">

      <div id="about" class="anchor absolute -z-50 top-0 w-full h-half-screen">
      </div>

      <div class="flex items-center gap-4">
        <div class="flex flex-col justify-center">
          <div class="flex items-center gap-x-4 sm:gap-x-8">
            <div class="w-28 sm:w-48 md:hidden">
              <img :src="HERO.photo" :alt="`${HERO.my_name}'s photo`" class="rounded-2xl"/>
            </div>

            <h1 class="text-lg sm:text-2xl md:text-3xl font-bold">{{ HERO.my_name }}</h1>
          </div>

          <div class="mt-8" v-html="HERO.bio"></div>
        </div>

        <div class="hidden md:block">
          <img :src="HERO.photo" :alt="`${HERO.my_name}'s photo`" class="rounded-2xl"/>
        </div>
      </div>

      <div class="text-center">
        <a
            class="text-sm capitalize transition-colors text-slate-600 border-gray-200 inline-block rounded-full px-4 py-1 me-4 mb-4 bg-slate-100 hover:bg-slate-200"
            v-for="resource in HERO.profiles"
            :href="resource.link"
            target="_blank"
        >
          {{ resource.name }}
        </a>
      </div>

    </section>

    <section class="relative min-h-half-screen py-11 mt-1">
      <div id="news" class="anchor absolute -z-50 top-0 w-full h-half-screen"/>

      <h2 class="font-semibold text-3xl mb-16">News</h2>

      <NewsItem
          v-for="(news, i) in NEWS"
          :key="i"
          :news="news"
          class="mb-8 last:mb-0"
      />
    </section>

    <section class="relative min-h-half-screen py-11 mt-1">
      <div id="research" class="anchor absolute -z-50 top-0 w-full h-half-screen"/>

      <h2 class="font-semibold text-3xl mb-16">Research</h2>

      <PublicationItem
          v-for="(pub, i) in PUBLICATIONS"
          :key="i"
          :pub="pub"
          class="mb-16 last:mb-0"
      />
    </section>
  </main>
</template>
