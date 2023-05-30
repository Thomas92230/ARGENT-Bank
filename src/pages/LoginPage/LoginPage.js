// Components
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import SignIn from "../../components/SignIn/SignIn";

function Login() {
  return (
    <>
      <NavigationBar />
      <main className="main bg-dark">
        <SignIn />
      </main>
      <Footer />
    </>
  );
}

export default Login;
