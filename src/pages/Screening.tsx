import { Construction } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Screening = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground sm:text-5xl">
                Cancer Screening
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Early detection saves lives
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Construction className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
                Coming Soon
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're currently developing comprehensive resources on cancer screening guidelines, recommendations,
                and best practices. This section will include information on:
              </p>
              <ul className="text-left space-y-3 text-muted-foreground mx-auto max-w-md mb-8">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Evidence-based screening guidelines for different cancer types</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Age-appropriate screening recommendations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Risk assessment tools and genetic counseling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Latest screening technologies and innovations</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                Check back soon for updates, or <a href="/contact" className="text-primary hover:underline font-semibold">contact us</a> for
                more information about cancer screening programs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Screening;
