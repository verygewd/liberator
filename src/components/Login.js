import React, {useState, useRef} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from  '../AuthContext'

const Login = (props) => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError]=useState('')
    const [loadingBtn, setLoadingBtn] = useState(false)
    const history = useHistory()
    const { login } = useAuth()
    const handleSubmit = e => {
        e.preventDefault()
        setError('')
        setLoadingBtn(true)
        login(emailRef.current.value, passwordRef.current.value).then(()=>{history.push('/')}).catch(() => {setError("failed login")})
        setLoadingBtn(false)
    }
    return (
        <div className="w-50">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" id="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" id="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loadingBtn} className="w-100" type="submit">
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-2">
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
            
        </div>
    )
}

export default Login