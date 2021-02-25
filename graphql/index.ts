import { RecordSource, Store, Network, Environment } from 'relay-runtime';

const source = new RecordSource();
const store = new Store(source);
const network = Network.create((operation, variables) =>
  fetch('http://localhost:3005/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => response.json())
);

const environment = new Environment({
  network,
  store,
});

export default environment;
