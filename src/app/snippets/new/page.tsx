'use client';
import { useFormState } from 'react-dom';
import * as actions from '@/actions';

const SnippetCreatePage = () => {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' });

  return (
    <div>
      <h1 className='text-gray-700 font-bold'>Create a Snippet</h1>

      <form action={action} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            id='code'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24'
          ></textarea>
        </div>
        {
          formState.message ?
            <div className='my-2 bg-red-200 border rounded border-red-400'>{formState.message}</div> : null
        }

        <div className='flex items-center justify-between'>
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SnippetCreatePage;
