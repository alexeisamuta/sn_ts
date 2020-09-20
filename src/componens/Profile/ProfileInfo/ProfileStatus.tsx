import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component <ProfileStatusType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        debugger
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "------"}</span>
                    </div>
                    : <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode.bind(this)}
                               value={this.state.status}
                               onChange={this.onStatusChange}
                        />
                    </div>}
            </div>
        );
    }
}
;

export default ProfileStatus;