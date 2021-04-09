<template>
  <nav class="navbar">
    <TabMenu :model="items" />
  </nav>
</template>

<script>
import TabMenu from "primevue/tabmenu";

export default {
  components: {
    TabMenu,
  },
  data() {
    return {
      items: [
        { label: "Home", icon: "pi pi-home", to: "/" },
        { label: "Community", icon: "pi pi-globe", to: "/community" },
        { label: "Analyze", icon: "pi pi-chart-bar", to: "/analyze" },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 60px;

  background: var(--secondary-color);
}

.p-tabmenu {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.p-tabmenu::v-deep(.p-tabmenu-nav) {
  background: transparent;
  border: none;
}

.p-tabmenu::v-deep(.p-tabmenu-nav .p-tabmenuitem) {
  margin: 0px 10px;

  color: var(--text-color-grey);

  transition: color 0.15s ease-in-out;
}
.p-tabmenu::v-deep(.p-tabmenu-nav .p-tabmenuitem:hover),
.p-tabmenu::v-deep(.p-tabmenu-nav .p-tabmenuitem.p-highlight) {
  color: var(--text-color-white);
}

.p-tabmenu::v-deep(.p-tabmenu-nav .p-tabmenuitem .p-menuitem-link) {
  border-radius: 3px;
}
.p-tabmenu::v-deep(.p-tabmenu-nav .p-tabmenuitem .p-menuitem-link),
.p-tabmenu::v-deep(.p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link),
.p-tabmenu::v-deep(.p-tabmenu-nav
    .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover
    .p-menuitem-link) {
  background: transparent;
  color: inherit;
  border: none;
  box-shadow: none;
  padding: 0;
}

.p-tabmenu::v-deep(.p-tabmenuitem .p-menuitem-icon) {
  margin-left: 1px;
  margin-right: 10px;

  font-size: 25px;
}

@media only screen and (max-width: 600px) {
  .p-tabmenu::v-deep(.p-tabmenu-nav .p-tabmenuitem) {
    padding: 5px 20px;
    margin: 0px;
  }

  .p-tabmenu::v-deep(.p-tabmenu-nav .p-tabmenuitem .p-menuitem-link) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .p-tabmenu::v-deep(.p-tabmenu-nav
      .p-tabmenuitem
      .p-menuitem-link
      .p-menuitem-icon) {
    margin: 0 0 5px 0;
    font-size: 20px;
  }
}
</style>