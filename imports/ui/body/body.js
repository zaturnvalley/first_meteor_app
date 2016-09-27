import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Images } from '../../api/images.js';

import './body.html';

Template.body.helpers({
  images() {
    return Images.find({}, {sort: {createdAt: -1}});
  }
});

Template.body.events({
  'submit #new-cat'(event) {
    event.preventDefault();

    const target = event.target;
    const url = target.text.value;



    target.text.value = '';
  }
});
Template.body.events({
  'submit .update'(event){
    event.preventDefault();

    const target = event.target;
    const url = target.text.value;
    const _id = target.id;

    Images.update({_id: this._id}, {$set: {url, url}
  });
    target.text.value = '';
  }
})

Template.body.events({
  'click .delete'(event){
    event.preventDefault();

    Images.remove(this._id)
  }
})