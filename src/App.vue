<script>
import Sidebar from '../src/components/Sidebar.vue'
import Header from '../src/components/Header.vue'

export default {
  components: {
    Sidebar, Header,
  },

  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
        },
        {
          label: "Features",
          icon: "pi pi-star",
        },
        {
          label: "Projects",
          icon: "pi pi-search",
        },
      ],
      point: "768px",
      orientation: "vertical",
    };
  },
};
</script>

<template>
  <div class="flex flex-col w-full md:flex-row">
   <Sidebar />
    <main class="md:basis-4/5 flex flex-col">
      <Header />
      <div class="bg-amber-50 h-dvh">
        <p class="p-2 text-left md:p-4">Some kind of links from websites</p>
        <h1 class="highlight p-2 text-left font-bold text-3xl md:p-4">
          Port Calls
        </h1>
        <div class="flex justify-center m-2 md:m-8 md:p-4 bg-green-200">
          Table
        </div>
      </div>
    </main>
  </div>
</template>

<style>
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2f2f2f;
}
.highlight {
  color: #14387f;
}
.custom-menubar .p-menubar {
  border-radius: 8px;
  padding: 1rem;
  background: var(--surface-a);
  border: 1px solid var(--surface-d);
}
</style>

