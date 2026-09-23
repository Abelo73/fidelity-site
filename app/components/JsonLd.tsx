import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://fidelity-site.vercel.app/#fidel",
        "name": "Fidel Gebremedhin",
        "alternateName": "ፊደል ገብረመድህን",
        "jobTitle": "Lead Architect, University Lecturer & CEO",
        "worksFor": {
          "@type": "Organization",
          "name": "Fidelity Business Group",
        },
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "EiABC (Ethiopian Institute of Architecture, Building Construction and City Development)",
        },
        "affiliation": {
          "@type": "EducationalOrganization",
          "name": "Wolaita Sodo University (WSU)",
        },
        "telephone": "+251911971800",
        "email": "fidelityarchitects@gmail.com",
        "url": "https://fidelity-site.vercel.app/about",
      },
      {
        "@type": "Organization",
        "@id": "https://fidelity-site.vercel.app/#organization",
        "name": "Fidelity Business Group",
        "alternateName": "ፊደሊቲ ቢዝነስ ግሩፕ",
        "url": "https://fidelity-site.vercel.app",
        "logo": "https://fidelity-site.vercel.app/logos/fidelity-group-logo.png",
        "founder": {
          "@id": "https://fidelity-site.vercel.app/#fidel",
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+251911971800",
            "contactType": "customer service",
            "areaServed": "ET",
            "availableLanguage": ["Amharic", "English"],
          },
          {
            "@type": "ContactPoint",
            "telephone": "+251916411237",
            "contactType": "sales",
            "areaServed": "ET",
          },
        ],
        "subOrganization": [
          {
            "@type": "LocalBusiness",
            "name": "Fidelity Architects & Consulting Engineers",
            "description": "Architectural master planning, 3D visualization, and structural construction supervision across Ethiopia.",
          },
          {
            "@type": "LocalBusiness",
            "name": "Fidelity Furniture & Interior Design",
            "description": "Custom Ethiopian solid Wanza wood craftsmanship, circular coffee tables, and interior joinery.",
          },
          {
            "@type": "LocalBusiness",
            "name": "Fidelity Printing & Advertising",
            "description": "Commercial advertising media, illuminated 3D channel letters, and large-format print collateral.",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
