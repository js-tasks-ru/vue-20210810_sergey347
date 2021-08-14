import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

const app = createApp({
  data() {
    return {
      currentMeetup: undefined,
      radio: undefined,
    };
  },
  watch: {
    radio(newVal) {
      this.fetchMeetupById(newVal).then((data) => {
        this.currentMeetup = data;
      });
    },
  },
  methods: {
    fetchMeetupById(meetupId) {
      return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw error;
          });
        }
      });
    },
  },
}).mount(`#app`);

window.vm = app;
