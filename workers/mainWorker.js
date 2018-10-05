const CronJob = require('cron').CronJob;

const mainWorker = new CronJob(
    '*/5 * * * * *', 
    function() {
        console.log("You will see this message every five seconds in the console");
    }, 
    null, 
    false, 
    'America/New_York'
);

module.exports = mainWorker;