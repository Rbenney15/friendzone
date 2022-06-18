const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    toJson: {
        virtuals: true,
        getters: true
    },
    id: false
});

thoughtsSchema.virtuals('reactionCount').get(function() {
    return this.reactions.length;
});

const Thoughts = model('Thoughts', thoughtsSchema);

module.exports = Thoughts;