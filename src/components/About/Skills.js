const SkillList = [];

const Skills = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto py-20 px-8 lg:px-10">
        <h2 className="text-4xl xl:text-5xl capitalize text-center text-white font-bold">
          our team
        </h2>

        <h3 className="text-3xl xl:text-4xl capitalize text-center text-white font-bold mt-5">
          Delhi Public School Azaad Nagar CF-01
        </h3>
        <hr className="mx-auto w-12 h-1 outline-0 border-0 bg-green-300 block mt-4 mb-6" />
        <div className="flex flex-col gap-6 mt-16">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
              <img
                src="../Parth.gif"
                alt="Parth Awasthi"
                className="w-full h-full object-cover aspect-video lg:aspect-square"
              />
            </div>
            <div className="w-full lg:w-9/12 bg-violet-300 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
              <h3 className="text-2xl capitalize text-indigo-900 font-semibold">
                Parth Awasthi
              </h3>
              <span className="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">
                10th
              </span>
              <p className="text-indigo-900 opacity-75 leading-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                saepe sint expedita suscipit nemo nihil cupiditate culpa
                temporibus, facere nisi.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-6">
            <div className="w-full lg:w-1/4 rounded-3xl overflow-hidden">
              <img
                src="../Priyanshi.gif"
                alt="Erin Calzoni"
                className="w-full h-full object-cover aspect-video lg:aspect-square"
              />
            </div>
            <div className="w-full lg:w-9/12 bg-yellow-300 rounded-3xl flex flex-col justify-center p-8 lg:p-14">
              <h3 className="text-2xl capitalize text-indigo-900 font-semibold">
                Priyanshi Sreshth
              </h3>
              <span className="inline-block capitalize text-xl text-indigo-900 font-light mt-1.5 mb-5">
                10th
              </span>
              <p className="text-indigo-900 opacity-75 leading-normal">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                saepe sint expedita suscipit nemo nihil cupiditate culpa
                temporibus, facere nisi.
              </p>
            </div>
          </div>
          
          
        </div>
      </section>
    </div>
  );
};

export default Skills;
