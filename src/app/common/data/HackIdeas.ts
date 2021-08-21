import { HackIdea } from '../../models/HackIdea';
import tags from './Tags';

const hackIdea1 = new HackIdea(
    1,
    'Find Security Bug in Facebook',
    'Find any security bugs present in marketplace in Facebook',
    [tags[0], tags[2]],
    new Date(2018, 11, 24),
    2,
    []
);
const hackIdea2 = new HackIdea(
    2,
    'Find Security Bug in Google',
    'Find any security bugs present in marketplace in Facebook',
    [tags[0], tags[2]],
    new Date(2019, 11, 24),
    1,
    ['geebleser@google.com']
);
const hackIdea3 = new HackIdea(
    3,
    'Find Security Bug in Facebook',
    'Find any security bugs present in marketplace in Facebook',
    [tags[0], tags[2]],
    new Date(2018, 11, 23),
    3,
    ['geebleser@google.com', 'microSec.ser@microsoft.com']
);
const hackIdea4 = new HackIdea(
    4,
    'Find Security Bug in Facebook',
    'Find any security bugs present in marketplace in Facebook',
    [tags[0], tags[2]],
    new Date(2020, 10, 24),
    2,
    []
);
const hackIdea5 = new HackIdea(
    5,
    'Find Security Bug in Facebook',
    'Find any security bugs present in marketplace in Facebook',
    [tags[0], tags[2]],
    new Date(2015, 0o5, 0o5),
    4,
    ['nikFace.ser@facebook.com']
);

const hackIdeas = [hackIdea1, hackIdea2, hackIdea3, hackIdea4, hackIdea4];

export default hackIdeas;
