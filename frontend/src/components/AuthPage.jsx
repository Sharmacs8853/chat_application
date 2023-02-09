import axios from "axios"

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(`http://localhost:3001/authenticate`,
            { username: value }
        ).then((result) => {
            console.log('result', result);
            props.onAuth({...result.data, secret:value})
        }).catch((err) => {
            console.log("err", err);
        });
        props.onAuth({ username: value, secret: value });
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome 👋to Jitendra Sharma's chat app </div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;