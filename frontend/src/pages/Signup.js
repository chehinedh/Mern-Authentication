import { useSignup } from '../hooks/useSignup';

const Signup = () => {
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    await signup({ email: email.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Sign Up"}
      </button>
      {error && <div>{JSON.stringify(error)}</div>}
    </form>
  );
}
export default Signup