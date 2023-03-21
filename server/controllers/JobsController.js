import { dbContext } from "../db/DbContext.js";
import { jobsService } from "../services/JobsService.js";
import BaseController from "../utils/BaseController.js";


export class JobsController extends BaseController {
  constructor() {
    super('/api/jobs')
    this.router
      .get('', this.fetchAllJobs)
      .get('/:jobId', this.fetchById)
      .post('', this.createJob)
      .put('/:jobId', this.updateJob)
      .delete('/:jobId', this.deleteJob)
  }

  async fetchAllJobs(req, res, next) {
    try {
      const query = req.query
      const jobs = await jobsService.fetchAllJobs(query)
      res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  async fetchById(req, res, next) {
    try {
      const jobId = req.params.jobId
      const job = await jobsService.fetchById(jobId)
      res.send(job)
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

  async updateJob(req, res, next) {
    try {
      const jobId = req.params.jobId
      const jobInfo = req.body
      const job = await jobsService.updateJob(jobId, jobInfo)
      res.send(job)
    } catch (error) {
      next(error)
    }
  }

  async deleteJob(req, res, next) {
    try {
      const jobId = req.params.jobId
      await jobsService.deleteJob(jobId)
      res.send(`The job with ID ${jobId} has been deleted`)
    } catch (error) {
      next(error)
    }
  }
}