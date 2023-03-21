import { contentSecurityPolicy } from "helmet"
import { dbContext } from "../db/DbContext.js"


class HousesService {

  async fetchAllHouses(query) {
    const houses = await dbContext.Houses.find(query)
    return houses
  }

  async fetchHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)
    return house
  }

  async createHouse(houseData) {
    const newHouse = await dbContext.Houses.create(houseData)
    return newHouse
  }

  async deleteHouse(houseId) {
    await dbContext.Houses.findByIdAndDelete(houseId)
  }

  async updateHouse(houseId, houseInfo) {
    const updatedHouse = await dbContext.Houses.findByIdAndUpdate(houseId, houseInfo, { returnDocument: 'after' })
    return updatedHouse
    // const originalHouse = await this.fetchHouseById(houseId)
    // originalHouse.squareFootage = houseInfo.squareFootage ? houseInfo.squareFootage : originalHouse.squareFootage
    // originalHouse.price = houseInfo.price ? houseInfo.price : originalHouse.price
    // originalHouse.yearBuilt = houseInfo.yearBuilt ? houseInfo.yearBuilt : originalHouse.yearBuilt
    // originalHouse.floors = houseInfo.floors ? houseInfo.floors : originalHouse.floors
    // originalHouse.description = houseInfo.description ? houseInfo.description : originalHouse.description

    // await originalHouse.save()
    // return originalHouse
  }
}

export const housesService = new HousesService()