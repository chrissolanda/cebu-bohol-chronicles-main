import { Award, BookOpen, Calendar, Edit3 } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PhotoGallery from "@/components/PhotoGallery";

// Import images
import certImage from "@/assets/Cert.jpg";
import codechumImage from "@/assets/Codechum.png";
import jFrontImage from "@/assets/JFront.jpg";
import worldtechImage from "@/assets/worldtech.jpg";
import codechum1Image from "@/assets/Codechum1.jpg";
import rivanImage from "@/assets/Rivan.jpg";
import mataJImage from "@/assets/MataJ.jpg";
import tarsier117Image from "@/assets/117.jpg";
import impressionImage from "@/assets/Impression.jpg";

const certificates = [
  {
    title: "Certificate of Participation",
    description: "Educational Tour 2025 - Cebu & Bohol",
    image: certImage,
  },
  {
    title: "Certificate of Completion",
    description: "Cultural Immersion Program",
    image: codechumImage,
  },
];

const photoDump = [
  { src: jFrontImage, caption: "Journal" },
  { src: worldtechImage, caption: "WorldTech Information Solutions, Inc." },
  { src: codechum1Image, caption: "CodeChum" },
  { src: rivanImage, caption: "Rivan IT Cebu" },
  { src: mataJImage, caption: "Mata Technologies, Inc." },
  { src: tarsier117Image, caption: "T.A.R.S.I.E.R 117" },
  { src: impressionImage, caption: "Impression Sheet" },
];

const Journal = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHeader
        title="Journal"
        subtitle="Certificates & Reflections"
      />

      <main className="container mx-auto px-4 py-12">
        {/* Certificates Section */}
        <section className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-foreground">Certificates</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl overflow-hidden card-hover"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif font-semibold text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Photo Dump Section */}
        <section className="max-w-6xl mx-auto">
          <PhotoGallery title="Journal Entries" photos={photoDump} />
        </section>
      </main>


      <footer className="py-8 border-t border-border bg-card/50 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Educational Trip Portfolio • Cebu & Bohol 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Journal;
