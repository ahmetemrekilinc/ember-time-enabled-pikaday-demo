//BEGIN-SNIPPET showcase
import Component from '@ember/component';

export default Component.extend({

  init(){
    this._super(...arguments);
    this.set('timeValue', new Date());
    this.set('dateValue', new Date());
  },

  actions: {

    onSelectionDate(dateValue){
      this.set("dateValue", dateValue);
    },

    onSelectionTime(timeValue){
      this.set("timeValue", timeValue);
    }

  }

});
//END-SNIPPET
