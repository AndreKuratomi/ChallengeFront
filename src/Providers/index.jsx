import { FriendsProvider } from "./Friends/friends";
import { CandidatesProvider } from "./Candidates/candidates";
import { AuthProvider } from "./Auth/auth";

const Providers = ({ children }) => {
  return (
    <CandidatesProvider>
      <FriendsProvider>
        <AuthProvider>{children}</AuthProvider>
      </FriendsProvider>
    </CandidatesProvider>
  );
};

export default Providers;
