import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/policies.css";

function Policies() {
  return (
    <div className="policies-page">
      <PagesHeader />

      <main className="policies-main-content">
        <h1>Our Policies</h1>

        <section className="shipping-policy">
          <h2>Shipping Policy</h2>
          <p>
            At{" "}
            <a href="/" className="policies-title">
              Tea of Assam
            </a>
            , we take pride in ensuring that our teas reach you fresh and fast.
            Our shipping partners are selected for their reliability and speed.
            We offer standard and expedited shipping options, both domestically
            within India and internationally. Shipping costs are calculated
            based on weight and destination. Free shipping is available for
            orders above a certain value.
          </p>
        </section>

        <section className="return-policy">
          <h2>Return & Refund Policy</h2>
          <p>
            Your satisfaction is our top priority. If for any reason you are not
            satisfied with your purchase, you may return it within 30 days of
            receipt for a full refund or exchange. The items must be returned in
            their original condition and packaging. Please note that return
            shipping costs are not covered by Tea of Assam.
          </p>
        </section>

        <section className="privacy-policy">
          <h2>Privacy Policy</h2>
          <p>
            We respect your privacy and are committed to protecting your
            personal data. Our privacy policy outlines the types of information
            we collect, how it is used, and the steps we take to ensure your
            personal information is handled securely. We do not share your
            personal information with third parties without your consent, except
            as required by law.
          </p>
        </section>

        <section className="terms-conditions">
          <h2>Terms & Conditions</h2>
          <p>
            By accessing or using the Tea of Assam website and our services, you
            agree to be bound by our terms and conditions. These terms cover
            important topics such as intellectual property rights, user conduct,
            disclaimers, and liability limitations. We encourage you to read
            these terms carefully before using our services.
          </p>
        </section>

        <section className="sustainability-commitment">
          <h2>Our Commitment to Sustainability</h2>
          <p>
            Sustainability is at the heart of everything we do at Tea of Assam.
            From the tea gardens to your cup, we are dedicated to promoting
            environmentally friendly practices, supporting local communities,
            and ensuring the highest standards of ethical sourcing. Learn more
            about our initiatives and how we strive to make a positive impact on
            the environment and society.
          </p>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default Policies;
