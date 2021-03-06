import React, { ChangeEvent, useEffect, useState } from 'react'

type PropsType = {
    status: string
    updateUserStatusThunk: (status: string) => void
}

const ProfileStatus: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatusThunk(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode && <div>
            <b>Status:</b> <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
        </div>}
        {editMode && <div>
            <input
                onChange={onStatusChange}
                autoFocus={true}
                onBlur={deactivateEditMode}
                value={status} />
        </div>}
    </div>
}

export default ProfileStatus
