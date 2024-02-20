import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/wholesale.css";

function Wholesale() {
  return (
    <div className="wholesale-page">
      <PagesHeader />

      <main className="wholesale-main-content">
        <h1>Welcome to Tea of Assam Wholesale</h1>
        <p>
          Join us in bringing the rich heritage of Assam tea to enthusiasts
          around the globe.
        </p>

        <section className="why-wholesale">
          <h2>Why Partner with Tea of Assam?</h2>
          <ul className="our-offerings-list">
            <li>
              Direct from the Source:
              <span>
                Our teas are sourced directly from the best tea estates in
                Assam, ensuring freshness and quality.
              </span>
            </li>
            <li>
              Exclusive Wholesale Prices:
              <span>
                Enjoy competitive pricing, enabling attractive margins for your
                business.
              </span>
            </li>
            <li>
              Marketing Support:
              <span>
                We provide promotional materials and online visibility to
                support your sales efforts.
              </span>
            </li>
            <li>
              Dedicated Account Management:
              <span>
                A dedicated team member will assist you with orders,
                customization, and any inquiries.
              </span>
            </li>
          </ul>
        </section>

        <section className="our-offerings">
          <h2>Our Curated Selection for Wholesale</h2>
          <p>
            From traditional blends to innovative infusions, our selection
            caters to all palates:
          </p>
          <ul className="our-offerings-list">
            <li>
              Classic Assam Black Tea:
              <span>The robust, malty flavor that Assam is famous for.</span>
            </li>
            <li>
              Green and White Teas:
              <span>Delicate and subtle, perfect for the connoisseur.</span>
            </li>
            <li>
              Signature Blends:
              <span>
                Unique combinations crafted by our master tea blenders.
              </span>
            </li>
            <li>
              Teaware and Accessories:
              <span>From elegant teapots to practical brewing tools.</span>
            </li>
          </ul>
        </section>

        <section className="how-to-apply">
          <h2>Begin Your Wholesale Journey</h2>
          <p className="">Getting started is simple:</p>
          <ul className="contact-us our-offerings-list">
            <li>
              Give us your details<a href="/contact"> here</a>
            </li>
            <li>
              Our team will review your request and reach out to discuss your
              needs and how we can best support your business.
            </li>
            <li>
              Once approved, you'll have access to our wholesale catalog and
              pricing.
            </li>
          </ul>
        </section>

        <section className="faqs contact-us">
          <h2>Frequently Asked Questions</h2>
          <span className="bottom-p">
            Have more questions? Visit our <a href="/faqs">FAQ page</a> or
            contact us directly.
          </span>
        </section>

        <section className="contact-us">
          <h2>Let's Connect</h2>
          <span className="bottom-p">
            Ready to explore the possibilities or need more information? Our
            Wholesale Team is here to assist. Email us at{" "}
            <a href="mailto:wholesale@teaofassam.com">
              wholesale@teaofassam.com
            </a>{" "}
            or visit our <a href="/contact">Contact Page</a> for more details.
          </span>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default Wholesale;
