import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <div className="w-50">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
                    {/* <Form onSubmit={handleSubmit}> */}
                    <Form>

                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            {/* <Form.Control type="email" ref={emailRef} required /> */}
                            <Form.Control type="email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            {/* <Form.Control type="password" ref={passwordRef} required /> */}
                            <Form.Control type="password"  required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            {/* <Form.Control type="password" ref={passwordConfRef} required /> */}
                            <Form.Control type="password" required />
                        </Form.Group>
                        {/* <Button disabled={loading} className="w-100" type="submit"> */}
                        <Button  className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to='/login'>Login In</Link>
            </div>
        </div>
    )
}
export default SignUp