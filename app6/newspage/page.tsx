import ColorChange from '../components/animation/ColorChange';
import AnimatedSection from "../components/animation/AnimatedSection";
import '../globals.css';

export default function Home() {
    return (
      <div className='flex flex-col justify-center items-center'>
        <p className="text-5xl md:text-5xl lg:text-7xl mt-5 mb-5 text-center transition-all duration-500"><ColorChange className='gold'>News</ColorChange></p>
      </div>
    );
  }
  
