import React, { useRef } from 'react'
import Input from './Input'
import ErrorModal from './ErrorModal'

const NewProject = ({ onAdd, onCancel }) => {
    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()


    function handleSave() {
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open()
            return
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
            <ErrorModal ref={modal} buttonCaption='Close'>
                <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid inputs</h2>
                <p className='text-stone-500 mb-4'>Oops... look like you missed an input field</p>
                <p className='text-stone-500 mb-4'>Please make sure you provide a valid input value</p>
            </ErrorModal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button>
                    </li>
                    <li>
                        <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950' onClick={handleSave}>Save</button>
                    </li>
                </menu>
                <div>
                    <Input type='text' ref={title} label='Title' />
                    <Input ref={description} label='Description' textarea />
                    <Input type='date' ref={dueDate} label='Due Date' />
                </div>
            </div></>
    )
}

export default NewProject
