import { BookHeart } from "lucide-react";
import PageContainer from "@/components/PageContainer";

const Prayer = () => {
  return (
    <PageContainer title="Fireman's Prayer">
      <div className="px-4 py-6">
        <div className="bg-card rounded-xl p-6 card-elevated animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full hero-gradient flex items-center justify-center">
              <BookHeart className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          
          <h2 className="font-display text-xl font-bold text-foreground text-center mb-6">
            The Fireman's Prayer
          </h2>
          
          <div className="text-muted-foreground leading-relaxed space-y-4 text-center italic">
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
            
            <p className="font-semibold text-foreground">
              Amen.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Prayer;
