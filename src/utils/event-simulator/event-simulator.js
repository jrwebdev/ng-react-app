import getEventKey from 'react/lib/getEventKey';
import getEventCharCode from 'react/lib/getEventCharCode';
import {Simulate} from 'react-addons-test-utils';
import extend from 'lodash/extend';
import isNumber from 'lodash/isNumber';

const simulate = (el, event, eventData = {}) => {

    if (!el) {
        throw new Error('No element specified');
    }

    if (!event) {
        throw new Error ('No event specified');
    }

    // Angular event
    let e = new Event(event.toLowerCase(), {
        bubbles: eventData.bubbles || false,
        cancelable: eventData.cancelable || false
    });
    e = extend(e, eventData);
    el.dispatchEvent(e);

    // React event
    Simulate[event](el, eventData);
};

const key = (el, keyCode) => {
    let eventData = {keyCode, which: keyCode, charCode: keyCode};
    simulate(el, 'keyDown', eventData);
    simulate(el, 'keyPress', eventData);
    simulate(el, 'keyUp', eventData);
};

export {
    simulate,
    key
};