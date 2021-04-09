<template>
  <MainSection>
    <TradingView />
  </MainSection>
</template>

<script>
import MainSection from "../components/ui/MainSection.vue";
import TradingView from "../components/StockChart.vue";
export default {
  components: {
    MainSection,
    TradingView,
  },
};
</script>

<style scoped>
</style>