/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CreateUserInput = {
    email: string;
    password: string;
    name?: string | null;
};
export type signUpCreateUserMutationVariables = {
    input: CreateUserInput;
};
export type signUpCreateUserMutationResponse = {
    readonly createUser: {
        readonly ok: boolean;
        readonly error: string | null;
    };
};
export type signUpCreateUserMutation = {
    readonly response: signUpCreateUserMutationResponse;
    readonly variables: signUpCreateUserMutationVariables;
};



/*
mutation signUpCreateUserMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    ok
    error
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
    "concreteType": "CreateUserOutput",
    "kind": "LinkedField",
    "name": "createUser",
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
    "name": "signUpCreateUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signUpCreateUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4dd0b0fe604706618be889b31a96113e",
    "id": null,
    "metadata": {},
    "name": "signUpCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation signUpCreateUserMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    ok\n    error\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a651cbc1a25d302f5e614650f4348e7f';
export default node;
