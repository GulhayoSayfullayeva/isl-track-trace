<template>
  <div class="h-dvh">
    <p class="p-2 text-left md:p-4">
      <Breadcrumb :home="home" :model="items">
        <template #item="{ item, props }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a :href="href" v-bind="props.action" @click="navigate">
              <span :class="[item.icon, 'text-color']" />
              <span class="text-primary font-semibold">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span class="text-surface-700 dark:text-surface-0">{{
              item.label
            }}</span>
          </a>
        </template>
      </Breadcrumb>
    </p>
    <div class="highlight p-7 text-left font-bold text-3xl md:p-9">
      Port Calls
    </div>
    <div class="flex flex-col m-2 md:m-8 md:p-4">
      <p class="m-4 text-left font-bold md:m-6 md:text-xl">Status</p>
      <Select
        v-model="selectedStatus"
        :options="statusList"
        placeholder="Select a Status"
        class="w-56 ml-4 md:ml-6"
        @change="filterTable"
      />
      <DataTable
        stripedRows
        :value="filteredportCalls"
        tableStyle="min-width: 50rem"
        class="m-6"
      >
        <Column field="status" header="Status"></Column>
        <Column field="vesselName" header="Vessel" style="color: #14387f; font-weight: bold; text-align: center;"
        :pt="{
            columnHeaderContent: 'flex justify-center text-gray-700'
          }">
        </Column>
        <Column field="terminalName" header="Terminal"></Column>
        <Column header="Voyage" style="text-align: center;"
        :pt="{
            columnHeaderContent: 'flex justify-center'
          }">
          <template #body="slotProps">
            <div
              class="flex flex-col justify-center"
            >
              <div>{{ slotProps.data.carrierCode }}<br /></div>
              <div>
                <i class="pi pi-angle-down"></i>
                {{ slotProps.data.incomingVoyageNumber }}
                <i class="pi pi-angle-up pl-2 md:pl-4"></i>
                {{ slotProps.data.outgoingVoyageNumber }}
              </div>
            </div>
          </template>
        </Column>
        <Column field="receivedAt" header="Arrival" sortable></Column>
        <Column field="etd" header="Departure" sortable></Column>
      </DataTable>
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
        { label: "Port Calls", route: "/portCalls" },
      ],
      selectedStatus: "",
      statusList: ["ALL"],
      portCalls: [],
      filteredportCalls: [],
      date: "",
      time: "",
    };
  },
  mounted() {
    fetch("http://localhost:3000/portCalls")
      .then((response) => response.json())
      .then((data) => {
        this.portCalls = data;
        this.filteredportCalls = data;
        this.portCalls.forEach((portCall, index) => {
          if (!this.statusList.includes(portCall.status)) {
            this.statusList.push(portCall.status);
          }
          let today = new Date(portCall.etd);
          this.formatTime(today);
          console.log(today);
          this.portCalls[index].etd = this.date + "  " + this.time;
          today = new Date(portCall.receivedAt);
          this.formatTime(today);

          this.portCalls[index].receivedAt = this.date + "  " + this.time;
        });
      })
      .catch((error) => console.log(error.message));
  },
  methods: {
    AddZero(num) {
      return num >= 0 && num < 10 ? "0" + num : num + "";
    },
    formatTime(today) {
      this.date =
        today.getFullYear() +
        "-" +
        this.AddZero(today.getMonth() + 1) +
        "-" +
        this.AddZero(today.getDate());
      this.time =
        this.AddZero(today.getHours()) + ":" + this.AddZero(today.getMinutes());
    },
    filterTable() {
      this.filteredportCalls = this.portCalls.filter((port) => {
        return this.selectedStatus === "ALL"
          ? true
          : port.status === this.selectedStatus
          ? true
          : false;
      });
    },
  },
};
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