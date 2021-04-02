const JobUtils = require('../utils/JobUtils');
const Job = require('../models/Job');
const Profile = require('../models/Profile');

module.exports = {
    index(req, res) {
        const jobs = Job.get();
        const profile = Profile.get();

        let statusCount = {
            progress: 0,
            done: 0,
            total: jobs.length
        }


        
        const updatedJobs = jobs.map((job) => {
            const remainingDays = JobUtils.getRemainingDays(job);

            const status = remainingDays <= 0 ? 'done' : 'progress';

            statusCount[status] += 1;

            const budget = JobUtils.calculateBudget(job, profile["value-hour"]);

            return ({
                ...job,
                remainingDays: remainingDays,
                status: status,
                budget: budget 
            })
        })

        return res.render("index", { jobs: updatedJobs , profile: profile, status: statusCount});
    },
}