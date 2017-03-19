/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.fa8a3a93-9047-44b9-8ac2-5a66f09a080b';
const languageStrings = {
    'en': {
        translation: {
            CARD_TITLE: 'Motivational Quote',
            QUOTE_MESSAGE: 'Here\'s your quote: ',
            HELP_MESSAGE: 'You can say "Give me a quote", or you can say "Exit". How can I motivate you?',
            HELP_REPROMPT: 'Come on, how can I motivate you?',
            STOP_MESSAGE: 'Go for it!',
        },
    },
        
    'de': {
        translation: {
            CARD_TITLE: 'Motivationsspruch',
            QUOTE_MESSAGE: 'Hier ist dein Spruch: ',
            HELP_MESSAGE: 'Du kannst sagen „Gib mir einen Spruch“, oder du kannst „Beenden“ sagen. Wie kann ich dich motivieren?',
            HELP_REPROMPT: 'Komm schon, wie kann ich dich motivieren?',
            STOP_MESSAGE: 'Hau rein!',
        },
    },
};

const QUOTES = [
    'Don\'t count laps. Make every lap count.',
    'H2O -- two parts Heart & one part Obsession.',
    'A 12 minute mile is just as far as a 6 minute mile.',
    'The price of discipline is always less than the pain of regret.',
    'Energy and persistence conquer all things.',
    'Clear you mind of "can\'t".',
    'Dreams don\'t work unless you do.',
    'Your body won\'t go where your mind doesn\'t push it.',
    'It\'s never a question of "can you?", but "will you?"',
    'It\'s only cold if you\'re standing still.',
    'You can\'t buy happiness, but you can buy a bike and that\'s pretty close.',
    'The will to win is important, but the will to prepare is vital.',
    'Don\'t wish for it. Work for it.',
    'The reward for those who persevere far exceeds the pain that precedes the victory.',
    'If you want to live a happy life, tie it to a goal, not to people or objects.', // TODO -- Albert Einstein
    'You must first find your limits, before you can exceed them.',
    'Pain is weakness leaving the body.',
    'The harder you work, the harder it is to surrender.',
    'Your biggest fear carries your greatest growth.',
    'Decide that you want it more than you are afraid of it.',
    'It always seems impossible until it\'s done.',
    'Be strong. You never know who you are inspiring!',
    'It\'s always too early to quit.',
    'I don\'t stop when I\'m tired, I stop when I\'m done.',
    'All dreams can come true. If we have the courage to pursue them.',
    'Discipline is just choosing between what you want now and what you want most.',
    'Unless you try to do something beyond what you have already mastered, you will never grow.',
    'You\'re only one swim away from a good mood.',
    'It\'s just you and the pool.',
    'Your body drives you to the line, but your mind makes you cross it.',
    'The will to win means nothing without the will to prepare.',
    'I\'m doing this for me.',
    'Every champion was once a contender who refused to give up.',
    'Log off. Shut down. Go run!',
    'Don\'t limit your challenges. Challenge your limits!',
];

const handlers = {
    'LaunchRequest': function () {
        this.emit('RandomQuote');
    },
    'TriathlonMotivationIntent': function () {
        this.emit('RandomQuote');
    },
    'RandomQuote': function () {
        const quoteIndex = Math.floor(Math.random() * QUOTES.length);
        const randomQuote = QUOTES[quoteIndex];

        // Create speech output
        const speechOutput = this.t('QUOTE_MESSAGE') + randomQuote;
        this.emit(':tellWithCard', speechOutput, this.t('CARD_TITLE'), randomQuote);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_REPROMPT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
