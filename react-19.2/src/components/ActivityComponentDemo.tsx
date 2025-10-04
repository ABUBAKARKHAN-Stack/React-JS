import { Activity, useState, } from 'react'
import Form from './Form'
import { Button } from './ui/button'
import { ConfirmCreateAccountTab } from './ConfirmCreateAccountTab'

const ActivityComponentDemo = () => {
    const [activeTab, setActiveTab] = useState<"form" | "confirm">("form")
    const showForm = activeTab === "form";
    const showConfirmBtn = activeTab === "confirm"
    return (
        <>
            <h1 className='text-4xl font-bold text-neutral-300 mb-8 text-nowrap'>Activity Component Demo</h1>
            <Button
                onClick={() => {
                    if (activeTab === "form") {
                        setActiveTab("confirm")
                    } else if (activeTab === "confirm") {
                        setActiveTab("form")
                    }
                }}
            >
                Change Tab
            </Button>
            <Activity
                mode={showForm ? "visible" : "hidden"}
            >
                <Form />
            </Activity>
            <Activity
                mode={showConfirmBtn ? "visible" : "hidden"}
            >
                <ConfirmCreateAccountTab />
            </Activity>

        </>
    )
}

export default ActivityComponentDemo