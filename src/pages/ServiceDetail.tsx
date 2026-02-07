import { useParams, Navigate } from "react-router-dom";
import PageContainer from "@/components/PageContainer";
import { services } from "@/data/services";
import { Phone } from "lucide-react";

const ServiceDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    return (
        <PageContainer title={service.title} showBack={true}>
            <div className="px-4 py-6 space-y-6">
                <div className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                        {service.description}
                    </p>

                    {service.contactNumber && (
                        <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                For Inquiries
                            </p>
                            <a
                                href={`tel:${service.contactNumber}`}
                                className="flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
                            >
                                <Phone className="h-4 w-4 text-primary" />
                                {service.contactNumber}
                            </a>
                        </div>
                    )}
                </div>

                <div>
                    <h3 className="font-display font-semibold text-foreground text-lg mb-4">
                        Gallery
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        {service.images.map((image, index) => (
                            <div
                                key={index}
                                className="aspect-[4/3] rounded-lg overflow-hidden bg-muted shadow-sm"
                            >
                                <img
                                    src={image}
                                    alt={`${service.title} ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};

export default ServiceDetail;
