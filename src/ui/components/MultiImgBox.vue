<template>
  <div class="flex-container">
    <img
      class="flex-item"
      src="https://st.depositphotos.com/1359043/1556/i/950/depositphotos_15561479-stock-photo-blue-butterfly-on-blue-background.jpg"
      alt="Image"
    />
    <img
      class="flex-item"
      src="https://media.istockphoto.com/photos/group-of-busy-business-people-working-in-office-top-view-picture-id590608096?k=20&m=590608096&s=170667a&w=0&h=N_krEqdcSZ6c-cV0Tj2Di3wAW_OxfP723DNG6sDmwak="
      alt="Image"
    />
    <img
      class="flex-item"
      src="https://popmenucloud.com/ywtpqisk/5a136866-0ff9-4497-b372-398860456473.jpg"
      alt="Image"
    />
    <img
      class="flex-item"
      src="https://popmenucloud.com/ywtpqisk/5a136866-0ff9-4497-b372-398860456473.jpg"
      alt="Image"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImageBox from "@/ui/components/ImageBox.vue";

@Component({
  components: { ImageBox },
})
export default class MultiImgBox extends Vue {}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-flow: wrap;

  img {
    max-width: 25vw;
  }
}

.flex-item {
  flex: 1;
}
</style>
