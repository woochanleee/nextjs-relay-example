import { useRouter } from 'next/router';

import { useState } from 'react';
import { graphql, useMutation } from 'relay-hooks';
import LoadingIndicator from '../components/LoadingIndicator';

import * as toast from '../utils/toast';
import { loginMutation, loginMutationResponse } from '../__generated__/loginMutation.graphql';

const LoginPage = () => {
  const [mutate, { loading }] = useMutation<loginMutation>(
    graphql`
      mutation loginMutation($input: LoginInput!) {
        login(input: $input) {
          ok
          error
          accessToken
          refreshToken
        }
      }
    `,
    {
      onCompleted: ({ login }: loginMutationResponse) => {
        if (login.ok) {
          toast.Success('🦄 Congrats! Login succeed! \n' + login.accessToken);
          router.push('/');
        } else if (login.error) {
          toast.Error(`${login.error}`);
        }
      },
      onError: (error) => {
        console.log(error);
        toast.Error(error.message);
      },
    }
  );

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return loading ? (
    <LoadingIndicator />
  ) : (
    <form>
      <h3>Login</h3>

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

      <div className='form-group'>
        <div className='custom-control custom-checkbox'>
          <input type='checkbox' className='custom-control-input' id='customCheck1' />
          <label className='custom-control-label' htmlFor='customCheck1'>
            Remember me
          </label>
        </div>
      </div>

      <button
        type='submit'
        className='btn btn-primary btn-block'
        onClick={(e) => {
          e.preventDefault();
          mutate({
            variables: {
              input: { email, password },
            },
          });
        }}>
        Submit
      </button>
    </form>
  );
};

export default LoginPage;
