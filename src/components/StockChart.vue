<template>
  <!-- TradingView Widget BEGIN -->
  <div class="tradingview-widget-container">
    <div id="tradingview"></div>
    <div class="tradingview-widget-copyright">
      <a
        :href="
          'https://www.tradingview.com/symbols/' +
          currentStockTicker.substring(0, currentStockTicker.indexOf(':')) +
          '-' +
          currentStockTicker.substring(
            currentStockTicker.indexOf(':') + 1,
            currentStockTicker.length
          ) +
          '/'
        "
        rel="noopener"
        target="_blank"
        ><span class="blue-text"
          >{{
            currentStockTicker.substring(
              currentStockTicker.indexOf(":") + 1,
              currentStockTicker.length
            )
          }}
          Chart</span
        ></a
      >
      by TradingView
    </div>
  </div>
  <section class="trading-view--stock-ticker-picker">
    <Button
      v-for="stockTicker in stockTickers"
      :label="stockTicker"
      @click="changeStockTicker(stockTicker)"
      :key="stockTicker"
      :disabled="stockTicker === currentStockTicker"
    />
  </section>
</template>

<script>
import Button from "./ui/Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      tradingViewWidget: Object,
      stockTickers: [
        "NASDAQ:AAPL",
        "NYSE:CRM",
        "NASDAQ:PYPL",
        "NASDAQ:DOCU",
        "NYSE:BRK.B",
        "NASDAQ:SBUX",
        "NASDAQ:COST",
        "NYSE:BAM",
        "NYSE:QSR",
        "NYSE:RY",
        "NYSE:TFII",
        "NYSE:ENB",
      ],
      currentStockTicker: "NASDAQ:AAPL", // default
    };
  },
  methods: {
    changeStockTicker(newTicker) {
      this.currentStockTicker = newTicker;
      this.tradingViewWidget = new TradingView.widget({
        autosize: true,
        symbol: this.currentStockTicker,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "2",
        locale: "en",
        toolbar_bg: "#1f2d40",
        enable_publishing: false,
        allow_symbol_change: true,
        hide_top_toolbar: true,
        container_id: "tradingview",
      });

      this.removeExcessiveCSS();
    },
    removeExcessiveCSS() {
      // Cleanup - TradingView appends an additional style tag to end of body on each initialization
      // So we remove it
      const lastElemInBody = document.body.lastChild;
      if (lastElemInBody.tagName === "STYLE") {
        lastElemInBody.remove();
      }
    },
  },
  mounted() {
    this.tradingViewWidget = new TradingView.widget({
      autosize: true,
      symbol: this.stockTicker,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "2",
      locale: "en",
      toolbar_bg: "#1f2d40",
      enable_publishing: false,
      allow_symbol_change: true,
      hide_top_toolbar: true,
      container_id: "tradingview",
    });
  },
  beforeUnmount() {
    this.removeExcessiveCSS();
  },
};
</script>

<style scoped>
.tradingview-widget-container,
#tradingview {
  width: 100%;
  height: 100%;
  max-height: 400px;
}
.tradingview-widget-container {
  margin-bottom: 40px;
}

.trading-view--stock-ticker-picker {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px 20px;
}

@media only screen and (max-width: 600px) {
  .tradingview-widget-container,
  #tradingview {
    height: 300px;
  }
}
</style>