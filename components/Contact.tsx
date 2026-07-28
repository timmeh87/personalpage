import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-3xl font-bold mb-8">
          Contact
      </h2>

      <p className="max-w-2xl">
          I'm always interested in discussing engineering, or new opportunities. If you'd like to
          get in touch, feel free to send me an email.
      </p>

      <p className="mt-6 text-xl font-semibold">
          tim@bernasch.com
      </p>

      <a
          href="mailto:tim@bernasch.com"
          className="
              mt-6
              inline-flex
              rounded-lg
              border
              px-5
              py-3
              font-medium
              transition-colors
              hover:bg-gray-100
              dark:hover:bg-gray-800
          "
      >
          Open your email application
      </a>
  </Section>
  );
}