const CronJob = require('cron').CronJob;

const mainWorker = new CronJob(
    '* * * * * *', 
    function() {
        this.stop()
    }, 
    null, 
    false, 
    'America/New_York'
);

module.exports = mainWorker;