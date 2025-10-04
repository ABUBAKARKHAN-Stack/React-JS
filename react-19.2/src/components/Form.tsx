import React, { useState, type EventHandler, type FormEvent } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData);

    }
    return (
        <form
            onSubmit={handleSubmit}
            className='border-2 rounded-2xl space-y-4 p-4 shadow-2xl '>
            <h1 className='text-3xl font-semibold'>Registration FORM</h1>
            <div className='space-y-3'>
                <div className='space-y-2'>
                    <Label>Name:</Label>
                    <Input
                        type='text'
                        name='name'
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                    />
                </div>
                <div className='space-y-2'>
                    <Label>Email:</Label>
                    <Input
                        type='email'
                        name='email'
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                    />
                </div>
                <div className='space-y-2'>
                    <Label>Password: </Label>
                    <Input
                        type='text'
                        name='password'
                        onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                        required
                    />
                </div>
            </div>
            <Button
                type='submit'
                variant={"default"}
            >
                Submit
            </Button>
        </form>
    )
}

export default Form