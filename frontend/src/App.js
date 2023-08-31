import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import HomeScreens from "./screens/HomeScreens";

function App() {

  return (
    <>
      <Header />
      <main className="'py-3">
        <Container>
          <HomeScreens />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
