import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 10000,
  duration: '5m',
  rps: 2000
};

export default function () {
  const response = http.get('http://ip172-18-0-68-cgrinno1k7jg00cr2eog-80.direct.labs.play-with-docker.com/');
  console.log(`Response time was ${String(response.timings.duration)} ms`);
  sleep(1);
}