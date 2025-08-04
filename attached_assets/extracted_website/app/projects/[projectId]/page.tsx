import { getProjectById } from "@/lib/reference-data"
import { notFound } from "next/navigation"
import type { Metadata } from "next" // Import Metadata type
import ProjectDetailPageClient from "./ProjectDetailPageClient"

interface ProjectDetailPageProps {
  params: {
    projectId: string
  }
}

// Dynamic metadata generation
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = getProjectById(params.projectId)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} – Nils Holger Portfolio`,
    description: project.description, // Using project.description for meta description
    openGraph: {
      images: [
        {
          url: project.image, // Using project.image for og:image
          alt: project.alt,
        },
      ],
      title: `${project.title} – Nils Holger Portfolio`,
      description: project.description,
    },
    // Add other metadata as needed, e.g., Twitter cards
    twitter: {
      card: "summary_large_image",
      title: `${project.title} – Nils Holger Portfolio`,
      description: project.description,
      images: [project.image],
    },
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectById(params.projectId)
  if (!project) {
    notFound()
  }

  return <ProjectDetailPageClient params={params} />
}
