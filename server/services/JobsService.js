import { dbContext } from "../db/DbContext.js"


class JobsService {

  async fetchAllJobs() {
    const jobs = await dbContext.Jobs.find()
    if (!jobs.length) {
      throw new Error("There are no jobs to display")
    }
    return jobs
  }

  async fetchById(jobId) {
    const job = await dbContext.Jobs.findById(jobId)
    return job
  }

  async createJob(jobData) {
    const job = await dbContext.Jobs.create(jobData)
    return job
  }

  async updateJob(jobId, jobInfo) {
    const originalJob = await this.fetchById(jobId)

    originalJob.position = jobInfo.position ? jobInfo.position : originalJob.position
    originalJob.company = jobInfo.company ? jobInfo.company : originalJob.company
    originalJob.description = jobInfo.description ? jobInfo.description : originalJob.description
    originalJob.salary = jobInfo.salary ? jobInfo.salary : originalJob.salary

    await originalJob.save()
    return originalJob
  }

  async deleteJob(jobId) {
    await dbContext.Jobs.findByIdAndDelete(jobId)
  }
}

export const jobsService = new JobsService()