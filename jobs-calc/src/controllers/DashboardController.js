const JobUtils = require('../utils/JobUtils');
const Job = require('../models/Job');
const Profile = require('../models/Profile');

module.exports = {
    async index(req, res) {
        const jobs = await Job.get();
        const profile = await Profile.get();

        let statusCount = {
            progress: 0,
            done: 0,
            total: jobs.length
        }

        let jobTotalHours = 0;

        const updatedJobs = jobs.map((job) => {
            const remainingDays = JobUtils.getRemainingDays(job);

            const status = remainingDays <= 0 ? 'done' : 'progress';

            statusCount[status] += 1;

            jobTotalHours = status == 'progress' ? jobTotalHours + Number(job["daily-hours"]) : jobTotalHours;

            const budget = JobUtils.calculateBudget(job, profile["value-hour"]);

            return ({
                ...job,
                remainingDays: remainingDays,
                status: status,
                budget: budget 
            })
        })

        const freeHours = profile["hours-per-day"] - jobTotalHours;

        return res.render("index", { jobs: updatedJobs , profile: profile, status: statusCount, freeHours: freeHours });
    },
}