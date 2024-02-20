import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/about.css";

function About() {
  return (
    <div className="about-us-page">
      <PagesHeader />

      <main className="about-main-content">
        <section className="about-intro">
          <h1>About Tea of Assam</h1>
          <p className="tagline">
            A Sip of Authenticity, Directly from the Tea Gardens to Your Cup.
          </p>
          <p>
            Nestled in the lush greenery of Assam, India, we are a company
            deeply rooted in the tradition of tea. Our mission is to bring the
            finest teas from the verdant tea gardens of Assam directly to tea
            connoisseurs around the world. We proudly offer a selection of the
            highest quality teas, authentic teaware, and wholesale solutions to
            meet all your tea-related needs.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            At Tea of Assam, we believe in the power of a single sip of tea to
            connect you to the vast tea fields and the rich history and culture
            of Assam. Our commitment is to deliver this experience through our
            carefully curated teas, each promising an authentic taste and
            unmatched quality.
          </p>
        </section>

        <section className="our-products">
          <h2>Our Products</h2>
          <p>
            Explore our diverse range of products, including freshly packaged
            tea leaves, beautifully crafted cups, and a variety of tea
            accessories. For those looking to enjoy our tea at a larger scale,
            we offer wholesale purchasing options.
          </p>
        </section>

        <section className="visit-us">
          <h2>Visit Us</h2>
          <p>
            Want to learn more or get in touch with us? Visit our{" "}
            <a href="/contact">Contact Page</a> and let's start a conversation.
            We're always here to talk tea.
          </p>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default About;
