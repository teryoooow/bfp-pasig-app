import { useParams, useNavigate } from "react-router-dom";
import { Building2, MapPin, Phone, User } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import { substations } from "@/data/substations";

const SubstationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const station = substations.find((s) => s.id === id);

    if (!station) {
        return (
            <PageContainer title="Station Not Found" showBack={true}>
                <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                    <p className="text-muted-foreground">The requested substation could not be found.</p>
                    <Button onClick={() => navigate("/contacts")} variant="outline">
                        Back to Substations
                    </Button>
                </div>
            </PageContainer>
        );
    }

    return (
        <PageContainer title={station.name} showBack={true}>
            <div className="px-4 py-4">

                {/* Back Button Removed - moved to Header */}

                <div className="space-y-8">
                    {/* Station Image Section */}
                    <div className="rounded-xl overflow-hidden aspect-video bg-muted relative shadow-md">
                        {station.stationImage ? (
                            <img
                                src={station.stationImage}
                                alt={station.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400">
                                <Building2 className="h-16 w-16 mb-2 opacity-20" />
                                <span className="text-sm font-medium opacity-50">Station Image Placeholder</span>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <h1 className="text-2xl md:text-3xl font-bold text-white shadow-sm">
                                {station.name}
                            </h1>
                        </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Left Col: Acting Commander */}
                        <div className="bg-card rounded-xl p-6 shadow-sm border space-y-4">
                            <div className="flex items-center gap-2 text-primary font-semibold border-b pb-2">
                                <User className="h-5 w-5" />
                                <h3>Acting Battalion Commander</h3>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center overflow-hidden ring-2 ring-primary/10 flex-shrink-0">
                                    {station.commanderImage ? (
                                        <img
                                            src={station.commanderImage}
                                            alt={station.commanderName}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <User className="h-10 w-10 text-muted-foreground/50" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{station.commanderName}</p>
                                    <p className="text-sm text-muted-foreground">Officer In Charge</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Col: Contact & Location */}
                        <div className="bg-card rounded-xl p-6 shadow-sm border space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Address</h4>
                                        <p className="text-foreground">{station.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-medium text-sm text-muted-foreground mb-1">Contact Number</h4>
                                        <p className="text-foreground font-mono">{station.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Description Section */}
                    <div className="bg-card rounded-xl p-6 shadow-sm border">
                        <h3 className="font-semibold text-lg mb-4">About this Station</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {station.description}
                        </p>
                    </div>

                </div>
            </div>
        </PageContainer>
    );
};

export default SubstationDetail;
