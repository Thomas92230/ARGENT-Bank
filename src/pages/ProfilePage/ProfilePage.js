import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Account from "../../components/Account/Account";
import UserHeader from "../../components/UserHeader/UserHeader";

function ProfilePage() {
  const { token } = useSelector((state) => state.userLogin);

  if (!token) {
    <Navigate to="/" />;
  }

  const { firstName } = useSelector((state) => state.userProfile);
  const { lastName } = useSelector((state) => state.userProfile);

  return token ? (
    <>
      <NavigationBar />
      <main className="main bg-dark bg-padding">
        <UserHeader firstname={firstName} lastname={lastName} />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
}

export default ProfilePage;
