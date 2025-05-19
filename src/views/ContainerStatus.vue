<template>
  <div class="h-dvh">
    <p class="p-2 text-left md:p-4">
      <Breadcrumb :home="home" :model="items">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else :href="item.url" :target="item.target" v-bind="props.action">
            <span class="text-surface-700 dark:text-surface-0">{{
              item.label
            }}</span>
          </a>
        </template>
      </Breadcrumb>
    </p>
    <div class="highlight p-7 text-left font-bold text-3xl md:p-9">
      Container Status
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      home: {
        label: "Breadcrumb",
        route: "/",
      },
      items: [
        { label: "Navigation" },
        { label: "Container Status", route: "/containerStatus" },
      ],
    }
  }
}

</script>

<style scoped>
.highlight {
  color: #14387f;
}

.p-select:hover {
  border-radius: 8px;
  border: solid 2px #13487f;
}

.p-select:focus-visible {
  border-radius: 8px;
  border: solid 2px #13487f;
}

.p-select {
  border-radius: 8px;
  border: solid 2px #13487f;
}
</style>