import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',
  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      meetup: undefined,
      loading: false,
      error: undefined,
    };
  },
  watch: {
    meetupId(newVal) {
      this.getMeetupById(newVal);
    },
  },
  mounted() {
    if (this.meetupId) {
      this.getMeetupById(this.meetupId);
    }
  },
  methods: {
    setDataBeforeRequest() {
      this.loading = true;
      this.error = undefined;
      this.meetup = undefined;
    },
    getMeetupById(meetupId) {
      this.setDataBeforeRequest();
      fetchMeetupById(meetupId)
        .then((data) => {
          this.meetup = data;
          this.loading = false;
          this.error = undefined;
        })
        .catch((e) => {
          this.loading = false;
          this.error = e.message;
        });
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view v-if="meetup" :meetup="meetup"/>

      <ui-container>
        <ui-alert v-if="loading">Загрузка...</ui-alert>
      </ui-container>

      <ui-container>
        <ui-alert v-if="error">{{ error }}</ui-alert>
      </ui-container>
    </div>`,
});
