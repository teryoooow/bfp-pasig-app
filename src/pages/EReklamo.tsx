import PageContainer from "@/components/PageContainer";
import bfpLogo from "@/assets/bfp-logo-reklamo-v2.png";
import bfpTaguig from "@/assets/bfp-pasig-logo.jpg";
import dilgLogo from "@/assets/dilg-logo.png";
import bagongPilipinasLogo from "@/assets/bagong-pilipinas-logo.png";
import { Mail, Facebook, Phone, Globe } from "lucide-react";
import QRCode from "react-qr-code";

const EReklamo = () => {
    return (
        <PageContainer title="" showBack={true}>
            <div className="min-h-full flex flex-col items-center px-4 py-6 relative overflow-hidden bg-[#012044] w-full">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="z-10 w-full max-w-md flex flex-col gap-6">

                    {/* Header */}
                    {/* Header - Dotted Box */}
                    <div className="border-[3px] border-dotted border-[#FFC107] rounded-3xl p-6 mb-2 mx-4 relative">
                        <div className="flex flex-col items-center justify-center leading-none">
                            <h1 className="text-5xl font-black text-transparent tracking-widest font-display pb-2" style={{ WebkitTextStroke: "2px #FFC107" }}>
                                E-REKLAMO
                            </h1>
                            <h1 className="text-5xl font-black text-[#FFC107] tracking-widest font-display -mt-4">
                                E-REKLAMO
                            </h1>
                        </div>
                    </div>

                    {/* Logos */}
                    <div className="flex justify-center items-center gap-4 py-2">
                        {/* DILG Logo */}
                        <img src={dilgLogo} alt="DILG Logo" className="w-20 h-20 object-contain drop-shadow-lg rounded-full" />

                        {/* BFP Logo */}
                        <img src={bfpLogo} alt="BFP Logo" className="w-20 h-20 object-contain drop-shadow-lg" />

                        {/* BFP Taguig Logo */}
                        <img src={bfpTaguig} alt="BFP Pasig Logo" className="w-20 h-20 object-contain rounded-full drop-shadow-lg" />

                        {/* Placeholder for Bagong Pilipinas */}
                        {/* Bagong Pilipinas Logo */}
                        <img src={bagongPilipinasLogo} alt="Bagong Pilipinas Logo" className="w-20 h-20 object-contain drop-shadow-lg" />
                    </div>

                    {/* Information Card */}
                    {/* Information Card */}
                    <div className="bg-white rounded-3xl border-2 border-[#FFC107] p-8 shadow-xl relative">
                        <p className="text-gray-900 font-medium text-center leading-relaxed mb-6 font-sans text-lg">
                            Patuloy na tumatanggap ng mga reklamo ang BFP lalo na laban sa mga <span className="font-bold">tiwaling empleyado</span>.
                            <br /><br />
                            Maaring <span className="font-bold">ipadala ang inyong reklamo</span> sa mga sumusunod na paraan:
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-4 max-w-sm mx-auto">
                            <a href="mailto:complaints@bfp.gov.ph" className="flex items-center gap-4 group p-1 transition-colors">
                                <div className="bg-[#012044] p-2 rounded-full shrink-0">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-[#ea4335] font-bold text-lg text-left break-all">complaints@bfp.gov.ph</span>
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=61566565531177" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-1 transition-colors">
                                <div className="bg-[#012044] p-2 rounded-full shrink-0">
                                    <Facebook className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-[#ea4335] font-bold text-lg text-left">Bureau of Fire Protection</span>
                            </a>

                            <a href="tel:8888" className="flex items-center gap-4 group p-1 transition-colors">
                                <div className="bg-[#012044] p-2 rounded-full shrink-0">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-[#ea4335] font-bold text-lg text-left">8888</span>
                            </a>

                            <a href="https://bfp.gov.ph/complaint-form" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-1 transition-colors">
                                <div className="bg-[#012044] p-2 rounded-full shrink-0">
                                    <Globe className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-[#ea4335] font-bold text-sm sm:text-lg text-left break-all">bfp.gov.ph/complaint-form</span>
                            </a>
                        </div>
                    </div>

                    {/* CTA & QR Section */}
                    <div className="border-[3px] border-dotted border-[#FFC107] rounded-3xl p-6 mx-4 relative flex flex-col items-center gap-6">
                        <div className="text-center space-y-1">
                            <h2 className="text-white font-bold text-2xl">Do you want to file a complaint?</h2>
                            <p className="text-muted-foreground text-sm mb-6">
                                Scan the QR code below or use the provided link to submit a complaint or report to the BFP Pasig City Fire Station.
                            </p>
                        </div>
                        <div className="bg-white p-2 rounded-xl border-4 border-[#FFC107] shadow-lg">
                            <div className="bg-white p-1">
                                <QRCode value="https://bfp.gov.ph/complaint-form" size={150} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </PageContainer >
    );
};

export default EReklamo;
