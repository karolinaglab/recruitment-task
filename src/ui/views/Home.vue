<template>
  <div>
    <div class="flex-container">
      <text-box
        class="flex-item"
        :boxTitle="'Kilka słów o nas'"
        :boxSubTitle="'Czyli kim jesteśmy i dokąd zmierzamy'"
      />
      <text-box
        class="flex-item"
        :boxTitle="'Kilka słów o nas'"
        :boxSubTitle="'Czyli kim jesteśmy i dokąd zmierzamy'"
      />
    </div>
    <div class="flex-container">
      <image-box class="flex-item" />
      <text-box
        class="flex-item"
        :boxTitle="'Kilka słów o nas'"
        :boxSubTitle="'Czyli kim jesteśmy i dokąd zmierzamy'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextBox from "@/ui/components/TextBox.vue";
import ImageBox from "@/ui/components/ImageBox.vue";
import MultiImgBox from "@/ui/components/MultiImgBox.vue";
@Component({
  components: {
    TextBox,
    ImageBox,
    MultiImgBox,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-flow: wrap;
}

.flex-item {
  flex: 1;
}
</style>
