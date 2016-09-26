import { Template } from 'meteor/templating';

import { Images } from '../../api/images.js'

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

    Images.insert({
      url,
      createdAt: new Date()
    });

    target.text.value = '';
  },
  'submit .update'(event){
    event.preventDefault();

    const target = event.target;
    const url = target.text.value;
    const _id = target.id;

    Images.findAndModify({
      query: _id,
      url
    })
  }
});
Template.body.events({
  'click .delete'(event){
    event.preventDefault();

    Images.remove(this._id)
  }
})