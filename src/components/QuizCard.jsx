import Quiz from "./QuizComponent";
import * as motion from "motion/react-client";

export default function QuizCard({ quiz }) {
   return (
      <motion.div 
      initial={{ opacity: 0, scale: 0.5 }} 
      whileInView={{ opacity: 1, scale:1 }}
      transition={{
         type: "spring",
         bounce: 0.5,
         duration: 1,
      }}
      viewport={{ once: true}}
      className="bg-white shadow-lg rounded-2xl p-6 mt-10">
         <h3 className="text-2xl font-bold text-dark sm:text-3xl md:text-[40px] md:leading-[1.2] text-center">Quiz Seputar Cerita</h3>

         <div className="mt-6 flex justify-center">
            <Quiz quiz={quiz} shuffle={true} />
         </div>
      </motion.div>
   );
}
