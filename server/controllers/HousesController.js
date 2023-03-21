import { dbContext } from "../db/DbContext.js";
import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
  constructor() {
    super('/api/houses')
    this.router
      .get('', this.fetchAllHouses)
      .get('/:houseId', this.fetchHouseById)
      .post('', this.createHouse)
      .delete('/:houseId', this.deleteHouse)
      .put('/:houseId', this.updateHouse)
  }

  async fetchAllHouses(req, res, next) {
    try {
      const houses = await housesService.fetchAllHouses()
      res.send(houses)
    } catch (error) {
      next(error)
    }
  }

  async fetchHouseById(req, res, next) {
    try {
      const houseId = req.params.houseId
      const house = await housesService.fetchHouseById(houseId)
      res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async createHouse(req, res, next) {
    try {
      const houseData = req.body
      const newHouse = await housesService.createHouse(houseData)
      res.send(newHouse)
    } catch (error) {
      next(error)
    }
  }

  async deleteHouse(req, res, next) {
    try {
      const houseId = req.params.houseId
      await housesService.deleteHouse(houseId)
      res.send(`House with ID ${houseId} has successfully been deleted`)
    } catch (error) {
      next(error)
    }
  }

  async updateHouse(req, res, next) {
    try {
      const houseId = req.params.houseId
      const houseInfo = req.body
      const revisedHouse = await housesService.updateHouse(houseId, houseInfo)
      res.send(revisedHouse)
    } catch (error) {
      next(error)
    }
  }
}