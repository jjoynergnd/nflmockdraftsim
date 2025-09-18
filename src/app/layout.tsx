import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <Layout>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <h1>Welcome to NFL Mock Draft Simulator</h1>
        <p>Your project is set up and ready to build!</p>
      </main>
    </Layout>
  );
}
