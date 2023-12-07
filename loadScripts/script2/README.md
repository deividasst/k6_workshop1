# Exercise 2: Ramp up, rum down stages
Documentation: 
https://grafana.com/docs/k6/latest/

## Step 1:

Run ramUpDownStages.js script file

Check results at http://localhost:3000/dashboards

Once you have completed the exercise, you should be able to that http://test.k6.io is requested by 
    for 30 seconds rumping up to 20 virtual users;
    for 1 minute 30 seconds rumping down to 10 virtual users;
    for 20 seconds decreasing user number to 0.

## Step 2:

Update [ramUpDownStages.js](./loadScripts/script2/ramUpDownStages.js) file by adding 3 stages which would replicate load testing type pattern.
Execute new script version.

Example: 
/*
          _________
         /         \
        /           \
*/     11 22222222 33    [stages]

1. Checking vus count and http_req_duration propperty during the script. 
2. Review script
3. Discussion