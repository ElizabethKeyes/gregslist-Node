import { dbContext } from "../db/DbContext.js"


class JobsService {

  async fetchAllJobs() {
    const jobs = await dbContext.Jobs.find()
    if (!jobs.length) {
      throw new Error("There are no jobs to display")
    }
    return jobs
  }

  async createJob(jobData) {
    const job = await dbContext.Jobs.create(jobData)
    return job
  }
}

export const jobsService = new JobsService()