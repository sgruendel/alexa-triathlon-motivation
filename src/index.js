'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.fa8a3a93-9047-44b9-8ac2-5a66f09a080b';
const languageStrings = {
    en: {
        translation: {
            CARD_TITLE: 'Motivational Quote',
            QUOTE_MESSAGE: "Here's your quote: ",
            HELP_MESSAGE: "You can say 'Give me a quote', or you can say 'Exit'. How can I motivate you?",
            HELP_REPROMPT: 'Come on, how can I motivate you?',
            STOP_MESSAGE: 'Go for it!',
            QUOTES: [
                "Don't count laps. Make every lap count.",
                'H2O: two parts Heart & one part Obsession.',
                'A 12 minute mile is just as far as a 6 minute mile.',
                'The price of discipline is always less than the pain of regret.',
                'Energy and persistence conquer all things.',
                "Clear your mind of 'can't'.",
                "Dreams don't work unless you do.",
                "Your body won't go where your mind doesn't push it.",
                "It's never a question of 'can you?', but 'will you?'",
                "It's only cold if you're standing still.",
                "You can't buy happiness, but you can buy a bike and that's pretty close.",
                'The will to win is important, but the will to prepare is vital.',
                "Don't wish for it. Work for it.",
                'The reward for those who persevere far exceeds the pain that precedes the victory.',
                'If you want to live a happy life, tie it to a goal, not to people or objects.', // TODO -- Albert Einstein
                'You must first find your limits, before you can exceed them.',
                'Pain is weakness leaving the body.',
                'The harder you work, the harder it is to surrender.',
                'Your biggest fear carries your greatest growth.',
                'Decide that you want it more than you are afraid of it.',
                "It always seems impossible until it's done.",
                'Be strong. You never know who you are inspiring!',
                "It's always too early to quit.",
                "I don't stop when I'm tired, I stop when I'm done.",
                'All dreams can come true. If we have the courage to pursue them.',
                'Discipline is just choosing between what you want now and what you want most.',
                'Unless you try to do something beyond what you have already mastered, you will never grow.',
                "You're only one swim away from a good mood.",
                "It's just you and the pool.",
                'Your body drives you to the line, but your mind makes you cross it.',
                'The will to win means nothing without the will to prepare.',
                "I'm doing this for me.",
                'Every champion was once a contender who refused to give up.',
                'Log off. Shut down. Go run!',
                "Don't limit your challenges. Challenge your limits!",
            ],
        },
    },

    de: {
        translation: {
            CARD_TITLE: 'Motivationsspruch',
            QUOTE_MESSAGE: 'Hier ist dein Spruch: ',
            HELP_MESSAGE: 'Du kannst sagen „Gib mir einen Spruch“, oder du kannst „Beenden“ sagen. Wie kann ich dich motivieren?',
            HELP_REPROMPT: 'Komm schon, wie kann ich dich motivieren?',
            STOP_MESSAGE: 'Hau rein!',
            QUOTES: [
                'Alles ist unmöglich bis Du es tust.',
                'Alles wird am Ende gut. Wenn es nicht gut ist, ist es nicht das Ende.',
                'Auch mit Steinen, die Dir in den Weg gelegt werden, lässt sich etwas Schönes bauen.',
                'Auf einfache Wege schickt man nur die Schwachen.',
                'Aufgeben heißt, am eigenen Willen gescheitert zu sein.',
                'Aufgeben tut mehr weh.',
                'Das Geheimnis des Erfolgs ist anzufangen.',
                'Das größte Vergnügen im Leben: Dinge tun, die Du nach Meinung anderer Leute nicht fertig bringst!',
                'Das Ziel ist, dass das Ziel das Ziel bleibt.',
                'Dein Leben ist das Produkt Deiner Gedanken.',
                'Der Anfang ist immer heute.',
                'Der Mensch arbeitet immer für ein Ziel. Wenn Du keine eigenen Ziele hast, arbeitest Du für die von Anderen.',
                'Der sicherste Weg zum Erfolg ist immer, es doch noch einmal zu versuchen.',
                'Der Unterschied zwischen dem, der Du bist und dem, der Du sein möchtest, ist das, was Du tust.',
                'Der Unterschied zwischen einem Berg und einem Hügel liegt in Deiner Perspektive.',
                'Die Qualität Deiner Ziele bestimmt die Qualität Deiner Zukunft.',
                'Du hast alles was Du brauchst, um JETZT anzufangen.',
                'Du kannst das. Du kannst das. Du kannst das.',
                'Du musst nur wollen und daran glauben, dann wird es gelingen!',
                'Ein Champion ist jemand, der aufsteht, wenn er nicht kann.',
                'Ein geiler Körper wird Dir nicht in den Arsch geschoben. Du musst Dir selbst den Arsch aufreißen.',
                'Ein Stolpern kann den Fall verhindern.',
                'Ein Ziel, das Du nicht siehst, kannst Du auch nicht treffen.',
                'Erfolg ist eine Treppe, keine Tür.',
                'Erfolg ist niemals sicher, Scheitern ist niemals endgültig.',
                'Erfolg ist, wenn Du einmal mehr aufstehst als hinfällst.',
                'Erfolg ist, wenn Du weitermachst, wo Du früher aufgegeben hättest.',
                'Erledigt ist besser als perfekt.',
                'Es gibt keine Abkürzungen zu Zielen, die sich lohnen!',
                'Es gibt keine Fehler, nur Feedback.',
                'Es gibt nur direkte Wege. Abkürzungen sind meistens als wenig Arbeit getarnte Umwege.',
                'Es ist immer zu früh, um aufzugeben.',
                'Fortschritt ist das Ziel, nicht Perfektion.',
                'Gehe Deinen Weg und lass die Leute reden.',
                'Gib nicht auf. Quäle Dich jetzt und lebe den Rest Deines Lebens als Champion.',
                'Glaub an Dich. Du kannst das!',
                'Handle, als wäre Scheitern unmöglich.',
                'Heul doch! Aber mach weiter.',
                'Hinfallen. Aufstehen. Krone richten. Weitermachen!',
                'Hinfallen ist keine Schande. Liegenbleiben schon.',
                'Ich sage Dir nicht, dass es leicht wird. Ich sage Dir, dass es sich lohnen wird.',
                'In der Mitte von Schwierigkeiten liegen die Möglichkeiten.',
                "In einem Jahr von heute: Was würdest Du Deinem jetzigen 'ich' mit auf den Weg geben?",
                'Jede große Reise beginnt mit einem ersten, kleinen Schritt.',
                'Jedes Alter ist perfekt, um Deinen Träumen zu folgen.',
                'Jedes Leben ist ein Experiment. Je mehr Du experimentierst, desto mehr lebst Du.',
                'Je größer das Problem, desto größer die Chance, ein großartiges Ergebnis zu erzielen!',
                'Manche Berge scheinen unüberwindlich, bis Du den ersten Schritt gehst.',
                'Niemand kann Dich stoppen, außer Dir selbst.',
                'Ob du denkst, du kannst es oder du kannst es nicht – in beiden Fällen hast du Recht.',
                'Quäl dich, du Sau!',
                'Schau niemals zurück. Es sei denn, Du möchtest in diese Richtung gehen.',
                'Schlechte Gewohnheiten sind wie ein bequemes Bett. Es ist leicht, Dich hinzulegen und schwer, wieder aufzustehen.',
                'Schmerz ist Schwäche, die den Körper verlässt.',
                'Schmerz vergeht, Erfolg bleibt.',
                'Schmerz vergeht, Stolz bleibt.',
                'Stärke entsteht nicht im Körper. Sie entsteht aus einem unbändigen Willen.',
                'Stärke kommt nicht von Gewinnen. Du wächst an Deinen Herausforderungen. Wenn Du auf Widerstände triffst und Dich entscheidest dranzubleiben, das ist Stärke.',
                'Stell Dir vor, Du bist am Strand und hast Deinen Traumkörper.',
                'Tu es für Dich!',
                "Tu was, oder bleib' wie Du bist.",
                'Umgib Dich mit Menschen, die an Dich glauben.',
                'Umwege erweitern die Ortskenntnis.',
                'Wann, wenn nicht jetzt? Wo, wenn nicht hier? Wer, wenn nicht wir?',
                'Was tust Du JETZT, das Dich näher an Dein Ziel bringt?',
                'Wenn Du auf die perfekten Umstände wartest, wirst Du niemals vorankommen.',
                "Wenn Du aus allen Richtungen Gegenwind bekommst, denk' daran: Flugzeuge heben gegen den Wind ab.",
                'Wenn Du durch die Hölle gehst, geh weiter!',
                'Wenn Du keine Fehler machst, triffst Du keine Entscheidungen.',
                'Wenn Du keine Zeit zum Sport hast, wirst Du früher oder später Zeit für Krankheiten finden müssen.',
                'Wenn Du nicht aufgibst, hast Du nie verloren.',
                'Wenn Du nichts tust, bekommst Du nichts.',
                'Wer immer tut, was er schon kann, bleibt immer das, was er schon ist.',
                'Wer lächelt, gewinnt einen Punkt im Spiel um das Glück.',
                'Wieder versuchen. Wieder scheitern. Besser scheitern.',
                'Wie sehr willst Du es?',
                'Wissen ohne Tun ist wie Nichtwissen.',
            ],
        },
    },
};

const handlers = {
    LaunchRequest: function() {
        this.emit('RandomQuote');
    },
    TriathlonMotivationIntent: function() {
        this.emit('RandomQuote');
    },
    RandomQuote: function() {
        const quotes = this.t('QUOTES');
        const quoteIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[quoteIndex];
        console.log('using random quote', quoteIndex + ':', randomQuote);

        // Create speech output
        const speechOutput = this.t('QUOTE_MESSAGE') + randomQuote;
        this.emit(':tellWithCard', speechOutput, this.t('CARD_TITLE'), randomQuote);
    },
    'AMAZON.HelpIntent': function() {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_REPROMPT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function() {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function() {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    SessionEndedRequest: function() {
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
