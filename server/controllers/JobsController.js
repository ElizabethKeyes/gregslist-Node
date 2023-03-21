import { dbContext } from "../db/DbContext.js";
import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";


export class JobsController extends BaseController {
  constructor() {
    super('/api/jobs')
    this.router
      .get('', this.fetchAllJobs)
      .post('', this.createJob)
  }

  async fetchAllJobs(req, res, next) {
    try {
      const jobs = await jobsService.fetchAllJobs()
      res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  async createJob(req, res, next) {
    try {
      const jobData = req.body
      const job = await jobsService.createJob(jobData)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }
}