import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-3xl font-bold mb-8">
        Contact
      </h2>

      <p>
        Interested in working together?
      </p>

      <div className="mt-4">
        <a
          href="mailto:"
          className="underline"
        >
          Email
        </a>
      </div>
    </Section>
  );
}