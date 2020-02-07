import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const favourites = new Mongo.Collection('favourites');

const favouritesschema=new favouritesschema({
    location:String,
    state:String,
    Temperature:Number,
    Famous_for:String,
    Height:Number,
    Weather:String,
    Description:String,
},{tracker:Tracker});


favouritesschema.attachSchema(favouritesschema);



