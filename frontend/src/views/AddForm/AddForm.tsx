'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import './add-from.scss'

interface IAddFormField {
    word: string,
    defenition: string,
    example: string,
    translation: string,
}

export function AddForm () {
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<IAddFormField>()

    const onSubmit:SubmitHandler<IAddFormField> = (data) => {
        // to do
        console.log(data);
    }

    return (
        <form action='' onSubmit={handleSubmit(onSubmit)} className='add-form'>

            <label className='textarea'>
                <span className='textarea__title'>Enter a word or phrase</span>
                <textarea className='textarea__textarea' {...register('word', {
                    required: 'Field is required'
                })} />
                { errors.word && <span className='field-error'>{errors.word.message}</span>}
            </label>

            <label className='textarea'>
                <span className='textarea__title'>Enter a defenition</span>
                <textarea className='textarea__textarea' {...register('defenition', {
                })} />
            </label>

            <label className='textarea'>
                <span className='textarea__title'>Enter a translation</span>
                <textarea className='textarea__textarea' {...register('translation', {
                })} />
            </label>

            <button className='button' type='submit'>Send</button>
        </form>
    )
}