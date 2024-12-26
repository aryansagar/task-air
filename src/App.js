import Header from "./component/Header.js";
import Navbar from "./component/Navbar.js";
import Banner from "./component/Banner.js";
import Cause from "./component/Cause.js";
import Effect from "./component/Effect.js"
import Solution from "./component/Solution.js"
import Statistics from "./component/Statistics.js"
import QualityIndex from "./component/QualityIndex.js";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#4079e0",
      }}
    >
      <Header />
      <Navbar />
      <div
        style={{
          margin: "15px",
        }}
      >
        <Banner />
      </div>
      <div
        style={{
          margin: "15px",
        }}
      >
        <Cause />
      </div>
      <div style={{
          margin: "15px",
        }}>
         <Effect />
      </div>
      <div style={{
          margin: "15px",
        }}>
         <Solution />
      </div>
      <div style={{
          margin: "15px",
        }}>
         <Statistics />
      </div>
      <div style={{
          margin: "15px",
        }}>
         <QualityIndex />
      </div>

    </div>
  );
}

export default App;
