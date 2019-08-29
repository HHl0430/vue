<template>
  <div class="amap-page-container">
    <el-amap
      ref="map"
      vid="amapDemo"
      :amap-manager="amapManager"
      :center="center"
      :zoom="zoom"
      :plugin="plugin"
      :events="events"
      class="amap-demo"
    >
    </el-amap>

  </div>
</template>

  <style>
.amap-demo {
  height: 300px;
}
</style>

  <script>
// NPM 方式
import { amapManager } from "vue-amap";
// CDN 方式
// let amapManager = new VueAMap.AMapManager();
export default {
  data() {
    return {
      amapManager,
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init: o => {
          o.getCity(result => {});
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          alert("map clicked");
        }
      },
      plugin: [
        "ToolBar",
        {
          pName: "MapType",
          defaultType: 0,
          events: {
            init(o) {}
          }
        }
      ]
    };
  },

  methods: {
    getMap() {}
  }
};
</script>