export default function logRequest(event) {
  console.log(`Incoming request for ${event.requestMeta.url}`);
}
