import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import { useAuth } from  '../AuthContext'

const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loadingBtn, setLoadingBtn] = useState(false)

    const handleSubmit = e => {
        setMessage('')
        setError('')
        setLoadingBtn(true)
        resetPassword(emailRef.current.value).then(()=> setMessage("Check your inbox for further instructions")).catch(() => setError("Failed to reset password"))
        setLoadingBtn(false)
    }
    return (
        <div className="w-50">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Reset Password</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loadingBtn} className="w-100" type="submit">
                            Reset Password
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        <Link to='/login'>Log In</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
            
        </div>
    )
}
export default ForgotPassword