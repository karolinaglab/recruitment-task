<template>
  <div>
    <ul>
      <li v-for="house in getHouses" :key="house._id">
        <router-link :to="`/house/${house._id}`">{{
          house.createdAt
        }}</router-link>
        <button @click="deleteHouse(house._id)">DELETE</button>
      </li>
    </ul>
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
export default class HousesView extends Vue {
  @houses.Action
  public fetchAllHouses!: () => void;

  @houses.Getter
  public getHouses!: House[];

  @houses.Action
  public deleteHouseByID!: (id: string) => void;

  public deleteHouse(id: string): void {
    this.deleteHouseByID(id);
  }

  created(): void {
    this.fetchAllHouses();
  }
}
</script>

<style lang="scss" scoped></style>
