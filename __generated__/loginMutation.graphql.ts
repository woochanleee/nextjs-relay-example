/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginInput = {
    email: string;
    password: string;
};
export type loginMutationVariables = {
    input: LoginInput;
};
export type loginMutationResponse = {
    readonly login: {
        readonly ok: boolean;
        readonly error: string | null;
        readonly accessToken: string | null;
        readonly refreshToken: string | null;
    };
};
export type loginMutation = {
    readonly response: loginMutationResponse;
    readonly variables: loginMutationVariables;
};



/*
mutation loginMutation(
  $input: LoginInput!
) {
  login(input: $input) {
    ok
    error
    accessToken
    refreshToken
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "LoginOutput",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "ok",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "error",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "accessToken",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "refreshToken",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "loginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "444c387abb277dde0056bfbce468ea8b",
    "id": null,
    "metadata": {},
    "name": "loginMutation",
    "operationKind": "mutation",
    "text": "mutation loginMutation(\n  $input: LoginInput!\n) {\n  login(input: $input) {\n    ok\n    error\n    accessToken\n    refreshToken\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b189e5069d65a631691fb57d042dc266';
export default node;
