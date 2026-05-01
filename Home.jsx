import HeroImageStack from "../components/HeroImageStack";
import profilePic from "../assets/profile-image.png";

// In your hero section:
<div className="text-center px-4 py-16 md:py-24">
  <h1 className="text-5xl md:text-7xl font-bold mb-6">
    UX + Product Designer
  </h1>
  <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
    Where systems thinking meets accessible, human-centered design.
  </p>

  <HeroImageStack src={profilePic} alt="Angel Delaney" />

  <p className="mt-12 text-2xl md:text-3xl text-green-800 font-medium max-w-2xl mx-auto">
    I design resilient systems that support real people in complex moments.
  </p>
</div>