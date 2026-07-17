import Section from "./Section";
import Container from "./Container";

export default function Homelab() {
  return (
    <Section id="homelab">
      <h2 className="text-3xl font-bold mb-8">
        Homelab
      </h2>

      <p className="text-lg">
        A self-hosted environment for storage,
        virtualization, networking, and experimentation.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="border rounded-lg p-4">
          TrueNAS Storage
        </div>

        <div className="border rounded-lg p-4">
          Linux Services
        </div>

        <div className="border rounded-lg p-4">
          Networking Infrastructure
        </div>
      </div>
    </Section>
  );
}