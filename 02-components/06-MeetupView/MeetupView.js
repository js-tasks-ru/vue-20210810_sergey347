import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <meetup-cover :title="meetup.title" :image="meetup.image"/>

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description="meetup.description"/>

            <h3>Программа</h3>
            <ui-alert v-if="!meetup.agenda || meetup.agenda.length === 0">Программа пока пуста...</ui-alert>
            <meetup-agenda v-else :agenda="meetup.agenda"/>
          </div>
          <div class="meetup__aside">
            <meetup-info :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>
          </div>
        </div>
      </ui-container>
    </div>`,
});
