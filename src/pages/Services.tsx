import { CheckCircle2, Clock, FileText, Phone, ChevronRight } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => {
  return (
    <PageContainer title="Frontline Services" showBack={true}>
      <div className="px-4 py-6">
        <p className="text-muted-foreground text-sm mb-6">
          The Bureau of Fire Protection provides the following services to ensure fire safety in our community.
        </p>

        <div className="space-y-4">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.slug}`}
              key={index}
              className="block group"
            >
              <div
                className="bg-card rounded-xl p-4 card-elevated animate-fade-in group-hover:bg-accent/50 transition-colors"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {service.description}
                    </p>

                    {service.contactNumber && (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `tel:${service.contactNumber}`;
                        }}
                        className="inline-flex items-center justify-center gap-2 w-full bg-primary/5 text-primary py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all mt-2"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </div>
                    )}
                  </div>
                  <div className="self-center">
                    <ChevronRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default Services;
