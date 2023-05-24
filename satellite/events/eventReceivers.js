import { getProduct } from "../services/service1";

const FRAGMENT_EVENT_PREFIX = 'fragmentEvent:'

const shouldHandleMessage = (message) => {
    Object.keys(message).find(
        (k) => k == 'action' && message.action.startsWith(FRAGMENT_EVENT_PREFIX)
    )
}

export const handleEvent = (fragmentEvent) => {
    if (!fragmentEvent.data || !fragmentEvent.data.message || !shouldHandleMessage(fragmentEvent.data.message)) {
        return;
    }

    const [message, trackingProperties] = fragmentEvent.data
    const payload = {
        message,
        trackingProperties,
        source: fragmentEvent.source,
    }

    switch (message.action) {
        case `${FRAGMENT_EVENT_PREFIX}getProduct`:
            getProduct(payload);
            break;
    }
}