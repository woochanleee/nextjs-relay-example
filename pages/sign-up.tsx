import Link from 'next/link';

import { useState } from 'react';
import { graphql, useMutation } from 'relay-hooks';

import LoadingIndicator from '../components/LoadingIndicator';

import { signUpCreateUserMutation, signUpCreateUserMutationResponse } from '../__generated__/signUpCreateUserMutation.graphql';

import * as toast from '../utils/toast';

const SignUp = () => {
  const [mutate, { loading }] = useMutation<signUpCreateUserMutation>(
    graphql`
      mutation signUpCreateUserMutation($input: CreateUserInput!) {
        createUser(input: $input) {
          ok
          error
        }
      }
    `,
    {
      onCompleted: ({ createUser }: signUpCreateUserMutationResponse) => {
        if (createUser.ok) {
          toast.Success('🦄 Congrats! SignUp succeed!');
        } else if (createUser.error) {
          toast.Error(`${createUser.error}`);
        }
      },
      onError: (error: Error) => {
        toast.Error(error.message);
      },
    }
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return loading ? (
    <LoadingIndicator />
  ) : (
    <form>
      <h3>Sign Up</h3>

      <div className='form-group'>
        <label>Full name</label>
        <input type='text' className='form-control' placeholder='Full name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Email address</label>
        <input type='email' className='form-control' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type='submit'
        className='btn btn-primary btn-block'
        onClick={(e) => {
          e.preventDefault();
          mutate({
            variables: {
              input: { name, email, password },
            },
          });
        }}>
        Sign Up
      </button>
      <p className='forgot-password text-right'>
        Already registered{' '}
        <Link href='/login'>
          <a>login?</a>
        </Link>
      </p>
    </form>
  );
};

export default SignUp;
