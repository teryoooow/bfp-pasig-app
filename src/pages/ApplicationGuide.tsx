import { FileCheck, AlertCircle } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import StepCard from "@/components/StepCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "react-router-dom";

const fsecSteps = [
  {
    title: "Log in",
    description: "Log in to fsis.e-bfp.com",
  },
  {
    title: "Apply Now",
    description: "On the home page, click \"APPLY NOW\"",
  },
  {
    title: "Select Application Type",
    description: "Go to \"FIRE SAFETY EVALUATION CLEARANCE\"",
  },
  {
    title: "New Application",
    description: "Click \"NEW APPLICATION\" and enter all Pertinent Information.",
  },
  {
    title: "Select Fire Station",
    description: "On the Fire Station Section, Please Select \"TAGUIG CITY FIRE STATION\"",
  },
  {
    title: "Submit & Upload",
    description: "Hit \"SUBMIT APPLICATION\", and upload the requirement(s) listed below.",
  },
];

const fsicProcessSteps = [
  {
    title: "Submission & Evaluation",
    description: "After submission of the required documents, they will be evaluated by the Client Relations Officer (CRO).",
  },
  {
    title: "Chief Processing Evaluation",
    description: "After evaluation by CRO, documents are forwarded to the Chief, FSIC Processing Unit for verification.",
  },
  {
    title: "Inspection Order Issuance",
    description: "After verification, documents are forwarded to the IO Processor for issuance of Inspection Order to the Fire Safety Inspector.",
  },
  {
    title: "Site Inspection",
    description: "The Fire Safety Inspector proceeds to site inspection to check compliance with R.A 9514 Fire Code of the Philippines.",
  },
  {
    title: "Recommendation",
    description: "The Fire Safety Inspector recommends issuance of FSIC to the Chief, Fire Prevention Section.",
  },
  {
    title: "Endorsement",
    description: "The Chief, Fire Prevention Section endorses approval of FSIC to the City Fire Marshal.",
  },
  {
    title: "Issuance",
    description: "The City Fire Marshal issues the FSIC upon receiving the recommendation.",
  },
];

const fsecRequirements = [
  "SCANNED/ CLEAR COPY OF SIGNED AND SEALED BLUE PRINT PLANS (ARCHITECTURAL/CIVIL, PLUMBING, MECHANICAL, ELECTRICAL, FIRE PROTECTION)",
  "SCANNED/ CLEAR COPY OF UPDATED PTR AND PRC ID OF ALL ENGINEERS WHO SIGNED THE PLANS (ALL SIGNED & SEALED)",
  "SCANNED/ CLEAR COPY OF BILL OF MATERIALS WITH LABOR COST IT MUST BE SIGNED AND SEALED OF ENGINEER/ ARCHITECT",
];

const fsecHardCopyRequirements = [
  "ENDORSEMENT FROM LBO",
  "LOCATIONAL CLEARANCE (PHOTO COPY)",
  "ORIGINAL & PHOTOCOPY OF DETAILED BILL OF MATERIALS (WITH LABOR COST) SIGNED AND SEALED ON THE PAGE WHERE THE TOTAL AMOUNT SHOWS.",
  "THREE (3) SETS OF PROPOSED PLAN (BLUE PRINT) AND UPDATED PTR AND PRC ID OF ALL ENGINEERS WHO SIGNED THE PLANS (ALL SIGNED & SEALED)",
  "AUTHORIZATION LETTER (NOTARIZED) OR SPA & PHOTOCOPY OF ID OF OWNER AND REPRESENTATIVE",
  "OFFICIAL RECEIPT (O.R) from FSIS",
];

const fsicNewRequirements = [
  "Billing Statement Assessment for Business Permit from BPLO (current year)",
  "Official Receipt of payment for Business Permit from BPLO (current year)",
  "AFFIDAVIT OF UNDERTAKING FROM LBO / FSIC FOR OCCUPANCY",
  "Photo of Establishment",
  "Photocopy of ID of owner or representative",
];

const fsicRenewalRequirements = [
  "Billing Statement Assessment for Business Permit from BPLO (current year)",
  "Official Receipt of payment for Business Permit from BPLO (current year)",
  "BUSINESS PERMIT (Current Year)",
  "Previous year FSIC",
  "Photocopy of ID of owner or representative",
];

const ApplicationGuide = () => {
  const [searchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "fsec";

  return (
    <PageContainer title="Application Guide" showBack={true}>
      <div className="px-4 py-6">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="fsec" className="font-semibold">FSEC</TabsTrigger>
            <TabsTrigger value="fsic" className="font-semibold">FSIC</TabsTrigger>
          </TabsList>

          <TabsContent value="fsec" className="space-y-6">
            <div className="bg-card rounded-xl p-4 card-elevated">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="h-6 w-6 text-primary" />
                <h2 className="font-display font-bold text-foreground">
                  Fire Safety Evaluation Clearance
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Required for building construction, renovation, and occupancy permits.
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Step-by-Step Process
              </h3>
              {fsecSteps.map((step, index) => (
                <StepCard
                  key={index}
                  stepNumber={index + 1}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>

            <div className="bg-card rounded-xl p-4 card-elevated">
              <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Requirements for Online
              </h3>
              <ul className="space-y-2 mb-6">
                {fsecRequirements.map((req, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>

              <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2 pt-4 border-t border-border">
                <FileCheck className="h-5 w-5 text-accent" />
                Hard Copy Documents (To be provided after online payment)
              </h3>
              <ul className="space-y-2">
                {fsecHardCopyRequirements.map((req, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-4 card-elevated mt-6">
              <h3 className="font-display font-semibold text-foreground mb-3">Process Note</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Once your online application is received and validated, you can make your payment through LANDBANK, PAYMAYA, or BDO APP on our website (please check the status, payment details, and exact payment process on our website). After payment online please submit the HARD COPIES OF DOCUMENTS to our BFP Taguig City Hall Office or BFP SM AURA Satelite Office for proper evaluation of documents of in-charge Fire Safety Evaluator. After evaluation of plans and check if it is compliant according to the guideline of RA 9514 Fire Code of the Philippines, the Fire Safety Evaluator will forward to Chief, Plan Evaluator for recommendation of issuance of FSEC. The Chief, Plan Evaluator will verify the application after verification he/she will forward to Chief, Fire Prevention Section recommending issuance of FSEC, After receiving the recommendation from Chief, Plan Evaluator, the Chief, Fire Prevention Section will endorse recommending approval of FSEC to City Fire Marshal, After receiving the recommendation from Chief Fire Prevention Section, the City Fire Marshal will issue FSEC.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="fsic" className="space-y-6">
            <div className="bg-card rounded-xl p-4 card-elevated">
              <div className="flex items-center gap-3 mb-3">
                <FileCheck className="h-6 w-6 text-primary" />
                <h2 className="font-display font-bold text-foreground">
                  Fire Safety Inspection Certificate
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                Required for business permit New/Renewal and certificate of occupancy.
              </p>

              <Tabs defaultValue="new" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="new">New Application</TabsTrigger>
                  <TabsTrigger value="renewal">Renewal</TabsTrigger>
                </TabsList>

                <TabsContent value="new" className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-accent" />
                      Requirements for New Business
                    </h3>
                    <ul className="space-y-2">
                      {fsicNewRequirements.map((req, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-4">
                      Process
                    </h3>
                    {fsicProcessSteps.map((step, index) => (
                      <StepCard
                        key={index}
                        stepNumber={index + 1}
                        title={step.title}
                        description={step.description}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="renewal" className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-accent" />
                      Requirements for Renewal
                    </h3>
                    <ul className="space-y-2">
                      {fsicRenewalRequirements.map((req, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-4">
                      Process
                    </h3>
                    {fsicProcessSteps.map((step, index) => (
                      <StepCard
                        key={index}
                        stepNumber={index + 1}
                        title={step.title}
                        description={step.description}
                      />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
};

export default ApplicationGuide;
