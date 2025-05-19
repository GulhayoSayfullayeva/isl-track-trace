<template>
  <header
    class=" border-b-gray-100 border-b-2 md:basis-1/5 flex flex-row items-center md:flex-col"
  >
    <div
      class="flex-6 md:h-full md:border-r-2 md:border-gray-200 flex flex-row-reverse md:flex-col"
    >
      <div
        class="flex-1 md:flex-0 p-5 highlight font-bold text-md bg-gray-100 rounded-lg m-5 md:text-2xl"
      >
        ISL TerminalScope
      </div>
      <div
        class="invisible w-0 md:w-full md:float-left md:my-0 md:mx-auto md:h-dvh md:visible"
      >
        <Menubar
          :model="items"
          :breakpoint="point"
          :orientation="orientation"
          :pt="{
            rootList: 'float-left',
            item: ' p-2 border-b-1 border-gray-100 w-full',
            button: 'm-1',
          }"
        >
          <template #item="{ item, props, hasSubmenu }">
            <router-link
              v-if="item.route"
              v-slot="{ href, navigate }"
              :to="item.route"
              custom
            >
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
              </a>
            </router-link>
            <a
              v-else
              v-ripple
              :href="item.url"
              :target="item.target"
              v-bind="props.action"
            >
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
              <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
            </a>
          </template>
        </Menubar>
        
      </div>
      <div class="flex-0 my-auto ml-12 md:hidden">
        <Button
          type="button"
          icon="pi pi-bars"
          class="p-3"
          @click="visible = true"
        />
      </div>

      <Drawer v-model:visible="visible" header="Menu">
        <Menu
          :model="items"
          :pt="{
            list: 'float-left',
            item: ' p-2 border-b-1 border-gray-100 w-full',
          }"
        />
        <template #footer>
          <div class="flex items-center justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#13487f"
              stroke="#13487f"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </template>
      </Drawer>
    </div>

    <div class="flex-1 md:hidden p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="#13487f"
        stroke="#13487f"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"
        ></path>
      </svg>
    </div>
  </header>
  
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-home",
          command: () => {
            this.$router.push("/");
          },
        },
        {
          label: "Container Status",
          icon: "pi pi-box",
          command: () => {
            this.$router.push("/containerStatus");
          },
        },
        {
          label: "Port Calls",
          icon: "pi pi-database",
          command: () => {
            this.$router.push("/portCalls");
          },
        },
      ],
      point: "768px",
      orientation: "vertical",
      visible: false,
    };
  },
};
</script>

<style scoped>
.p-menubar {
  align-items: start;
  border: 0px;
}
.p-menu{
  color: #2f2f2f;
  align-items: start;
  border: 0px;
}
.p-button {
  background-color: #13487f;
}
</style>