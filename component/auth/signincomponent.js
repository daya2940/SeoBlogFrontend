import { useState } from 'react';
import { signin } from '../../actions/auth'

const SigninComponent = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true
  });


  const { name, email, password, error, loading, message, showForm } = values;
  const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
  const showError = () => (error ? <div className="alert alert-info">{error}</div> : '');
  const showMessage = () => (message ? <div className="alert alert-danger">{message}</div> : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, loading: true, error: false });
    const user = { email, password };

    signin(user).then(data => {
      console.log(data);
      if (data.error) {
        setValues( {...values});
      }
      else {
        setValues({
          ...values,
          email: '',
          password: '',
          error:'',
          loading:false,
          message: data.message
        })
      }
    });
  };


  const handleChange = name => e => {
    setValues({ ...values, error: false})
  }


  const signInForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input value={email} type="email" onChange={handleChange('email')} className="form-control" placeholder="Enter your Email" />
        </div>
        <div className="form-group">
          <input value={password} type="text" onChange={handleChange('password')} className="form-control" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary">SignIn</button>
      </form>
    )
  }
  return (
    <React.Fragment>
      {showLoading()}
      {showError()}
      {showMessage()}
      {showForm && signInForm()}
    </React.Fragment>
  );
}

export default SigninComponent;