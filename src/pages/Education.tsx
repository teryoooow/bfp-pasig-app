import { useState } from "react";
import PageContainer from "@/components/PageContainer";
import { defaultEducationData, EducationTopic } from "@/lib/education-data";
import {
    Flame,
    Activity,
    Heart,
    Waves,
    ChevronRight,
    PlayCircle
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import Markdown from "react-markdown";

// Icon mapping
const iconMap: Record<string, any> = {
    Flame,
    Activity,
    Heart,
    Waves,
};

const Education = () => {
    const [data] = useState<EducationTopic[]>(defaultEducationData);
    const [selectedTopic, setSelectedTopic] = useState<EducationTopic | null>(null);

    const getIcon = (iconName: string) => {
        const Icon = iconMap[iconName] || Flame;
        return <Icon className="h-6 w-6 text-orange-600" />;
    };

    return (
        <PageContainer title="Safety Guide" showBack>
            <div className="px-4 py-6 space-y-4">
                {data.map((topic) => (
                    <div
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic)}
                        className="group flex flex-col bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
                    >
                        <div className="p-4 flex items-start gap-4">
                            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                {getIcon(topic.icon)}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-lg text-foreground mb-1">
                                        {topic.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {topic.summary}
                                </p>
                                {topic.videoUrl && (
                                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-blue-600">
                                        <PlayCircle className="h-3.5 w-3.5" />
                                        Video Tutorial Available
                                    </div>
                                )}
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground/50 self-center group-hover:text-orange-500 transition-colors" />
                        </div>
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedTopic} onOpenChange={(open) => !open && setSelectedTopic(null)}>
                <DialogContent className="max-w-[90vw] md:max-w-lg h-[80vh] flex flex-col p-0 gap-0 overflow-hidden rounded-2xl">
                    <DialogHeader className="p-4 md:p-6 border-b bg-muted/20 shrink-0">
                        <DialogTitle className="text-xl font-bold flex items-center gap-2">
                            {selectedTopic && getIcon(selectedTopic.icon)}
                            {selectedTopic?.title}
                        </DialogTitle>
                    </DialogHeader>

                    <ScrollArea className="flex-1 p-4 md:p-6">
                        <div className="space-y-6 pb-6">
                            {/* Video Section */}
                            {selectedTopic?.videoUrl && (
                                <div className="aspect-video w-full rounded-lg overflow-hidden bg-black/10">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={selectedTopic.videoUrl}
                                        title={selectedTopic.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="prose prose-sm dark:prose-invert max-w-none">
                                <Markdown>{selectedTopic?.content}</Markdown>
                            </div>
                        </div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>
        </PageContainer>
    );
};

export default Education;
