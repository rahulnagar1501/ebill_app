import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Built with Bootstrap 5",
    description:
      "Block is the powerful front-end solution based on Bootstrap 5 —Powerful, extensible, and feature-packed frontend toolkit.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Easy to Customize with Sass",
    description:
      "Block is built using Sass. Easily change colors, typo, and much more. It is the most mature, stable, and powerful CSS extension language in the world.",
    icon: LockClosedIcon,
  },
  {
    name: "W3C Valid HTML Code",
    description:
      "All HTML files are checked via the W3C validator to ensure 100% valid code. As you probably know invalid HTML limits innovation, but Block is innovative at its core.",
    icon: ArrowPathIcon,
  },
  {
    name: "Future Proof Java-Script",
    description:
      "Say jQuery to NO! With the block we build a complete vanilla. js code for all the pages.",
    icon: FingerPrintIcon,
  },
  {
    name: "Extensive Docs",
    description:
      "Block theme documentation helps developers, It has a theme installation workflow and how to use it for your purpose and easy copy and paste snippets.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Mobile friendly website",
    description:
      "Block is Mobile friendly, Designing websites to be mobile friendly ensures that your pages perform well on all devices.",
    icon: LockClosedIcon,
  },
  {
    name: "Kick-Start Your Development",
    description:
      "Full task automation. Start your development process fast and easy with Node.js and Gulp setup. Configuration files are included.",
    icon: ArrowPathIcon,
  },
  {
    name: "Light/ Dark Mode",
    description:
      "Block theme pages also come with the light / dark mode. All components include a dark variant that lets you style your site differently when dark mode is enabled.",
    icon: FingerPrintIcon,
  },
  {
    name: "Active Support",
    description:
      "Our support team helps you solve any issues you have in working with Block them. To get help from our team, Contact us.",
    icon: ArrowPathIcon,
  },
];
function Blocks() {
  return (
    <div className="">
   <div className="bg-black py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:text-center">
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
      More Block theme Features
      </p>
     
    </div>
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16 lg:max-w-none">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-16 ">
            <dt className="text-base font-semibold  text-white">
              <div className="absolute left-0 top-0  flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              {feature.name}
            </dt>
            <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</div>

    </div>
  );
}

export default Blocks;
