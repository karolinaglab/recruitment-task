<template>
  <div>
    <button @click="createHouse">CREATE</button>
  </div>
</template>

<script lang="ts">
import { House } from "@/entities/house";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const houses = namespace("houses");

@Component({
  components: {},
})
export default class AddHouseView extends Vue {
  private houseToAdd: House = {
    address: "",
    floorsNumber: 0,
    description: "",
    label: "",
  };
  @houses.Action
  public createNewHouse!: (house: House) => void;

  public createHouse(): void {
    this.createNewHouse(this.houseToAdd);
  }
}
</script>

<style lang="scss" scoped></style>
