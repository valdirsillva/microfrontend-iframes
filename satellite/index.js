import { IframeMessageProxy } from 'iframe-message-proxy'
import { handleEvent } from './events/eventReceivers'

// Start listen for iframe messages
IframeMessageProxy.listen();
window.addEventListener('message', handleEvent)