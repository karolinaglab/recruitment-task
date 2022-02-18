import { House } from "@/entities/house";
import HouseService from "@/services/house-service";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
class HouseModule extends VuexModule {
  public houses: House[] = [];
  public house: House | null = null;

  // getters
  get getHouse(): House | null {
    return this.house;
  }

  get getHouses(): House[] {
    return this.houses;
  }

  // mutations
  @Mutation
  public setHouses(houses: House[]): void {
    this.houses = houses;
  }

  @Mutation
  public setHouse(house: House): void {
    this.house = house;
  }

  @Mutation
  public deleteHouse(id: string): void {
    this.houses = this.houses.filter((house) => {
      return house._id !== id;
    });
  }

  // actions
  @Action({ rawError: true })
  public async fetchAllHouses(): Promise<void> {
    try {
      const response = await HouseService.getAllHouses();
      const houses = response.data.results;
      this.context.commit("setHouses", houses);
    } catch (error) {
      console.error(error);
    }
  }

  @Action({ rawError: true })
  public async fetchHouseByID(id: string): Promise<void> {
    try {
      const response = await HouseService.getHouse(id);
      const house = response.data.result;
      this.context.commit("setHouse", house);
    } catch (error) {
      console.error(error);
    }
  }

  @Action({ rawError: true })
  public async createNewHouse(house: House): Promise<void> {
    try {
      await HouseService.createNewHouse(house);
    } catch (error) {
      console.error(error);
    }
  }

  @Action({ rawError: true })
  public async deleteHouseByID(id: string): Promise<void> {
    try {
      await HouseService.deleteHouse(id);
      this.context.commit("deleteHouse", id);
    } catch (error) {
      console.error(error);
    }
  }
}

export default HouseModule;
