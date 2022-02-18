<template>
  <div class="background">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est
      sit amet facilisis magna etiam. Urna cursus eget nunc scelerisque viverra
      mauris in aliquam sem. Egestas sed tempus urna et pharetra pharetra massa
      massa ultricies. Ac turpis egestas sed tempus urna et pharetra pharetra
      massa. Iaculis urna id volutpat lacus. Porttitor massa id neque aliquam
      vestibulum morbi blandit cursus risus.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class ImageBox extends Vue {}
</script>

<style lang="scss" scoped>
.background {
  height: 50vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(45, 124, 241, 0.8),
      rgba(56, 92, 255, 0.8)
    ),
    url("https://www.dworekkarwia.pl/wp-content/uploads/2021/05/domek-do-gory-nogami-glowne.jpg");
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  vertical-align: middle;
  p {
      margin: 30px 30px;
  }
}
</style>
