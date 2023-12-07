import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

/*
           ________
         _|        |_
        /            \
*/
export let options = {
    stages:[
        { duration: '20s', target: 5 }, // Ramp-up of traffic from 0 to 5 users over 20 seconds
        { duration: '1s', target: 5 }, // Stay at 5 users for 1 minute
        { duration: '10s', target: 30 }, // Ramp-up of traffic from 5 to 30 users over 10 seconds
        { duration: '1s', target: 30 }, // Stay at 30 users for 1 minute
        { duration: '10s', target: 5 }, // Ramp-down to 5 users over 10 seconds
        { duration: '10s', target: 0 }, // Ramp-down to 0 users over 10 seconds
    ],
    thresholds: {
        'http_req_duration': ['p(95)<500'], // 99% of requests must complete below 500ms
    }
};


export default () => {
    const res = http.get('https://performance-testing-demo-app-4a75d45efe74.herokuapp.com/');
    check(res, { 'status was 200': (r) => r.status == 200 });
    sleep(1);
}

export function handleSummary(data) {
    console.log('Preparing the end-of-test summary HTML/JSON...');
    return {
      './output/summary.html': htmlReport(data),
      './output/output.json': JSON.stringify(data),
    };
  };