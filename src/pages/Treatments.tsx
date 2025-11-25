import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Shield, Syringe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Treatments = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground sm:text-5xl">
                Cancer Treatments
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Understanding modern approaches to cancer therapy
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="radiation" className="mx-auto max-w-6xl">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="radiation" className="text-base">Radiation</TabsTrigger>
                <TabsTrigger value="immunotherapy" className="text-base">Immunotherapy</TabsTrigger>
                <TabsTrigger value="systemic" className="text-base">Systemic Therapy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="radiation">
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Radiation Therapy</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Using high-energy radiation to target and destroy cancer cells
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">Overview</h3>
                      <p className="text-muted-foreground">
                        Radiation therapy uses high doses of radiation to kill cancer cells and shrink tumors. It works by
                        damaging the DNA inside cancer cells, preventing them from growing and dividing. While it can also
                        affect nearby healthy cells, cancer cells are generally more sensitive to radiation.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">Types of Radiation Therapy</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>External Beam Radiation:</strong> Most common type, delivered from outside the body using a machine</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Internal Radiation (Brachytherapy):</strong> Radioactive material placed inside or near the tumor</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Systemic Radiation:</strong> Radioactive substances given orally or intravenously</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Stereotactic Radiosurgery:</strong> Highly focused radiation for precise targeting</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">When It's Used</h3>
                      <p className="text-muted-foreground">
                        Radiation therapy can be used alone or in combination with other treatments. It may be given before
                        surgery to shrink tumors, after surgery to eliminate remaining cancer cells, or as palliative care
                        to relieve symptoms in advanced cancer.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="immunotherapy">
                <Card className="border-secondary/20">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                        <Shield className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-2xl">Immunotherapy</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Harnessing the body's immune system to fight cancer
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">Overview</h3>
                      <p className="text-muted-foreground">
                        Immunotherapy is a revolutionary approach that helps your immune system recognize and attack cancer
                        cells. Unlike traditional treatments that directly target cancer, immunotherapy strengthens the body's
                        natural defenses to fight the disease more effectively.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">Types of Immunotherapy</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-secondary">•</span>
                          <span><strong>Checkpoint Inhibitors:</strong> Block proteins that prevent immune cells from attacking cancer</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-secondary">•</span>
                          <span><strong>CAR T-Cell Therapy:</strong> Genetically modified immune cells to target cancer</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-secondary">•</span>
                          <span><strong>Monoclonal Antibodies:</strong> Laboratory-made proteins that mark cancer cells for destruction</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-secondary">•</span>
                          <span><strong>Cancer Vaccines:</strong> Stimulate immune response against cancer-specific antigens</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-secondary">•</span>
                          <span><strong>Cytokines:</strong> Proteins that enhance immune system activity</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">Clinical Impact</h3>
                      <p className="text-muted-foreground">
                        Immunotherapy has transformed treatment for many cancer types, offering long-lasting responses and
                        improved survival rates. It's particularly effective for melanoma, lung cancer, kidney cancer, and
                        certain blood cancers. The field continues to evolve with new combinations and applications.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="systemic">
                <Card className="border-accent/50">
                  <CardHeader>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                        <Syringe className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <CardTitle className="text-2xl">Systemic Therapy</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Treatments that travel through the bloodstream to reach cancer cells throughout the body
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">Overview</h3>
                      <p className="text-muted-foreground">
                        Systemic therapy refers to medications that travel through the bloodstream to reach and affect cancer
                        cells throughout the body. These treatments are essential for cancers that have spread or are likely
                        to spread beyond their original location.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">Types of Systemic Therapy</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Chemotherapy:</strong> Uses drugs to kill rapidly dividing cells, including cancer cells</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Targeted Therapy:</strong> Drugs that target specific molecules involved in cancer growth</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Hormone Therapy:</strong> Blocks or removes hormones that fuel certain cancers</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span><strong>Precision Medicine:</strong> Treatment based on genetic profile of the tumor</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-3 text-xl font-semibold text-foreground">Treatment Approach</h3>
                      <p className="text-muted-foreground">
                        Systemic therapy can be given before surgery (neoadjuvant) to shrink tumors, after surgery
                        (adjuvant) to eliminate remaining cancer cells, or as the primary treatment for advanced or
                        metastatic cancer. Modern approaches increasingly combine different systemic therapies or pair them
                        with other treatment modalities for optimal results.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Treatments;
