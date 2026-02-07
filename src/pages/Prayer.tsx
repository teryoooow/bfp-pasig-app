import { BookHeart } from "lucide-react";
import PageContainer from "@/components/PageContainer";
import prayerBg from "@/assets/prayer-bg-v3.jpg";

const Prayer = () => {
  return (
    <PageContainer title="Fireman's Prayer" showBack={true}>
      <div className="px-4 py-6">
        <div className="relative overflow-hidden rounded-xl p-8 card-elevated animate-fade-in group">
          {/* Background Image & Overlay */}
          <div className="absolute inset-0 z-0">
            <img src={prayerBg} alt="Prayer Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-orange-950/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg">
                <BookHeart className="h-8 w-8 text-white" />
              </div>
            </div>

            <h2 className="font-display text-2xl font-bold text-white text-center mb-8 tracking-wide text-shadow-md">
              The Fireman's Prayer
            </h2>

            <div className="text-white/95 leading-relaxed space-y-6 text-center italic font-medium text-lg text-shadow-sm">
              <p>
                When I am called to duty, God,
                <br />
                Wherever flames may rage,
                <br />
                Give me strength to save some life
                <br />
                Whatever be its age.
              </p>

              <p>
                Help me embrace a little child
                <br />
                Before it is too late,
                <br />
                Or save an older person from
                <br />
                The horror of that fate.
              </p>

              <p>
                Enable me to be alert and
                <br />
                Hear the weakest shout,
                <br />
                And quickly and efficiently
                <br />
                To put the fire out.
              </p>

              <p>
                I want to fill my calling and
                <br />
                To give the best in me,
                <br />
                To guard my every neighbor
                <br />
                And protect their property.
              </p>

              <p>
                And if according to Your will
                <br />
                I have to lose my life,
                <br />
                Please bless with Your protecting hand
                <br />
                My children and my wife.
              </p>

              <p className="font-bold text-white text-xl mt-8">
                Amen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Prayer;
