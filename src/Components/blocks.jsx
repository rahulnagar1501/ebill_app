
const features = [
  {
    name: "Built with Bootstrap 5",
    description:
      "Block is the powerful front-end solution based on Bootstrap 5 —Powerful, extensible, and feature-packed frontend toolkit.",
    // icon: CloudArrowUpIcon,
  },
  {
    name: "Easy to Customize with Sass",
    description:
      "Block is built using Sass. Easily change colors, typo, and much more. It is the most mature, stable, and powerful CSS extension language in the world.",
    // icon: LockClosedIcon,
  },
  {
    name: "W3C Valid HTML Code",
    description:
      "All HTML files are checked via the W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Block is innovative at its core.",
    // icon: ArrowPathIcon,
  },
  {
    name: "Future Proof Java-Script",
    description:
      "Say jQuery to NO! With the block we build a complete vanilla. js code for all the pages.",
    // icon: FingerPrintIcon,
  },
  {
    name: "Extensive Docs",
    description:
      "Block theme documentation helps developers, It has a theme installation workflow and how to use it for your purpose and easy copy and paste snippets.",
    // icon: CloudArrowUpIcon,
  },
  {
    name: "Mobile friendly website",
    description:
      "Block is Mobile friendly, Designing websites to be mobile friendly ensures that your pages perform well on all devices.",
    // icon: LockClosedIcon,
  },
  {
    name: "Kick-Start Your Development",
    description:
      "Full task automation. Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included.",
    // icon: ArrowPathIcon,
  },
  {
    name: "Light/ Dark Mode",
    description:
      "Block theme pages also come with the light / dark mode. All components include a dark variant that lets you style your site differently when dark mode is enabled.",
    // icon: FingerPrintIcon,
  },
  {
    name: "Active Support",
    description:
      "Our support team helps you solve any issues you have in working with Block them. To get help from our team, Contact us.",
    // icon: ArrowPathIcon,
  },
];
function Blocks() {
  return (
    <div className="py-8">
      <h2 className="text-center my-7 font-bold text-3xl">More Block theme Features</h2>
      <div className="grid grid-cols-auto gap-8 px-4 md:px-16 py-8 max-w-[1320px] mx-auto">
        {
          features.map((feature) => (
            <div className="flex flex-col gap-2">
              <div className="bg-[#8B3DFF] p-4 mb-4 w-4 rounded-lg"></div>
              <h2 className="text-lg font-semibold">{feature.name}</h2>
              <p className="text-gray-500 font-semibold">{feature.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Blocks;
