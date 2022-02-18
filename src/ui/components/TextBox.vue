<template>
  <div class="box-container">
    <header class="header">
      <h1>{{ boxTitle }}</h1>
      <h2>{{ boxSubTitle }}</h2>
    </header>
    <article class="article">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Turpis egestas maecenas pharetra convallis posuere morbi leo
      urna molestie. Ultricies leo integer malesuada nunc. Nisi quis eleifend
      quam adipiscing. Ipsum a arcu cursus vitae congue mauris rhoncus aenean
      vel. Pharetra et ultrices neque ornare aenean euismod elementum nisi.
      Lacus suspendisse faucibus interdum posuere. Proin sagittis nisl rhoncus
      mattis. Maecenas ultricies mi eget mauris pharetra et ultrices. Nullam non
      nisi est sit amet facilisis. Et molestie ac feugiat sed lectus vestibulum
      mattis ullamcorper velit. Vitae tempus quam pellentesque nec. Pellentesque
      sit amet porttitor eget. Nunc sed id semper risus in hendrerit gravida
      rutrum quisque. Amet est placerat in egestas erat imperdiet sed euismod
      nisi. Sodales neque sodales ut etiam sit. Cursus sit amet dictum sit amet
      justo donec. Semper quis lectus nulla at volutpat diam ut venenatis.
      Consequat semper viverra nam libero. Gravida arcu ac tortor dignissim.
      Diam ut venenatis tellus in metus vulputate eu.
    </article>
    <button @click="navigateToHouses" class="box-button">Zobacz więcej</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class TextBox extends Vue {
  @Prop({
    required: true,
  })
  readonly boxTitle!: string;
  @Prop({
    required: true,
  })
  readonly boxSubTitle!: string;

  public navigateToHouses(): void {
    this.$router.push({
      path: "/houses",
    });
  }
}
</script>

<style lang="scss" scoped>
.box-container {
  padding-bottom: 50px;
}
.header {
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 20px;

  h1 {
    padding: 0;
  }

  h2 {
    color: #0066ff;
  }
}

.article {
  margin: 30px 80px;
  margin-bottom: 30px;
}

.box-button {
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  color: #0066ff;
  border: 1px solid;
  border-color: #0066ff;
  &:hover {
    background-color: #99c2ff;
    cursor: pointer;
  }
}
</style>
