# Exercise 3: Ramp up, rum down stages
Documentation: 
https://grafana.com/docs/k6/latest/

## Step 1:

Run api.js script file

Check results at http://localhost:3000/dashboards

Once you have completed the exercise, you should be able to that http://test.k6.io is requested by 
    for 30 seconds by 50 virtual users without any delay.

## Step 2:

Update [api.js](./loadScripts/script3/api.js) file by adding request rate load testing type pattern.
Goal to reach target of 50 reqs/s with the previous example. Steps to follow.
    Configure the timeUnit options to 1 second. 
    Specify one request per iteration. 
    Adjust the rate option to 50/1, equivalent to 50.

Need to add inside options { scenario { scenarioName {} }}: 
    - executor : recommended constant-arrival-rate (sets a constant rate of iterations that execute the script function. Each iteration can generate one or multiple requests) https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/ 
    - change vus -> preAllocatedVUs
    - rate
    - timeUnit

Execute new script version.

1. Checking vus count and http_req_duration propperty during the script. 
2. Review script
3. Discussion