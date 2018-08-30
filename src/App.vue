<template>
  <div id="app" class="all">
    <router-view class="all" style="background-color: #FFFFFF;"/>
    <div v-if="isMessageShow"
      @click="closeMyself"
      style="
        width: 100%;
        position: fixed;
        height: 60px;
        line-height: 60px;
        background-color: red;
        color: #FFFFFF;
        font-size: 30px;
        left: 0;
        top: 0;
        ">{{ messageBody }}</div>
    <!--<mt-spinner
      :size="40"
      color="#26a2ff"
      style="
        position: fixed;
        left: calc(50% - 20px);
        animation-duration: 1s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
      "
      :style="{
        'animation-name': animationLoadingStyle
      }"

      ></mt-spinner>-->
      <!--<button style="position: fixed; right: 0; top: 0;" @click="open">打开</button>
      <button style="position: fixed; left: 0; top: 0;" @click="close">关闭</button>-->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      animationLoadingStyle: "loadingHide"
    };
  },
  computed: {
    isMessageShow: function() {
      return this.$store.state.messageFlg;
    },
    messageBody: function() {
      return this.$store.state.messageContext;
    }
  },
  methods: {
    closeMyself: function() {
      this.$store.commit("messageClose");
      this.$store.commit("messageContestClean");
    },
//  open: function() {
//    this.animationLoadingStyle = "loadingShow";
//  },
//  close: function() {
//    this.animationLoadingStyle = "loadingHide";
//  }
  }
}
</script>

<style>
  @import url("../static/css/font-awesome.min.css");
  @import url("../static/css/framework7.material.colors.min.css");
  @import url("../static/css/framework7.material.min.css");
  @import url("../static/css/maxframes.css");
  @import url("../static/css/navbar.css");
  @import url("../static/css/job_young.css");

  .all{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

@keyframes loadingShow {
  from {
    bottom: -60px;

  }
  to {
    bottom: 10px;
  }
}

@keyframes loadingHide {
  from {

    bottom: 10px;

  }
  to {
    bottom: -60px;
  }
}

</style>
