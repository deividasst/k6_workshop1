import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

/* Good strategy to test chaos engineering
         ________
        |        |
        |        |
*/
export let options = {
    stages:[
        { duration: '2m', target: 400 }, // Ramp-up of traffic from 0 to 400 users over 2 minutes
        { duration: '3h56m', target: 400 }, // Stay at 400 users for ~4 hours
        { duration: '2m', target: 0 }, // Scale down to 0 users over 2 minutes (Optional)
    ]
};


export default () => {
    const res = http.get('https://www.google.com');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
};

export function handleSummary(data) {
    console.log('Preparing the end-of-test summary HTML/JSON...');
    return {
        './output/summary.html': htmlReport(data),
        './output/output.json': JSON.stringify(data),
    };
  };