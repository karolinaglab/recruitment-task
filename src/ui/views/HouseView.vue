<template>
  <div>
    <div v-if="getHouse">
      <p>House id: {{ getHouse._id }}</p>
      <p v-if="getHouse.address">House address: {{ getHouse.address }}</p>
      <p v-if="getHouse.floorsNumber">
        House floors number: {{ getHouse.floorsNumber }}
      </p>
      <p v-if="getHouse.description">
        House description: {{ getHouse.description }}
      </p>
      <p>House created at: {{ getHouse.createdAt }}</p>
      <p>House updated at: {{ getHouse.updatedAt }}</p>
      <button @click="deleteHouse">DELETE</button>
    </div>
  </div>
</template>

<script lang="ts">
import { House } from "@/entities/house";
import { Component, Vue, Prop } from "vue-property-decorator";
import { namespace } from "vuex-class";
const houses = namespace("houses");

@Component({
  components: {},
})
export default class HouseView extends Vue {
  @Prop({
    required: true,
  })
  readonly id!: string;

  @houses.Action
  public fetchHouseByID!: (id: string) => void;

  @houses.Action
  public deleteHouseByID!: (id: string) => void;

  @houses.Getter
  public getHouse!: House[];

  public deleteHouse(): void {
    this.deleteHouseByID(this.id);
    this.$router.push({
      path: "/houses",
    });
  }

  created(): void {
    this.fetchHouseByID(this.id);
  }
}
</script>

<style lang="scss" scoped></style>
