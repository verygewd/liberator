import React, {useState} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { useFirebase, isLoaded } from 'react-redux-firebase'
import { useAuth } from '../AuthContext'

const AdminDashboard = (props) => {

    const { currentUser, logout } = useAuth()
    const [error, setError]=useState('')
    const history = useHistory()
    const handleLogout = () => {
        logout()
            .then(() => {history.push('/')})
            .catch((err) => setError(err.message))
    }

    // const firebase = useFirebase()
    // const profile =  useSelector(state => state.firebase.profile)
    // function updateUserProfile() {
    //     return firebase.updateProfile({ role: 'admin' })
    //   }


    return (
        <>
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    <h5 className="text-center mb-4">This is the Admin Dashboard</h5>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <Link to='/update-profile' className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log out</Button>
            </div>
        </div>
        {/* <div>
            <h2>Update User Profile</h2>
            <span>
            Click the button to update profile to include role parameter
            </span>
            <button onClick={updateUserProfile}>
            Add Role To User
            </button>
            <div>
            {
                isLoaded(profile)
                ? JSON.stringify(profile, null, 2)
                : 'Loading...'
            }
            </div>
      </div> */}
      </>
    )
}


export default AdminDashboard

