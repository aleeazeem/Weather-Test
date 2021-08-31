# Weather tests

Boilerplate for a node server or library written in typescript, using jest as
the test runner.
For this exercise, you’ll work with an open source api to create a REST API Automated test.
[Open Weather Api](https://api.openweathermap.org/data/2.5/weather) Please note, this API has a free plan.
It should be enough for test development and test execution, but it still requires a sign up. For
details see [Current Weather Data](https://openweathermap.org/current).

## Run Tests In Terminal
- In order to run test you need to install [node](https://nodejs.org/en/download/)
- Clone the boilerplate as a new project:

```bash
git clone https://github.com/aleeazeem/Weather-Test.git <project>
```
- Sign up on [Open Weather Api](https://api.openweathermap.org/data/2.5/weather) and generate app_id. It takes 2 hours to 
get activated. If you want to use your own token then export it in your system, Otherwise token is already set in the code.
- Export app_id token
```bash
export app_id_token=${app_id}
```
- Install all required dependencies 
```bash
npm install
```
- Run tests using command
```bash
npm run test
```
- If you want to print logs during execution then run the command with arguments DEBUG=true
```bash
DEBUG=true npm run test
```

## Run Tests In Docker
If you want to run tests in dockers then you don't need to install node. Only thing you need to install 
[Dockers](https://docs.docker.com/get-docker/) and before starting it make sure docker is up and running. 
The whole code is written in [Dockerfile](Dockerfile) for execution. 
- Build an Image
```bash
docker build -t weather-test-image --build-arg .
```

- Run container with with name space weather-test-container.
```bash
docker run --shm-size 2G --name weather-test-container weather-test-image
```
- Optional: if you want to export app_id then run container with env varaible of app_id
```bash
docker run --shm-size 2G -e app_id_token=${app_id} -name weather-test-container weather-test-image
```
