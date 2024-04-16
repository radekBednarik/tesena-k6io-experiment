# perf testing using k6io with browser plugin

This is a experiment, just to try, if and how this works.

K6 app is written in high performant [Go](https://go.dev/) language. Test themselves are written in JavaScript syntax.

## Installation

- install k6io on your OS - get the package [HERE](https://k6.io/open-source/)

## Documentation

- K6 open source - [HERE](https://grafana.com/docs/k6/latest/)
- Grafana Cloud - [HERE](https://grafana.com/docs/grafana-cloud/) if you want to check it out - you can have free registration and try sending test results to the Grafana dashboards, etc. Or run tests directly from cloud. See docs of k6 about how to do that.

## How to run

Created example test in this repo is to be run either with specific command - like `k6 run test.js` or you can use predefined `.sh` scripts (if you are on Linux or WSL), if you want to try some usage scenarios

- run locally with html dashboard of results
- run on Cloud
- run locally with results sent to cloud

## Cloud specifics

- you need to register on Grafana K6 Cloud service [HERE](https://grafana.com/docs/k6/latest/results-output/real-time/cloud/)
- get the token

- either provide token when running CLI command or login to the cloud once with the token, which will be saved on your local machine for reuse
