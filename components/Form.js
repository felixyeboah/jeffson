import { useState } from 'react';
import { useForm } from 'react-hook-form';

export function Form({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json',
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <h3>Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>Thanks for your comment!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Comment: {formData.comment}
          </li>
        </ul>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full font-semibold'
      disabled
    >
      <input {...register('_id')} type='hidden' name='_id' value={_id} />
      <label className='block mb-5'>
        <span className='text-gray-600'>Name</span>
        <input
          {...register('name', { required: true })}
          className='text-gray-300 bg-gray-700 mt-1 block w-full h-20 px-4 hover:border-lightBlue-700 focus:border-gray-900 focus:outline-none rounded-lg placeholder:text-xl '
          placeholder='John Appleseed'
        />
      </label>
      <label className='block mb-5'>
        <span className='text-gray-600'>Message</span>
        <textarea
          {...register('comment', { required: true })}
          className='text-gray-300 bg-gray-700 border-2 border-gray-800 focus:border-gray-900 focus:outline-none mt-1 block w-full px-4 pt-2 rounded-lg placeholder:text-xl '
          rows='8'
          placeholder='Enter some long form content.'
        />
      </label>
      {/* errors will return when field validation fails  */}
      {/*{errors.exampleRequired && <span>This field is required</span>}*/}
      <input
        type='submit'
        value='Submit comment'
        className='shadow bg-gray-700 hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white sm:h-14 sm:px-10 rounded cursor-pointer sm:text-lg font-bold'
      />
    </form>
  );
}
